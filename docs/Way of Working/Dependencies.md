## Dependencies Process

Topics covered -
- When a dependency can be identified
- Dependency template
- How to identify dependencies across team(make them visible)
- Communication for Dependencies across team

#### When a dependency can be identified
----
A dependency can be identified either via:
- PI planning process when an intra-team/external dependency identified
- or it can be identified on an adhoc basis

----

When a dependency is identified, it needs to be documented and made visible in ZenHub-
#### Dependency template
----
**Write the description in a user story format**
As a ..Team..,
  We Want <something> to be done by other ..team..
    So that ...
  
**Acceptance Criteria**
<
..

>
**Impact for the requesting ..team..**:

**Deadline** - This needs to be done by Sprint <#>

**Contact Person** 
In case, more information is required, please contact ..First Name, LAst Name.. from our ..Team...

----

----
#### How to identify dependencies across team(make them visible)
- When a dependency is identified, team with the help of Scrum Master should create a ticket(Story) in ZenHub.
- This story ticket should be linked to the Parent Epic of the respective team by using the "Blocked By" label in ZenHub
- This ticket initially might have high level details, but over period of time or near to deadline, this should have all the details needed for the other team to action upon
- Label this ticket with "Dependencies". This would help the PO's to pick this up in PO Sync
- Assign this ticket to BA of the <team> whom its dependent on
- If you are aware about the Epic of the other team where this dependency is going to be delivered, tag the Epic as well

----

----
#### Communication for Dependencies across team
- Once a ticket is created and has below information:
  - Assigned to BA
  - Have the label "Dependency"
  - Story is linked to the Epic
    - BA's can pick these tickets and start discussing in the BA guild meeting to clarify the requirements
    - If the ticket is technical in nature, this can be brought up in SoS as well so that we can RTE/SM's can cordinate the discussion
    - These tickets gets eventually discussed in PO Sync for prioritization and scheduling
    
----
