---
name: Pre-release checklist
about: Complete one of these for each release. Designed to catch small mistakes and
  increase repeat-ability of our process.
title: ''
labels: ''
assignees: ''

---

Prior to moving into production, the following steps should be completed or confirmed:
- [ ] Add release # to this ticket
- [ ] Update version numbers in the code being released and list them here:
- [ ] Ensure deployment steps are filled in - remove/replace placeholders
- [ ] Create a draft release in GitHub
 - [ ] Confirm the correct commits are present
 - [ ] Select appropriate target is selected which represents the build in Test - either a commit from recent commits or a reference to a branch
 - [ ] Autogenerate release notes using last release tag as a point of reference. Update change list manually if required.
- [ ] Dev to ensure that the commit list is represented on the release report
- [ ] QA to schedule the release with staff/clients (daytime's best or when staff are available for rollback)
- [ ] All dev/test pipeline test suites green
- [ ] Dev/QA chat to plan prod verification testing (unless already automated)
- [ ] Release the code to production and complete smoke test (STEPS BELOW)
- [ ] Finalise/publish the release in GitHub, tagging it
- [ ] Merge release branch back to master (if applicable)
- [ ] Change openshift builds/pipelines back to master (if applicable)

### Deployment Steps

#### Dev:
- [ ] Filings UI - 
- [ ] Create UI - 
- [ ] Edit UI - 
- [ ] NameX API - 
- [ ] Legal API - 
- [ ] Entity Filer - 
- [ ] PPR UI - 
- [ ] PPR API - 
- [ ] MHR API - 
- [ ] BC Registries Dashboard - 
.
- [ ] config map changes
  - list here, copy to test and prod
- [ ] are there any dependencies, such as an auth/pay deployment or keycloak changes?
  - list here, copy to test and prod
- [ ] are there any one-time scripts to be run, such as for data migration? 
  - list here, copy to test and prod
- [ ] Database updates which should be run automatically as part of GH CD via the legal-api pre-hook
  - list here, copy to test and prod

#### Test:
- [ ] Filings UI - 
- [ ] Create UI - 
- [ ] Edit UI - 
- [ ] NameX API - 
- [ ] Legal API - 
- [ ] Entity Filer - 
- [ ] PPR UI - 
- [ ] PPR API - 
- [ ] MHR API - 
- [ ] BC Registries Dashboard - 
.
- are there any dependencies, such as an auth/pay deployment or Keycloak changes?


#### Prod:
- [ ] Filings UI - 
- [ ] Create UI - 
- [ ] Edit UI - 
- [ ] NameX API - 
- [ ] Legal API - 
- [ ] Entity Filer - 
- [ ] PPR UI - 
- [ ] PPR API - 
- [ ] MHR API - 
- [ ] BC Registries Dashboard - 
.
- are there any dependencies, such as an auth/pay deployment or Keycloak changes?

### Post Deployment:


### Smoke Test Script
- [ ] try a filing from Filings UI (do not save it)
- [ ] try a correction from Edit UI (do not save it)
- [ ] try an alteration from Edit UI (do not save it)
- [ ] try an incorporation application from Create UI (do not save it)
- [ ] try a voluntary dissolution from Create UI (do not save it)
- [ ] watch [Sentry](https://sentry.io/organizations/registries/issues/?project=1533020) logs for 60 minutes
- [ ] watch [Kibana](https://kibana.pathfinder.gov.bc.ca/) logs for 60 minutes
