---
name: Pre-release checklist - BTR
about: Pre release checklist in use by BTR team
title: BTR Release
labels: BTR
assignees: ''

---

- [ ] create draft github release with auto generated notes
- [ ] create zenhub release tag / add auto generated notes from draft github release
- [ ] tag this ticket with the zenhub release
- [ ] services to be deployed listed below: *list each service including any config changes or post deployment steps*
  - i.e. btr-api
    - config changes:
      - add NEW_VAR
      - change ALTER_VAR
    - post deplyment steps:
      - upgrade db
      - run ___ script/job
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
  - [ ] OCM steps completed
  - [ ] external dependencies resolved
  - [ ] configs updated, services deployed, post deployment complete
  - [ ] regression testing complete
- [ ] publish github release containing auto generated notes
