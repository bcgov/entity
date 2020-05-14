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
def TAG_NAME = 'dev'
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
stage("NI: setup lear->colin flow") {
    script {
        echo """
        Pipeline called with constants:
            - NAMESPACE: ${NAMESPACE}
            - TAG_NAME: ${TAG_NAME}
            - PM_COLLECTION_PATH: ${PM_COLLECTION_PATH}
        """
        // setup for lear -> colin flow
        // call data reset tool to delete corp from db? Is this necessary?
        // leave stage in for other integration tests if not for incorp
        /* code here */
    }
}
run = true
stage("NI: incorp lear->colin") {
    // Create incorporation in lear
    script {
        // wait for QA to proceed (might want to do something through the UI after setup)
        try {
            timeout(time: 1, unit: 'DAYS') {
                input message: "Proceed after setup?", id: "1235", submitter: 'admin,thorwolpert-admin,rarmitag-admin,kialj876-admin,severinbeauvais-edit,riyazuddinsyed-edit'
            }
        }
        catch (Exception e) {
            echo "Cancelling integration test run."
            currentBuild.result = 'SUCCESS'
            return
        }
        // run suite for incorporating a new incorp
        openshift.withCluster() {
            openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                try {
                    namespace = 'gl2uos'
                    component_name = 'legal_api'
                    collection_name = 'lear-incorp-setup'
                    def pm_pipeline = openshift.selector('bc', 'integration-pm-pipeline')
                    pm_pipeline.startBuild(
                        '--wait=true', 
                        "-e=NAMESPACE=${namespace}", 
                        "-e=TAG_NAME=${TAG_NAME}",
                        "-e=COMPONENT_NAME=${component_name}",
                        "-e=COLLECTION_NAME=${collection_name}", 
                        "-e=TESTS_PATH=${PM_COLLECTION_PATH}"
                    ).logs('-f')
                } catch (Exception e) {
                    PASSED = false
                    def error_message = e.getMessage()
                    echo """
                    Postman details: ${error_message}
                    """
                }
            }
        }
        /* code here */
        // wait for filer before starting next stage
        sleep 10
    }
}
stage('NI: verify incorp lear->colin') {
    // run lear postman collection to verify incorp success
    script {
        openshift.withCluster() {
            openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                try {
                    namespace = 'gl2uos'
                    component_name = 'legal_api'
                    collection_name = 'lear-verify-incorp-setup'
                    def pm_pipeline = openshift.selector('bc', 'integration-pm-pipeline')
                    pm_pipeline.startBuild(
                        '--wait=true', 
                        "-e=NAMESPACE=${namespace}", 
                        "-e=TAG_NAME=${TAG_NAME}",
                        "-e=COMPONENT_NAME=${component_name}",
                        "-e=COLLECTION_NAME=${collection_name}", 
                        "-e=TESTS_PATH=${PM_COLLECTION_PATH}"
                    ).logs('-f')
                } catch (Exception e) {
                    PASSED = false
                    def error_message = e.getMessage()
                    echo """
                    Postman details: ${error_message}
                    """
                }
            }
        }
        if (PASSED) {
            echo "Verified incorporation!"
        } else {
            echo "Failed to verify incorporation in lear."
        }
    }
}
stage('NI: Run Colin-Updater') {
    // call/wait for job pipeline with colin-updater vals
    script {
        openshift.withCluster() {
            namespace = 'gl2uos'
            openshift.withProject("${namespace}-${TAG_NAME}") {
                def pm_pipeline = openshift.selector('bc', 'run-colin-updater-pipeline')
                pm_pipeline.startBuild(
                    '--wait=true'
                ).logs('-f')
            }
        }
    }
}
stage('NI: verify incorp in colin') {
    // run colin-api postman collection to verify incorp success
    // run lear postman collection to verify incorp success
    script {
        openshift.withCluster() {
            openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                try {
                    namespace = 'gl2uos'
                    component_name = 'colin_api'
                    collecttion_name = 'colin-verify-incorp'
                    def pm_pipeline = openshift.selector('bc', 'integration-pm-pipeline')
                    pm_pipeline.startBuild(
                        '--wait=true', 
                        "-e=NAMESPACE=${namespace}", 
                        "-e=TAG_NAME=${TAG_NAME}",
                        "-e=COMPONENT_NAME=${component_name}",
                        "-e=COLLECTION_NAME=${collecttion_name}", 
                        "-e=TESTS_PATH=${PM_COLLECTION_PATH}",
                    ).logs('-f')
                } catch (Exception e) {
                    PASSED = false
                    def error_message = e.getMessage()
                    echo """
                    Postman details: ${error_message}
                    """
                }
            }
        }
        if (PASSED) {
            echo "Verified incorporation!"
        } else {
            echo "Failed to verify incorporation in colin."
        }
    }
}

stage("NI: setup colin->lear flow") {
    // run colin-api postman collection to reset corp num? Is this necessary?
    // leave stage in for other integration tests
    script {
        echo "seting up colin db cases.."
        /* code here */
        echo "setup finished"
    }
}
stage("NI: incorp colin->lear") {
    // run colin-api postman collection to incorporate? Insert into db?
    script {
        openshift.withCluster() {
            openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                try {
                    namespace = 'gl2uos'
                    component_name = 'colin_api'
                    collection_name = 'colin-incorp-setup'
                    def pm_pipeline = openshift.selector('bc', 'integration-pm-pipeline')
                    pm_pipeline.startBuild(
                        '--wait=true', 
                        "-e=NAMESPACE=${namespace}", 
                        "-e=TAG_NAME=${TAG_NAME}",
                        "-e=COMPONENT_NAME=${component_name}",
                        "-e=COLLECTION_NAME=${collection_name}", 
                        "-e=TESTS_PATH=${PM_COLLECTION_PATH}",
                    ).logs('-f')
                } catch (Exception e) {
                    PASSED = false
                    def error_message = e.getMessage()
                    echo """
                    Postman details: ${error_message}
                    """
                }
            }
        }
        if (PASSED) {
            echo "Verified incorporation!"
        } else {
            echo "Failed to verify incorporation in colin."
        }
    }
}
stage('NI: verify mras/bn messaging colin->lear') {
    // not sure how we do this yet: out of scope for now
    script {
        echo "Not Implemented."
        /* code here */
    }
}
stage('NI: Run Legal-Updater') {
    // call/wait for job pipeline with legal-updater vals
    script {
        script {
        openshift.withCluster() {
            namespace = 'gl2uos'
            openshift.withProject("${namespace}-${TAG_NAME}") {
                def pm_pipeline = openshift.selector('bc', 'run-legal-updater-pipeline')
                pm_pipeline.startBuild(
                    '--wait=true'
                ).logs('-f')
            }
        }
    }
}
stage('NI: verify incorp in lear') {
    // run legal-api postman collection to verify incorp success
    script {
        openshift.withCluster() {
            openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                try {
                    namespace = 'gl2uos'
                    component_name = 'legal_api'
                    collection_name = 'lear-verify-incorp'
                    def pm_pipeline = openshift.selector('bc', 'integration-pm-pipeline')
                    pm_pipeline.startBuild(
                        '--wait=true', 
                        "-e=NAMESPACE=${namespace}", 
                        "-e=TAG_NAME=${TAG_NAME}",
                        "-e=COMPONENT_NAME=${component_name}",
                        "-e=COLLECTION_NAME=${collection_name}", 
                        "-e=TESTS_PATH=${PM_COLLECTION_PATH}"
                    ).logs('-f')
                } catch (Exception e) {
                    PASSED = false
                    def error_message = e.getMessage()
                    echo """
                    Postman details: ${error_message}
                    """
                }
            }
        }
        if (PASSED) {
            echo "Verified incorporation!"
        } else {
            echo "Failed to verify incorporation in lear."
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
