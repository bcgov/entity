---
name: Pre-release checklist
about: Complete one of these for each release. Designed to catch small mistakes and
  increase repeat-ability of our process.
title: ''
labels: ''
assignees: ''

---

Prior to moving into production, the following steps should be completed or confirmed:
- [ ] Update version number in the code being released
- [ ] Ensure deployment steps are filled in - remove/replace placeholders
- [ ] Create a draft release in GitHub and confirm the correct commits are present
- [ ] Add version # and release # to this ticket
- [ ] Dev to send commit list to QA (or otherwise publish changelog)
- [ ] QA to schedule the release with staff/clients (daytime's best or when staff are available for rollback)
- [ ] All dev/test pipeline test suites green
- [ ] Dev/QA chat to plan prod verification testing (unless already automated)
- [ ] Release the code to production and complete smoke test (STEPS BELOW)
- [ ] Finalise/publish the release in GitHub, tagging it
- [ ] Merge release branch back to master (if applicable)
- [ ] Change openshift builds/pipelines back to master (if applicable)

**Deployment Steps**

Dev:
- [ ] config map changes
  - list here, copy to test and prod
- [ ] are there any dependencies, such as an auth/pay deployment or keycloak changes?
  - list here, copy to test and prod
- [ ] are there any one-time scripts to be run, such as for data migration? 
  - list here, copy to test and prod

Test:

Prod:

**Smoke Test Script**
- [ ] 
- [ ] 
- [ ] 
- [ ] watch [Kibana](https://kibana.pathfinder.gov.bc.ca/) logs for 5 minutes
