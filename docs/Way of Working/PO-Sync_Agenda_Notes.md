# PO-Sync. 
**Topics for PO-Sync. to discuss between PO´s**
Agenda and description re PO-Sync see here in Meetings overview:
https://citz.sp.gov.bc.ca/sites/SBC/REG/Projects/MVSM/_layouts/15/DocIdRedir.aspx?ID=S52QENDTEJAE-1724982671-2193 
* if we discuss content, let´s open the roadmap or Epic to discuss the item

----
Feb, 13, 2020
----
1. Refine ideas for "API Gateway": 
https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/1088
@Jyoti: invite Thor to that session (see ticket)  

----
Feb, 6, 2020
----
1. Update on Roadmap in ZenHub
2. Update on Epics across team in ZenHub
3. Any Shift in priorities for the team?
4. Any new dependency identifies across teams?
5. Update on Action items?

----
Jan, 30, 2020
----
1.  Follow up on Action item from last 2 week
    - BN Messaging - Loren to follow up with Carol
    - Loren to check with Carol and reflect to the team what does it mean that Relationship team is responsible for overall UI
        - This will be followed up in next sync with Carol(Feb 10th)
2.  Entities dependency on Lorna team to understand what we are getting from NRO, what kind of validation has been done and passed to Entities and what happens when NR status changes mid-flight, how it needs to be handled.
    - Action tasks has been identified for the team.
    - Working with an assumption that users are logged in to do the incorporation.
        - Work flow diagram for Name request flow - BA's can take that responsibilityt. 
        - Jyoti to check with Sumesh if he has any workflow.
3.  Staff dashboard to manage their work - All the three teams are involved but its not decided who will do it
    - Design/research action item on Jeremy. This is currenty the discovery phase. This is on back radar for now.
    - Jyoti will confirm with Scott
    - Jyoti to check with Kaine if this is going to be in Service Now.
4.  Process for identifying dependencies across teams
  
  ## Action Item:
  - Jyoti to create a dependency template in ZenHub
  - Can we have a informal meet-up at the end of the month? Social meet up 
  
  ## Decisions made:
  - PO's agreed in this meeting to use the Dependency process for this Program Iteration (i.e. nex three Sprints).
----
Jan, 23, 2020
----
1. Discuss abut Business Contact Info - what is the source of truth? Does this info comes from Relationship dashboard and we consume it? or Should we get the information and publish it to Relationship? or Both?
    - Jeremy and Scott agreed that Entities is the currently gettting this information during incorporation and Relationship will ingest it. Relation is currently the record holder. 
    - R will create a task to take this information into their system. This would be a research task
2. Entities team needs to know where/how would the client start the incorporation process(timing in particular? Dependency on Relationship team. Some of the related things are: 
    - What happens when payment is succeful where does the user lands?
    - What happends when payment is unsuccesful? Does user gets Resume or cancel option on the Accounts dashboard
    - How does client resume the flow? from which dashboard?
        - Jeremy has showed the design
        - Scott needs to provide the User Story for Jeremy. User stories would be better. Linda, Scott and Jyoti will provide the requirement in form of user stories
        - Liv will follow up with Scott and Jeremy on the common login
3. BN Messaging decission
    - Carol Direction is to have BN messaging have no duplication of work across teams
    - Calrify with Carol what this is about? - Loren to follow up with Carol(Next week)
4. Impediments regarding EDB - Decisions needed how to best resolve that? Its impacting everyone.
    - I think we briefly touched upon this in PI planning meeting. There is some dollars approved to have EDB folks working on this to stabilize. But we can quickly disucss that.
    - Five days of approval for EDB guys to stabilize the EDB solution. Tendayi's team(Bob/walter) needs to be involved. 
    - SHould we have someone from back office? - David Roberts
    - Thor is the point of contact. 
    - Patrick would be available from R team
    - Richard from K's team
    - Pay this company 30K/year - 24/7 availability.
5. Using Roadmap in ZenHub
    - End of February is the target to have all the teams aligned
    - All the three PO's agree to use this Road map feature
    - Can Asset team use the same repoisotory?
        - W and J to work with Bryce
6. Using Release tag in ZenHub
    - All the three PO's agree to use the Release Tagging feature
    - What kind of naming convention are we going to use for Release across 3 teams? - Jyoti to put some options
7. What does it mean that Relationship team is responsible for UI?
        - Loren to check with Carol and reflect to the team what does it mean for the other team.
8. Follow-up on topics & action items below (last PO-Sync)

## Decisions made:
- Jeremy showed the Navigation structure design to all PO's and there was no concern raised in taking that forward.
https://preview.uxpin.com/ec5725a91e5ed646c9217e6295f9b87b3b6a7bfc#/pages/121718326/simulate/sitemap
- All the three PO's agree to use the Release Tagging feature for any release they are deploying to Production/Market
- All the three PO's agree to use the Road map feature in ZenHub to layout their Epics as per the discussion in the PI planning meeting. The Roadmap needs to be maintained/updated in ZenHub going forward. Any changes to priorities needs to be reflected in ZenHub RoadMap

----
Jan, 16, 2020
----

1. Decisions needed
- IE 11: Do we want to agree to not support IE 11 overall? It means, users will not be able to open a page with IE11. 
    Reason: It breaks stuff
    - Check with OCIO if needed. IAN Bot to check and provide recommendations to PO. 
        - Tendayi reached out ( 16th Jan). Ian Bot is following up with Robert Walker on this
    - Not Priority. It must fails gracefully
    - Talk to Kaine about the priority of defects
    - Stats of bugs - How many? Priority?
    - Can we recommend on the page that latest version of Chrome is supported?
    
- Issues assigned to "Emmanuel" in ZenHub
    - No problem with Kaine's team.
    -  No Action required from Loren team
    - Most of the things are already handled

- Premium Account - How its impacting Asset's team?
    - Tendayi and Loren team discussed this together on 16th Jan. Links for technaical docs were provided to Tendayi's team.
    - BRP will help to solidify this
    - SM to work out a proess to have the dependencies defined in ZenHub
    - How do we document the interfaces/API ? - Nitin working with Jyoti and see the process flow.
        - This can be shown in Sprint Review

- Not eligible for BCSC - How its impacting Asset's team?
    - This is required by May 2020(Production vs Market). Production vs MArket not clear? 
        - Tendayi to check with Carol.
    - This is still relevant for Lorens team to deliver it by May 2020.
        - W to check with Loren if there is any ticket/issue created?
    - Loren might have dependency on IDIM to deliver it by May 2020.
        - Loren to discuss this with Carol(Is this a throw away work if IDIM comes it with own solution)?
        - Loren to book a check in meeting with IDIM
        - Circulate the solution architecture with THor/Sumesh
        - What is the Epic for this item?
