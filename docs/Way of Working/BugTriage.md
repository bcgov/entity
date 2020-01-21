# Bug Triage BC Registries 

## Steps internal in team
1. QA or dev team member identifies a bug
2. QA or dev team member creates issue by using "Bug Templpate", and label it as "bug" and mark "New Issues" in the ZenHub Pipeline
* link the bug to a User Story
3. Based on the Sprint Goal and the severity of the bug, the developer decides if this bug should be fixed immediatetly
   - If yes, inform (in-person or RocketChat) the PO about the amount of effort to fix the bug, and the impact on the committed work
   * Decision: High Priority = high severity + high criticality (low, medium or high) is based on 
   * Decision Criteria: User Impact, Volume of users, Data impact  
   * Priority 1: In order to complete the story 
   * All others are not labeled with "Priority"; they are placed in column "Bugs" for future prioritization
4. "Bugs" column: PO reviews with team members and order the bugs to the Sprint Goals accordingly 
* Bug Triage Meeting needed: PO, QA and eventually one dev team member - bi-weekly for half hour
* Preparation for this Bug Triage Meeting: QA check if there is a duplicate of this issue (remove duplicates) and confirms if all bugs are reproducable (some bugs could be fixed already) 

----
**Usability Gaps or missed requirements**
* Based on the Bug Triage Meeting the PO has to decide where this work fits into? - assign to a BA?
----


## Steps external by a user/ client
1. A user identifies a bug (in UAT or PROD)


----
## Improvements & Ideas
1. We need a way to proceed on new high-priority (e.g. blocking) bugs when PO is not available
2. Clear definition of priority levels (Prio 1, 2, 3) 
3. Treshold for Releases (e.g. do we move bugs into next Sprint?!) 

----
Last update: 2020-01-21: W + John + S
