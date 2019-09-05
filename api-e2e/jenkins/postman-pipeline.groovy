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
def COMPONENTS = components
def COMPONENT_TAG = component_tag
def NAMESPACE = namespace

// constant
def TESTS_PATH = 'api-e2e/postman'

// define groovy functions
import groovy.json.JsonOutput

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
        envVars: [
            secretEnvVar(key: 'AUTHURL', secretName: "postman-e2e-secret", secretKey: 'authurl'),
            secretEnvVar(key: 'REALM', secretName: "postman-e2e-secret", secretKey: 'realm'),
            secretEnvVar(key: 'PASSWORD', secretName: "postman-e2e-secret", secretKey: 'password'),
            secretEnvVar(key: 'CLIENT_SECRET', secretName: "postman-e2e-secret", secretKey: 'client_secret'),
            secretEnvVar(key: 'USERID', secretName: "postman-e2e-secret", secretKey: 'userid'),
            secretEnvVar(key: 'CLIENTID', secretName: "postman-e2e-secret", secretKey: 'clientid'),
            secretEnvVar(key: 'TOKENURL', secretName: "postman-e2e-secret", secretKey: 'tokenUrl'),
            secretEnvVar(key: 'USERNAME', secretName: "postman-e2e-secret", secretKey: 'userName'),
            secretEnvVar(key: 'PASSCODE', secretName: "postman-e2e-secret", secretKey: 'passCode'),
        ]
    )
])
{
    node(py3nodejs_label) {
        script {
            echo """
            AUTHURL:${AUTHURL} \
            REALM:${REALM} \
            USERID:${USERID} \
            PASSWORD:${PASSWORD} \
            CLIENTID:${CLIENTID} \
            CLIENT_SECRET:${CLIENT_SECRET} \
            TOKENURL:${TOKENURL} \
            USERNAME:${USERNAME} \
            PASSCODE:${PASSCODE} \
            """
            checkout scm

            dir("${TESTS_PATH}") {
                all_passed = true
                failed_components = ''
                sh 'npm install newman'

                for (name in COMPONENTS.split(', ')) {
                    stage("Running ${name} pm tests") {
                        try {
                            echo "Running ${name} pm collection"

                            def url = ""
                            if (name == 'colin-api') {
                                url = "http://${name}-${COMPONENT_TAG}.${NAMESPACE}.svc:8080"
                            } else {
                                url = "https://${name}-${COMPONENT_TAG}.pathfinder.gov.bc.ca"
                            }

                            sh """./node_modules/newman/bin/newman.js run ./${name}.postman_collection.json \
                            --global-var url=${url} --global-var auth_url=${AUTHURL} --global-var realm=${REALM} \
                            --global-var password=${PASSWORD} --global-var client_secret=${CLIENT_SECRET} \
                            --global-var userid=${USERID} --global-var clientid=${CLIENTID} \
                            --global-var pay-api-base-url=${url} --global-var tokenUrl=${TOKENURL} \
                            --global-var userName=${USERNAME} --global-var passCode=${PASSCODE}
                            """
                        } catch (Exception e) {
                            echo "One or more tests failed."
                            echo "${e.getMessage()}"
                            all_passed = false
                            failed_components += name + ' '
                        }
                    }
                }
                stage("Result") {
                    if (!all_passed) {
                        echo "Components with failed tests: ${failed_components}"
                        currentBuild.result = "FAILURE"
                    }
                }
            } // end dir
        } // end script
    } //end node
} //end podTemplate
