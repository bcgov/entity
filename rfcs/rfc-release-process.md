- Start Date: 2019-09-05
- Target Major Version: N/A
- Reference Issues:
- Entity Issue:
- Implementation PR:

# Summary

The Entities (Bcorps and Coops) and Relationships teams are working on the new Registries platform. These teams need a strategy to work together to develop > build > test > release this new product. This RFC will begin to describe this process. Feedback is needed to fill in more detail.

The list of environments:

ENV|Namespace | Actor | Testing | Comments
---|----|---|---|---
DEV | gl2uos-dev| developers | unit and integration | tickets need dependencies listed
E2E | d7eovc-tools | QA | integration, e2e and manual | QA to coordinate tagging into this env
TEST| gl2uos-test | Stakeholders and QA | UAT and manual | stable env open to staff/stakeholder demos at all times
PROD| gl2uos-prod | actual users | prod testing TBD | *TODO: We need to secure 'test' coops/bcorps in prod to test with*

## Local to DEV

Minimum would be that all linters and unit tests pass, but more details needed from devs on all teams to detail this first step. Ideally, some form of pull request pipeline or GitHub Actions would help automate portions of code review. Communication is needed across teams to ensure that everything in DEV is intended for release to production shortly. Developers across teams will need to ensure that all of the necssary dependencies are part of the DEV build(s) that will move forward. e.g. ensure front-end and back-end code features reach DEV together.
If configuration changes are part of your change, this needs to be planned for as well. *Pending some way of moving configs in PRs like code*

## DEV to E2E

Once one or more features are stable in the DEV environment, QA will work with developers to tag the corresponding DEV images over to the E2E tag. Pipelines are in place to complete this for coops; matching pipelines are needed for Relationships.
QA will then refactor any high-level tests that need adjustment before proceeding.
Once a full set of services has been tagged over to E2E, the E2E pipeline will be run. This pipeline will run the new services, along with any complimentary services, totalling a complete environment. The pipeline will then clean the legal, auth and pay tables and load in filing data from the Oracle pod (snapshot of CTST). Once this setup is complete, postman collections from each team will be run along with the e2e browser suite.
Test run failures in this step will be triaged by the QA team.

## E2E to TEST

If all tests pass in E2E,then the images will be tagged over to TEST.

Question - What about config changes?

## TEST to PROD

The TEST environment does not have the ability to reset test data yet, so testing possibilities are limited here. TEST should be considered equivalent to PROD for the time-being. Similarily, we don't have PROD testing options yet, but more to come on this.

# Motivation

The release process has been complicated with just two teams co-located. The addition of the Bteam necessitates a more reliable and detailed release strategy in order to save time and avoid confusion. A mis-managed release can cost 1 to 4 people a day or more. A rocky release cycle will quickly cost the teams a lot of time.

# Drawbacks

- The E2E environment will have to grow to include an expanding list of services as they are developed.
- It is a completely separate environment with it's own maintenance costs.
- It currently takes around 20 minutes to spin up the E2E pipeline and run all tests. This may be a limiting factor moving forward.

# Alternatives

- More suggestions here please!

# Adoption strategy

If approved, then a formal diagram and process description will be developed and shared across all teams. Process and communcation changes will be needed in the following areas:

- Sprint planning: Small tickets, shared planning, dependencies well understood.
- Repo contention: Frequent merges to avoid complicated rebasing.
- QA: Work quickly to understand changes and refactor test scripts. 

# Unresolved questions

- Testing in the TEST environment?
- PROD testing?

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
