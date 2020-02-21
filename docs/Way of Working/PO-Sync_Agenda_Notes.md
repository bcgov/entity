# PO-Sync. 
**Topics for PO-Sync. to discuss between PO´s**
Agenda and description re PO-Sync see here in Meetings overview:
https://citz.sp.gov.bc.ca/sites/SBC/REG/Projects/MVSM/_layouts/15/DocIdRedir.aspx?ID=S52QENDTEJAE-1724982671-2193 
* if we discuss content, let´s open the roadmap or Epic to discuss the item - and possibly update 
----
Feb, 27, 2020
----
1. User Feedback loop process - trish to present it
----
Feb, 20, 2020
----
1. Refine ideas for "API Gateway": 
https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/1088
    - For Assets team(in order to engage with customer), if they want to use the API gateway by end of June they need to publish design by end of March
    - Sandra to invite Thor and Kaine to the next Assets Sprint planning meeting
    - Sandra to invite Thor and Kaine/Loren to Epic planning meeting.
    - First customer user gateway by end of June
1. Force the user to set-up an account when they create a user account (Loren, Trish) - this point come from the discussion and understanding of this story: https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/2689
    - Jyoti will setup a meeting with Sumesh, Severan and Andrew.
    - Bring the estimation topic for Andrew
    - Deadline for this is 28th April
1. URL Disucssion between team
    - bcregistry.gov.bc.ca is approved URL
    - Assets team can use the Co-OP url appended with PPR
    - New process to get the domain. Thor is working with Assets and Relationship team, Already approved by LAB
1. Assets team dependency on Relationship
    - Assets team to sync up with Thor to get this going.
1. On Accounts dashboard, clarify about the dependency on "File Now" option. Is there anything which is needed by entities team?
    - This has been decided. File now button will not be there in banner for now.

#### Decission:
    - All three PO's decided to go with relative estimation i.e. Using Fibonacci

##### Action Items:
    - Sandra to invite Thor and Kaine to the next Assets Sprint planning meeting
    - Sandra to invite Thor and Kaine/Loren to Epic planning meeting.
    - All three SM's to introduce the topic of estimation(Fibonacci) in their next planning meeting. Jyoti to bring this in SoS.
    - Jyoti to setup a meeting with Entities and relationship team on dependency ticket 2689

----
Feb, 13, 2020
----
1. Refine ideas for "API Gateway": 
https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/1088
@Jyoti: invite Thor to that session (see ticket)  - Invited
    - Thor didnt join this meeting, so we will bring it again as part of next PO sync

1. Staff dashboard to manage their work.
    - Shoud be prioritized in next PI planning meeting
    - Some of the things to consider while scoping as part of Next PI planning: Would Name request items be part of this dashboard?

1. Can correction framework be reused for authorizing an account to manage a business(Ex: If a client wants to get the ownership of their business back, they submit a request(using digital form) to Staff)? If yes, then its a dependency on Entities team to do this work for relationship team.
    - Requesting access to Business
    - The same framework can be used, however there is no urgency to build this piece for relationship team
    - When it has to be built : Not prioritized for current quarter

1. Dependencies
    1. **Dependency from Assets to relationship**
        * Redirect for authentification
        * RFC for seeking changes to CI/CD pipeline- feedback is pending. Please ask RFC submitter to follow up with reviewers
    1. **Dependency from Relationship to Entities**
        * BCOL payment scenario in case of failures
    1. **Dependency from Entities to Relationship**
        * Affiliate NR : NR/Entity/Relationship
        * BCOL Error messages
    1. **MRAS and Name Request**
        Check with MRAS team their dependency with BC REg - who is doing this?
        Two workarpunds
        a. 
        b. Once BCOMP incorporates it has to be updated in MRAS
    1. **Credit Card Payments and Name Request**
        * Paybc is offline from Sat 6 to Noon of Sunday
        * Weekend submission of more an issues
        * NR is up on 6AM to 10PM
        * Loren to send the putage timings of PayBC
        * How many Outages are there for PayBC which is unknown
        * There are three projects going together - MRAS, NR and BCOMP, how do we stagger UAT?
        * KArla maria to be aware
    1. **Benefit Company Incorporation and Name Request**
        * Connecting bcol and NRO - After June
        * Use legacy NRO in terms of using CORP/Benefit complanies
        * This may start in one month
        * We need the Stakeholder to be aware
1. Action items:-
    - Loren to send an email to Carol about BN messaging and clarify
    - PO's to check and update the release plan document to reflect the current status
    - Lorna to have her items updated in the Release planning document here
    - Lorna to have all the Epics planned(till end of March) in "Roadmap" section of Zenhub
    - Linda to have a poster in team spaces for Social meet up by end of Feb 12th
    - Linda to talk to operations team for changing some of the criterio for documenting issues(IT Ops)
    - Shahriar to set up a meeting for discussin the dependency ticket 2485
    - Jyoti to post the picture in roclket channel for Name request discussion
    - Lorna to setup a meeting with NRAS(Nisha) to help us answer below
        - Are we delivering XPRO-BC?(Any redirect)
        - What does MRAS redirect?
        - What is available in MRAS test Env?
        - NRO - BComp workaround
    - Loren needs to action on the below
        - Name Request(Pay BC Issues)
        - Carol needs info
        - Stats on Current Outages
        - Impact on Credit card payments because of the Outages
    - Kaine needs to work on Conversion Corp- BC(not priority)
  
        
----
Feb, 6, 2020
----
1. Update on Roadmap in ZenHub
2. Update on Epics across team in ZenHub
3. Any Shift in priorities for the team?
    - Entity team has to pick Correction 1.0 as priority. - DONE
    - Incorporation work needs to be put on hold for now till 1.0 is deployed to production
        - This might move out of June. Needs to be discussed in the upcoming sprint planning meeting.
    - Corrections 2.0 doesnt have to be done necessarily after 1.0
    - Deadline is Feb 28th to deliver Corrections 1.0
    - Relationships needs to re-evaluate the work for current Sprint and next based upon the work which they need to do for Entities.
        - Jeremy might be helping on design stuff - issues created and linked (WS, 2020-02-07)
    - Update the release plan with two releases
        - AGM Picker 
        - Comments field for ledger(corrections 1.0)
        - Corrections 1.0
    - Update OCM - Formal communication might has to be done
4. Any new dependency identifies across teams?
    - Priority filing (dependency from Entity to Relationship)
    - BCOL dependency
        - Needs ticket from Entity team. Currently there is no design
5. How to track items from issues from Actual end users
    - Can we use certain labels for items which involve LAB
    - Can the user group be identified? Like - CO-HO?
5. Update on Action items?
    - Jyoti to create a dependency template in ZenHub - DONE

## Action Items:
-   PO's to create Epics and depdendencies in ZenHub(all what was discussed in PI planning) by end of Feb 12th
-   Linda to have a poster in team spaces for Social meet up by end of Feb 12th
-   Loren to check with Carol on
    - Overall UI ownership
    - BN Messaging
- Linda to talk to operations team for changing some of the criterio for documenting issues(IT Ops)


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
  
  ## Action Items:
  - Jyoti to create a dependency template in ZenHub - DONE
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
