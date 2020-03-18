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

#### How to identify dependencies across teams (make them visible)
----
- When a dependency is identified, the team - with the help of Scrum Master - should create a ticket (label as Story) in ZenHub.
- This story should be linked to the Parent Epic of the respective team by using the "Blocked By" label in ZenHub
- This ticket initially might have high level details, but over period of time or near to deadline, this should have all the details needed for the other team to action upon.
- Label this ticket with "Dependency". This will help the PO's to pick this dependency up in a PO Sync. to discuss.
- Assign this ticket to the BA of the respective ..team.. whom its dependent on
- If you are aware about the Epic of the other team, where this dependency is going to be delivered, tag the Epic as well

----

#### Communication for Dependencies across team
----
- Once a ticket is created and has below information:
  - Assigned to BA
  - Have the label "Dependency"
  - Story is linked to the Epic (if you know which Epic it is) 
    - BA's can pick these tickets and start discussing in the BA guild meeting to clarify the requirements
    - If the ticket is technical in nature, this can be brought up in SoS as well so that we can RTE/SM's can cordinate the discussion
    - These tickets gets eventually discussed in PO Sync for prioritization and scheduling
    

----
ideas for future:
- open step is - that it doesn´t go to/ through the PO´s and their Sprint Planning?!
- it doesn't go through the BAs and goes directly to devs...under the table
- Other teams create a Dependency ticket with us, socialize with PO and then decide to do it in current sprint or not
