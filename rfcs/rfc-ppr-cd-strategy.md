- Start Date: 2020-02-07
- Target Major Version: https://github.com/bcgov/ppr/issues/428
- Reference Issues:
- Entity Issue:
- Implementation PR:

# Summary

Continuous Delivery (CD) is a process for validating and promoting code from source code checking through to production.
For the PPR project, we'd like input on our approach to implementing CD and are looking for suggestions where there are
gaps in our strategy.

Specifically, we would like input with regards to our Deployment Pipeline.  The PPR team has already implemented much
of their Continuous Integration process in [Github Actions](https://github.com/features/actions), with the exclusion of
placing the produced Docker Images into an Artifact Repository. Once this is in place, we require processes to deploy
to our dev, test and prod environments.


# Basic example

This figure is taken from Continuous Delivery (Humble & Farley) and presents a basic example of a deployment pipeline:

![Basic deployment pipeline](rfc-ppr-cd-strategy/contuous_delivery_fig5_4.jpg)

See [Continuous Delivery (Free Chapter): Anatomy of the Deployment Pipeline](https://dzone.com/articles/continuous-delivery-free)
for a deeper dive into the topic.

Our needs are slightly different and we are initially targeting 3 post commit stages: dev, test and production.  As
you'll note, regardless of stage there are 3 tasks that must be performed consistently with each stage: configure the
environment, deploy the artifacts, and execute smoke tests.


# Motivation

### Repeatable and Fast Deployment

Ultimately, our goal is to automate our deployment process to build confidence in our production readiness.  By
automating deployment to dev after merging our code to the master branch, we are able to quickly get to testing in a
production like environment. This increases our speed in getting feedback and saves us from spending manual time on this
task.  Also, by using an automated process, we can use the same process when we promote test and in turn build
confidence that we can safely use the same repeatable process to move to production.

The PPR team is planning to deploy to production in the near future, and it would be preferable to do this for the first
time using the automated deployment process to ensure that the process is correct. This is more difficult to ensure if
there has already been manual intervention into the environment. 

### Move away from Jenkins on OpenShift

The PPR team has a desire to stay clear of using Jenkins on OpenShift for CD.  Jenkins can be fairly resource intensive
in spurts, and because it is running in the same OpenShift cluster as our production environments, it competes for
valuable resources with our production systems.  This is undesirable and best avoided if possible.  Because of this
competition, teams often reduce Jenkins access to resources, which in turn can make build processes running in Jenkins
quite slow.

Additionally, using OpenShift directly leads us into vendor lock-in, which will make it more difficult to transition to
alternative platforms in the future.  By leveraging other systems, and using more targetted technologies, we will
provide the capability to more gradually deprecate tools and technology in the future.


# Detailed design

### Continuous Integration

Today, our CI process starts with a Pull Request from a fork, and runs through the following checks:
1. Compile and lint the source code
1. Execute unit tests
1. Execute integration tests
1. Analyse code quality with [SonarCloud](https://sonarcloud.io/dashboard?id=bcgov_ppr)
1. Code Review from at least one other developer

Assuming these checks all pass, the PR is merged to master, which kicks off the Commit Stage:
1. Compile and lint the source code
1. Execute unit and integration tests with coverage
1. Upload coverage data to [Codecov](https://codecov.io/gh/bcgov/ppr)
1. Update code quality in [SonarCloud](https://sonarcloud.io/dashboard?id=bcgov_ppr)
1. Package the application into a Docker Image

The commit stage currently is lacking in completeness, as it is not putting the deployable artifacts into an artifact
repository. The original intent was to push the produced docker image into
[Artifactory](https://artifacts.developer.gov.bc.ca/), but this is not yet ready for use.

Instead, for now we will plan to move forward by pushing the image to the OKD Registry as outline in this
[Gist](https://gist.github.com/thorwolpert/3ed23bd1548346e1231611cee80d3bbe).

### Repeatable Deployment Process

One of the keys to the deployment pipeline is the process itself.  This should be repeatable, idempotent and identical
for all environments.  The only things that are permitted to vary are values for secrets and certain configuration
settings (such as dependency URLs), and these should be pulled from a centralized location when needed.

The deployment process consists of 3 parts:
- Configure the environment
- Deploy the application
- Run smoke tests

Running on OpenShift, we have the benefit of having a Deployment Configuration Template for each of our applications,
and much of the deployment is handled by OpenShift itself, we just have to tell it what to do.

To configure the environment, we should be able to run `oc apply` with our deployment configuration and environment
specific values. When this occurs, deployment triggers for configuration changes should be disable, to prevent OpenShift
from deploying the existing images before the new images have been tagged. Ideally, secrets should come from a tool such
as [1Password](https://1password.com/). This should occur with every deployment in order to automate configuration
changes, as well as assist with disaster recover or deployment to new environments.

OpenShift is capable of initiating internal deployment based on the tag of an image. Essentially, we should simply be
able to re-tag the image with the environment we are targeting and trigger the deployment process. OpenShift will take
care of the rest.

Next, we need to wait for the deployment to complete and provide feedback.  This is ideally when we would execute smoke
tests, covered in a later section.

Our end goal is simply to automate this process, which is currently done manually.

### Environment & Stages

We have 3 environments, which will be tied to our deployment pipeline.  Each should only draw images from the artifact
repository that were produced during the commit stage.  These are `dev`, `test` and `production`.

We plan to deploy to dev automatically, triggered immediately following the commit stage.  Promotion to `test` would
be a "push button" action and would occur as our Quality Assurance and testing needs dictate.  Promotion to `production`
should also be "push button" and dictated by the needs of the business.

Currently, we do not have tools in place to orchestrate deployment between stages.  There are some tools we are aware of
though we are certainly open to input:
1. [Octopus Deploy](https://octopus.com/): A deployment tool with a fairly simple UI for push button deployments. They
have a cloud offering that's free for up to 10 deployment targets, which would meet PPR needs, but not additional teams.
Beyond 10 targets they charge $9/month per target.  So if we had 11 deployment targets it would cost $99/month.
1. [Spinnaker](https://www.spinnaker.io/): An enterprise level deployment tool developed by Netflix. It is free to
install and run, though some hosted options are available at varying prices.
1. [GoCD](https://www.gocd.org/): It's a free and fairly mature tool created by ThoughtWorks. It is not cloud hosted, so
we would have to deploy and manage our own server, which may raise some of the same concerns as Jenkins.  It's geared
toward the full CI/CD workflow, and we're not entirely clear if it is optimum for Deployment Pipeline only. 

Between these 3 tools, we believe cloud hosted Octopus Deploy would best suit PPRs needs for the moment, though we are
quite open to other options.

### Smoke & Acceptance Tests

For the moment, our only smoke test is a Readiness Probe which essentially just checks whether each pod is accepting
requests. We do not have a clear view on what a complete smoke test will look like but this will be driven by our
overall [test strategy](https://github.com/bcgov/ppr/blob/master/docs/test-strategy/teststrategy.md).

Likewise, acceptance testing will be dictated by the same test strategy, and is still under development. 


# Drawbacks

There are a few trade-offs to consider in our approach:
- Some of the approaches we are proposing will require tools which are not consistent with what other teams are doing.
This will require buy-in from the wider team and acceptance that there may be some differences in long term product
management.
- The need for additional tools to orchestrate deployments will require more learning and some overhead to manage the
processes, as well as licenses for the tools.


# Alternatives

It is possible to implement and retain this functionality within the OpenShift environment.  For example, rather than
building and pushing images from Github Actions, we could use the following process to build our image in OpenShift:
1. Re-apply the Build Configuration template in the OpenShift `tools` namespace
2. Trigger a run of the Build Config which will produce an image in the namespace

Once the image is built, we could use Jenkins, instead of one of the other tools, to initiate the deployment process to 
dev.

This is counter to our goal of offloading this work from OpenShift and has visible downsides:
- Performance: The OpenShift builds tend to be extremely slow, as is Jenkins running on OpenShift.
- Usability: Jenkins is a powerful tool with many capabilities, but is not geared towards Continuous Delivery, so we
have to somewhat shoe-horn a deployment pipeline into it.


# Adoption strategy

We will begin by first applying this strategy with PPR API in the `dev` namespace.  Once we are satisfied, we will
enable promotion to `test` and then `prod`.  This will not impact external teams and will allow us to get our first
deployment to production.

Once the process is proven to work for the PPR API, we can then begin to apply the same pattern to the PPR UI.  As this
is currently deployed with the SBC Auth project, some collaboration may be required from the relationships team to
enable some parts of the process.


# Unresolved questions

Most unresolved questions are highlighted above, but to summarize:
- What artifact repository will be used to store images for the deployment pipeline? What is still outstanding to make
that work?
- What tool will we use for deployment orchestration?
- What additional tests will be automated in this process and at precisely which stages?
