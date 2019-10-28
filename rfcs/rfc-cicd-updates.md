

# RFC - Updates to Support CI/CT/CDe

# Summary

Introduce container-based application design principles into the existing LEAR components to further enable increased productivity and collaboration through continuous development, integration, testing and delivery practices.



# Motivation

Currently it's challenging to spin up complete environments that are suitable for programatically running unit, integration and end-to-end test suites. The these tests either having to be run manually, or not at all.

With some modest improvements into the containerization development practices we will be able to better leverage continuous integration, testing and delivery techniques. Ultimately with the goal of:
- increased productivity and faster delivery of features (Feature TTL).
- increased collaboration between teams with shared environments.
- reduce risk and complexity of releases through Environment Parity and Continuous Release Testing
- better code/product quality (More test automation, product-wide source scanning/linting)

This RFC doesn't aim to exclude any future improvements such as Artifactory, GitHub Actions, etc - quite the opposite; it aims to establish a couple 'first steps' into processes that would further enable these improvements.

First we need to be able programatically build environments, run tests and report on them, and enable continuous (e2e, regression, manual QA) testing on features as they are developed.


# Definitions and Concepts

Much of the detailed design and recommendations proposed here expect that the reader has a relatively thorough technical understanding of containerization design principles, and modern development practices.  This section aims to provide a (detailed enough) definition of these concepts, what issues they intend to address, and why/when we would choose to implement them.


### Image Immutability Principle
Containerized applications are meant to be immutable, and once built are not expected to change between different environments. This implies the use of an external means of storing the runtime data and relying on externalized configurations that vary across environments, rather than creating or modifying containers per environment. Any change in the containerized application should result in building a new container image and reusing it across all environments.

- Helps address Environment Parity
- Enables Image Promotion Pipelines
- Improves pipeline performance


### High Observability Principle
Containerized applications must provide APIs for the different kinds of health checks—liveness and readiness. Even better-behaving applications must provide other means to observe the state of the containerized application. The application should log important events into the standard error (STDERR) and standard output (STDOUT) for log aggregation by tools such as Fluentd and Logstash and integrate with tracing and metrics-gathering libraries such as OpenTracing, Prometheus, and others.

- Enables interaction with containers at various lifecycle events.
- Assists in debugging/tracing in development
- Essential for out-of-service event-triggers (ie:cross-component scaling in prod, auto-healing)


### Environment Parity
Number ten in the twelve-factor app methodology, we should strive to keep our development, test/staging and production environments as similar as possible, and release as frequently as possible into each to attempt to weed out deployment issues before they become actual problems. This is a lot easier to achieve when following the Image Immutability Principle, as we will have extracted all configuration from the application image itself.

- Reduces risk in releases/deployments
- Improves test quality/value


# Detailed Design

Ultimately, we would like to leverage some common DevOps practices with the aim to achieve:

- improved cross-team development/collaboration
- increased productivity
- reduced time-to-live for features
- reduced risk / increased confidence in deployments
- improved product quality through higher-value tests
- improved product reliability though higher-frequency test-runs

Ideally, what we would like to see is the following:
- Pull-Request based pipelines that:
  - run and report unit/integration test suites automatically
  - spin-up complete (pr-number-addressed) environments for quality-assurance and business validation
- Manually-triggered image-promotion through the products lifecycle-environments, ie:
  - pr-approval merges and rebuilds the dev environment
  - one-click promotion to test
  - one-click promotion to e2e
  - one-click promotion to prod

This is ultimately a 'funnel' or 'gauntlet', where build artifacts are created once, and promoted through a series of environments and test suites. Emphasis is placed on repeatedly testing and deploying the artifacts as they progress through the environments towards a production release. Much of this can be done automatically, allowing developers to focus more on development than operations and feature promotion, and quality-assurance analysts to focus on running test cases on features, and further developing automated end-to-end test suites.

To be able to achieve this we will be required to make a few changes into the way that our containers are designed, along with a few updates to the openshift build/deployment configs. These changes primarily relate to the Image Immutability and Environment Parity Principles; as these are the backbone of the continuous integration, testing and delivery philosophy.

The existing codebase is pretty close on this already, but there would be a couple updates needed to ensure its consistently and fully applied across all application components.

- (Complete) Environments should be able to be spun up either automatically, or manually - from an openshift-template. This would require:
  - The application components be environment agnostic
  - The application components be immutable

- (Complete) Environments should be able to be spun up on pull-requests, performing and reporting on unit/integration tests automatically, running linting/scanning via SonarQube automatically. This should:
  - reducing the requirements on developers in Peer-Review to the physical analysis of the code changes.
  - Increase the quality of the product through increased exposure to tests and scans.

- All containers should follow the "High Observability" and "Life-Cycle Conformance" Principles to enable:
  - automated testing and reporting on the built images
  - extended debugging / logging options for when things are not going well.

- Developer creates a pull request, initiating a job that would do the following:
  - leverage docker and openshift build-caches to ensure that only what has changed is being rebuilt
  - pull any (remote) dependencies required through package-managers
  - build the application-component images
  - deploy the application-component images to a new environment, prefixed with the `PR-#`
  - run any unit/integration tests and report on its success/failure
  - run any sonarqube linting and scanning, reporting as required.
  - notify the team that a PR is available at the openshift-route defined by the PR.

- Peers then review the PR, performing the static analysis (and/or as deep of a formal analysis as appropriate).
  - Developers fix or resolve any comments, failing tests and resubmit
  - QA performs manual test-case execution on the feature the PR represents.

- On approval of the PR:
  - the pr-generated environment is terminated (or flagged for removal)
  - The branch is merged into the parent branch, triggering a rebuild of the parent-branches environment (ie: `dev`) through tagging/image-promotion.

- At an appropriate frequency (feature completion) the `DEV` environment can be promoted to `TEST` and/or `E2E` environments, each being 'seeded' with the appropriate data required. `TEST` is intended for business-validation/user-acceptance testing, and has a specific data-set required for this, while `E2E` has a dataset that has been tuned for automated end-to-end tests run through nightwatch, and postman/newman.

A discussion could be had around the order of these two environments. Does it make more sense to run these two environments in parallel, or should one happen before the other. Personally, I think if we ran and updated the `E2E` environment more frequently, and promoted from there to `TEST` as a UAT/PRE-PROD release it might make the most sense, but this is fully open for discussion.

The emphasis should be ensuring that we can promote the newly developed features (frequently) into an environment applicable for running `NightWatch`, `Postman/Newman` and any other automated testing tools to help in quality assurance of the product.

# RFC - Updates to Support CI/CT/CDe


## Problems that need to be solved

  - Need to be able to spin up new environments with ease
  - Need to be able to specify a branch to build the environment from
  - Need to be able to seed/reseed the environment with any data that is required.

# Detailed Design (REVISED)

This section intends to outline the proposed changes to address the ability to easily spin up issolated environments for the purpose of development, pull-request validation and quality-assurance/e2e testing.  The first stage should be to make it so that environment-spinup is consistant, and highly repeattable.

With this addressed, there will be an established baseline for developers and further automation processes. We can extend the usage of this with pre-environment Hithub actions for unit-tests and linting, we have developers work directly within openshift environments via port-forwarding or containerized rsync, and we can (re)create environments suitable for running e2e test suites. It all starts from having a consistant way to build environments.

## What tools and packages are to be used

The following are a list of the tools and packages that are intended to be used to facilitate the updated pipeline model.

| Tool/Package | Description |
| ------------ | ----------- |
| `jenkins` | A perisistant installation of jenkins, with its installation and configuration contained within the repo so that it can be destroyed and rebuilt as needed. |
| [BCDevops/ocp-cd-pipeline](https://github.com/BCDevOps/ocp-cd-pipeline) | A collection of jeknins/groovy scripts to help run the jobs in a jeknins pipeline.  These scripts will help enable is to utlize `ImageStreams` for both the source-code and configuration, helping ensure that the openshift caching mechanisms are utlized as much as possible. |
| `source2image` | Openshift builder-images used to facilitate the containerization of the applications. |
| `Blue Ocean` | Blue Ocean is a Jenkins plugin that generates better visualization of the pipeline stages, but doesn't affect that actual jobs. We can use this for reporting and status, and demoing to stakeholders. |


## Why 'ocp-cd-pipeline'?

Consideration was put into [openshift-pipelines](https://docs.okd.io/3.11/dev_guide/openshift_pipeline.html), but they do not support pr-based workflows, and are not well suited for building multiple application-components into a single environment.

The more recent [BCDevops/pipeline-cli](https://github.com/BCDevOps/pipeline-cli) was considered as well, however it didn't seem to as easily support the multiple application-components into a single-environment either, and wasn't very clear how it could be easily extended the specific needs required here. It seemed as if it was more inteded for the generators.

Landing on the `ocp-cd-pipeline`, while an older iteration of what is being used in the lab, it does fully support ImageStreams, mono-repos with mutliple application-components, and it can be extended to support the needs of this build.


## Environment Details

Environments should be abstracted into openshift 'applications', prefixed with the branch or PR-number that its being built from. The applications will contain the primary components (coops-ui, lear-api, entity-filer, and nats), with references to external services (auth, payments).

Databases are to be handled with Enterprise Postgres, and there will need to be a script that can create a new db prefexed with the same application-prefix, with the schema migrated and seeded with data according to parameters passed to the job.


The following environments are built using the parameterized jenkins job, building, pushing and tagging images to the openshift registry.

| Environment | Description |
| ----------- | ----------- |
|`application-pr123` | an environment automatically spun up on pull-request. |
|`application-feat-123` | an environment manually spun up for feature development. |
|`application-dev` | an environment manually spun up representing the current dev-state |

The following environments are built using a parameterzed jenkins job, utlizing image promotion but still enabling scriptable data-loading, and the ability to swap out/around configuration references. These should all promote from dev -> e2e -> test -> prod

| Environment | Description |
| ----------- | ----------- |
| `application-e2e` | an environment manually spun up representing the e2e test state |
| `application-test` | an environment manually spun up representing a pre-prod environment for business validation before releasing to production. |

## General Template and Script File Structure

| Path | Description |
| ---- | ----------- |
| `/devops` | Root directory for all devops scrips and templates |
| `/devops/jenkins/` | Contains any scripts and templates required for building the jenkins master & slaves |
| `/devops/openshift` | Contains the build and deployment config templates for each of the application components, along with any other configurations that might be associated with the openshift configuration of the components. |
| `/devops/pipeline` | Contains any (jenkins, etc) scripts required to facilitate the actual pipeline runs - groovy, gradle scripts, etc |

## Build and Deployment Config Template Structure

The build and deployment configuration templates should contain parameterized objects for everything that is needed to build and deploy the components. These files need to be 100% environment agnostic, and be completely parameterized - even the resource allocation.

This should result in a single build-config template, and a single deploy-config template for each of the application components. The values of the parameters will be fed into the templates from the jenkins/groovy scripts, and optionally pulling more secure/sensitive properties from a secret storage service (openshift, password-vault)

Each of the application components needs to be completely parameterized to match, including references to the other components.

This should result in a single application-component codebase that could be built and deployed to any environment without change, the single build and deploy config templates, each being fed parameters defined through jenkins-scripts, or through the jenkins job itself. These parameters can be overwritten either manually or programatically at the time of launching the job.

## Application Components

The following application components will require the build and deployment configuration templates, along with any paramterization required to support this process.

  - coops-ui     (Frontend)
  - legal-api    (Backend)
  - postgres     (Configured for usage with Enterprise Postgres)
  - entity-filer (Filing Working)
  - nats         (Message Queue)

To be able to ensure that the OpenShift ImageStreams are utlizes properly, all application source code and configuration is required to be separated by directory, for example:

| Path | Description |
| ---- | ----------- |
| `/coops-ui` | Root directory for all devops scrips and templates |
| `/coops-ui/src` | The source code of the application component |
| `/coops-ui/tests` | Any unit/integration test for the applicaiton component |
| `/devops/openshift/coops-ui` | The openshift build and deployment config template directory, outside of the application-components directory |

For the most part all of the existing application components should be like this already, with the exception of the openshift build and deployment config templates - currently they are located within the application-components directory. Its proposed that we move these from the app-component directory into the devops directory primarily for the following reasons:

- Allowing for development of this new process in tandem with the current structure to ensure that builds and deployments are not blocked while waiting for this update to be completely developed.
- Abstraction of all build/deployment configrations into a centeralized devops source-folder, keeping the application-component source directories for only application-source/tests.

Its important to state the need for this with the proposed changes utlizing this directory structure to create the ImageStreams, and to ensure that test-scripts are not included in the application builds.


## Jenkins Jobs

There should be a single job that builds and deploys all environments, regardless of its prefix or usage. This job should be parameterized, so that we can control the input and outputs directly at job instantiation.

The following parameters are (intially, some of) the proposed parameters for the job. (Note, this is not intended to be a complete list - as this process is developed we will define the full set of parameters that would be needed.)

| Parameter | Description |
| --------- | ----------- |
| `Namespace` | The openshift namespace that the job will output to. |
| `InputSource` | The branch/pull-request that will be used as the source to build from. |
| `Prefix` | Generally provided based on the InputSource, but can be overwritten. |


### Pipeline Stages

The following outlines the expected stages and outcomes of the job.

1. **Sanity Check** - Perform any validation required on the input and source prior to commencing a build or deploy process.
2. **Build Stage** - Iterate over the application-components:
   1. checking their source and configuration directories for changes to the ImageStream
   2. resolving any dependencies
   3. run any non-integrated tests
   4. Build (utlizing the build-config templates)
3. **Push & Tag Stage** - Iterage over the application-components:
   1. Pushing up the images if applicable
   2. tagging them with the applicable tag
4. **Deploy Stage** - Iterate over the application-components:
   1. Create the oc-application if applicable
   2. Deploy the application-components (using the deploy-config templates)
5. **Verify Deployment Stage** -- Verify that all application components respond to:
   1. Service / Health Checks
   2. Readiness Checks
   3. Validate accessiblity through prefixed-route.
6. **Integration Testing Stage**
   1. Optionally run on environments intended for integration testing (ie: e2e)
7. **Cleanup Stage**
   1. Remove any reminants or artifacts left over from building/errors
   2. Perform any notifications required


## External Services

There will need to be references to external services (auth. payments, Enterprise DB) - services that are not intended to be replicated with each environment. References to these services should all be handled through the parameterization of both the application components, and the jenkins job (as applicable).

## Next steps

Once these environments can be spun up easlily, it should simplify the process for pushing developers contributions through the start of the Software Development Pipeline. The next steps would be looking at how to utlize these environments for further automated testing, and quality assurance.

- There are existing postman/newman pipelines that we can leverage and start to further develop e2e test suites.
- There are existing data-loader pipelines that we can leverage to setup the environments with data applicable for the types of tests that are to be run in them.
- Gihub actions can be leveraged to perform pre-build unit testing


## Additional Tasks

  - Should talk to the labs ops team and see if they can merge the resources we have from the b-teams openshift project into the a-teams one ( as we are intending to share it now ) - This would be the ideal scenario - increase the resources allocated to a single project.
  - If that is not possible, then we should look at using one for development, and the other for qa/staging/prod, ie:
    - Any environment spun up on PR or as developer-environment can be done in the `ZCD4OU (B-Team) OpenShift Project.
    - The `DEV` -> `E2E` -> `TEST` -> `PROD` environments can be deployed to the existing `GL2UOS (A-Team)` Openshift Project




# Adoption Strategy

Initially there is the work around getting the application components, environments and pipelines setup, primarily consisting of:

1. Update the application components to follow the containerization design principles defined above, fully abstracting all environment configurations.
2. Create/Update openshift templates for these application components.
3. Introduce a PR-based web-hook utilizing Jenkins to automatically build, tag, run tests, and report on the tests.
4. Introduce openshift pipelines for the dev/test/e2e environments

This could primarily be done by Brian, with some input from other team members to ensure that all environment and application parameters are properly defined and abstracted.

Beyond initial setup and configuration, this would be a bit of change in developer workflow.

1. While developers should ensure that all unit test are passing before creating a pull-request, if they create a PR and the automated unit-tests runs fail, it will be there responsibility to ensure that it correctly builds and tests pass before expecting feedback on the PR. They would need to fix any issues and resubmit the PR.
2. QA Analysts and Developers will likely need to include updates to any e2e tests, and test-data seeding scripts as part of feature development, this should be included and planned through sprint planning.
3. Setup and configuration of SonarQube linting / scanning, along with a process for following up on any issues that get discovered through the inspection process would need to be figured out. Beyond configuration, the process for resolving and assigning these issues would likely come from a team discussion/agreement.


# Unresolved Questions

This proposal is intended as first steps towards a continuous integration, testing and delivery process. It's not intending to exclude any future improvements with the introduction of other services like Artifactory, or Github Actions.  How we choose to adopt these tools is something that the team would need to work out.

There likely are a few ways in which we can leverage openshift Jenkins (and GitHub actions) to achieve this, and there are likely even more ways that we could improve on it once released - these will be for the team to propose.


















