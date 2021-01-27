---
name: Definition of Done - Entities
about: Team owned document to define when a User Story is done


---

**DoD - for all User Stories**
- [ ] Add/ maintain selectors for unit tests and QA purposes
- [ ] Peer review has been completed
- [ ] Test coverage and acceptable by Product Owner (we need metrics on this)
- [ ] Product Owner accepts the work as being completed and closes the Story


**continue from here**
- [ ] Completed tasks have been verified in Dev Test Prod (currently mostly in dev)

- [ ] Test coverage and Test ID acceptable by Product Owner (we need metrics on this)
- [ ] All tests passed (Jest, Pytest, Postman, End-to-End, etc.)
- [ ] Accessibility reviewed and acceptable [checklist] (https://github.com/bcgov/entity/docs/coding-standards/accessibility.md)
- [ ] Production burn in completed (48 hrs) (good after two days) (revisit if this fits)
- [ ] Schedule a Release w. Change Management
- [ ] Open an issue to remove feature flags created

release ticket needs to be updated
configs in openshift need to be updated
feature flags are managed
load testing, if appropriate 
security testing and other testing?



what we did take out from above:
- [ ] Check Requirements against completed stories
- [ ] Add PR numbers
- [ ] Developer to list Config changes/ Update documents and designs --- what does that mean?
- [ ] Design/ Solution accepted by Product Owner - what do you mean by that? 
- [ ] Must include automated unit tests 
- [ ] Must include integration tests that run in a pipeline
- [ ] Change Management activities done?
