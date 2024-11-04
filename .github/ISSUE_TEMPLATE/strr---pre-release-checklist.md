---
name: STRR - Pre-Release Checklist
about: The technical steps required to support a push to Prod for the Short Term Rental
  Registry
title: 'STRR Release '
labels: STR
assignees: ''

---

Starting with the following content borrowed from the Entities team:


Prior to moving into production, the following steps should be completed or confirmed:
- [ ] Add release # to this ticket
- [ ] Update version numbers in the code being released and list them here:
  - Business Create UI vX.X.X
  - Business Edit UI vX.X.X
  - Business Filings UI vX.X.X
  - Entity Filer vX.X.X
  - Legal API vX.X.X
  - Entity-emailer vX.X.X
  - Entity-bn vX.X.X
- [ ] Ensure deployment steps are filled in - remove/replace placeholders
- [ ] Create a draft release in GitHub and confirm the correct commits are present
 1. - [ ] Confirm the correct commits are present
 2. - [ ] Select appropriate target is selected which represents the build in Test - either a commit from recent commits or a reference to a branch
 3. - [ ] Autogenerate release notes using last release tag as a point of reference. Update change list manually if required.
- [ ] Dev to ensure that the commit list is represented on the release report
- [ ] QA to schedule the release with staff/clients (daytime's best or when staff are available for rollback)
- [ ] All dev/test pipeline test suites green
- [ ] Dev/QA chat to plan prod verification testing (unless already automated)
- [ ] Post message that projects are being deployed to Prod in [#registries-entities](https://chat.developer.gov.bc.ca/channel/registries-entities)
- [ ] Release the code to production and complete smoke test (STEPS BELOW)
- [ ] Post message that projects have been deployed to Prod in [#registries-entities](https://chat.developer.gov.bc.ca/channel/registries-entities) and [#entities-ops](https://chat.developer.gov.bc.ca/channel/registries-ops)
- [ ] Finalise/publish the release in GitHub, tagging it
- [ ] Merge release branch back to master (if applicable)
- [ ] Change openshift builds/pipelines back to master (if applicable)

### Deployment Steps

#### Dev:
- [ ] Create UI - vX.X.X done by CD script
- [ ] Edit UI - vX.X.X done by CD script
- [ ] Filings UI - vX.X.X done by CD script
- [ ] Entity Filer - vX.X.X done by CD script
- [ ] Legal API - vX.X.X done by CD script
- [ ] Entity-emailer - vX.X.X done by CD script
- [ ] Entity-bn - vX.X.X done by CD script
.
- [ ] config map changes
  - list here
- [ ] are there any dependencies, such as an auth/pay deployment or keycloak changes?
  - list here
- [ ] are there any one-time scripts to be run, such as for data migration?
  - list here
- [ ] database updates which should be run automatically as part of GH CD via the legal-api pre-hook
  - list here

#### Test:
- [ ] Create UI - vX.X.X done by XX on Nov X
- [ ] Edit UI - vX.X.X done by XX on Nov X
- [ ] Filings UI - vX.X.X done by XX on Nov X
- [ ] Entity Filer - vX.X.X done by XX on Nov X
- [ ] Legal API - vX.X.X done by XX on Nov X
- [ ] Entity-emailer - vX.X.X done by XX on Nov X
- [ ] Entity-bn - vX.X.X done by XX on Nov X
.
- [ ] config map changes
  - list here
- [ ] are there any dependencies, such as an auth/pay deployment or keycloak changes?
  - list here
- [ ] are there any one-time scripts to be run, such as for data migration?
  - list here
- [ ] database updates which should be run automatically as part of GH CD via the legal-api pre-hook
  - list here

#### Prod:
- [ ] Create UI - vX.X.X done by XX on Nov X
- [ ] Edit UI - vX.X.X done by XX on Nov X
- [ ] Filings UI - vX.X.X done by XX on Nov X
- [ ] Entity Filer - vX.X.X done by XX on Nov X
- [ ] Legal API - vX.X.X done by XX on Nov X
- [ ] Entity-emailer - vX.X.X done by XX on Nov X
- [ ] Entity-bn - vX.X.X done by XX on Nov X
.
- [ ] config map changes
  - list here
- [ ] are there any dependencies, such as an auth/pay deployment or keycloak changes?
  - list here
- [ ] are there any one-time scripts to be run, such as for data migration?
  - list here
- [ ] database updates which should be run automatically as part of GH CD via the legal-api pre-hook
  - list here
-
- [ ] Notify the team via the #registries-ops channel

### Smoke Test Script
- [ ] load Filings UI
- [ ] load Edit UI, eg, start change or alteration filing
- [ ] load Create UI, eg, start an IA or registration or voluntary dissolution
- [ ] watch [Sentry](https://sentry.io/organizations/registries/issues/?project=1533020) logs for 60 minutes
- [ ] watch [Kibana](https://kibana.pathfinder.gov.bc.ca/) logs for 60 minutes
