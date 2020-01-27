---
name: Pre-release checklist
about: Complete one of these for each release. Designed to catch small mistakes and increase repeat-ability of our process.

---

Prior to moving into production, the following steps should be completed or confirmed:
- [ ] Update version number in the code being released
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

Test:

Prod:

**Smoke Test Script**
- [ ] Log in
- [ ] Go to search
- [ ] Filter for last 30 days
- [ ] Go to ZZZ record (usually on Hold)
- [ ] edit name 1, click save
- [ ] edit address line 1 + comment, click save
- [ ] check NRO for changes
- [ ] reject name 1 with a conflict
- [ ] approve name 2 with quick approve
- [ ] wait 2 minutes, then check in NRO
- [ ] reload NR in namex
- [ ] reset NR
- [ ] undo all decisions
- [ ] change name 1 and address line 1 back to original values
- [ ] watch [Kibana](https://kibana.pathfinder.gov.bc.ca/) logs for 5 minutes
