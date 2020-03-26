# PO-Sync. 
**Topics for PO-Sync. to discuss between PO´s**
Agenda and description re PO-Sync see here in Meetings overview:
https://citz.sp.gov.bc.ca/sites/SBC/REG/Projects/MVSM/_layouts/15/DocIdRedir.aspx?ID=S52QENDTEJAE-1724982671-2193 
* if we discuss content, let´s open the roadmap or Epic to discuss the item - and possibly update 
----
Apr, 02, 2020
----
1. Linda to bring the proposal for "Static text - help text in the application"

----
Mar, 26, 2020
----
1. UAT testing for Staff. UAT process was discussed in SOS and there are some inputs required.UAT process is documented here:-  https://github.com/bcgov/entity/blob/master/docs/Way%20of%20Working/UAT-Process.md
2. Sandra wants to discuss below topics:
   1. for décision: roi on prototyping ppr
   1. for decision: ppr production content- keep it standing or remove from cluster?
   1. advise needed: before we unplug, what dependencies does we need to consider?
   1. for discussion: API specs doc approach
 
* 3.Loren agree w. Kaine: Business profile: need to make email field as a mandatory input by user. #3080
https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/3080
4. Jyoti to bring up Organizational level changes(if there is anything required)

----
Mar, 19, 2020
----
1.	Upcoming Dependencies discussion. I don’t have the list of dependencies, so would look up to PO’s to bring anything up where there is a dependency else we can go through what we have from PI planning.
1. Static Text - Help Text in the application - common approach & design
   -  ensuring a consistent design/UI for displaying help text in the application, across all Registry products (other than tool tips),
        - Relationship team overall ownership of UI including help
        - Little study on information structure.(Tools like Jamstack)
        - Linda and team to discuss to comeup with a proposal. Proposal might include - What problem are we trying to solve? and how are we going to solve it? Interactions and help text across teams.
        - Usability testin is an important aspect of providing help information.
        - 2 Weeks from now - 
            - And then discuss with other PO's.
    - ensuring the use of plain language and tone,
    - the process to update/review/approve content is efficient, and
    - we’ve considered what static content will live on the website vs. the application.
1. Formal process for triaging requests between teams
    - Remote working - this is working well
    - Scrum Masters to discuss this and take another crack to see what works best for three teams.
1. Updates from myself RE: COBRS discussion and Tech Review
   - Include Ian B in the upcoming meetings
   - Tech Review: Jyoti to run the tech review for few more instances and then see if the frequency needs to be increased.

----
Mar, 13, 2020
----
1. COVID-19 Impact to team's way of working
    1. How do we perform the Sprint review? Remotely?
        - Yes, Jyoti to send the Skype invite.
    1. If anyone is coming back from Vacation(from abroad), as per the recommendation from Government of Canada, its recommended to self-quarintine themselves for 2 weeks and then join work
1. Discuss options for X-PRO Solution. This is for delegate authentification
    1. Social Sign In
    1. One time password
    Loren is working with Thor, Andrew and Sumesh to have the recommendations drafted. This draft has to goto Bev and Carol by EOD today.
1. Discuss notification delivery dependency
    - For Entity, sending the Output and BN number through email after incorporation.
    - Which email are we using? - User Profile, Business contact info?
    - Modify the template which Loren has. The email template has to be updated by Entities team.
    - To have a technical meeting, to udnerstand the notification flow. Jyoti to setup that(Use the Tech Review Meeting. Send the Agenda)
    - Sending the document along with email needs more work from Loren's team
    - Linda/Jyoti to have the flow ready for how are we using the notification?
    - There could be a possibility of "In-App" notification but in the next PI.
1. OXD Research
    - Sandra to put the list of things by Monday EOD to send it to Claire for research work.
    - Loren and Sandra to sync up on this topic.
    - Hours allocated as of now:
        - 55 hours for last week of March
        - 55 hours for first two weeks of April
        - 70 hours for last two weeks of April
            - Loren to confirm the hours.
1. Working Group for Regualtion change
    - Sandra, Bryce, Carol and Kevin met and recommended for a working group for Regulation change
    - Sandra and Kaine to have a chat about engaging different groups.
1. Documentation
    - Use the G-Suite for documentation till the time there is any other recommendation from other team
    - Jyoti to invite Assets team for starting the documentation work.
1. Commom Components 
    - Jyoti has this topic for Tech Review

----
Mar, 09, 2020
----
1. Dependency on common components- From Entities to Relationship
    - If there is an update on common components - there has to be a ticket(dependency) created from Relationship side to let the others team be aware. This is to avoid rework from other teams using those components.
    - There also needs to have some discussion about using these common components in future. From architecture side, Thor was consulted, however DEV’s need to chat about it. Action item is on Jyoti to setup the meeting for Devs.
1. Actions items from Sprint review - if there is anything which we need to action. Jyoti to setup the meeting with Key devs to take up before PI planning
1. Review of the vision document which we are going to present in PI meeting.
    - PO’s to review the Vision document if possible and provide feedback in the PI meeting
1. Review of the Roadmap - There are some changes to the roadmap from Relationship team, so we will quickly go through them.
    - Authentication changed to User Accounts – Since User accounts scope has increased, timelines have been shifted accordingly.
    - Discussion needs to happen around search functionality(Staff search in particular). Kaine/Linda to ask BA’s to figure out the minimum requirement for Staff search for end of Sept(this is considering that COLIN has to be replaced by that time)
    - Jyoti to setup meeting with Thor and Bob for COBRS. There needs to be a plan in order to shut down COBRS.
    - Kaine is taking the charge on CRM/CXM. It needs to span out till end of the year. More discussion in PI planning meeting.
   

----
Feb, 27, 2020
----
1. Loren: 2691 (BC Reg Nav Bar) - recommendation from team not to release it later for user; ready for Entity team this Sprint
    - This was no longer needed to discuss in this meeting
1. User Feedback loop process - trish to present it
    1. The product team will share the wireframes with staff before the release. There is no time in the OCM checkpoint meeting to review the wireframes.
    1. Provide the oppurtunity to Staff of using Test Environment before the release going live.
    1. Trish to work with Business on setting the expectation 
    1. Feedback Loop - Create a bugs and use label as per the team - In OCM Check point
                        - Label them with Feedback label(Client/Staff Feedback - Purple)
                        - Put the ticket in Bug Column
                        - POs to look into bug triage meeting
                        - Trish to go through with Staff on all those Bugs
1. Epic Template
    1. The template was discussed in the meeting and team will create/update all the future epics as per the template.

- Note: There were few dependencies which were not discussed in the meeting as we overrun on time. PO's/SM's to update the agenda as much as possible before the event, so that its easier to facilitate. Jyoti to make sure to check with PO's before the start of the meeting if the Agenda needs to be updated. Priority should be to disucss the dependencies/prioritization followed by other topics.

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
