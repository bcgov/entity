# Smoke Tests

## Automated, browser-level smoke tests

### Goals

Starting now, the QA team will be creating a smoke test for each high-level business feature as it completes development. In terms of ZenHub, a high-level business feature translates to either a story or an epic. These positive smoke tests aim to prove that a feature is working as expected without delving into edge cases or challenging scenarios.
These smoke test snippets will later be enhanced and rolled into the broader automated browser regression suite. The smoke tests should be identified using tags that relate to the issue # in ZenHub so that they can be invoked in isolation from the rest of the regression suite.

### What should be covered in a smoke test

- If there's a screen flow, cover that
- If information gets retrieved/displayed, cover that
- If information gets saved, cover it's saving and retrieval
- If there are front-end or back-end validations, cover some of them (all if there are only a few, some if there are a lot and they are covered in integration tests)

### Sequence of work/Checklist

- Unit and integration tests related to the user story are passing in DEV
- All relevant services have been deployed to the e2e environment
- Any config changes have been relayed to QA and/or added to e2e
- The user story or epic or requirements document or mock-up contains clear and complete acceptance criteria
- The positive tests have been planned based on the acceptance criteria
- QA coding standards are well understood
- QA resource has pulled the latest version of the automated tests to their local and has started a well-named branch (follow this [guide](https://github.com/bcgov/entity/blob/master/docs/setup-forking-workflow.md) for full details)
- If required, establish a new page object, adding the required elements and methods
- If no new page object is required, then add the new elements to the relevant existing page objects
- Add the minimal set of positive tests to the larger regression suite under a tag (ZenHub ticket#) so that these tests can be run in isolation
- Run the regression suite from your  local machine using the new tag to ensure that your new steps are running as expected
- Review the recorded video for each browser, watching for rendering issues
- Run the entire regression suite from your local machine to ensure that nothing else broke.
- If everything passes, push up your changes in a PR, when merged, re-run in the pipeline

### QA Coding standards

As our automated test suite expands, a document will be created to establish the QA coding standards. This will allow each team member (and potentially devs) to commit tests without subsequent revisions. This short document should include standards for the following:

- Folder structure
- Naming conventions for files and function/variables
- Linting and spacing standards
- Selector best-practices
- Git branching/commit message/PR process
- Which repo will store the functional tests for each application
- Configuration needed for local development
- Configurations needed to run in the correct browser/platform in BrowserStack
