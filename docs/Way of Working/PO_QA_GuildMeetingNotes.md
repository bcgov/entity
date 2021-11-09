# Standing Agenda
1. Discuss on the test automation
2. Discuss on the quality metrics
3. Discuss on the outstanding open bugs
4. Ideas to improve the quality of the applications / Test strategy

---

# 9 November 2021
**Meeting Minutes**
1. Riyaz - Name request automation completed in entities - Approval from PO, BA is required.  Around 60-70% of automation work is completed
2. Divya - Covered happy path scenarios and validations scenarions.  Renewal scenarios need to be done.  Around 50 - 60% of automation work is completed.
3. Rai - Automation of FAS functionality is being done.  Happy path is completed and Need to add assertions to the test cases
4. Merging of the automation code - Will continue further in the individual branches and later will merge to a single branch once the github actions are finalized

**Action Items**
@SateeshFW - Share the URL for Entities and Assets to search for 4000 series open bug tickets.  @Linda and @melissa need to review them and close them, if required.
@SateeshFW - Check with Jyoti on the automation for exsiting functionality in relationship like account creation and other scenarios which have dependency on Entities / Assets
@All POs need to discuss and take a decision on how often the github actions need to be run. Should be run on prod or dev/test based on the decision from PO

# 12 October 2021
**Meeting Minutes**
1. Riyaz will complete the names request automation next week and this is an ongoing task.
2. Divya completed the Github actions and tested it in her branch.
3. Jason shared the bugs reports dated 12Oct for all the teams for p1, p2, p3. The report was retrieved manually.
4. Jinghua suggested for 20% of Dev capacity to be utilized for bugs / techdebt in each sprint. Maybe this can be added in the reports per sprint and share the report data with James. The relationship team considers bugs/techdept based on the sprint goals. Either tech debt or documentation is considered in the sprint planning in the relationship team.
5. QA can take help from devs for automation if there are not many bugs to be fixed.

**Action Items**
1. @ All POs - All the old bugs which are below the 4000 series should be closed
2. @SateeshFW - Invite Melissa from the next meeting onwards and Kaine as optional
3. @jdyck-fw - Get the RFC ticket (8462) in the next sprint.
4. @SateeshFW - Create a zenhub ticket for the meeting minutes
5. @riyazuddinsyed - Talk to Thor and Patrick for implementing the GitHub actions architecture considered three teams.
---

# 8th September 2021
**Meeting Minutes**
1. Discussed on the bug report shared by Jason via email.
2. The defect triage, the bugs which are not tagged were tagged with P1 or P2 or P3.
3. We need to review the last 3 months or 6 months or 1 year data for bugs and take action on them.
4. Test Automation
a. Key cloak is being used in Assets automation scripts.
b. GitHub actions need to be implemented to trigger the Cypress scripts.
c. For GitHub actions, different folder structure is required to implement the actions properly.
d. Currently the Entities automation scripts are broken because of the business registry dashboard functionality
5. Sumesh tested the Name request functionality (8266) in post man and the UI testing need to be done by Riyaz. The relationship team will be doing the next release on Monday (13th Sept).
6. Load testing is low priority.
7. Name request automation scripts is top priority.
8. The automation for Manage business dashboard need to be completed and if required Rai from Relationships team can help Riyaz. The expectation is to develop reusable scripts across team.

**Action items**
1. @Dyck, Jason CITZ:EX – Go thru the 101 bugs which are not labelled and tag them to the respective team.
2. @ All SMs, move all the bugs in ‘Done’ column to the ‘Closed’ column for their respective team.
3. @Boggarapu, Sateesh EDUC:EX – Check with James if we can retrieve the last 6 months or 3 months Bug data
4. @Hemin Acharya – Work with Divya to implement Keycloak in automation
5. @Chandupatla, Divya CITZ:EX – Work on Github actions to trigger the automation scripts.
6. @Riyazzudin, Syed CITZ:EX – To focus on the Name request scripts which is top priority
---

# 3rd August 2021

**Minutes of Meeting**

1. Cypress is being used for Automation of the testing in all the teams
2. Currently Night watch is being maintained to make it stable and work well for the existing test scenarios
3. Patrick and Riyaz have good knowledge on Cypress. Divya & Rai are learning and implementing it in their projects.
4. Cypress doesn’t allow cross platform integration, esp. with Keycloak, and it is challenge currently.
5. Cypress has limitation of only one browser, Chrome.
6. All the teams will be using same repo for Cypress scripts/project.
7. GitHub actions need to be implemented separately for individual teams.
8. Currently the QA Guild is not done however, the team meet / communicate between selves over call or chat and discuss on the required topics.
9. In Cypress, for customized reports we can take the required subscriptions which will cost around $200 / Year.
10. Currently there is no need to write the manual test cases in each team and this can be done, if required.
11. There is no documentation available on the QA process. All the Demo items should be in Test env.
a. The QA process followed is, Developer Check-in -> Staging (DEV Env) -> UX Assurance -> Ready for QA (DEV Env) -> QA in Progress (DEV Env) -> Done -> Prod Release -> Closed.
12. Test and Prod env should be same enough so that any Prod bug raised can be validated in TEST env.
13. In Assets and Entities team, the testing is done in Dev env. However, Relationships team does the testing in Test env.
14. Riyaz is pushing the code from Dev to Test and from Test to Prod envs. May be relationships team can follow the same i.e. QA pushing the builds from Dev to Test and from Test to Prod.

**Action Items**

1. Riyaz to work Jason (and Sateesh & Jinghua) to understand the Bugs (Ops / Prod / Internal / Sentry) raised and generate a metrics for reporting.
2. Sateesh to setup a monthly Guild meeting to discuss on the status of the metrics, tools and processes and any other topics.
3. Sateesh / Jyoti to discuss with the relationships team to follow the QA process which other teams are following.
a. Can testing to be done in Dev env?
b. Can QA push the builds between the envs (Dev to Test to Prod)?

---
