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
def COMPONENTS = ["auth-api legal-api colin-api"]
def COMPONENT_TAG = 'e2e'
def NAMESPACE = 'd7eovc-tools'

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
        echo: "check envVar",
        envVars:([
            secretEnvVar(key: 'AUTH_URL', secretName: "postman-e2e-secret", secretKey: 'auth_url'),
            secretEnvVar(key: 'REALM', secretName: "postman-e2e-secret", secretKey: 'realm'),
            secretEnvVar(key: 'PASSWORD', secretName: "postman-e2e-secret", secretKey: 'password'),
            secretEnvVar(key: 'CLIENT_SECRET', secretName: "postman-e2e-secret", secretKey: 'clientSecret'),
            secretEnvVar(key: 'USERID', secretName: "postman-e2e-secret", secretKey: 'userid'),
            secretEnvVar(key: 'CLIENTID', secretName: "postman-e2e-secret", secretKey: 'clientId'),
            secretEnvVar(key: 'TOKENURL', secretName: "postman-e2e-secret", secretKey: 'tokenUrl'),
            secretEnvVar(key: 'USERNAME', secretName: "postman-e2e-secret", secretKey: 'userName'),
            secretEnvVar(key: 'PASSCODE', secretName: "postman-e2e-secret", secretKey: 'passCode'),
            secretEnvVar(key: 'BASE_URL', secretName: "postman-e2e-secret", secretKey: 'base_url'),
            secretEnvVar(key: 'BUSINESS_IDENTIFIER', secretName: "postman-e2e-secret", secretKey: 'business_identifier'),
            secretEnvVar(key: 'BUSINESS_NAME',secretName: "postman-e2e-secret",secretKey: 'business_name'),
            secretEnvVar(key: 'BUSINESS_NUMBER',secretName: "postman-e2e-secret",secretKey: 'business_number'),
            secretEnvVar(key: 'COAEXTRAEVENTID',secretName: "postman-e2e-secret",secretKey: 'coaExtraEventId'),
            secretEnvVar(key: 'CODEXTRAEVENTID',secretName: "postman-e2e-secret",secretKey: 'codExtraEventId'),
            secretEnvVar(key: 'COLIN_ID',secretName: "postman-e2e-secret",secretKey: 'colin_id'),
            secretEnvVar(key: 'CORP_NUM',secretName: "postman-e2e-secret",secretKey:'corp_num'),
            secretEnvVar(key: 'DEFAULTGROUP',secretName: "postman-e2e-secret",secretKey:'defaultGroup'),
            secretEnvVar(key: 'ENTITY_PASSCODE',secretName: "postman-e2e-secret",secretKey:'entity_passcode'),
            //secretEnvVar(key: 'PAY-API-BASE-URL',secretName: "postman-e2e-secret",secretKey: 'pay-api-base-url'),
            secretEnvVar(key: 'REALM_NAME',secretName: "postman-e2e-secret",secretKey: 'realm_name'),
            secretEnvVar(key: 'SAMPLE_EMAIL',secretName:"postman-e2e-secret",secretKey:'sample_email'),
            secretEnvVar(key: 'SAMPLE_EXTENSION',secretName:"postman-e2e-secret",secretKey:'sample_extension'),
            secretEnvVar(key: 'SAMPLE_PHONE',secretName: "postman-e2e-secret",secretKey: 'sample_phone'),
            secretEnvVar(key: 'SAMPLE_UPDATED_EMAIL',secretName: "postman-e2e-secret",secretKey: 'sample_updated_email'),
            secretEnvVar(key: 'TEMP_PASSWORD',secretName: "postman-e2e-secret",secretKey: 'temp_password'),
            secretEnvVar(key: 'TEST_ORG_NAME',secretName: "postman-e2e-secret",secretKey: 'test_org_name'),
            secretEnvVar(key: 'TEST_ORG_NAME_UPDATED',secretName: "postman-e2e-secret",secretKey: 'test_org_name_updated'),
            secretEnvVar(key: 'TEST_STAFF_PASSWORD',secretName: "postman-e2e-secret",secretKey: 'test_staff_password'),
            secretEnvVar(key: 'TEST_STAFF_USERNAME',secretName: "postman-e2e-secret",secretKey: 'test_staff_username'),
            secretEnvVar(key: 'TOKEN',secretName: "postman-e2e-secret",secretKey: 'token'),
            secretEnvVar(key: 'URL',secretName: "postman-e2e-secret",secretKey: 'url'),
            secretEnvVar(key: 'USER_EMAIL',secretName: "postman-e2e-secret",secretKey: 'user_email'),
            secretEnvVar(key: 'WEBCLIENTID',secretName: "postman-e2e-secret",secretKey: 'webClientId'),
            secretEnvVar(key: 'WEBCLIENTSECRET',secretName: "postman-e2e-secret",secretKey: 'webClientSecret')
        ])
    )
])
{
    node(py3nodejs_label) {
        script {
            echo """
            AUTH_URL:${AUTH_URL} \
            REALM:${REALM} \
            USERID:${USERID} \
            PASSWORD:${PASSWORD} \
            CLIENTID:${CLIENTID} \
            CLIENT_SECRET:${CLIENT_SECRET} \
            TOKENURL:${TOKENURL} \
            USERNAME:${USERNAME} \
            PASSCODE:${PASSCODE} \
            BASE_URL:${BASE_URL} \
            BUSINESS_IDENTIFIER:${BUSINESS_IDENTIFIER} \
            BUSINESS_NAME:${BUSINESS_NAME} \
            BUSINESS_NUMBER:${BUSINESS_NUMBER} \
            COAEXTRAEVENTID:${COAEXTRAEVENTID} \
            CODEXTRAEVENTID:${CODEXTRAEVENTID} \
            WEBCLIENTID:${WEBCLIENTID} \
            USERID:${USERID} \
            USER_EMAIL:${USER_EMAIL} \
            USERNAME:${USERNAME} \
            URL:${URL} \
            TOKENURL:${TOKENURL} \
            TOKEN:${TOKEN} \
            TEST_STAFF_USERNAME:${TEST_STAFF_USERNAME} \
            TEST_STAFF_PASSWORD:${TEST_STAFF_PASSWORD} \
            TEST_ORG_NAME_UPDATED:${TEST_ORG_NAME_UPDATED} \
            TEST_ORG_NAME:${TEST_ORG_NAME} \
            TEMP_PASSWORD:${TEMP_PASSWORD} \
            SAMPLE_UPDATED_EMAIL:${SAMPLE_UPDATED_EMAIL} \
            SAMPLE_PHONE:${SAMPLE_PHONE} \
            SAMPLE_EXTENSION:${SAMPLE_EXTENSION} \
            SAMPLE_EMAIL:${SAMPLE_EMAIL} \
            REALM_NAME:${REALM_NAME} \
            PASSCODE:${PASSCODE} \
            ENTITY_PASSCODE:${ENTITY_PASSCODE} \
            DEFAULTGROUP:${DEFAULTGROUP} \
            CORP_NUM:${CORP_NUM} \
            COLIN_ID:${COLIN_ID} \
            WEBCLIENTSECRET:${WEBCLIENTSECRET}
            """
            checkout scm

            dir("${TESTS_PATH}") {
                all_passed = true
                failed_components = ''
                sh 'npm install newman'
                for (name in COMPONENTS.split('')) {
                    stage("Running ${name} pm tests") {
                        try {
                            echo "Running ${name} pm collection"
                            //def url = ""
                           // def url_name = "url"
                            if (name== 'auth-api'){
                                url= "http://${name}-${COMPONENT_TAG}.pathfinder.gov.bc.ca"
                               // url_name= "api_url"
                            }
                            else if (name == 'colin-api') {
                                url = "http://${name}-${COMPONENT_TAG}.${NAMESPACE}.svc:8080"
                            }
                            else if(name=='legal-api') {
                                url = "https://${name}-${COMPONENT_TAG}.pathfinder.gov.bc.ca"
                            }
                            else if(name=='pay-api') {
                                url = "https://${name}-${COMPONENT_TAG}.pathfinder.gov.bc.ca"
                            }

                            sh """./node_modules/newman/bin/newman.js run ./${name}.postman_collection.json \
                            --global-var ${url_name}=${url}   --global-var auth_url=${AUTH_URL} --global-var realm=${REALM} \
                            --global-var password=${PASSWORD} --global-var clientSecret=${CLIENT_SECRET} \
                            --global-var userid=${USERID} --global-var clientId=${CLIENTID} \
                            --global-var pay-api-base-url=${PAY-API-BASE-URL} --global-var tokenUrl=${TOKENURL} \
                            --global-var userName=${USERNAME} --global-var passCode=${PASSCODE} \
                            --global-var arEventId=${AREVENTID} --global-var arExtraEventId=${AREXTRAEVENTID} \
                            --global-var base_url=${BASE_URL} --global-var business_identifier=${BUSINESS_IDENTIFIER} \
                            --global-var business_name=${BUSINESS_NAME} --global-var business_number=${BUSINESS_NUMBER} \
                            --global-var clientId=${CLIENTID} \
                            --global-var coaExtraEventId=${COAEXTRAEVENTID} --global-var codExtraEventId=${CODEXTRAEVENTID} \
                            --global-var colin_id=${COLIN_ID} --global-var corp_num=${CORP_NUM} \
                            --global-var defaultGroup=${DEFAULTGROUP} --global-var entity_passcode=${ENTITY_PASSCODE} \
                            --global-var realm_name=${REALM_NAME} --global-var sample_email=${SAMPLE_EMAIL} \
                            --global-var sample_extension=${SAMPLE_EXTENSION} --global-var sample_phone=${SAMPLE_PHONE} \
                            --global-var sample_updated_email=${SAMPLE_UPDATED_EMAIL} --global-var temp_password=${TEMP_PASSWORD} \
                            --global-var test_org_name=${TEST_ORG_NAME} --global-var test_org_name_updated=${TEST_ORG_NAME_UPDATED} \
                            --global-var test_staff_password=${TEST_STAFF_PASSWORD} --global-var test_staff_username=${TEST_STAFF_USERNAME} \
                            --global-var token=${TOKEN} --global-var url=${URL} \
                            --global-var userName=${USERNAME} --global-var user_email=${USER_EMAIL} \
                            --global-var userid=${USERID} \
                            --global-var webClientId=${WEBCLIENTID} --global-var webClientSecret=${WEBCLIENTSECRET}

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
