---
name: STRR - Pre-Release Checklist
about: The technical steps required to support a push to Prod for the Short Term Rental
  Registry
title: 'STRR Release '
labels: STR
assignees: ''

---

Starting with the following content borrowed from the Entities team:

For the first release we will also want to do the following:
- [ ] Fee code present in pay prod - check with PAY team
- [ ] DB-migration done for dev, test,prod- check with tean API lead
- [ ] QA spends a week testing in prod
- [ ] Ensure dev is relatively stable at code freeze, no more breaking changes going into dev after code freeze

Prior to moving into production, the following steps should be completed or confirmed:
- [ ] Add release # to this ticket
- [ ] Update version numbers in the code being released and list them here:
  - STRR API vX.X.X
  - STRR APPLICATION AUTO APPROVAL vX.X.X
  - STRR PAY vX.X.X
  - STRR PLATFORM UI vX.X.X
  - STRR STRATA UI vX.X.X
  - STRR Examiner vX.X.X
  - STRR Host PM vX.X.X
- [ ] Ensure deployment steps are filled in - remove/replace placeholders
- [ ] Create a draft release in GitHub and confirm the correct commits are present
 1. - [ ] Confirm the correct commits are present
 2. - [ ] Select appropriate target is selected which represents the build in Test - either a commit from recent commits or a reference to a branch
 3. - [ ] Autogenerate release notes using last release tag as a point of reference. Update change list manually if required.
- [ ] Dev to ensure that the commit list is represented on the release report
- [ ] QA to schedule the release with staff/clients (daytime's best or when staff are available for rollback)
- [ ] All dev/test pipeline test suites green
- [ ] Dev/QA chat to plan prod verification testing (unless already automated)
- [ ] Post message that projects are being deployed to Prod
- [ ] Release the code to production and complete smoke test (STEPS BELOW)
- [ ] Post message that projects have been deployed to Prod
- [ ] Finalise/publish the release in GitHub, tagging it
- [ ] Merge release branch back to master (if applicable)
- [ ] Change any builds/pipelines back to master (if applicable)

### Deployment Steps

#### Dev:
- [ ] STRR API - vX.X.X done by CD script
- [ ] STRR APPLICATION AUTO APPROVAL - vX.X.X done by CD script
- [ ] STRR PAY - vX.X.X done by CD script
- [ ] STRR PLATFORM UI - vX.X.X done by CD script
- [ ] STRR STRATA UI- vX.X.X done by CD script
- [ ] STRR Examiner - vX.X.X done by CD script
- [ ] STRR Host PM - vX.X.X done by CD script
.
- [ ] config map changes
  - list here
- [ ] are there any dependencies, such as an auth/pay deployment or keycloak changes?
  - list here
- [ ] are there any one-time scripts to be run, such as for data migration?
  - list here
- [ ] database updates which should be run automatically
  - list here

#### Test:
- [ ] STRR API - vX.X.X done by XX on Nov X
- [ ] STRR APPLICATION AUTO APPROVAL - vX.X.X done by XX on Nov X
- [ ] STRR PAY - vX.X.X done by XX on Nov X
- [ ] STRR PLATFORM UI - vX.X.X done by XX on Nov X
- [ ] STRR STRATA UI - vX.X.X done by XX on Nov X
- [ ] STRR Examiner - vX.X.X done by XX on Nov X
- [ ] STRR Host PM - vX.X.X done by XX on Nov X
.
- [ ] config map changes
  - list here
- [ ] are there any dependencies, such as an auth/pay deployment or keycloak changes?
  - list here
- [ ] are there any one-time scripts to be run, such as for data migration?
  - list here
- [ ] database updates which should be run automatically
  - list here

#### Prod:
- [ ] STRR API - vX.X.X done by XX on Nov X
- [ ] STRR APPLICATION AUTO APPROVAL - vX.X.X done by XX on Nov X
- [ ] STRR PAY - vX.X.X done by XX on Nov X
- [ ] STRR PLATFORM UI - vX.X.X done by XX on Nov X
- [ ] STRR STRATA UI - vX.X.X done by XX on Nov X
- [ ] STRR Examiner - vX.X.X done by XX on Nov X
- [ ] STRR Host PM - vX.X.X done by XX on Nov X
.
- [ ] config map changes
  - list here
- [ ] are there any dependencies, such as an auth/pay deployment or keycloak changes?
  - list here
- [ ] are there any one-time scripts to be run, such as for data migration?
  - list here
- [ ] database updates which should be run automatically
  - list here
-
- [ ] Notify the team via the #general channel in STRR channel

### Smoke Test Script
- [ ] load Filings UI
- [ ] load Edit UI, eg, start change or alteration filing
- [ ] load Create UI, eg, start an IA or registration or voluntary dissolution
- [ ] watch [Sentry](https://sentry.io/organizations/registries/issues/?project=1533020) logs for 60 minutes
- [ ] watch [Kibana](https://kibana.pathfinder.gov.bc.ca/) logs for 60 minutes
