---
name: Pre-release checklist - BTR
about: Pre release checklist in use by BTR team
title: BTR Release
labels: BTR
assignees: ''

---

- [ ] create zenhub release tag
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
- [ ] deployment to test
  - [ ] configs updated, services deployed, post deployment complete
  - [ ] external dependencies resolved
  - [ ] regression testing complete
- [ ] deployment to sandbox *(remove if not applicable)*
  - [ ] configs updated, services deployed, post deployment complete
  - [ ] external dependencies resolved
  - [ ] regression testing complete
  - [ ] mandatory wait time complete
- [ ] deployment to prod
  - [ ] configs updated, services deployed, post deployment complete
  - [ ] external dependencies resolved
  - [ ] regression testing complete
- [ ] publish github release containing auto generated notes
