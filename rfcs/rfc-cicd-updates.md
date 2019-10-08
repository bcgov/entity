

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


















