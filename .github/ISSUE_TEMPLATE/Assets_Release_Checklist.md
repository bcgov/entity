---
Name: Assets Release Ticket
About: A Template for Assets Release Ticket
Title: 'Assets: Sprint xx.x.x Release'
Labels: ''
Assignees: ''

---

**Ticket Naming Convention:** Example: Assets: Sprint 14.1.1 Release (1st release in Sprint14.1)

**Prior to moving into production, the following steps should be completed or confirmed:**
- [ ] Add release # to this ticket
- [ ] Update version numbers in the code being released and list them here:
- [ ] Ensure deployment steps are filled in - remove/replace placeholders
- [ ] Create a draft release in GitHub and confirm the correct commits are present
- [ ] All dev/test pipeline test suites green
- [ ] Dev/QA chat to plan prod verification testing (unless already automated)
- [ ] Release the code to production and complete smoke test (STEPS BELOW)
- [ ] Finalize/publish the release in GitHub, tagging it

### Deployment Steps

#### Dev: 
- [ ] PPR UI - version: "x.x.x" OR No change
- [ ] PPR API - version: "x.x.x" OR No change
- [ ] MHR API - version: "x.x.x" OR No change
- [ ] BC Registries Dashboard - version: "x.x.x" OR No change

#### Test:
- [ ] PPR UI - version: "x.x.x" OR No change
- [ ] PPR API - version: "x.x.x" OR No change
- [ ] MHR API - version: "x.x.x" OR No change
- [ ] BC Registries Dashboard - version: "x.x.x" OR No change
- [ ] Are there any dependencies, such as an auth/pay deployment or Keycloak changes?
    - [ ] Yes
    - [ ] No

#### Prod:
- [ ] PPR UI - version: "x.x.x" OR No change
- [ ] PPR API - version: "x.x.x" OR No change
- [ ] MHR API - version: "x.x.x" OR No change
- [ ] BC Registries Dashboard - version: "x.x.x" OR No change


### Post Deployment:


### Smoke Test Script
- [ ] Smoke Test Prod UI
- [ ] Monitor API logs

----
