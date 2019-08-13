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

// define constants - values sent in as env vars from whatever calls this pipeline
def NAMESPACE = namespace
def TAG_NAME = tag
def COMPONENT_NAME = component
def COMPONENT_TAG = component_tag
def DB_TYPE = db_type

// set in setup stage (will be set to current values for running pods)
def DB_USERNAME
def DB_NAME
def PG_POD
def SERVICE_POD

// stays true if all tests pass
def PASSED = true

// define groovy functions
import groovy.json.JsonOutput

node {
    stage('Setup test DB') {
        script {
            echo """
            Pipeline called with constants:
                - NAMESPACE: ${NAMESPACE}
                - TAG_NAME: ${TAG_NAME}
                - COMPONENT_NAME: ${COMPONENT_NAME}
                - DB_TYPE: ${DB_TYPE}
            """
            openshift.withCluster() {
                openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                    SERVICE_POD = openshift.selector('pod', [app: "${COMPONENT_NAME}-${TAG_NAME}"])
                    echo SERVICE_POD.objects()[0].metadata.name
                }
                if (DB_TYPE == 'ORA') {
                    openshift.withProject('gl2uos-tools') {
                        // start + wait for ora-pipline to finish
                        def ora = openshift.selector('bc', 'oradb-startup-pipeline')
                        ora.startBuild('--wait=true', "-e=namespace=${NAMESPACE}", "-e=component=oracle", "-e=tag=${TAG_NAME}", "-e=component_tag=${COMPONENT_TAG}").logs('-f')
                    }
                } else if (DB_TYPE == 'PG') {
                    openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                        def test_username = openshift.exec(
                            SERVICE_POD.objects()[0].metadata.name,
                            '--',
                            "bash -c 'printenv DATABASE_TEST_USERNAME'"
                        ).actions[0].out
                        def testdb_name = openshift.exec(
                            SERVICE_POD.objects()[0].metadata.name,
                            '--',
                            "bash -c 'printenv DATABASE_TEST_NAME'"
                        ).actions[0].out
                        DB_USERNAME = test_username
                        DB_NAME = testdb_name
                        echo """
                        - DB_USERNAME: ${DB_USERNAME}
                        - DB_NAME: ${DB_NAME}
                        """
                        // select pg pod
                        def pg_version = openshift.selector('dc', "postgresql-${TAG_NAME}").object().status.latestVersion
                        PG_POD = openshift.selector('pod', [deployment: "postgresql-${TAG_NAME}-${pg_version}"])
                        echo 'here pod ' + PG_POD
                        // execute as postgres user and create test db
                        def output_create_db = openshift.exec(
                            PG_POD.objects()[0].metadata.name,
                            '--',
                            "bash -c '\
                                psql -c \"CREATE DATABASE \\\"${DB_NAME}\\\";\" \
                            '"
                        )
                        echo "Temporary DB create results: "+ output_create_db.actions[0].out
                        def output_alter_role = openshift.exec(
                            PG_POD.objects()[0].metadata.name,
                            '--',
                            "bash -c '\
                                psql -c \"ALTER ROLE \\\"${DB_USERNAME}\\\" WITH superuser;\" \
                            '"
                        )
                        echo "Temporary DB grant results: "+ output_alter_role.actions[0].out
                    }
                }
            }
        }
    }
    stage('Run unit tests') {
        script {
            openshift.withCluster() {
                openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                    // execute pytests in deployed pod for service
                    try {
                        def install_reqs = openshift.exec(
                            SERVICE_POD.objects()[0].metadata.name,
                            '--',
                            "bash -c '\
                                pip install -r requirements/dev.txt \
                            '"
                        )
                        echo install_reqs.actions[0].out
                        def test_results = openshift.exec(
                            SERVICE_POD.objects()[0].metadata.name,
                            '--',
                            "bash -c '\
                                pytest \
                            '"
                        )
                        echo test_results.actions[0].out
                    } catch (Exception e) {
                        PASSED = false
                        def error_message = e.getMessage()
                        // send below to rocket chat
                        error_message = error_message.substring(0, error_message.lastIndexOf("\n"))
                        error_message_summary = error_message.substring(error_message.lastIndexOf("\n"))
                        echo """
                        Pytest details for ${COMPONENT_NAME}-${TAG_NAME}:
                            ${error_message}
                        Pytest result summary for ${COMPONENT_NAME}-${TAG_NAME}:
                            ${error_message_summary}
                        """
                    }
                }
            }
        }
    }
    stage('Clean test DB') {
        script {
            openshift.withCluster() {

                if (DB_TYPE == 'ORA') {
                    openshift.withProject('gl2uos-tools') {
                        // start + wait for ora-pipline to finish
                        def ora = openshift.selector('bc', 'oradb-startup-pipeline')
                        // ora.startBuild('--wait=true').logs('-f')
                    }
                } else if (DB_TYPE == 'PG') {
                    openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                        def output_drop_db = openshift.exec(
                            PG_POD.objects()[0].metadata.name,
                            '--',
                            "bash -c '\
                                psql -c \"DROP DATABASE \\\"${DB_NAME}\\\";\" \
                            '"
                        )
                        echo "Temporary DB create results: "+ output_drop_db.actions[0].out
                        def output_alter_role = openshift.exec(
                            PG_POD.objects()[0].metadata.name,
                            '--',
                            "bash -c '\
                                psql -c \"ALTER ROLE \\\"${DB_USERNAME}\\\" WITH nosuperuser;\" \
                            '"
                        )
                        echo "Temporary DB grant results: "+ output_alter_role.actions[0].out
                    }
                }
            }
        }
    }
    stage('Check test result') {
        script {
            if (!PASSED) {
                echo "One or more tests failed."
                currentBuild.result = "FAILURE"
            }
        }
    }
}

