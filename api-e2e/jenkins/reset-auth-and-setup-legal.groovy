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
def TAG_NAME = 'tools'

// components TODO: add in auth/pay/queue/jobs
def COMPONENT_TAG = 'e2e'
def POSTGRESQL = 'postgresql'
def AUTH_API = 'auth-api'

// set in setup stage (will be set to current values for running pods) TODO: username/name for auth/pay dbs
def LEGAL_DB_NAME
def PG_POD
def API_DB_USERNAME
def API_DB_NAME

def DEPLOYMENTS_API_WITH_PG = [AUTH_API]

// old version of deployments
def OLD_VERSIONS = []

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
            secretEnvVar(key: 'api_url', secretName: "postman-e2e-secret", secretKey: 'api_url'),
            secretEnvVar(key: 'token-url', secretName: "auth-reset-postman", secretKey: 'token-url'),
            secretEnvVar(key: 'service-account-id', secretName: "auth-reset-postman", secretKey: 'service-account-id'),
            secretEnvVar(key: 'service-account-secret', secretName: "auth-reset-postman", secretKey: 'service-account-secret'),
            secretEnvVar(key: 'temp-password', secretName: "auth-reset-postman", secretKey: 'temp-password')
        ])
    )
])

{
    node (py3nodejs_label) {
        stage("Connect to auth API pod and drop/re-create tables") {
            script {

                openshift.withCluster() {
                    openshift.withProject("${NAMESPACE}-${TAG_NAME}") {

                        def pg_deploy = openshift.selector('dc', "${POSTGRESQL}-${COMPONENT_TAG}")

                        for (api_name in DEPLOYMENTS_API_WITH_PG) {
                            def api_deploy = openshift.selector("dc", "${api_name}-${COMPONENT_TAG}")

                            // get db user + db name envs from api pod
                            def api_version = api_deploy.object().status.latestVersion
                            api_pod = openshift.selector('pod', [deployment: "${api_name}-${COMPONENT_TAG}-${api_version}"])
                            def latest = api_pod.objects().size()
                            if (latest) {
                                latest--
                            }
                            API_DB_USERNAME = openshift.exec(
                                api_pod.objects()[latest].metadata.name,
                                '--',
                                "bash -c 'printenv DATABASE_USERNAME'"
                            ).actions[0].out
                            API_DB_NAME = openshift.exec(
                                api_pod.objects()[latest].metadata.name,
                                '--',
                                "bash -c 'printenv DATABASE_NAME'"
                            ).actions[0].out
                            echo """
                            - API_DB_USERNAME: ${API_DB_USERNAME}
                            - API_DB_NAME: ${API_DB_NAME}
                            """

                            echo "Scaling down ${api_name}-${COMPONENT_TAG}"
                            api_deploy.scale('--replicas=0')

                            // reset auth db
                            echo "Dropping ${API_DB_NAME} in ${POSTGRESQL}-${COMPONENT_TAG}"
                            def pg_version = pg_deploy.object().status.latestVersion
                            PG_POD = openshift.selector('pod', [deployment: "${POSTGRESQL}-${COMPONENT_TAG}-${pg_version}"])
                            latest = PG_POD.objects().size()-1

                            // execute as postgres user and drop db
                            def output_disconnect_db = openshift.exec(
                                PG_POD.objects()[latest].metadata.name,
                                '--',
                                "bash -c \"\
                                    psql -c \\\"\
                                        UPDATE pg_database SET datallowconn = 'false' WHERE datname = '${API_DB_NAME}'; \
                                        SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = '${API_DB_NAME}'; \
                                    \\\" \
                                \""
                            )
                            echo "Temporary DB disconnect results: "+ output_disconnect_db.actions[0].out

                            // execute as postgres user and drop db
                            def output_drop_db = openshift.exec(
                                PG_POD.objects()[latest].metadata.name,
                                '--',
                                "bash -c \"\
                                    psql -c \\\"\
                                        DROP DATABASE \\\\\\\"${API_DB_NAME}\\\\\\\"; \
                                    \\\" \
                                \""
                            )
                            echo "Temporary DB drop results: "+ output_drop_db.actions[0].out

                            echo "Creating ${API_DB_NAME} in ${POSTGRESQL}-${COMPONENT_TAG}"
                            // execute as postgres user and create test db
                            def output_create_db = openshift.exec(
                                PG_POD.objects()[latest].metadata.name,
                                '--',
                                "bash -c '\
                                    psql -c \"CREATE DATABASE \\\"${API_DB_NAME}\\\";\" \
                                '"
                            )
                            echo "Temporary DB create results: "+ output_create_db.actions[0].out

                            def output_alter_role = openshift.exec(
                                PG_POD.objects()[latest].metadata.name,
                                '--',
                                "bash -c '\
                                    psql -c \"ALTER ROLE \\\"${API_DB_USERNAME}\\\" WITH superuser;\" \
                                '"
                            )
                            echo "Temporary DB grant results: "+ output_alter_role.actions[0].out

                            OLD_VERSIONS << "${api_name}-${api_version}"

                            echo "Rolling out ${api_name}-${COMPONENT_TAG}"
                            api_deploy.rollout().latest()
                            api_deploy.scale('--replicas=1')
                        }
                        
                    }
                }
            }
        }

        stage('Load auth entities via newman') {
            script {

                checkout scm

                dir("${TESTS_PATH}") {
                    all_passed = true
                    sh 'npm install newman'                
                    
                    try {
                    
                        sh """./node_modules/newman/bin/newman.js run ./auth-api-load-entities.postman_collection.json \
                        --env-var auth_url=${auth_url} --env-var service-account-id=${service-account-id} \
                        --env-var service-account-secret=${service-account-secret} --env-var temp-password=${temp-password} \
                        --env-var api_url=${api_url} --data coops.csv

                        """
                    } catch (Exception e) {
                        echo "One or more tests failed."
                        echo "${e.getMessage()}"
                        all_passed = false
                        failed_components += name + ' '
                    }
                    
                    
                    stage("Result") {
                        if (!all_passed) {
                            echo "auth load failed"
                            currentBuild.result = "FAILURE"
                        }
                    }
                } // end dir
            } // end script
        }
    }
}