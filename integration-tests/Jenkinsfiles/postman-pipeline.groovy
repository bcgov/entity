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
// set from call

NAMESPACE
TAG_NAME
COMPONENT_NAME
COLLECTION_NAME
TESTS_PATH

// define groovy functions
import groovy.json.JsonOutput

def run_collection(collection_name, env, realm, username, password, service_url, test_account_number) {
    // run a postman collection (if a test fails it will raise an exception)
    echo "Running ${collection_name} pm collection..."
    sh """./node_modules/newman/bin/newman.js run ./${collection_name}.postman_collection.json \
    --global-var env=${env} \
    --global-var realm=${realm} \
    --global-var username=${username} \
    --global-var password=${password} \
    --global-var staff_username=${username} \
    --global-var staff_password=${password} \
    --global-var url=${service_url} \
    --global-var test_account_number=${test_account_number}
    """
}

def py3nodejs_label = "jenkins-py3nodejs-${UUID.randomUUID().toString()}"
podTemplate(label: py3nodejs_label, name: py3nodejs_label, serviceAccount: 'jenkins', cloud: 'openshift', containers: [
    containerTemplate(
        name: 'jnlp',
        image: '172.50.0.2:5000/openshift/jenkins-slave-py3nodejs',
        resourceRequestCpu: '500m',
        resourceLimitCpu: '1000m',
        resourceRequestMemory: '1Gi',
        resourceLimitMemory: '2Gi',
        workingDir: '/tmp',
        command: '',
        args: '${computer.jnlpmac} ${computer.name}',
        echo: "check envVar",
        envVars:([
            secretEnvVar(key: 'ENVIRONMENT', secretName: "integration-${TAG_NAME}-secret", secretKey: 'env'),
            secretEnvVar(key: 'REALM', secretName: "integration-${TAG_NAME}-secret", secretKey: 'realm'),
            secretEnvVar(key: 'USERNAME', secretName: "integration-${TAG_NAME}-secret", secretKey: 'username'),
            secretEnvVar(key: 'PASSWORD', secretName: "integration-${TAG_NAME}-secret", secretKey: 'password'),
            secretEnvVar(key: 'STAFF_USERNAME', secretName: "integration-${TAG_NAME}-secret", secretKey: 'staff_username'),
            secretEnvVar(key: 'STAFF_PASSWORD', secretName: "integration-${TAG_NAME}-secret", secretKey: 'staff_password'),
            secretEnvVar(key: 'SERVICE_URL', secretName: "integration-${TAG_NAME}-secret", secretKey: "${COMPONENT_NAME}_url"),
            secretEnvVar(key: 'TEST_ACCOUNT_NUMBER', secretName: "integration-${TAG_NAME}-secret", secretKey: 'test_account_number')
        ])
    )
])
{
    node(py3nodejs_label) {
        script {
            echo """
            ENVIRONMENT:${ENVIRONMENT}
            REALM:${REALM}
            USERNAME:${USERNAME}
            PASSWORD:${PASSWORD}
            STAFF_USERNAME:${STAFF_USERNAME}
            STAFF_PASSWORD:${STAFF_PASSWORD}
            SERVICE_URL:${SERVICE_URL}
            COLLECTION_NAME:${COLLECTION_NAME}
            TESTS_PATH:${TESTS_PATH}
            TEST_ACCOUNT_NUMBER:${TEST_ACCOUNT_NUMBER}
            """

            checkout scm

            dir("${TESTS_PATH}") {
                all_passed = true
                sh 'node -v'
                sh 'npm install newman@4.6.1'
                stage("Running ${COMPONENT_NAME} pm tests") {
                    try {
                        if (COLLECTION_NAME != 'affiliations-reset') {
                            // run the pm collection like normal
                            run_collection(COMPONENT_NAME)
                        } else {
                            // check if affiliations need reset before running reset
                            pre_collection_run = 'affiliations-empty-check'
                            try {
                                run_collection(pre_collection_run)
                                echo "no affiliations check passed -- skipping affiliations reset."
                            } catch (Exception e) {
                                echo "One or more tests failed for no affiliations check -- running affiliations reset..."
                                echo "this will run up to 20 times (to delete up to 20 affiliations)"
                                // maxed out at 20 in case collection is erring out (otherwise would loop forever)
                                for (int i=0; i<20; i++) {
                                    try {
                                        echo "reset collection has run ${i} times."
                                        run_collection(COLLECTION_NAME)
                                        echo "all affiliations sucessfully deleted."
                                        break
                                    } catch (Exception ex) {
                                        echo "One or more tests failed for affiliations reset -- running again..."
                                        if (i == 19) {
                                            echo "Failed to delete all affiliations -- manual fix needed."
                                            all_passed = false
                                        }
                                    }
                                }
                            }
                        }
                    } catch (Exception e) {
                        echo "One or more tests failed."
                        echo "${e.getMessage()}"
                        all_passed = false
                    }
                }

                stage("Result") {
                    if (!all_passed) {
                        echo "Some tests failed."
                        currentBuild.result = "FAILURE"
                        error('Failure')
                    } else {
                        echo "All tests passed!"
                    }
                }
            } // end dir
        } // end script
    } //end node
} //end podTemplate