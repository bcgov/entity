#!/usr/bin/env groovy
// Copyright © 2018 Province of British Columbia
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//JENKINS DEPLOY ENVIRONMENT VARIABLES:
// - JENKINS_JAVA_OVERRIDES  -Dhudson.model.DirectoryBrowserSupport.CSP= -Duser.timezone=America/Vancouver
//   -> user.timezone : set the local timezone so logfiles report correxct time
//   -> hudson.model.DirectoryBrowserSupport.CSP : removes restrictions on CSS file load, thus html pages of test reports are displayed pretty
//   See: https://docs.openshift.com/container-platform/3.9/using_images/other_images/jenkins.html for a complete list of JENKINS env vars

// define constants
// openshift env
def NAMESPACE = 'd7eovc'
def TAG_NAME = 'test'
def PM_COLLECTION_PATH = 'integration-tests/postman'

// stays true if all tests pass
def PASSED = true

def ROCKETCHAT_CHANNEL='#registries-bot'

// define groovy functions
import groovy.json.JsonOutput

// post a notification to rocketchat
def rocketChatNotificaiton(token, channel, comments) {
  def payload = JsonOutput.toJson([text: comments, channel: channel])
  def rocketChatUrl = "https://chat.pathfinder.gov.bc.ca/hooks/" + "${token}"

  sh(returnStdout: true,
     script: "curl -X POST -H 'Content-Type: application/json' --data \'${payload}\' ${rocketChatUrl}")
}
// NI (Not Implemented) - will pass automatically
stage("Call tests with test variables") {
    script {
        echo """
        Pipeline called with constants:
            - NAMESPACE: ${NAMESPACE}
            - TAG_NAME: ${TAG_NAME}
        """
        openshift.withCluster() {
            openshift.withProject("d7eovc-tools") {
                def integr_pipeline = openshift.selector('bc', 'integration-base-pipeline')
                try {
                    integr_pipeline.startBuild(
                        '--wait=true', 
                        "-e=NAMESPACE=${NAMESPACE}", 
                        "-e=TAG_NAME=${TAG_NAME}",
                        "-e=PM_COLLECTION_PATH=${PM_COLLECTION_PATH}"
                    ).logs('-f')
                } catch (Exception e) {
                    PASSED = false
                    def error_message = e.getMessage()
                    echo """
                    Tests failed: ${error_message}
                    """
                }
            }
        }
    }
}
stage('Check integration result') {
    // if all pm tests passed then will be true
    script {
        if (!PASSED) {
            echo "One or more tests failed."
            currentBuild.result = "FAILURE"

            // ROCKETCHAT_TOKEN = sh (
            //     script: """oc get secret/api-e2e-pipeline-secret -o template --template="{{.data.ROCKETCHAT_TOKEN}}" | base64 --decode""",
            //         returnStdout: true).trim()
        }
    }
}
