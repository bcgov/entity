---
name: Definition of Done - Entities
about: Team owned document to define when a User Story is done


---

**DoD - for all User Stories**
- [ ] Add/ maintain selectors for unit tests and QA purposes

- [ ] Peer review has been completed (all tests passed)
- [ ] Completed tasks have been verified in Dev & Test

- [ ] Open an issue to remove feature flags created

- [ ] Test coverage acceptable by Product Owner (functional & load testing)
- [ ] Product Owner accepts the work as being completed, ensures it's tagged to a release and closes the Story (move it from 'Done' to 'Closed')



**continue from here**


what we did take out from above:
- [ ] Check Requirements against completed stories
- [ ] Add PR numbers
- [ ] Developer to list Config changes/ Update documents and designs --- what does that mean?
- [ ] Design/ Solution accepted by Product Owner - what do you mean by that? 
- [ ] Must include automated unit tests 
- [ ] Must include integration tests that run in a pipeline
- [ ] Change Management activities done?
- [ ] All tests passed (Jest, Pytest, Postman, End-to-End, etc.)
- [ ] Accessibility reviewed and acceptable [checklist] (https://github.com/bcgov/entity/docs/coding-standards/accessibility.md) (not at the story level)
- [ ] Production burn in completed (48 hrs) (good after two days) (revisit if this fits)
configs in openshift need to be updated
feature flags are managed




Follow up:
- [ ] Test metrics for PO - what is our coverage that we can report?
