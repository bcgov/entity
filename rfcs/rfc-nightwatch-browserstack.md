- Start Date: 2019-09-05
- Target Major Version: N/A
- Reference Issues: #1277
- Entity Issue:
- Implementation PR:

# Summary

A proposal of which end-to-end browser testing framework should be used by all teams (Entities, Relationships, Assets)

# Motivation

Initially, [Cypress](https://www.cypress.io) was chosen as the E2E framework. This new tool had many benefits, but ultimately failed to run across all sites in the pipeline; PayBC could not be rendered due to mixed content and uncaught JS exceptions.

In order to establish a cross-team QA standard, we need an E2E framework that meets the following criteria:

- Able to test against multiple browsers (Chrome, FireFox, Safari, IE11 and Edge)
- Reliable runs in the OpenShift pipeline
- Able to handle XHR calls (sending and intercepting)
- Language should match projects (JavaScript or Python)
- Must handle redirections related to SSO logins (IDIR, KeyCloak, Services Card)
- Must render pages with JS exceptions
- Must render pages with mixed content warnings

# Detailed design

The [Entity](https://github.com/bcgov/entity) repo contains an e2e folder with an example NightWatch project. This project contains all of the configurations needed to integrate with BrowserStack. The tests folder includes a set of challenging tests that aim to prove that NightWatch + BrowserStack meet the criteria mentioned above. The tests have been run successfully in a pipeline in the BCROS-OPS namespace (d7eovc-tools). The results are visible in the BrowserStack Automate dashboard. Out opensource licence allows up to 5 users to use this dashboard. So far 2 of the 5 spots are taken.

# Drawbacks

Other automation frameworks may be easier to use, more reliable, et c. but we cannot spare more time to triage them all. The solution proposed within the CSI lab (BDDStack) has reliability issues. The main drawbacks of this proposal are:

- Reliance on a third-party add-on to provide XHR features. [nightwatch-xhr](https://www.npmjs.com/package/nightwatch-xhr)
- NightWatch is not in active development when compared to earlier in its life.
- No support model
- Weaker documentation vs Cypress
- Some buggy features

# Alternatives

- Cypress.io
- [BDDStack](https://github.com/BCDevOps/BDDStack)

# Adoption strategy

All teams must draft their e2e scripts using this proposed set of tools. Pipeline runs will be completed in the shared namespace (d7eovc-tools) against images with the E2E tag.

# Unresolved questions

- What is the code review process for e2e scripts?
- Which resources from each team will be drafting the e2e scripts?
- How often should alternative frameworks/tools be considered for adoption?

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
