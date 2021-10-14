# Release Process for Entity Team

- Note: This release notes are currently used by Entity team only. 

- We work with Relationships team to document/ update their release process. Here an example: 
https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/2485 

## Prerequisites

- stakeholders (PO(s), Release Manager, Team) have decided when to have a release
- Zenhub tickets are tagged to the release

## Work Items

1. the release ticket (to track what needs to be done, status, and who is doing what)
2. the release report (to see what tickets are in the release and to describe the release for OCM)
3. Github release (to manage code / tags)


### Release Ticket Template

Title: "Insert Feature Here" Release

Body:
```
**Affected Components**
- Filings UI
- Legal API
- Etc.

**Prior to moving into production, the following steps should be completed or confirmed:**
- Update version number in the code being released
  - [ ] Filings UI vX.X.X
  - [ ] Legal API vX.X.X
  - [ ] Etc.
- [ ] Update deployment steps (this page) - remove/replace placeholders
- [ ] Create a draft release in GitHub and confirm the correct commits are present
  - [ ] Filings UI v.X.X.X
  - [ ] Legal API vX.X.X
  - [ ] Etc.
- [ ] Add version # and release # to this ticket
- [ ] Ensure Release Report exists (add link here)
- [ ] PO/Dev/QA/SRE to schedule the release with staff/clients
- [ ] All dev/test pipeline test suites green
- [ ] Dev/QA to plan deployment to Test
- [ ] Dev/QA to plan deployment to Prod and smoke testiing (update steps below)
- [ ] After deployment to Prod, finalise/publish the release in GitHub, tagging it with the version number
- [ ] After deployment to Prod, finalise, merge release/hotfix branch back to main (if applicable)
- [ ] After deployment to Prod, change openshift builds/pipelines back to main (if applicable)
- [ ] After deployment to Prod, send a message to PO/OCM in RocketChat
- [ ] PO will send Trish a message if a release was successfully implemented: Trish.Reimer@gov.bc.ca and Karla.Maria.Ramirez@gov.bc.ca

**Deployment Steps**

Dev:
- [] config map (1Password), environment or LaunchDarkly changes
  - add required changes here
- [ ] dependencies
  - add dependencies here, such as an auth/pay deployment or keycloak changes
- [ ] one-time scripts
  - add scripts to be run, such as for data migration

Test:
- [] config map (1Password), environment or LaunchDarkly changes
  - add required changes here
- [ ] dependencies
  - add dependencies here, such as an auth/pay deployment or keycloak changes
- [ ] one-time scripts
  - add scripts to be run, such as for data migration
- [ ] Deploy Filings UI to Test
- [ ] Deploy Legal API to Test
- [ ] Add other deployments here

Prod:
- [] config map (1Password), environment or LaunchDarkly changes
  - add required changes here
- [ ] dependencies
  - add dependencies here, such as an auth/pay deployment or keycloak changes
- [ ] one-time scripts
  - add scripts to be run, such as for data migration
- [ ] Deploy Filings UI to Prod
- [ ] Deploy Legal API to Prod
- [ ] Add other deployments here

**Smoke Test Steps**
- [ ] Verify version in deployed UIs
- [ ] Add some key tests here
- [ ] Watch Sentry logs for 60 minutes
- [ ] Watch Kibana logs for 60 minutes
```
