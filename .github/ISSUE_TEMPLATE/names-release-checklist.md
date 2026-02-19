---
name: Names Release Checklist
about: Name Release Checklist
title: ''
labels: ''
assignees: ''

---

- [ ] create draft github release with auto generated notes
  -  [ ] Name Request UI vX.X.X
  -  [ ] Name Examination UI vX.X.X
  -  [ ] NAMEX API vX.X.X
- [ ] create zenhub release tag / add auto generated notes from draft github release
  -  [ ] Name Request UI vX.X.X
  -  [ ] Name Examination UI vX.X.X
  -  [ ] NAMEX API vX.X.X
- [ ] tag this ticket with the zenhub release
- [ ] services to be deployed listed below: *list each service including any config changes or post deployment steps*
- [ ] Update version numbers in the code being released and list them here:
  -  [ ] Name Request UI vX.X.X
  -  [ ] Name Examination UI vX.X.X
  -  [ ] NAMEX API vX.X.X

- [ ] Dev to ensure that the commit list is represented on the release report
- [ ] QA to schedule the release with staff/clients (daytime's best or when staff are available for rollback)
- [ ] All dev/test pipeline test suites green
- [ ] Dev/QA chat to plan prod verification testing (unless already automated)
- [ ] Release the code to production and complete smoke test (STEPS BELOW)
- [ ] Post message that projects have been deployed to Prod in Teams Channels


- [ ] external dependencies listed below:
  - *fill this out* (i.e. None, legal-api, etc.)
- [ ] OCM requirements listed below
  - *fill this out* (i.e. None, ...)
- [ ] deployment to test
  - [ ] external dependencies resolved
  - [ ] configs updated, services deployed, post deployment complete
  - [ ] regression testing complete
- [ ] deployment to sandbox *(remove if not applicable)*
  - [ ] external dependencies resolved
  - [ ] configs updated, services deployed, post deployment complete
  - [ ] regression testing complete
  - [ ] mandatory wait time complete
- [ ] deployment to prod
  - post deployment steps:
      - [ ] upgrade db
      - [ ] run ___ script/job
  - [ ] OCM steps completed
  - [ ] external dependencies resolved
  - [ ] configs updated, services deployed, post deployment complete
  - [ ] regression testing complete
- [ ] publish github release containing auto generated notes
