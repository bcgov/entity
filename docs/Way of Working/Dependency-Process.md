## Dependency Process

**Topics covered**
- When a dependency can be identified
- Dependency template
- How to identify dependencies across teams (make them visible)
- Communication for Dependencies across team

----
#### When a dependency can be identified
----
A dependency can be identified either via:
- PI Planning (BRP): When an intra-team/ external dependency identified
- or it can be identified on an ad-hoc basis

----

#### How to identify dependencies across teams (make them visible)
----
- When a dependency is identified, the team - with the help of Scrum Master - should create a ticket (label as Story) in ZenHub.
- This story should be linked to the Parent Epic of the respective team by using the "Blocked By" label in ZenHub
- Provide details using the Dependency template. 
- Label this ticket with "Dependency". 
- The PO's need to pick this dependency up in a PO Sync. to discuss.
- Assign this ticket to the BA of the respective ..team.. whom its dependent on
- If you are aware about the Epic of the other team, where this dependency is going to be delivered, tag the Epic as well
- Make sure the PO is informed/involved and decides if this item will be worked on.
- The PO brings this item into refinement or Planning session.

----

#### Communication for Dependencies across team
----
- Once a ticket is created using the dependency template and and following the steps:
  - Assigned to BA
  - Have the label "Dependency"
  - Story is linked to the Epic (if you know which Epic it is) 
  then
    - BA's pick these tickets and discuss in the BA guild to clarify the requirements 
    - BA of the respective team brings this item into daily standup meeting and assign the right person
    - The team estimates the work, agrees on timelines and update in the ticket
    - The BA comments and updates the other BA on timeline
    - If the ticket is technical in nature, this can be brought up in SoS as well so that we can RTE/SM's can cordinate the discussion
    - These tickets gets eventually discussed in PO Sync for prioritization and scheduling
    
----

#### Dependency template
----
When a dependency is identified, it needs to be documented and made visible in ZenHub

**Write the description in a user story format**

As a ..Team..,
  we Want <something> to be done by other ..team..
    so that ...
  
**Acceptance Criteria**
GIVEN ... 
WHEN ...
THEN ... 

**Impact for the requesting ..team..**:

**Deadline** - This item needs to be delivered/ done by Sprint <#>

**Contact Person** 
In case, more information is required, please contact ..First Name, Last Name.. from our ..Team...

**Template link**
- https://github.com/bcgov/entity/blob/master/.github/ISSUE_TEMPLATE/Dependency.md
- This is live in ZenHub so can be used by anyone
----

ideas for future:
- The SM checks in with team about this process
