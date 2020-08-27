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
NAMESPACE
TAG_NAME
PM_COLLECTION_PATH

// stays true if all tests pass
PASSED = true

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
// call/run the postman pipeline
def run_pm_pipeline(namespace, component_name, collection_name) {
    echo """
    Running postman ${collection_name} collection tests...
    """
    openshift.withCluster() {
        openshift.withProject('gl2uos-tools') {
            try {
                def pm_pipeline = openshift.selector('bc', 'postman-collection-run-pipeline')
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
}
// stage("setup lear->colin flow") {
//     script {
//         echo """
//         Pipeline called with constants:
//             - NAMESPACE: ${NAMESPACE}
//             - TAG_NAME: ${TAG_NAME}
//             - PM_COLLECTION_PATH: ${PM_COLLECTION_PATH}
//         """
//         // setup for lear -> colin flow
//         // run pm suite for removing any existing affiliations to the integration test account
//         namespace = 'gl2uos'
//         component_name = 'legal_api'
//         collection_name = 'affiliations-reset'
//         run_pm_pipeline(namespace, component_name, collection_name)
//     }
// }
// stage("incorp lear->colin") {
//     // Create incorporation in lear
//     script {
//         // run suite for incorporating a new incorp
//         namespace = 'gl2uos'
//         component_name = 'legal_api'
//         collection_name = 'lear-incorporation'
//         run_pm_pipeline(namespace, component_name, collection_name)
//     }
// }
// stage('Run Colin-Updater') {
//     // call/wait for job pipeline with colin-updater vals
//     script {
//         openshift.withCluster() {
//             namespace = 'gl2uos'
//             openshift.withProject("${namespace}-${TAG_NAME}") {
//                 def job_pipeline = openshift.selector('bc', 'update-colin-filings-run-pipeline')
//                 job_pipeline.startBuild(
//                     '--wait=true'
//                 ).logs('-f')
//             }
//         }
//     }
// }
stage('verify incorp in colin') {
    // run colin-api postman collection to verify incorp success
    // run lear postman collection to verify incorp success
    script {
        namespace = 'gl2uos'
        component_name = 'colin_api'
        collection_name = 'colin-verify-incorp'
        run_pm_pipeline(namespace, component_name, collection_name)
        if (PASSED) {
            echo "Verified incorporation!"
        } else {
            echo "Failed to verify incorporation in colin."
        }
    }
}
stage('Run Legal-Updater') {
    // call/wait for job pipeline with legal-updater vals
    script {
        openshift.withCluster() {
            namespace = 'gl2uos'
            openshift.withProject("${namespace}-${TAG_NAME}") {
                def job_pipeline = openshift.selector('bc', 'update-legal-filings-run-pipeline')
                job_pipeline.startBuild(
                    '--wait=true'
                ).logs('-f')
            }
        }
    }
}
stage('verify incorp in lear') {
    // run legal-api postman collection to verify incorp success
    script {
        namespace = 'gl2uos'
        component_name = 'legal_api'
        collection_name = 'lear-verify-bn-updated'
        run_pm_pipeline(namespace, component_name, collection_name)

        if (PASSED) {
            echo "Verified bn updated in lear!"
        } else {
            echo "Failed to verify bn in lear."
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
