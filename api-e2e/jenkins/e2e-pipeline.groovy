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
def LEGAL_API = 'legal-api'
def COLIN_API = 'colin-api'
def COOPS_UI = 'coops-ui'
def ORACLE = 'oracle'
def POSTGRESQL = 'postgresql'
def AUTH_API = 'auth-api'
def AUTH_WEB = 'auth-web'
def PAY_API = 'pay-api'
def REPORT_API = 'report-api'
def ENTITY_FILER = 'entity-filer'
def NATS_STREAMING = 'nats-streaming'

// set in setup stage (will be set to current values for running pods) TODO: username/name for auth/pay dbs
def LEGAL_DB_USERNAME
def LEGAL_DB_NAME
def PG_POD
def API_DB_USERNAME
def API_DB_NAME

def DEPLOYMENTS_API_WITH_PG = [LEGAL_API, AUTH_API, PAY_API]
def DEPLOYMENTS_API_WITH_ORA = [COLIN_API]
def DEPLOYMENTS_API_WITHOUT_PG = [REPORT_API, ENTITY_FILER]
def DEPLOYMENTS_UI = [COOPS_UI, AUTH_WEB]
def DEPLOYMENTS_ORACLE = [ORACLE]
def DEPLOYMENTS_DB = [POSTGRESQL]
def DEPLOYMENTS_Q = [NATS_STREAMING]
def DEPLOYMENTS = [DEPLOYMENTS_API_WITH_PG, DEPLOYMENTS_API_WITH_ORA, DEPLOYMENTS_API_WITHOUT_PG, DEPLOYMENTS_UI, DEPLOYMENTS_ORACLE, DEPLOYMENTS_DB, DEPLOYMENTS_Q].flatten()

// old version of deployments
def OLD_VERSIONS = []

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

def scale_up(NAMESPACE, TAG_NAME, COMPONENT_TAG, deployment) {
    script {
        openshift.withCluster() {
            openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                deploy = openshift.selector("dc", "${deployment}-${COMPONENT_TAG}")
                echo "Scaling up ${deployment}-${COMPONENT_TAG}"
                deploy.scale('--replicas=1')
            }
        }
    }
    return ""
}

def scale_down(NAMESPACE, TAG_NAME, COMPONENT_TAG, deployment) {
    script {
        openshift.withCluster() {
            openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                deploy = openshift.selector("dc", "${deployment}-${COMPONENT_TAG}")
                echo "Scaling down ${deployment}-${COMPONENT_TAG}"
                deploy.scale('--replicas=0')
            }
        }
    }
    return ""
}

def verify_new_deployments(NAMESPACE, TAG_NAME, COMPONENT_TAG, OLD_VERSIONS, components) {
    script {
        openshift.withCluster() {
            openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                for (component in components) {
                    echo "Verifying ${component} has a pod up and running"
                    def new_version = openshift.selector('dc', "${component}-${COMPONENT_TAG}").object().status.latestVersion
                    if ("${component}-${new_version}" in OLD_VERSIONS) {
                        echo "New deployment was not triggered."
                        echo "New: ${component}-${new_version}"
                        echo "Old versions: ${OLD_VERSIONS}"
                        currentBuild.result = "FAILURE"
                    }
                    def pod_selector = openshift.selector('pod', [ deployment:"${component}-${COMPONENT_TAG}-${new_version}" ])
                    pod_selector.untilEach {
                        def latest = it.objects().size()
                        if (!latest) {
                            return false
                        }
                        latest--
                        deployment = it.objects()[latest].metadata.labels.deployment
                        echo "Checking pod: ${deployment}"
                        if (deployment ==  "${component}-${COMPONENT_TAG}-${new_version}" && it.objects()[latest].status.phase == 'Running' && it.objects()[latest].status.containerStatuses[0].ready) {
                            return true
                        } else {
                            echo "${component}-${COMPONENT_TAG} pod not ready"
                            sleep 5
                            return false
                        }
                    }
                }
            }
        }
    }
    return ""
}

node {
    stage("Setup E2E Environment") {
        script {
            echo """
            Pipeline called with constants:
                - DEPLOYMENTS: ${DEPLOYMENTS}
            """

            // scale down all deployments to reset any connections
            for (name in DEPLOYMENTS) {
                scale_down(NAMESPACE, TAG_NAME, COMPONENT_TAG, name)
            }
            sleep 10
            // scale up all deployments
            for (name in DEPLOYMENTS) {
                scale_up(NAMESPACE, TAG_NAME, COMPONENT_TAG, name)
            }
            // wait for deployments to boot up
            openshift.withCluster() {
                openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                    // confirm all deployments are up (otherwise wait till all pods are up)
                    for (name in DEPLOYMENTS) {
                        echo "Verifying ${name} has a pod up and running"
                        deploy = openshift.selector("dc", "${name}-${COMPONENT_TAG}")
                        def version = deploy.object().status.latestVersion
                        pod_selector = openshift.selector('pod', [deployment: "${name}-${COMPONENT_TAG}-${version}"])
                        def latest = pod_selector.objects().size()
                        if (latest) {
                            latest--
                        }
                        if (latest || !pod_selector.objects()[latest] || pod_selector.objects()[latest].status.phase != 'Running' || !pod_selector.objects()[latest].status.containerStatuses[0].ready) {
                            pod_selector.untilEach {
                                if (!it.objects()[latest]) {
                                    if (latest > 0) {
                                        latest--
                                    }
                                    return false
                                }
                                deployment = it.objects()[latest].metadata.labels.deployment
                                echo "checking for ${deployment}"
                                if (it.objects()[latest].status.phase == 'Running' && it.objects()[latest].status.containerStatuses[0].ready) {
                                    return true
                                } else {
                                    echo "${name}-${COMPONENT_TAG} pod not ready"
                                    echo "Note: colin-api will be unhealthy until oracle config is finished (usually takes ~3 minutes)"
                                    sleep 5
                                    return false
                                }
                            }
                        }
                    }

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

                        // save the db name for postman test
                        if (api_name == LEGAL_API) {
                            LEGAL_DB_NAME = API_DB_NAME
                            LEGAL_DB_USERNAME = API_DB_USERNAME
                        }

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

                        //OLD_VERSIONS = ["${LEGAL_API}-${legal_version}", "${COLIN_API}-${colin_deploy.object().status.latestVersion}", "${COOPS_UI}-${coops_ui_deploy.object().status.latestVersion}"]

                        OLD_VERSIONS << "${api_name}-${api_version}"

                        echo "Rolling out ${api_name}-${COMPONENT_TAG}"
                        api_deploy.rollout().latest()
                        api_deploy.scale('--replicas=1')
                    }

                    // setup nats-db and deploy nats-streaming
                    def nats_deploy = openshift.selector("dc", "${NATS_STREAMING}-${COMPONENT_TAG}")

                    echo "Scaling down ${NATS_STREAMING}-${COMPONENT_TAG}"
                    nats_deploy.scale('--replicas=0')
                    def nats_version = nats_deploy.object().status.latestVersion

                    API_DB_NAME =  "nats-db"
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

                    echo "Creating Tables for ${API_DB_NAME} in ${POSTGRESQL}-${COMPONENT_TAG}"
                    // execute as postgres user and create test db
                    def output_create_tables = openshift.exec(
                        PG_POD.objects()[latest].metadata.name,
                        '--',
                        "bash -c '\
                            psql ${API_DB_NAME} -f /scripts/nats_db.sql \
                        '"
                    )
                    echo "Temporary DB tables results: "+ output_create_tables.actions[0].out

                    OLD_VERSIONS << "${NATS_STREAMING}-${nats_version}"

                    echo "Rolling out ${NATS_STREAMING}-${COMPONENT_TAG}"
                    nats_deploy.rollout().latest()
                    nats_deploy.scale('--replicas=1')

                    for (api_name in DEPLOYMENTS_API_WITHOUT_PG) {
                        def api_deploy = openshift.selector("dc", "${api_name}-${COMPONENT_TAG}")
                        def api_version = api_deploy.object().status.latestVersion

                        OLD_VERSIONS << "${api_name}-${api_version}"

                        echo "Rolling out ${api_name}-${COMPONENT_TAG}"
                        api_deploy.rollout().latest()
                        api_deploy.scale('--replicas=1')
                    }


                    for (ui_name in DEPLOYMENTS_UI) {
                        def ui_deploy = openshift.selector("dc", "${ui_name}-${COMPONENT_TAG}")
                        def ui_version = ui_deploy.object().status.latestVersion

                        OLD_VERSIONS << "${ui_name}-${ui_version}"

                        echo "Rolling out ${ui_name}-${COMPONENT_TAG}"
                        ui_deploy.rollout().latest()
                        ui_deploy.scale('--replicas=1')
                    }

                    for (colin_name in DEPLOYMENTS_API_WITH_ORA) {
                        def colin_deploy = openshift.selector("dc", "${colin_name}-${COMPONENT_TAG}")
                        def colin_version = colin_deploy.object().status.latestVersion

                        OLD_VERSIONS << "${colin_name}-${colin_version}"

                        colin_deploy.scale('--replicas=0')

                        openshift.withProject('gl2uos-tools') {
                            // start + wait for ora-pipline to finish
                            echo "Resetting ${ORACLE}-${COMPONENT_TAG}"
                            def ora = openshift.selector('bc', 'oradb-startup-pipeline')
                            ora.startBuild('--wait=true', "-e=namespace=${NAMESPACE}", "-e=component=${ORACLE}", "-e=tag=${TAG_NAME}", "-e=component_tag=${COMPONENT_TAG}").logs('-f')
                        }

                        echo "Rolling out ${colin_name}-${COMPONENT_TAG}"
                        colin_deploy.rollout().latest()
                        colin_deploy.scale('--replicas=1')
                    }
                }
            }
        }
    }

    stage("Verify Deployments") {
        //sleep 10
        def components = [DEPLOYMENTS_API_WITH_PG, DEPLOYMENTS_API_WITH_ORA, DEPLOYMENTS_API_WITHOUT_PG, DEPLOYMENTS_UI].flatten()
        echo "old versions: ${OLD_VERSIONS}"
        verify_new_deployments(NAMESPACE, TAG_NAME, COMPONENT_TAG, OLD_VERSIONS, components)
    }

    stage('Load Data') {
        script {
            openshift.withCluster() {
                openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                    checkout scm
                    dir('api-e2e/openshift/templates') {
                        try {
                            delete_job = sh (
                                script: """oc delete jobs/data-loader""",
                                    returnStdout: true).trim()
                            echo delete_job
                        } catch (Exception e) {
                            echo "${e.getMessage()}"
                        }
                        data_load_output = sh (
                            script: """oc process -f data-loader.yml -p ENV_TAG=test | oc create -f -""",
                                returnStdout: true).trim()
                    }
                    sleep 10
                    def data_loader = openshift.selector('pod', [ "job-name":"data-loader" ])
                    data_loader.untilEach {
                        def pod = it.objects()[0].metadata.name
                        echo "pod: ${pod}"
                        if (it.objects()[0].status.phase == 'Succeeded') {
                            echo "${pod} successfully loaded data."
                            return true
                        } else {
                            return false;
                            sleep 5
                        }
                    }
                    echo "Setting postal codes in ${LEGAL_DB_NAME}"
                    // execute as postgres user and create test db
                    def output_set_postals = openshift.exec(
                        PG_POD.objects()[latest].metadata.name,
                        '--',
                        "bash -c '\
                            psql -d \"${LEGAL_DB_NAME}\" -c \"update addresses set postal_code=\'V8N4R7\'\" \
                        '"
                    )
                    echo "Temporary DB create results: "+ output_set_postals.actions[0].out
                }
            }
        }
    }

    stage('Run Postman E2E Tests') {
        script {
            openshift.withCluster() {
                openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                    // run e2e postman pipeline
                    try {
                        apis = "${COLIN_API}, ${LEGAL_API}, ${AUTH_API}"
                        def pm_e2e_pipeline = openshift.selector('bc', 'postman-e2e-pipeline')
                        pm_e2e_pipeline.startBuild('--wait=true', "-e=components='${apis}'", "-e=component_tag=${COMPONENT_TAG}", "-e=namespace=${NAMESPACE}-${TAG_NAME}").logs('-f')
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
    }

    stage('Clean E2E Environment') {
        script {
            openshift.withCluster() {
                openshift.withProject("${NAMESPACE}-${TAG_NAME}") {
                    // scale down all deployments
                    for (name in DEPLOYMENTS) {
                        deploy = openshift.selector("dc", "${name}-${COMPONENT_TAG}")
                        echo "Scaling down ${name}-${COMPONENT_TAG}"
                        deploy.scale('--replicas=0')
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

                ROCKETCHAT_TOKEN = sh (
                    script: """oc get secret/api-e2e-pipeline-secret -o template --template="{{.data.ROCKETCHAT_TOKEN}}" | base64 --decode""",
                        returnStdout: true).trim()

                //rocketChatNotificaiton("${ROCKETCHAT_TOKEN}", "${ROCKETCHAT_CHANNEL}", "E2E Pipeline: One or more tests failed!! ")
            }
        }
    }
}
