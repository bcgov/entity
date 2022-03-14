# PO-Sync. 
**Topics for PO-Sync. to discuss between PO's**
Agenda and description re PO-Sync see here in Meetings overview:
https://citz.sp.gov.bc.ca/sites/SBC/REG/Projects/MVSM/_layouts/15/DocIdRedir.aspx?ID=S52QENDTEJAE-1724982671-2193 
* If we discuss content, let´s open the roadmap or Epic to discuss the item - and possibly update 

----
Standing Agenda:
----
1. Progress re Features
2. Assess any scope- or schedule adjustments, dependencies 
3. Problems/ Opportunities with Features - Decisions 
4. Prepare for the next Sprint Planning creating ideas for Sprint Goal 
5. Refine & prioritize Features

----
Mar 18, 2022
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
     
- Meeting Notes

----
Mar 11, 2022
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - Feature flags and impacts.
    - Ticket 10664.
    - OPs
    - Escalation to Carol
    - Pairing on OPs tickets
    - Business Zenhub Dashboard
     
- Meeting Notes
    - Feature flags and impacts.
        - More releases requires more QA testing due to the amount of regression. Really emphasizes the importance of us automating more of our testing.
        - Leave for future discussion.
    - Ticket 10664.
        - Sent to Carol, so no action required.
    - OPs
        - Hold for Jason's return
    - Escalation to Carol
        - Jyoti has a spreadsheet.
        - Linda will create a RAID ticket and propose that as an alternate approach.
    - Pairing on OPs tickets
        - Linda proposed pairing an Entity team developer up with an SRE dev who is a little less experienced and maybe between the two of them they can kind of get down to the root cause of the issues.
        - This would provide a mentoring opportunity
        - Thor suggested the use of the read-only database as an aide for BAs. Patrick can provide some documentation on how to access it.
        - Patrick will provide access to the OPS repo and then the read only database.
    - Business Zenhub Dashboard
        - Cameron W was to have a follow up meeting to discuss the dashboard with the business team. That has been completed.
        - Olisa/Cameron will be setting up a follow-up with James
----
Mar 4, 2022
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - Update common component #11111
    - Discuss tickets 11344, 11340
    - Discuss ticket 10804 
    - change to discourse
     
- Meeting Notes
    - Update common component #11111
        - relationships team opened it and there's all different kinds of UIs that need updating
        - entities just have the Edit UI to complete - done shortly
        - ** Decision ** this kind of activity should be a story with subtasks next time
    - Discuss tickets 11344, 11340
        - 11344 concerns overall BC registry, home page updates and the navigations - will be partially fixed
        - 11340 concerns which account to default to when user logs in - move it to the backlog
    - Discuss ticket 10804 
        - concerns sharing information about availability 
        - should we add it to a common component 
        - sounds like a placing this info in a footer makes the most sense 
        - ** Action ** send to Scott for a design 
    - change to discourse
        - James forwarded some suggstions for new discourse categories and associated definitions
        - ** Decision ** implement the changes 
    - ** Action ** - 2 releases per sprint - add to guiding principle

----
Feb 25, 2022
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - 
- Meeting Notes
    - Updated action items from PPR retro

----
Feb 18, 2022
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business

- Meeting Notes
    - Multiple BCeID accounts
        - Holding the release until all the tickets are done
        - Tentative date is March 1st
    - Reviewed risks raised during PI planning

----
Feb 11, 2022
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business

- Meeting Notes
    - Release coordination. 
        - Patrick asked this to be added
        - Asking that a technical release coordinator be assigned for cross team release coordination
        - Would be helpful to know what exactly when releases are happening and what is being released
        - Long term plan is that Trish Reimer will take over releases. James is going to reduce down to half time to affect that transition, and whenever it's ready, then James will roll off
    - Tickets 10678 and 10679
        - **Decision** 10678 isn't needed and will be closed
        - 10679 Account name should be displayed for BCOL, Help and BC Registries staff
        - **Decision** this is a low priority
    - An ask that teams try to ensure the stories committed to in a sprint are closed prior to the end of the sprint

----
Feb 4, 2022
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business

- Meeting Notes
    - Behaviors of the flow across all the different applications
    - Credit Card Stability
        - DMS office is working on a payment solution to fix what's wrong with payments.
          - Thor has a Matthew and and his team that are running that project to find out where we're at and see if maybe we can use something better.
        - Two options: 
          - Use bambora  - requires fast-track approval
          - Release the features only to premium accounts
    - POs to update their roadmaps before next Friday
    
----
Jan 28, 2022
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business

- Meeting Notes
    - List of current team members
    -     - Jason is working on an updated list
        - The list is needed to review access permissions to to our project.
        - Patrick to provide the list to Linda when received
    - The 7th is PI 12 planning.
    -     - We made some updates to the portfolio planning board
    - Realignment for a feature teams.

----
Jan 21, 2022
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - New date for Feb 1st release planning mtg
    - Payment modal

- Meeting Notes
    - New date for the Feb 1st release planning meeting
        - **Decision** - Move it to the next day, same time.
    - Payment modal
        - The Assets team found an issue in it and it's a shared component.
        - In the shared modal, like the the payment model for staff with cash or check and BC online and no fee, it's currently persisting a BC Online account number entered in error if someone cancels or closes something before submitting.
        - **Decision** Whomever picks up the component should fix it. It shouldn't be passed to another team to fix.
    - Is API starting this coming Sprint or are we going to do it the following one?
        - Suggesting we start the PI on Feb 8th and the next Pi will be 5 sprints instead of the typical 6.
        - No impact to metrics
        - OK, so how about we make this for the Sprint that starts February 8th then?
    - Scrum masters to gather our existing users
        - A list of who their existing team members are and their email and IDIR
        - Provide to Patrick
    - We have to look at how we expose our API service or specs so orgs like Ministry of Finance can start building APIs
        - The board is gonna work with John to do some requirements around what APIs are going to be exposed 
----
Jan 14, 2022
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business

- Meeting Notes
    - Moving the Feb 1 release planning meeting tabled to next week

----
Jan 7, 2022
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - non-PAD groups
    - QA testing for SRE
    - Zenhub licenses

- Meeting Notes
    - Weezy Print
        - Ticket 8417
    - Thor Ops Team
        - Richard is taking on the long running Ops work; this solution seems to be working out
    - Jupiter Notebooks
        - PR is approved for testing
        - this has been mitigited
    - Groups that cannot pay via PAD discussion (e.g. RCMP)
        - most of these entities have been identified
        - cannot put them in the Director's search account because the use other services as well
        - plan is that groups will identify themselves how ever they choose when establishing their id and they will not show up on reports
        - groups will be responsible for identifying their end user in case of an audit
        - **Proposal** is to allow individual groups to use draw down for a limited time (invoices will have to be issued)
    - QA testing for SRE team
        - 3 tickets currently in QA
        - one suggestion is to use the Home team, but this is an on-going issue
        - maybe Ry has some capacity
        - **Action** Kaine will ask Jyoti if he can take up some of this work
    - Zenhub licensing
        - Licenses have been purchased

----
Dec 17, 2021
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business

- Meeting Notes
    - Blockers
        - There's a ticket for weasy print that Melissa put on the radar. Not sure that anything can be done until Joyti's back.
        - There's some PDFs and things for PPR that aren't rendering right, and the team is fairly confident if we fix the weasy print issue, it'll fix some of the other output issues we have.
        - Setup was done by Patrick so this will probably land with SRE

----
Dec 10, 2021
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - OCM requiring help from Relationships team
    - SRE Tickets waiting for deployment to prod
    - SRE releases
    - Entities dependency ticket 10296

- Meeting Notes
    - OCM requiring help from the relationships team.
        - We have a good structure. We have new resources starting on our team providing the business rules/requirements. They're doing OPS work now, Johns covering for as a PO as well, and throwing in OCM on top of all of that is is unreasonable so we're just gonna shifting or looking at changing how we work together so it's a bit more effective and efficient.
        - John is meeting with Mary Beth later today to get coordinated on the templates and what's in the pipeline for OCM that needs drafting and then Zach has agreed earlier in the day that he's gonna have time to okr couple of those in terms of getting the base content going.
    - SRE tickets waiting for deployment to prod
        - That is, how should they be handled if they are initiated on one of the development team boards
        - Suggested approach is to remove them from the dev board once they're done from the development team's perspective, but leave them on the SRE board. Removing them from the development team board means just moving them back to new issues, removing them from the sprint and removing the development team label, but leaving them in the SRE board in in the pipeline for completion.
        - **Decision** The group agreed to proceed with this approach
    - Patrick / Release 
        - When will the SRE team be releasing? A reminder to let Jean know so that she can do the release communications for it.
        - SRE won't be executing a separate release. The release will be combined with the Entities team.
    - Entities dependency ticket 10296
        - Dependency on the Relationships team 
        - John will add to the upcoming groomming
----
Dec 3, 2021
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - QA coverage for the SRE team.
    - PO sync meetings for December the 24th and 31st.
    - Tri-weekly and Release Planning in December
    - Vital Stats vs PPR

- Meeting Notes
    - QA coverage for the SRE team.
        - Patrick reached out to Kaine about not having enough QA resources to test things.
        - Patrick is asking who he could call on for extra QA help.
        - FYI Patrick might be reaching out to some of the other teams for help.
        - In the new year it would be good to have the QA from Relationships team to start picking up some entities to get ready for the feature team plan.
        - **Action** - Linda will touch base with Patrick
    - PO sync meetings for December the 24th and 31st.
        - **Decision** meetings will be cancelled
    - Tri-weekly and Release Planning in December
	    - Linda is meeting with ELT on Monday and will ask about the triweekly and release planning meetings. How many will be happening over the month of December?
    - Vital Stats vs PPR
        - Trish approached Melissa about the possiblity of setting up PPR in a similar way to Vital Stats.  For background, vital stats have an approval flow. So rather than having to have people click that they want something and then having that cause work for internal staff, we identified if someone already has an account and then preset that for them. That just reduces a lot of effort. With PPR there is no approval flow. So that is the key difference between the two.
        - There was a decision made with PPR that people should be choosing the product rather than automatically defaulting it a premium account.
        - The piece that is missing is in BC online there is a restricted track and there is a subscription code. For PPR that restricted flag is the one for the Crown registrations. That one we integrated that anyone who has the flag in BC online they will get that restricted access. But there is no flag as such for the basic PPR product. It has a subscription code and that's why it never went to an automation mode.

----
Nov 26, 2021
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - Adding Credit card option for Premium Account

- Meeting Notes
    - Adding credit card option for premium account.
        - Payment options - we have the capability to add payment options without a lot of changes required. In case the premier count can pay with credit card. Something that might be considered in the future
        - Jyoti will follow up in a session in future if this is required
    - Adding change management issue discussion to the release planning meeting.
        - are we are able to optimize the meeting?
        - we are looking at mostly the same items but with two different set of folks, obviously the angle is different. We want to have all the issues highlighted by the business leads so that we can act upon it.
        - this is the Thursday after 1:00 PM meeting that we're talking about that we have with the business.
        - **Decision** just leave it as is for now.
    - Vacation calendar.
        - So currently we're using a pinned message within Rocket Chat
        - Suggestion is that we move to using a shared Excel spreadsheet.
		- **Decision** use a shared Excel spreadsheet to track holidays
        - Jinghua will populate the spreadsheet with everyone's name and each person will take responsibility for entering their own vacation
    - Ops Team retro
        - The ops team would like to have a retro to raise concerns and then come up with an action plan.
        - **Action** - Jyoti to follow up and check with Sienna.

----
Nov 19, 2021
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - Working outside of Canada?
    - Plan for Carol
    - Optimize bcrs-shared-components #9874
    - RFC for accommodating email templates #9073

- Meeting Notes
    - Reporting of escape defects
        - We determined what our definition was and how we were going to measure them. It can be closed.
    - Knowledge base for OPS
        - No update
    - Create presentation for PO commons
        - James created some context slides
        - Linda added a couple slides too. It's still a work in progress.
        - Linda also really briefly ran our brainstorming ideas for the agenda passed Carol the other day. Carol would really like us to emphasize the role of the SRE
    - Working outside of Canada
        - A meeting was held earlier this week to discuss it. So there's nothing else we need to discuss here.
    - Plan for Carol
        - Carol wanted to see a plan of how the entities work needs to be spread across the teams so that it gets done by end of September.
        - **Action - James to set up a meeting for Jyoti, Linda and Kaine to discuss long term plan**
        - Linda, Kaine and Jennifer Peaker to have a follow up conversation on budget this week
    - Optimizing BCRS shared components - #9874
        - It was designed in a way that it can only be used in the entity space and in order for this to be a real component or a micro service which can be used anywhere requires work
        - Perhaps this something for Melissa.
        - Assets has started talking about it so right now with PPR we don't have time. But we've started in this story mapping and there is some commenting features, but it's slightly different the way they used commenting like they have different types of annotations that they add.
        - Assets will look at whether there is an opportunity to make it a real common component.
    - RFC for accommodating email templates #9073
        - This is one that we were talking about. It previous PO syncs and I think at some design Guild meetings was that depending on the person's browser, the email templates don't come across the same way. 
        - Patrick is pursuing an RFC on a possible commercial solution. Jyoti and Melissa to provide feedback


----
Nov 5, 2021
----
- Action Items / Carry Over
    - RAID board

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - PO Commons December presentation

-  Meeting Notes
    - How to record Sprint goals when milestones are removed
        - James asked Zenhub if there is a way to add goals to sprints. The response was, great idea, but we don't have any way to do it right now. 
        - **Decision - Going forward we'll just create tickets per sprint**
    - Reporting of escaped defects. 
        - Meeting for that next week 
    - Knowledge base for OPS. Is there any update there?
        - We have the Google Drive set up now. There are five people that have accounts now.
        - Patrick has created a folder for for OPS and shared the link in the office channel so we can we can put the documentation there but he’s not sure it's the right place to put the information.
        - Not if we can use Google without doing the proper stuff, so we'd have to figure that out next for documents
        - Kaine to add a note on the ticket
    - PO Commons December presentation
        - Last PO Commons we volunteered ourselves to do a little demo 
        - It would be nice to kind of go through what we show on our Sprint review like go through the different slides that we show.
        - We could also show the road map. How do they tie it up with the stakeholders?
        - A few slides and show our Muriel board; long term planning, then a second level of Pi planning and there is a third level Sprint planning.
        - **Action - Linda to create an agenda for the presentation**
        - Patrick to speak about automation
        - **Action – James to create context slides to show how PI planning and sprint planning fit together as well as some information on the roles**
    - Next Friday’s meeting
        - James is planning to take the day off
        - Linda will also be off
        - Jason is also off
        - Kaine and Jyoti to arrange a meeting if necessary

----
Oct 29, 2021
----
- Action Items / Carry Over
    - Recording sprint goals when Zenhub milestones disappear
        -  **Action – James to contact Zenhub support for advice**
    - How to calculate escaped defects
        -  **Action – Linda to schedule a meeting to discuss**

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - Where to record sprint goals - (milestones dissapearing at the end of 2021)
    - How to arrive at % complete for sprint goals
    - How to calculate escaped defects
    - Notification - Dev work
    - Adding Resource Rqts to Long Term Plan
    - Testing Strategy
    - Display currency consistently across applications #8859
    - Need to deal with Google Auto Fill Across Apps #8518
    - Research UX - Relationships for PI11#9535
    - Research UX - Assets for  PI11#9534
    - Research UX - Entities for  PI11#9536

- Meeting Notes
    - Repo Update
        -  Thor got the private repos set up in the org so he's meeting with Cameron this afternoon. We added a repo for the RAID board too. Just need to add security rolls so it can be accessed.
        -  Next steps after that maybe a couple weeks.
        -  Some other ideas around how we can track things. Create all our epics for a whole life cycle when we do long term planning.  And have them sit under a project like on the program board which would have themes, under that we could capture the entities then all the risks could also be associated to an entity. So you'd be able to have a really good visual representation in that workspace of everything that was drawn through. And then by having all the epics actually created in Zen Hub, we can start attributing early on values like the costs for the whole project. 
    - Dependencies
        -  Meeting was held to talk about a coordinated test strategy to automate our scripts. One of the things that came out of it was that we needed to have a number of different test accounts for the different testing scenarios. So this is ticket 9860. So the idea is that what we'll do is we'll have a set of data that would we would create that would be associated to a script to create whatever entity in whatever state we need it to be.
        -  Jyoti will ensure testing accounts are set up when needed
    - Recording sprint goals when Zenhub milestones disappear
        -  **Action – James to contact Zenhub support for advice**
        -  One option is to create a Sprint objective ticket. Not ideal but it would work.
    - How to arrive at percent complete for Sprint goals. 
        -  **Decision - Towards the end of the Sprint hold a team vote and arrive at a consensus. Goals are not 100% complete until all they have been tested.**
    - How to calculate escaped defects
        -  These are defects found by the business after the code in production.
        -  Current process is to ask team members to try to remember how many bugs may have been, logged against the product at the end of each sprint.
        -  **Action – Linda to schedule a meeting to discuss**
    - Notification - Dev work.
        -  Who is taking over work for the notification?  Roy and Scott are just finishing up the design now that we've chosen not to do both, we're just going to do the one. So then Assets will do the work. 
    - Adding resource requirements to the long-term plan. 
        -  We’ll define where we need our expertise and having those conversations with Cameron. 
        -  Next long-term planning is on Nov 8
    - Display currency consistently 
        -  Make sure it says just the dollar amount, except in the share structure. That's where it's going to say CAD.
        -  We need tickets for each team to do their own work under here.

----
Oct 22, 2021
----
- Action Items / Carry Over
    - Manage PI 11 planning risk items 
    - Complete PI 11 action items analysis 

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - RAID kanban
    - Where to record sprint goals - (milestones dissapearing at the end of 2021)
    - How to calculate escaped defects
    - How to arrive at % complete for sprint goals
    - Private workspace
    - API Sandbox

- Meeting Notes
- Risk discussion originating from PI 11 planning
    - Migrating all BCOL partners to new app at one time – impact to support team and other resources
    - Kumar, Jyoti CITZ:EX
And if they if it if from their application, if the users are able to navigate key clock then we don't have any other method to stop it. Our only option is that people unsubscribed from the product. If PPR becomes available today in production and if user’s select the product then there is nothing stopping them to use PR.
    - Reimer, Trish CITZ:EX
I understand the technical limitations, but I think if we want to move forward with getting them all set up, the best way to do that is to put the word out now and get people to get in there and get, you know, get their account
    - Kumar, Jyoti CITZ:EX
then we can still have their account setup. Once the product is available. They can go and select the product when we launch.
    - Sparks, Kaine CITZ:EX
But there's no where to access it unless they put the URL in and then the URL cannot be open. Like there's a way, like technically, there's definitely a way to do that if we need to do it.
    - Kumar, Jyoti CITZ:EX
Yeah, we haven't. Currently the system is not designed that way. As of now. So if that has to be done then that would require some changes.
    - Sparks, Kaine CITZ:EX
Yeah, I'd like to know like what kind of changes 'cause it should be. Pretty simple, but it depends. I don't know if Thor has an idea being here ad hoc off the cuff if it's.  A big thing, or if it's like small. But we don't actually want it. 'cause we want him to get set up and create their account and choose PPR.  And but we don't want him to actually be able to access PR, even if we put in PPR into prod. Until we say like, is there a way to technically do that? Decide when those things are linked and access is actually there?
    - thor @ daxiom (Guest)
Yeah yeah, 'cause we have control of that through the API gateway.
    - Sparks, Kaine CITZ:EX
Right, so is it fairly easy or is it like potentially large?
    - thor @ daxiom (Guest)
Pretty small.
    - Reimer, Trish CITZ:EX
And so I know that in some cases they might need a specific account type depending on the service. That's the only kind of gotcha and we could try to manage that with communications and we try to be really clear like OK for wills you can do basic or premium, but for PR you need premium for court services online or whatever you need this or this so I don't know what the other types are, but we can look at doing that and manage it very carefully. If we can't do this technically or we don't want to.
    - Ezeh, Olisa CITZ:EX
Two UM architected technically in such a way that it can. It can be feature flagged. I think that's definitely the best because one of the challenges were experiencing with all the stakeholders generally is even just that willingness to move and to do what needs to be done to build the, you know, the new platform we have is it. I think it's wheels registry or this particular stakeholder and we can get them. You know, in in that new space.  I think any option that supports that, you know we should really exploit and the last time we had the conversation Jersey was. It was really about the technical piece of architecting it in such a way that when I, because of how their systems architecture and we could have feature flag it. But if that exist and there's a possibility that we can control when they actually have access, then you know, I think that's probably the best option for us overall.
    - Mills, James E
K So can you just recap the action then it's coming from this.
    - Sparks, Kaine CITZ:EX
To chat with the smart people like Samesh and Thor, and I'll create a ticket right now. To see if it's possible.
    - Mills, James E
K and we're going to move this to owned, is that right?
    - Kumar, Jyoti CITZ:EX
We have to let the IDM folks know as well that if we are telling them that the White House, test users and others are going to create the account they need to be aware and they all need to be made aware that they're just creating the account. They're not accessing the product because any products who any partner who needs to be added first needs to be added to the service agreement. And before this agreement gets approved, the governors has to be done so they have been very clear about that. So we have to tell them that they are creating the account, but they're not accessing the services. 
    - Sparks, Kaine CITZ:EX
Yeah they can create it registries account, but they can't access the.
    - Stanton, Melissa CITZ:EX
We've been looking on our side, though, like any spot where we've had changes in our star Pia because of the portal agreement with item we've been looking at ways to minimize having to retouch it right when partners join, so that is a constant question, or it's coming up and like all the meetings, right? Hey, you want me to do this. Can I add this other stuff now so we're looking at it and minimizing touch points on our side? But it's Jyoti said we can't do the partner piece their governments and until they’re moving along with development.
- **Potential that the home team resources may not be available to do work on time.**
    - Reimer, Trish CITZ:EX
This is managed. Yeah, we. I think we even had a meeting this. I don't remember who was there but we went through all of the changes and resources and that was with Ian Bot, Michael McKinnon, Suzanne
    - Mitigated I should say yeah, I know.
- **Resistance -  non-ministry gov account users may pushback on needing a PAD account or the need to verify their identity using BCSC/BCeID**
- **Resistance - how we will manage resistance for OS Partner and BCOL Partners.**
    - Kumar, Jyoti CITZ:EX
We plan to have an engagement session with all the nominator users. I'm not sure where that is right now, but that is the plan that we first communicate to them. Let them know what it is and if there's a resistance, then we have to deal with it.
    - Reimer, Trish CITZ:EX
It's on the plan and we were going to do our ministry, government account users first. That was supposed to be done this week and then Next up was ministry non government like the non minister government account users like ICBC and others, yeah. I think we have it on the plan for Sprint 11.3. Yeah, I know. I think it's supposed to start like November 2nd or something.
- **Is it possible CAS timelines may slip? if so, could impact other scheduled releases/ resourcing**
    - Kumar, Jyoti CITZ:EX Till now there's been no red flags. We have a steering committee which I attend. From our side to make sure that you know all the deliverables are being done on the modeling. Uh, based upon the milestone dates. So really, there's only working at by whatever amount it slips. We have to change our release plan so I don't know if this is something which we really need to take forward. But if it happens, we have to deal with it.
    - Sparks, Kaine CITZ:EX
So it's mitigated. 
- **Vacations**
    - McClung, Linda CITZ:EX
Yeah, accepted.
    - Unclear deadline for business case submission.
    - Gordon, Dwayne CITZ:EX
So the deadline is clear and there should be no impact to this at this point.
- **Incomplete data for firm migrations.**
    - McClung, Linda CITZ:EX
I think that's gonna be owned by me
- **Impact of verifiable credentials.**
    - McClung, Linda CITZ:EX
yeah, we're supposed to come up with some sort of prototype, right?
    - Sparks, Kaine CITZ:EX
So we need to do something that I don't know. If you've heard anything new, Thor or Dwayne, but we haven't.
    - Sparks, Kaine CITZ:EX
We haven't scheduled this PR. It's about like the banking pilot for Steven Cran. Like your, I guess your teams like yeah there was work that.
    - Gordon, Dwayne CITZ:EX
Yes.
    - Sparks, Kaine CITZ:EX
We were going to do, but then Carol was saying she gave him a bunch of money. Hopefully they're gonna do it so we haven't really talked through any of those actions, though with you or their team or us.
    - Gordon, Dwayne CITZ:EX
I actually have a meeting with them at three, so I might find out that Carol just threw me into so.
    - Sparks, Kaine CITZ:EX
OK, so like if that. If nothing comes out of that like next step, maybe we need to get together with you and Stephen and Linda and I'm like Thor and just kind of talk through the work.
- **Handle Tech Debt better**
    - McClung, Linda CITZ:EX
I think the action was that we're going to make sure we have about 20% of our sprints be tech debt.
    - Sparks, Kaine CITZ:EX
I think it be good to report out on that too in our reviews, like how much tech that we actually did so that it it's visually. Identifiable.
    - Kumar, Jyoti CITZ:EX
It's not only that. I think we discussed about the documentation and other pieces will also be part of that Lightbox tech debt.
    - jdyck
Started collecting that metric this sprint.
    - Sparks, Kaine CITZ:EX
See if we can put it in the demo, either this Sprint or next sprint or something.
    - Start considering what it will look like to take on bigger task of focus for testing and test data?
    - McClung, Linda CITZ:EX
Having a meeting next week. I just have to book it.
- **Knowledge base for OPS.**
    - Sparks, Kaine CITZ:EX
Assume this is we need documentation so people couldn't help us.
    - McClung, Linda CITZ:EX
Yep.
    - Sparks, Kaine CITZ:EX
And we need to do something about it. I don't know how we fit it in.
    - Mills, James E
OK, so who's gonna? Who's gonna own this to let people know how to use it and. Set up the folders if they need to be examined.
    - McClung, Linda CITZ:EX
Kaine, if you're going to sort out who gets what accounts, then I think we could pull in Sienna to help because she's got a lot of experience dealing with the Google Docs.
    - Sparks, Kaine CITZ:EX
Yeah, between her and yes, maybe like that type of people I think. Could well, not yet 'cause Sienna. You right like made those original documents we had were so cool. Like for annual reports and all those things Super 6.
    - thor @ daxiom (Guest)
Well, we've kind of got a discussion going in the OCM channel so I was what I had proposed was like Kaine, Linda, Melissa, Trish. Maribeth Wilson.
    - McClung, Linda CITZ:EX
Maybe instead of. Yeah, maybe instead of Kaine we should put in Cameron Wolfe.
- **API sandbox**
    - Stanton, Melissa CITZ:EX
So it's looking over our board. We are working right now to with size and come get through some of the work to get the API sandbox up and ready for November 5th, which is what we've been telling everyone in our sessions, so we were just looking over at Jyoti and noticing that there's a few pieces for relationships. One of them was updating the steps to request to Keith.
    - thor @ daxiom (Guest)
In 14 minutes we have our next session on it.
    - thor @ daxiom (Guest)
But the the the keys are also going to be just a minute managed on their production pages. That was the original decision, so I don't know if it's a match, wants to change out.
    - Kumar, Jyoti CITZ:EX
Yeah, I mean, that's that's what I guess this needs to be discussed and confirm like what's the approach?
    - Stanton, Melissa CITZ:EX
OK, and then the other piece was the revoking a key.
    - Kumar, Jyoti CITZ:EX
Yeah, that is already part of the Sprint, uh so. The admins of the account would be able to go ahead and revoke that key. So it's a story in this Sprint.
- **Private workspace**
    - Sparks, Kaine CITZ:EX
Now that you created the org and you have a private repo what do we need now?
    - thor @ daxiom (Guest)
So there's a few things to look at inside of there. Like what kind of repos we want, 'cause that's where the work gets actually tracked. So if you want like one like we have for the entities Or if you want separate repose which you can do, and then you can combine them if we want to.
    - Sparks, Kaine CITZ:EX
Well SRE is gonna have its own right like he wants his own repo Patrick because of the.
    - thor @ daxiom (Guest)
yeah, but but we don't actually have to manage the tickets in there. Well, the tickets are all managed in GitHub, right? Zenhub is just strapped on top to provide some lipstick on the GitHub pig, right?
    - Mills, James E
Is the main issue around authorization Thor or there are other reasons you'd want to have?
    - thor @ daxiom (Guest)
Nope, authorizations that are not. That's not a huge one. Everybody is already accepted that risk, so I think that's done now. It's just kind of. Where do you want to put everybody?
    - Mills, James E
So is there a reason you'd want to have separate repose versus a single repo? 
    - thor @ daxiom (Guest)
If you wanted to keep things separate or keep different authorizations, rank like right now. Uhm, right now, having everybody in the same repo means that I could basically go in and rearrange Jyoti’s board for him. And he can't stop me. So you know, so it's whether or not you want to provide some boundaries between the teams or not.
    - That's the discussion on the repo setup and then the team setup is a similar but a little bit different, right?
    - Sparks, Kaine CITZ:EX
Yeah, OK, so for the team or sorry the repo setup like I what James question I thought Patrick did want, or you guys wanted SRE fully separate on a different repo so nobody accidentally did something?
    - thor @ daxiom (Guest)
Yeah, 'cause we're gonna have our configurations in there, so in those configurations get changed they get pushed to the production site so.
    - Wei, Patrick CITZ:EX
Yeah yeah, yeah.
    - Sparks, Kaine CITZ:EX
OK, so then we need like a staff repo which would include. Include like Julie's team, Debbie team for Kanban would include OCM or whatever is private OPS tickets and then the raid workspace would go there. 'cause that's private stuff too. I think all those could be on one repo. I don't see why in my opinion anybody else jump in I don't know why we disagree.
    - thor @ daxiom (Guest)
If you have your raid stuff in the same repo is, say Cameron's team then they have access.
    - Sparks, Kaine CITZ:EX
Yeah.  Yeah, I don't care. I'm I like France. He's getting unless somebody else thinks we shouldn't, but I like I feel like it's better to be open in those cases. I don't like if somebody went in, its captured who made the change?
    - Sparks, Kaine CITZ:EX
OK, so let's so we get through or what do you want me to do? You want me to create a ticket like create two repose? Or is it?
    - thor @ daxiom (Guest)
Yeah. Like a couple tickets just so we can track the work so we know we know that something is expected.
    - Well, the work the workspaces can be done. The workspaces can be done later and you probably wanna have labels attitude workspaces. I've been going in and adding those 'cause they're missing for most of them.
    - So you need to to finish off all the configuration for those, but probably what you want to do first for the new org is set up how you want your teams. And that'll give you a bit of an idea of how you might wanna set up repository's.
    - Sparks, Kaine CITZ:EX
So what what's that all about? You mean like setting up like say as an example like Julie's team as corpse in societies or whatever?
    - thor @ daxiom (Guest)
Yeah, 'cause teams gives you discussion areas. So like you'd have like names, that would be a team.
    - Sparks, Kaine CITZ:EX
Yeah.
    - thor @ daxiom (Guest)
They can use that teams discussion area to talk about things they can open up tickets inside of there.
    - There are some anyone within the GitHub repo then can go like at names. Kind of how we do in rocket chat. You do a particular user you can do at names and that message is everyone on the teams.
    - Sparks, Kaine CITZ:EX
Yeah.
    - thor @ daxiom (Guest)
Right we we do a lot of GitHub setup, so I'm suggesting best practices would be to like set up the teams. It's it's. It doesn't take more than a couple minutes if we have the data.
    - It's not not a lot of work.
    - Sparks, Kaine CITZ:EX
That's what I think. Yeah, at least I feel like we could just add Julie team and Debbie's team to start to that repo. And and. And you like Cameron and Lisa would be in those teams to write could.
    - thor @ daxiom (Guest)
I I I'm I'm suggesting more that that you don't add individuals in you'd try to work as groups as much as possible, like we've done with names. Otherwise you end up like IDR is at an absolute mass and you can't figure out what's going on because it was never managed right there, just kinda.
    - Sparks, Kaine CITZ:EX
Yeah, so we start with Julie team like Acorp team and uh whatever debis really long name of team is.
    - 'cause she does all this stuff. So start with those two teams right? Yeah, and what you're saying Linda, like they're attached the repo like we are from my understanding. So like like Debbie and or Cameron for example or Alisa. It's a repo so they just go to each workspace and they can be a part of either same as we run like entity repo.
    - Sparks, Kaine CITZ:EX
'cause I think like well like the obviously your suggestion will have two report three repose really unnecessary one registries one for like the business and then a strategic one repo 'cause then they're all private and then under strategic we need add Carol Lisa Cain trash like all those people so we'll need like Trish and Alisa and people just say who they actually. I don't know all the people that should be out of there and then SRE like that. That one I don't or I think.
    - So if we gave those tickets out like would it and or Patrick like if we actually create those tickets.
    - Wei, Patrick CITZ:EX
Yeah yeah yeah we will. You will click create ticket then put the put the detail in the second week and we can finish that very quick half day couple hours yeah?
    - Sparks, Kaine CITZ:EX
OK cool. So next week sometime.


----
Oct 15, 2021
----
- Action Items / Carry Over
    - Manage PI 11 planning risk items 
    - Complete PI 11 action items analysis 

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - API Dependency Items: Wording on API gateway portal and Ability for users to revoke
    - Multiple Affiliations of Business to Account before Mar
    - Notification change
    - Change of Account Name(before PPR goes live)
    - SRE resources need for FAS Go-live - How should we go forward
    - OCM team space
    - Proposed change to Sprint Review Agenda

- Meeting Notes
    - API Dependency Items: Wording on API gateway portal and Ability for users to revoke
        - Date to go live with PPR sandbox is Nov 4
    - Multiple Affiliations of Business to Account before Mar
        - Can be completed in PI 12
    - Notification change
        - Needs to be estimated to determine who builds it
    - Change of Account Name(before PPR goes live)
    - SRE resources need for FAS Go-live - How should we go forward
        - Jyoti meeting with Patrick and John next week
    - OCM team space
    - Proposed change to Sprint Review Agenda
        - approved

----
Oct 8, 2021
----
- Action Items / Carry Over
    - Shared VON component - looks like we will build our own search
    - Enhancements to VON API - 

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - Manage PI 11 planning risk items - discuss next week
    - Complete PI 11 action items analysis - discuss next week
    - Break down entity types into trackable pieces #7964 - still valuable to complete
    - dependency of account ability to have a business on multiple accounts, needs to be there before sole prop goes live
    - also change of account name before ppr goes live
    - Ops - issues for BAs working on Ops - IT Ops eventually for triage - working towards Ian's team doing more of this sooner
    - older browswers, blocking use of them (ie11) - not supported as of 2 yrs ago, blocking it may be different - nov 2020, MS no longer supported it - Dwayne will follow up to enquire if it makes sense for supporting IE11 at large for BC GOV
    - 

----
Oct 1, 2021
----
- Action Items
    - Research UX - All Apps#7919
    - Need to deal with Google Auto Fill Across Apps - **Jyoti to create ticket for RFC

- Standing Items
    - Program Kanban
    - Program Roadmap
    - PI Planning Board - Dependencies

- New Business
    - Combining PI11.7 and 11.8 into one 4 week sprint
    - PI planning agenda

- Meeting Notes
    - Research UX - move to design team
    - Need to deal with Google Auto Fill Across Apps - **Jyoti to create ticket for RFC - Done
    - Combining PI11.7 and 11.8 into one 4 week sprint
        - Combine 11.6 + 11.7
    - Upcoming PI agenda
        - Demo
    - Shared VON component - tabled
    - Enhancements to VON API - **add to next agenda

 
----
Sept 24, 2021
----
- Action Items
    - Test accounts in prod - SRE team to provide an explanation that POs can take to Ian B
    - Resourcing - Is Omid moving to SRE - Linda
    - BA resources - Kaine/team to discuss long term options
    - Assessing change impacts - Kaine to look at providing a BA

- Standing Items
    - Program Kanban
    - PI Planning Board - Dependencies

- New Business
    - Research UX - All Apps#7919
    - Need to deal with Google Auto Fill Accross Apps#8518
    - Updating the zenhub roadmap
    - Fee Paper implementation 

- Meeting Notes
    - Test accounts - ticket created - Jingua to follow up
    - Resourcing - Omid will be joining lab teams in Oct
    - BA resources
    - Assessing change impacts
    - Research Ux - **push
    - Need to deal with Google Auto Fill Across Apps - **Jyoti to create ticket for RFC
    - Display currency - all teams will deal with this
    - Roadmap
    - Fee paper - tied to the legislation
    - PI planning agenda

----
Sept 17, 2021
----
- Action Items
    - Create CRM User stories - Kaine
    - Affiliation to more than one account - Thor to reaching out regarding design 
    - Test accounts in prod - SRE team to provide an explanation that POs can take to Ian B
    - Fee issue paper - Jyoti to forward email from Suzanne
    - Resourcing - Is Omid moving to SRE - Linda

- Standing Items
    - Program Kanban
    - PI Planning Board - Dependencies

- New Business
    - Process for assessing change impacts of items in the long term plan
    - Maturity assessment results

- Meeting Notes:
    - CRM - done
    - Thor has reached out
    - Test accounts - push
    - Fee issue paper - done
    - Omid - resourcing - push
    - Discussion about BA resources
        - ** Kaine/team to discuss long term options
    - Assessing change impacts
        - Change assessment impact tool used for current PI
        - Highlights system impacts and resourcing requirements
        - Home team have concerns about resourcing
        - Plan long term planning meetings twice per PI
        - **Kaine to look at providing a BA

----
Sept 10, 2021
----
- Action Items
    - Create CRM User stories - Kaine

- Standing Items
    - Program Kanban
    - PI Planning Board - Dependencies

- New Business
    - allow a business to be affiliated to more than one account
    - Test accounts in Prod
    - Should tickets be moved to Closed prior to release? Guidelines for moving from Done to Closed
    - Fee issue paper
    - BA resource discussion
    - digitial Credentials discussion
    - an issue was raised by staff
        - Staff note concern with clients incorporating Benefit Companies when they intended to set up a BC Limited Company. 
        - They have noted the additional staff effort involved when clients have difficulty pathfinding. A few considerations:
            - As I understand we don’t have links to where to go to register in Name results emails.
            - Clients cannot register with a Limited Company NR in the Benefit Company Incorporation filing.
    - Legal API changes for allowing multiple accounts to affiliate to a business 
    - BA resource discussion for Relationship team
    - Partner disucssions - One Stop and BCOL
    - Business Affiliation to multiple accounts
    - With auto affiliation of NR to a manage business dashboard discussion is needed on how to handle this for Ministry Accounts. With groups like SBC field offices they will never use the NR to complete the client filing.
    - PPR Transaction triggers PAD payment confirmation email even when search error prevents complete transaction#7340 
        - From Patrick: The refund request from PPR is properly reflected in the Transaction Details, but with no updates to the status after CC or BCOL refunds, the information presented to clients won't be accurate. I think this is a larger issue for refund processing status updates than just PPR

- Meeting Notes
    - Business affiliation to more then one account
        - OCM doing some research
        - Not estimated
        - **Thor to reaching out regarding design 
    - Test accounts in Prod
        - Brought up due to NRO shut-down
        - Melissa has one prod account
        - **SRE team to provide an explanation that POs can take to Ian B
    - Fee issue paper
        - **Jyoti to forward email from Suzanne
        - Simplifies fee structure
    - Issue raised by Staff
        - Julie will be arranging a meeting
    - Partner discussions
        - What is the timeline for the registration filings - Jan 2022
        - Carol has asked for a timeline for OneStop decommission 
    - PPR transaction triggers
        - Bug can be closed
    - Moving tickets from done to closed
        - All teams will move tickets to closed when POs have reviewed
    - Resourcing
        - **Is Almeed moving to SRE - Linda


----
Sept 3, 2021
----
- No Meeting

----
Aug 27, 2021
----
- No Meeting

----
Aug 20, 2021
----
- Action Items

- Standing Items
    - Program Kanban
    - PI Planning Board - Dependencies

- New Business
    - Review cost per sprint and discuss how to track
    - CRM user stories
    - Coming changes to Asset team
    - Currently amount audit
    - Teams support for BCOL NRO cutover
    - URL Update
    - Old business dashboard demo

- Meeting Notes
    - Review cost per sprint and discuss how to track
        - Kaine reviewed intention to apply a cost estimate to epics and themes
    - CRM user stories
        - Discussion about adopting a portion of CRM functionality
        - **Create user stories - Kaine
    - Coming changes to Asset team
        - Melissa moving to Assets as a PO - will be gradual
        - Kaine moving into Portfolio Director role
    - Currency amount audit
        - Different places in the app sees currency differently
        - Recommend just using dollar amount with some exceptions like shares
    - Teams support for BCOL NRO cutover
        - Linda created a teams chat and invited appropriate members
        - Used to answer any questions that people on the phone might have
    - URL Update
        - When are we moving to our URL
        - Will be using gov.bc.ca
        - This work is back on track but won't be completed for 6 months
    - Old business dashboard demo
        - Important that this is demoed to show auto-affiliation even though it's not in test
    - Cleaning up the nodes
        - Each team should groom this
        - Should start next week
    - **Meet with home team / Dwayne about procurement of resources in Sept - Kaine

----
Aug 13, 2021
----
- Action Items
    - Service Fee - no final answer yet - Linda to contact Kim Wiley **

- Standing Items
    - Program Kanban
    - PI Planning Board - Dependencies

- New Business
    - Need to deal with Google Auto Fill Across Apps Dependency
    - Return to work place

- Meeting Notes
    - Service Fee - answer emailed to both Jyoti and Kaine - Carol to decide / Amber also decided OED info
    - Ticket 8390
        - Relationship team will send a generic message and Entities/Assets will display
    - Google Auto Fill - look across the site and disable where it's still enabled
    - Linda ask gov't employees within modernization team asked to provide preference regarding return to work - deadline eod today
    - PI 11 planning - agreement on the provided agenda
----
Aug 6, 2021
----
- Action Items
    - Service Fee - no final answer yet - Linda to contact Kim Wiley **
    - Account Name Uniqueness- Jyoti to contact Finance and communication new approach
    - Name request dependency ticket - Linda to follow up with Melissa

- Standing Items
    - Program Kanban
    - PI Planning Board - Dependencies

- New Business
    - Staff search for fas/business/accounts
    - Portfolio Epic and Priorities - Kaine
        - Hand-offs
        - Maturity Assessment
        - Guiding Principles

- Meeting Notes
    - Service Fee - push
    - Account Name - Jyoti reached out and awaiting confirmation
    - Name Request - Linda followed up
    - Kaine discussed portfolio epic
        - Cost per team - first pass done by Jennifer
        - We'll reconvene to break costs down into sprints
        - Ultimately we'd like to determine costs for each of the portfolio themes
    - Staff search - plan developed during the design meeting
    - Mung will be away for 6 weeks starting Aug 9th 
----
July 30, 2021
----
- **Meeting Cancelled**
----
July 23, 2021
----
- New Business
    - Review the Program Kanban
    - Workflow for epics
- Meeting Notes:
    - Colin - meeting next week
    - Service Fee - carry over
    - Account Name - carry over
    - Speed demo - relationships set up, entities + assets still to do
    - Vacation calendar - pinned thread in registries channel
    - Name request dependency ticket - this is a big piece of work
        - Linda to follow up with Melissa **

----
July 16, 2021
----
- Action Items
    - Linda to follow up this week on COLIN migration
    - NRO - meetings this week, more meetings to follow on Monday **
    - Service Fee - no final answer yet - Linda to contact Kim Wiley **
 
- New Business
	- Account Name Uniqueness(Do we need to get any Finance Approval?) 
	- PI Planning
	- Should we move the sprint demo to Wednesday?

- Meeting Notes
    - Action Linda to follow up this week on COLIN migration **
    - NRO - meetings this week, more meetings to follow on Monday
        - We have the go-live date - Aug 30th  
    - Service Fee - no final answer yet - Linda to contact Kim Wiley **

    - Account Name Uniqueness(Do we need to get any Finance Approval?)
        - Instead of sending account name we are sending account id instead
        - This represents a change and account name would no longer be unique
        - How will this impact reporting
        - Action - Jyoti to contact Finance and communication new approach **
    - PI Planning
    - Should we move the sprint demo to Wednesday?
        - Raise during PI planning
        - Each team will set up speed demo on Monday - scrum masters to set up
----
July 9, 2021
----
- Action Items
    - Linda to follow up this week on COLIN migration
    - Linda to follow up on NRO migration
    - Service Fee Distribution - Linda to follow up with Carol 
    - Names Request Release and NRO decommission schedule decision

- New Business
    - Customer feedback KPI - Jennifer
    - PAD Settlement - Currently we are doing daily settlemnts for PAD, there have been concernes reaised from  admins and clerks who does the reconciliation, have raised concerns that its going to increase their work by 10 times as there would transactions in their bank account daily, compared to 3-4 times a month. Should we go forward with weekly reconciliation? 
    - CRM Project Kickoff(Ask from Carol)
    - Mainframe decommissioning moving forward
    - OCM PI Planning

- Meeting Notes
    - COLIN - push to next time **
    - NRO - meetings this week, more meetings to follow on Monday **
    - Service Fee - no final answer yet - Linda to contact Kim Wiley **
    - Customer Feedback - Kaine is working on this
        - Interim actions (hot jar) being taken until adoption of Service BC CRM
        - In the long roadmap in PI 11
        - Reports are for the DIO, change team, Cameron
    - PAD
        - Jyoti will recommend weekly reconciliation to Carol instead of daily 
        - Jennifer to add to tri-weekly agenda
    - Mainframe decommissioning 
        - Do we need the specific meeting going forward
        - Should continue with meeting
    - OCM PI Planning
        - Well received by the group
        - Add (major, minor etc) to the release plan

----
June 25, 2021
----
- Action Items
    - **Action** Linda to follow up this week on COLIN migration
    - **Action** Linda to follow up on NRO migration 

- New Business
    - Partner roadmap – status; who should own
    - How are folks feeling about the long-term planning process; purpose
    - Names Request Release and NRO decommission scheduled for the end of July

- Meeting Notes
    - Action Items
        - Action Linda to follow up this week on COLIN migration
            - Carry over to next week
        - Action Linda to follow up on NRO migration
            - Linda has set up meeting for NRO migration
        - Service Fee Distribution - Linda to follow up with Carol
            - Carry over to next week
    - New Business
        - Partner roadmap – status; who should own
            - Question came up during the discussion about Q1 capital reports
            - Partners are asking about the status of shutdowns and deadlines
            - Require a 6 - 12 month plan
            - Jyoti owns the partners that live on BCOL
            - Mostly dependent on Vital Stats
            - Related to our go to market plan for Entities
            - Distinction should be made between Onestop and the Hub
            - Intention should be to take the current roadmap and add in the additional partners
            - Add a stakeholder lens to the long term plan
        - How are folks feeling about the long-term planning process; purpose
            - Need to complete and then continue to update the long term plan
            - Should include the org book roadmap
            - Include this topic in discussion with Carol next Wednesday 
        - Names Request Release and NRO decommission scheduled for the end of July
            - **Action** - decision is pending NRO and staff meeting - Kaine and Linda to review remaining Names tickets

----
June 18, 2021
----
- Action Items
    -  API GW - Should we encourage brand new API users for using BCOL Drawdown account? ASCENTI has reached out for starting the process.
        - **Action** Jyoti to update epic and potentially create a ticket - review with Kaine, Sara and Duane
     - API GW - Should we encourage brand new API users for using BCOL Drawdown account? ASCENTI has reached out for starting the process.
        - **Action** Jyoti to update epic and potentially create a ticket - review with Kaine, Sara and Duane    - 

- Carry-over
    - One Month follow-up - (COLIN) Data migration - Revisit current state and planning ahead

- New Business
    - QA Resource Allocation(jyoti)
    - Service Fee Distribution(jyoti)

- Meeting Notes:
    - A1 - ticket is created - **Closed**
    - A2 - Kaine added the notification on RocketChat - **Closed**
    - **Action** Linda to follow up this week on COLIN migration
    - **Action** Linda to follow up on NRO migration 
    - QA Resource Allocation
        - How are we allocating resources between the teams
        - **Decision** - one per team - Riyaz to lead
    - Service Fee Distribution
        - One fee per distribution - preliminary decision
        - **Action** - Linda will follow-up with Carol
    - Build in more time - **closed**
----
June 11, 2021
----

- New Business
    - DoD for Epics - James
    - How are we tracking OPS ticket in a Sprint? New Ones, Left behind ones?
    - One Month follow-up - Only demo items in test + definition of done is that ticket must be closed by QA (e.g. Riaz) + push all tickets that are not closed to the next milestone on Tuesday afternoon
    - One Month follow-up - (COLIN) Data migration - Revisit current state and planning ahead
    - API GW - Should we encourage brand new API users for using BCOL Drawdown account? ASCENTI has reached out for starting the process.
    - How do we record epics for One Stop OCM - Trish
    - Have some people trained on how to turn the app off - Jason / Kaine

- **Meeting Notes**
- Carry-over
    - DoD for Epics – James
        - **Decision** close or move stories to a new epic after prod release
    - How are we tracking OPS ticket in a Sprint? New Ones, Left behind ones?
        - Jason has done some investigation of overall quality
        - Right now ops get pulled into a sprint if they are going to be closed, or if they are staying with the team member until they are closed
        - The amount of effort teams are spending on Ops tickets is getting lost
        - **Decision** report the % of ops worked at the team level and role it up to the program level and track number of bugs completed

- New Business
    - One Month follow-up - Only demo items in test + definition of done is that ticket must be closed by QA (e.g. Riaz) + push all tickets that are not closed to the next milestone on Tuesday afternoon
        - Teams are following this practice
    - One Month follow-up - (COLIN) Data migration - Revisit current state and planning ahead
        - **push to next week**
    - API GW - Should we encourage brand new API users for using BCOL Drawdown account? ASCENTI has reached out for starting the process.
        - **Action** Jyoti to update epic and potentially create a ticket - review with Kaine, Sara and Duane
    - How do we record epics for One Stop OCM – Trish
        - Create epics that can be completed within a PI
    - Have some people trained on how to turn the app off - Jason / Kaine
        - **Action** Discuss at next SRE meeting - Kaine to add to Rocketchat
    - Is the PI on track?
    - New Hires and IDM
        - A number of hires have been made
        - Kaine chatted with Jason Owens
----
June 4, 2021
----
- New Business
    - Sprint Demo agenda and metrics
    - DoD for Epics - James
    - Business Information Update - Jyoti
    	- Jyoti to bring up Business Size and Legal Business Name(Would we allow clients typing ahead post the search results?)
    - BA OPS Rotation
    - Is the PI on track?

- **Meeting Notes**
- Outstanding Action Items
    - None
- Possible carry-over discussion
    - Session schedule & plan for BCOL clients – Trish - **Closed**
- New Business
    - Sprint Demo agenda and metrics
        - **Decision** - Add demo agenda and send out to stakeholders prior to meeting
        - 15 mins for demos
        - Perhaps open up to other stakeholders - look at this again later
        - PI Planning - just show the visual
    - DoD for Epics – James
    - Business Information Update - Jyoti
        - Jyoti to bring up Business Size and Legal Business Name(Would we allow clients typing ahead post the search results?)
    - BA OPS Rotation
        - Should we have BA's rotate in ops **DECISION** yes
----
May 28, 2021
----
- Outstanding Action Items
    - Email outputs - find a designer
    - Kaine to follow up with Stephen re: Digital Credentials
    - Kaine will create a "frozen" story (re: freezing a business)
    - re:BC Reg Home page - Kaine will groom this next sprint and build it the sprint after within Assets
    - re:ICBC - Ian will send the version that he has now
    - Jyoti will work with Kaine to coordinate an upgraded Zoom account (500 people) and let Trish know when there's an invite that can be sent out
    - re: Migration - Jennifer will send James a note on this item - Note: we will revisit this in a month - Done. On the agenda for next month
  
- New Business
    - Session schedule & plan for BCOL clients Trish
    - Receipt for 7716. Initial AC added details into transactions for Name Request and PPR search. Further changes to template which cause additional work on API to customize 	blue header for each app. Recommendation to go ahead with transaction component of ticket for Names / PPR. If further changes are needed for blue bar we can look at 		generic option or can Names build their customized option?

- Updates on Owned Risks (Resolved, Mitigated, Accepted)
    - Partner Reluctance - re: public partners are slow to migrate from BCOL to APIs  - P.O.s and OCM team own
    - CAS - re: CAS may not be able to support FAS; may be too slow  - Jyoti
    - Help Desk call mgmt + supporting spikes in business volume- OCM team
        - Trish has been soliciting feedback weekly
    - Time Constraints / Staffing Changes - Kaine
    - Call Center Rebid - P.O.s
    - Losing key CM resource - ELT
    - Tech Planning - James - **RESOLVED** - Thor invited to PO Sync
    - API keys - Kaine - **DEFERRED** - Hold until fall
    - Asset Data Migration re:completing as big bang - Kaine
    - Team Task Integration Complexity (Lots of puzzles) - P.O.s **MITIGATED** - Increased Planning

- Updates on PI Planning Action Items
    - More dedicated resources to triage & work on Ops tickets
    - Build in more time if there are changes in team composition
    - Better estimating/ identifying scope
    - Training delivery. We should embed staff championing the functionality through our sprint sycles
    - Aligning with leveraged product directions

- **Meeting Notes:**
- Outstanding Action Items
    - Email outputs - find a designer
        - Posting is up - closes today
        - Looking through the submissions
    - Kaine to follow up with Stephen re: Digital Credentials
        - closed
    - Kaine will create a "frozen" story (re: freezing a business)
        - Added 7584 - closed
    - re:BC Reg Home page - Kaine will groom this next sprint and build it the sprint after within Assets
        - Closed - added to sprint
    - re:ICBC - Ian will send the version that he has now
        - Closed
    - Jyoti will work with Kaine to coordinate an upgraded Zoom account (500 people) and let Trish know when there's an invite that can be sent out
        - Closed - has been created
    - re: Migration - Jennifer will send James a note on this item - Note: we will revisit this in a month - Done. On the agenda for next month
- New Business
    - Session schedule & plan for BCOL clients - Trish
        - Trish confirmed the presenters for the upcoming engagement sessions
        - Both Kaine and Linda would like to attend
        - Trish to schedule 'account related' session to later in order to provide the Relationships team time to prepare
    - Receipt for 7716. Initial AC added details into transactions for Name Request and PPR search. Further changes to template which cause additional work on API to customize blue header for each app. Recommendation to go ahead with transaction component of ticket for Names / PPR. If further changes are needed for blue bar we can look at generic option or can Names build their customized option?
        - Recommendation accepted
    - BCOL home page - Trish
        - Looking to put some info on the BCOL home page to inform clients about the modernization
        - Trish to change Cooperatives to Cooperative Associations
        
- Updates on Owned Risks (Resolved, Mitigated, Accepted)
    - Partner Reluctance - P.O.s and OCM team own
    - CAS - re:what can it support and associated delay - Jyoti
    - Help Desk call mgmt + supporting spikes in business volume- OCM team
        - Trish has been soliciting feedback weekly
    - Time Constraints / Staffing Changes - Kaine
    - Call Center Rebid - P.O.s
    - Losing key CM resource - ELT
        - **Mags is joining the team - RESOLVED**
    - Tech Planning - James - RESOLVED - Thor invited to PO Sync
    - API keys - Kaine - DEFERRED - Hold until fall
    - Data Migration re:completing as big bang - Kaine
    - Team Task Integration Complexity (Lots of puzzles) - P.O.s
- Updates on PI Planning Action Items - No changes
    - More dedicated resources to triage & work on Ops tickets
        - Eve joined and is ramping up
        - Greg is coming back next week
    - Build in more time if there are changes in team composition
    - Better estimating/ identifying scope
    - Training delivery. We should embed staff championing the functionality through our sprint cycles
    - Aligning with leveraged product directions
----
May 14, 2021
----
- Outstanding Action Items
    - Jason to come up with best practices for Rocket Chat notifications - Resolved (Jason will follow up within Entities)
    - Email outputs - find a designer - interviews pending
    - Action - Jyoti to contact Roy and Scott - Resolved
    - Action - Expand meeting to 1 hour and go through a round table - James to reach out to Jason and Sateesh - Resolved (this will essentially be a 1 hr dev sprint demo, not a dev guild)
    - Decision - only demo items in test + definition of done is that ticket must be closed by QA (e.g. Riaz) + push all tickets that are not closed to the next milestone on Tuesday afternoon - Resolved and accepted - Note: we will revisit this in a month
    - Action - Ian to set up meeting with Kaine, Linda, Thor re: Beneficial Ownership - Resolved
    - Action - Ian to follow up with Stephen re: Digital Credentials - Resolved - Action: Kaine will follow up on this email

- New business
    - Jyoti to discuss freezing a business - Action: Kaine will create a "frozen" story
    - BC Reg Home page discussion - Jyoti - Action: Kaine will groom this next sprint and build it the sprint after within Assets
    - Folio number - Resolved with note: This is stored in the business profile and we have what we need
    - Jennifer - ICBC - Action: Ian will send the version that he has now
    - Jennifer - Onboarding - Resolved with note: ADM approval is the next step, then she can do OCM work as part of onboarding before working with Kaine
    - Jyoti - Design for FAS - Resolved with note: We will continue as we do with the $10 threshold for refunds and this money is being used for staff filing and nothing else (not applied as an account credit to be used for anything else on the system)
    - Trish - Meeting capacity - Action: Jyoti will work with Kaine to coordinate an upgraded Zoom account (500 people) and let Trish know when there's an invite that can be sent out
    - Jennifer - Data migration - Action: Kaine & Linda will go through the list of what has been done so far - Action: Jennifer will send James a note on this item - Note: we will revisit this in a month



----
May 7, 2021
----
- Outstanding Action Items
    - Jason to come up with best practices for Rocket Chat notifications
    - Jyoti to set up a meeting with Kaine, Linda and someone from home office re: QA resource
    - Jyoti will contact Roy, Joanna/Amber re: 7386
    - Determine if we should add another QA resource to the team. (Kaine)
- New Business
    - Jyoti to discuss 7412
    - Tickets in each sprint to track and create value for the Dev Tech Demo - Jason
    - Upcoming releases
----
- Meeting Notes
    - Action From Last Meeting
        - Jason to come up with best practices for Rocket Chat notifications
        - Jyoti to set up a meeting with Kaine, Linda and someone from home office re: QA resource - Done
        - Jyoti will contact Roy, Joanna/Amber re: 7386 - Done
        - Determine if we should add another QA resource to the team. (Kaine) - Done
        - Email outputs - find a designer - interviews pending
    - New Business
        - Jyoti to discuss 7412
            - Action - Jyoti to contact Roy and Scott
        - Tickets in each sprint to track and create value for the Dev Tech Demo - Jason
            - Action - Expand meeting to 1 hours and go through a round table - James to reach out to Jason and Sateesh
        - Upcoming releases
        - CAS
            - Discussion started on CAS
        - Moving some of the work away from call center to Maximus - conversation is underway
        - Conversations underway to backfill Simona
        - Should our deployment process by reviewed
            - Should the definition of 'done' change
            - Decision - only demo items in test + definition of done is that ticket must be closed by QA (e.g. Riaz) + push all tickets that are not closed to the next milestone on Tuesday afternoon
        - Concept case for beneficial ownership
            - Started by Ian
            - Action - Ian to set up meeting with Kaine, Linda, Thor
            - Due at the end of July
        - Digital credentials
            - Action - Ian to follow up with Stephen
----
April 30, 2021
----
- Outstanding Action Items
    - Jyoti to check if team can do the PRs and size of this task
    - [Jyoti] - Team confirmed that they can review the PR's. This approach should be good
    - Jason to come with best practices for Rocket Chat notifications
-  Updates to PAD email. Issues in decimal point / content / design.
 	- 7374 created. Who will work on this?
 	- Process for wording review?
-  Review all our email outputs - Kaine
-  Determine if we should add another QA resource to the team. (Kaine)
-  Longer term planning meeting on May 12th
-  Proposed agenda for next PI planning
-  Mural vs Miro
-  Jyoti to provide an update on API Key design
-  Jyoti to discuss 7386
-  Zenhub labels for the PI & sprints vs milestones (Jason)
-  Updates on Owned Risks
    - Partner Reluctance - P.O.s and OCM team own 
	- CAS - Jyoti
	- Help Desk call mgmt + supporting spikes in business volume- OCM team
	- Time Constraints / Staffing Changes - Kaine
	- Call Center Rebid - P.O.s
	- Losing key CM resource - ELT
	- Tech Planning - James
	- API keys - Kaine
	- Data Migration - Kaine
	- Team Task Integration Complexity (Lots of puzzles) - P.O.s
----
- Meeting Notes
    - Actions from Last Time
        - Jyoti to check if team can do the PRs and size of this task
            - [Jyoti] - Team confirmed that they can review the PR's. This approach should be good
        - Jason to come with best practices for Rocket Chat notifications
            - Carry over to next time
    - Previous Meeting - no further discussion
    - New Business
        - Updates to PAD email. Issues in decimal point / content / design.
            - Ticket has been created
            - 7374 created. Who will work on this?
            - Patrick H will look at this
            - Process for wording review?
        - Review all our email outputs - Kaine
            - Ticket created to review all email outputs - 7380
            - Patrick will be working on this
        - Determine if we should add another QA resource to the team. (Kaine)
            - BA.s are doing QA right now
            - Perhaps add a QA person working under Riaz
            - Also hiring a Ux person
            - A multi-skilled resource would be nice to have (with OCM skills as well)
            - Action - Jyoti to set up a meeting with Kaine, Linda and someone from home office
        - Longer term planning meeting on May 12th
            - Include Olisa
        - Proposed agenda for next PI planning
            - Is there a cost factor
            - Planning effort in the last sprint
            - Trish would need to be there
            - Discussion to continue
        - Mural vs Miro
            - No concern
        - Jyoti to provide an update on API Key design
            - Should this be added to the PI?
            - Hold off until fall
        - Jyoti to discuss 7386
            - How should this be prioritized for the Ux team
            - What changes do we need to make
            - Action - Jyoti will contact Roy, Joanna/Amber
        - Zenhub labels
            - Tracking to PI 9 as well as tracking to the release
            - Don't see value in adding sprints
            - Renumbering milestones to match PI iteration number
        - Updates on Owned Risks
            - Partner Reluctance - P.O.s and OCM team own
            - CAS - Jyoti
            - Help Desk call mgmt + supporting spikes in business volume- OCM team
                - Trish has been soliciting feedback weekly
            - Time Constraints / Staffing Changes - Kaine
            - Call Center Rebid - P.O.s
            - Losing key CM resource - ELT
            - Tech Planning - James
                - Thor invited to scrum of scrum 
            - API keys - Kaine
            - Data Migration - Kaine
            - Team Task Integration Complexity (Lots of puzzles) - P.O.s
----
April 23, 2021
----
- Slack - Linda
- Meeting cadence(UX Guild/Sprint planning)
- Jyoti to discus 6883
- Names release upcoming on Apr 30
- Kaine - admins
----
- Meeting Notes:
    - Actions
        - Jyoti to check if team can do the PRs and size of this task
        - Jason to come with best practices for Rocket Chat notifications
    - Previous Agenda
        - Manage Business Repository move to Entity Side? - Jyoti to discusss
            - Action - Jyoti to check if team can do the PRs and size of this task
        - Process for follow up with angry clients (most recent email from laywer noting strong frustration and need to be walked through)
            - Action closed
        - BCeID - Jennifer
        - April 25th service interruptions - #7167 - Linda
            - Action closed
            - App will be shut down at 5 am and brought back up at 10 am - Patrick
        - Folio Numbers - #4286 - Linda
    - New Business
        - Slack - Linda
            - Came up in Entities retro
            - Rocket chat cumbersome - notifications do not pop up
            - Lab couldn't come to an agreement with terms of service
            - Action - Jason to come with best practices for notifications
        - Meeting cadence(UX Guild/Sprint planning)
            - An ask that sprint planning meetings be aligned so that Trish can attend both Entities and Relationships planning
            - Perhaps UX Guild should be moved to the afternoon
            - Move the sprint planning meeting accordingly
        - Jyoti to discus 6883
            - What is actually being requested - more in discussion at the moment - Assets team will build
        - Release planning for NameX
            - Who should be engaged - Thor, Kyle, Linda, Ryaz, Kaine, Sienna
            - Action - Kaine to provide James the members that should be engaged for the Apr 30 release
        - Kaine - admin flow, additional admi
            - Do we want to continue creating account names


----
April 16, 2021
----
- Manage Business Repository move to Entity Side? - Jyoti to discusss
- Process for follow up with angry clients (most recent email from laywer noting strong frustration and need to be walked through)
- BCeID - Jennifer
- April 25th service interruptions - #7167 - Linda
- Folio Numbers - #4286 - Linda
----
Meeting Notes:
- Previous Agenda
    - Updates to the Disaster Recovery Plan - Ian
        - Ticket created
    - Go/No-GO for OCP Migration on Sunday
        - Large impact to NameX - super slow
        - Patrick has reached out to the lab for support
        - Issue might have to be raised with Carol - perhaps don't escalate right away
    - Release Management - James
        - Jyoti has cleared all 
        - **Action - Linda, Kaine to look at releases for that should be closed**
    - Dev resources moving from home team - Jennifer
    - PI Planning

- New Business
    - Manage Business Repository move to Entity Side? - Jyoti to discuss
        - Looking to start a managed company on the managed dashboard
        - **Action - Jyoti to check if team can do the PRs and size of this task**
    - Process for follow up with angry clients (most recent email from lawyer noting strong frustration and need to be walked through)
        - Trish has some thoughts about where this should live
        - Melissa would like to see a single group look after these issues
        - Ian - The CCII tool will be used in the future
        - **Action - Kaine will speak with Cameron / let Trish know whether to follow up with Elisa**
        - We're getting a lot of tier 1 questions - too much volume for Trish and team to answer
    - BCeID - Jennifer
        - Is there any impact to the program or to our plans
        - Carol and Ian held a meeting to discuss BCeID - concerns about it going away with One Stop - there is an action for Ian and IDM to connect - will need Melissa's involvement
    - April 25th service interruptions - #7167 - Linda
        - Data center in Kelowna will be doing some work on the 25th and we can expect a 30 min service interruption
        - We don't now the exact timing
        - **Action- Linda to email team leads**
        - Thor has indicated that we might need a long term decision
    - Folio Numbers - #4286 - Linda
        - More clarification needed re: folio on file

- Non Agenda Items
    - None
----
April 9, 2021
----
- Updates to the Disaster Recovery Plan - Ian
- Go/No-GO for OCP Migration on Sunday
- Release Management - James
- Dev resources moving to home team - Jennifer
- PI Planning
----
Meeting Notes:
- Previous Agenda
    - Cross-team Ops Rotation - Ensure alignment from POs on desired outcome (as well as the resourcing required)
        - Ian will release 2 devs end of April
        - Have devs login to teams chat
        - 2 devs available for names release - for 2 weeks
            - This will potentially impact our deliverable velocity
    - Business Registry location for training videos - 6580. Present approach to other teams. Could be used as an approach for resources for partner apps?
        - Hoping to have Relationships sprint planning move to an earlier time
    - Migrating PROD to OCP4 - either full or dry-run on April 11
    - Migrating PROD to OCP4 - final date if not done on the 11th, April 18th
----
- New Business
    - Updates to the Disaster Recovery Plan - Ian
        - Lorna has been making updates but we need someone to fill in gaps
        - After the migration
        - **Action - Melissa will create a ticket**
    - Go/No-GO for OCP Migration on Sunday
        - Relationship and Entities team have been testing
        - Patrick has been awesome responding to issues
        - Decision is to go ahead
        - We need Richard and Reaz
        - **Action - Linda will notify Ian Bott**
        - Linda has created notice of a communication
        - Sienna will be drafting communication
    - Release Management - James
        - Need help identifying tickets 
        - **Action - Jyoti, Linda, Kaine to look at releases for that should be closed by next PO sync**
        - **Action - clean- up existing tickets by next PO sync (best efforts)**
    - Dev resources moving to home team - Jennifer
    - PI Planning
----
- Non Agenda Items
    - Kaine - Roy, Linda, Scott - how will PPR be accessed
        - Making PPR mandatory for a premium account
        - Scott and Roy will take away and review Wednesday
    - Jyoti asked that the P.Os send him dependencies prior to the next PI 

----
April 1, 2021
----

- Cross-team Ops Rotation - Ensure alignment from POs on desired outcome (as well as the resourcing required)
- Business Registry location for training videos - 6580. Present approach to other teams. Could be used as an approach for resources for partner apps?
- Migrating PROD to OCP4 - either full or dry-run on April 11
- Migrating PROD to OCP4 - final date if not done on the 11th, April 18th

Meeting Notes:
-  Business carried forward from the previous meeting
    -  Team designs and use cases and how we interact across our teams -Kaine
        -  first meeting conducted
        -  Multiple Account Creation Issues - Potential Solution #6921 -Kaine
        -  Roy will bring up in Ux forum
    -  Determine Published Availability of Service#6929 -Kaine
        -  created ticket but no further action yet 
        -  Looking at up time
    -  Business Registry Page Log In Update#6912 - Jyoti --> Related to 6921
        -  This one is done - not sure if in prod 
        -  With Jyoti
        -  Can go in anytime
    -  Third Party Access Request and Invite for Users #6881 - Jyoti
        -  Got all req'ts captured in a ticket 
        -  Jyoti - Look at from a design standpoint and see how it fits into next PI
    -  Jira demo - Ian
        -  There is reporting in Zenhub just not seen by Pos 
        -  Would help to have access to reports
        -  Kaine to follow up
    -  payment per search per filing #6955
        -  Linda update - should we charge $1 fees - seems punitive - not concerned about revenue loss
----
-  New Business
    -  Cross-team Ops Rotation - Ensure alignment from POs on desired outcome (as well as the resourcing required) 
        -  slower than expected response time in ops rotation 
        -  Expect 15 min response unless on lunch or break
        -  Can't work on sprint activities if on ops rotation
    -  Business Registry location for training videos - 6580. Present approach to other teams. Could be used as an approach for resources for partner apps? 
        -  topic for next build 
        -  Have a location on our app where we can have training videos
        -  Make sure Scott and Tracy have gone through it
        -  Talk about in next Ux guild
        -  Individual help links where required - each should take the user to one page
        -  A year ago Scott presented help strategy - Linda will look for it
    -  Migrating PROD to OCP4 - either full or dry-run on April 11
    -  Migrating PROD to OCP4 - final date if not done on the 11th, April 18th 
        -  FYI in the channel 
        -  Last night everything was migrated to test env
        -  Change window on Tuesday night so we should move to prod on Tuesday night
        -  Final migration on Apr 11
        -  Hold off on 2.0 until week of 12th
        -  Might need to divert some resources for end-to-end testing 
        -  Friday Apr 9 should make go or no-go decision
        -  Will need people to perform spot checking after migration is complete on the 11th 
            -  Perhaps Janice
            -  Trish put her name forward
            -  Linda to ask Richard if he can assist
----
-  Non Agenda Item Discussed 
    -  Scrum Master 
        -  1 has been chosen - will start onboarding next week
    -  Potential we encounter insufficient memory 
        -  Stripping functionality from the name request app will free up space
        -  Kaine - not a risk at this point
    -  In limbo whether we can use cloud services - Kaine will follow up with Genevieve
    -  Ops are creating a drag on our ability to deliver features (perhaps 20%)
    -  Technical debt - can we do anything about project X creating technical debt - continual discussion - will have to address at our next PI plan
    -  Releases to staff and public at the same time - stagger releases in order for staff to have awareness prior to release to the public - Linda - for IA release some bugs could have been caught if releases were staggered - give staff a week or two head start - first two days when in test staff should report any bugs and if no bugs are found then move to prod - Trish, we should plan for training at least a week in advance - plan 2 weeks of staff awareness prior to release to the public
    -  Are there metrics around web chat - Lisa/Laurel managing - Trying to get the greatest value our of it - right now can only be on the things that they support


----
Mar 26, 2021
----

- Team designs and use cases and how we interact across our teams -Kaine
    - a common agreement to treat other teams a stakeholders, 
    - Jason to followup with UX team to get invite himself and POS 
    - POs to alter to attanding
- Multiple Account Creation Issues - Potential Solution #6921     -Kaine
    - Jyoti to ask roy to look in to it
    - Jyoti to create a ticket do some analysis/ understanding on restrictiong BC users on Single accounts
- Determine Published Availability of Service#6929  -Kaine
- Business Registry Page Log In Update#6912  - Jyoti  -->   Related to 6921
- Third Party Access Request and Invite for Users #6881 - Jyoti 
    - Tuesday Jyoti have a disussion with Kaine to get some req analysis   
- Jira demo - Ian
    - All POs have some review on some feature and feasibility of Jira over Zenhub.    
- Namespaces EDB: Minio#6626
- payment per search per filing  #6955
   



----
Mar 19, 2021
----

- Sprint metrics for different teams - Jyoti
    - velocity,Burndown, 
    - PI tag in Zen Hub (Future action item)
    - Follow up with all po to get some common Metrics - jyoti
    - jyoti to circulate templet for sprint demo
- IE-11 Version Issue as it not supporting the application
    - This is been implemented in test by Patrick -- pushed in to prod 
    - Jyoti to check with partick -- 6764
- Ticket 4808 Service Fee being charged for filings which are comnbined - Jyoti
    - check with carol about the Fee and some analysis on Potential revenue loss - Linda & Kaine
- Brief discussion on how teams communicate release dates that get pushed out -- contribute better Agile way of working     -Trish
- Demo of account set up flow / selection of partner services. Given the soft launch for PPR we need to ensure there is knowledge sharing for designs and alignment for   timelines   - Melissa
    - create a 3rd party authentication ticket -Kaine






----
Mar 12, 2021
----
- PI planning tracking
- Risk raised in Tri-weekly status report - Jyoti
    -  Jyoti to check with Kiane on his inputs
- Reciept design for PAD and other payment options - Jyoti
- Namespace EDB Minio - Jyoti on Openshift migration
-   - jyoti to reach out to Richard
- Reporting out for Digital investment office - Status report discussion
    - Ian to talk with Jennifer and we will discuss this topic on Monday 
----
Mar 05, 2021
----
- PI Planning tracking
- Scott and Jeremy to present the update on Homepage
    - Kaine to book a meeting for next Monday ie. Mar 8  
- Sprint report out - Ian
- Afflication history on Entity Dshboard - Jyoti
    - Roy to work with Work With Scott on this
- New Registries Ops channel 
    - Chandra to work with SRE team on having a Github library for OPS work
- Sprint with Us March 25&26 - Request for code evaluator
    - Carol to decide on Patrick's availability
- Items at the Lab
    - All the Dev's need to take back their personal item
    - Jyoti to connect with Loren on getting his stuff back 
- Review of cross-team ops rotation to begin next sprint - Jason
- UX alignment
    - To have more alignment btween UX team
    - Jyoti to book a meting with ROy and Kaine regarding Roy future work
    - Jyoti and Kaine and Lind to meet with UX folks for alignment
- Refund discussion for premium account
    - Melissa to create a ticket and jyoti to have it groomed in our gorrming next week
- NSF 
----
Feb 26, 2021
----
- PI plannign tracking
    - Linda and Jyoti to update the release planning board wrt the changes on the PI board
    - Linda to create a dependency ticket - 6651
- (Trish) Name Request Support
    - Suggested an approach for Contact us page. To provide a simplistic contact details based on their account type
    - Can we remove the BC registry email with Service desk?
    - Trish to create a ticket and have update from Olisa on the ticket
- Operation process
    - Jyoti to escalate the issues from PayBC
- Project X - Ticket 3584
----
Feb 19, 2021
----
- Look into the high priority bug(6529)
    -  Jyoti to bring forward in the standup meeting on Monday
- **Hot Jar** - Kaine is working with Ian to get the approval. There might be some work for Relationship once its ready
- Jamstack for Business Registry
    - Is Jamstack capable enough to know that status of user?
    - Loren to update the question for Thor in the ticket for Business Registry home page
- Usage of Custom V2 - are we heading in the right direction?
    - Relationship uses the out of box Vuetify. Entities team have used some customization
    - For having the consistency across the application, Vuetify has to be updated. 
    - We should have a discussion if the team across need to update
    - We need to identify which are the custom Vuetify components
        - We can ask Genevieve to do this. Jyoti to reach out to Suzanne directly.
- Rework on reciept work 
    - Jyoti to bring this forward in UI/UX channel
- BC Registry Home Page discussion
    - Direction was to go through Home page for PPR
    - Feature flag implementation is in place to restrict the access to 30 uers from Home page to PPR
- Kaine to walkthrough the NR flow(regarding the payment issues noted when NR is getting created but no payment is taken)
    - Name request is created right when the user clicks on the Create pyament
- Premium Payment refund
    - Whats will the button do?
    - May be the button can be suppressed in the mean time 
----
Feb 12, 2021
----
1. Design walkthrough for PAD Reciepts - Melissa to walk through
    - "Payment Authorization" instead of "Payment Acknowledgement" 
    - Linda to get the confirmation on giving the outputs right away after PAD payment confirmation
    - Planned for Feb 21st
    - Design links below:
        - https://preview.uxpin.com/7943b481e252f700ef635c8f9a60fc76107cdba3#/pages/136315323/simulate/no-panels 
        - https://preview.uxpin.com/7943b481e252f700ef635c8f9a60fc76107cdba3#/pages/136318897/simulate/no-panels
        - https://preview.uxpin.com/7943b481e252f700ef635c8f9a60fc76107cdba3#/pages/136386649/simulate/no-panels
        - https://preview.uxpin.com/7943b481e252f700ef635c8f9a60fc76107cdba3#/pages/136386561/simulate/no-panels
1. Planning Open Shift platform migration in the sprint 50
    - For Auth namespace migration - Lear and Names Space is dependency
    - Linda to Talk to richard
1. Staff calendar of events, for all projects
    - Creating the Trello Board for looking into calendar view of releases and milestones
1. Pending Payment Cleanup
    - There are still some pending payments from Jan 9th
    - Kaine/Thor are discussing some reporting options. We might tap into Sumesh time
    - Linda to take a look at the pending data
1. Staff Payment in Name Request - dependency for Sprint 50
    - For Routing slip, there is no invoice since there is no connection with FAS
    - If its BC Online Account - Whats going to happen?
    - What about Premium Account - PAD payment setup?
1. Relevant Risks and Action items from PI planning
    - 
1. PI Board - To see changes if any
----
Feb 05, 2021
----
1. PI Planning Delivery readiness
    - Looks good for next 2 sprints for both the team, Plan is updated.
1. Do we have a plan B in case Open Shift upgrade work goes away? - From release planning meeting
    - This work has to be done no matter when, so no requirement of Plan B
    - Linda to check with Richard and Patrick around creating a checklist in Zenhub
1. Creating a ticket to show some messages in intercept UI, this case also can be added there if the UX agrees. - Payment issues
1. Credit card messaging
    - Scott and Roy to discuss Payment intercept messaging
1. Pay BC SLA
    - Loren to add the feedback from Kaine, Melissa and Ian, circle it back to the team and then take it to Carol on Monday.
1. Staff Comment Quick Demo
    - Add this in the tech review topic
1. Ticket added To create the URL's
    - SRE team to take it further
----
Jan 29, 2021
----
1. Long term planning readiness for Monday Morning
1. PI Planning Delivery readiness
1. Modernization Status report
1. Credit card discussion
1. Dependency ticket: https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/6236

----
Jan 22, 2021
----
1. Registries audit scan - Linda
    - IMB and MISO have recommended annual scan of application
    - We provide test URL and the tool runs through application
    - Tool looks for vulnerability
    - Scan takes about a day(overnight)
    - Proposed date for Scannig - 20th and 21st Feb
    - If on weekdays - 22nd and 23rd as proposed date
    - Amit to send the proposed date
    - Relationship to handle the disabling of MFA during the scan period
1. Post martum on how to deal with Prod issues in future
    - Thor and Sumesh to look at scanning to know before hand when application is broken
        - Task this to SRE group and ask them to present option in next PO sync
    - Options:
        - Constant monitoring 
        - Have a prioritized(pre-defined)group for sending payment related issues
        - For Any P1, IT OPS to highlight the Priority/Severity
            - Update the distribution list which IT OPS sent for P1 issues
                - Distribution list:
                 - Business Owner,BA, Key Dev's
                 - Update the existing Distribution list For outages of Modernized app
                    - Melissa, Trish and Sienna to action this.
                - Jump on to a call when its P1
        - Teams channel for discussing NR related ticket.
            - Channel should be closed by end of Next Sprint
            - Trish to handle this part
1. NR Refunds
    - Linda to send a communincation to Sinead
    - MOre stuff to do for Linda
    - Confirm with Thor - what status we are leaving the resuest in?
1. How the Pro data users access the API: Manual vs Automated 
    - Nice to have the automated access. The money spent is not worth for the number of users
    - Is there another way to do this which saves us the cost? - Thor and Sumesh to look into this. Note that this is not the current scope of PI
    - Meeting with Thor, Sumesh, Kaine and Loren for this- Jyoti to book the meeting early next week
1. BC Registry Page work
    - We have a header for Product selector(currently featuer flagged) - This can stay as feature flagged
    - Go ahead with Simpler design with the products which we have launched or we are going to launch(PPR, Busines Registry and Vital Stats)
        - Check with Ian A in the release plannig meeting that we wont be using it for Marketing
        - When is this suppose to go-live? 
            - to Discuss with Kaine in NExt PO Sync
            - Are the BReadcrumbs common component? - Linda to ask Scott
            - Breadcrumbs need to be updated from BC Regitry to other page
1. Updating the milestones on the roadmap(unclog bigger milestones)
    - Jyoti to bring this up after Long term planning in PO Sync
1. For long term planning
    - Loren team to do some research on One Stop and FAS
----
Jan 15, 2021
----
1.  Discuss the PI Board update in the PO Sync - Jyoti
    - NRO Dependency on government accounts
      - This still has to be figured out
    - Appetitie for onboarding any Public partners
      - Earliest is April(Vital Stats)
    - Move the password reset epic before Journal Voucher
      - JV has to be done early, because of time it gets to complete  the FRCR Review
1. Operationalize Refund process - Melissa
    1. We need to figure out a plan for Ops tickets across all teams - Jason
      - There are number of channels through which Refund requests are coming in
      - Every refund item would be tagged in a ticket
      - If the colume continue, BA's can work on the Phython noteboook
      - If the volume increases, create a feature in Name Request for sending email to CAS and ITOPS
1. Create  reports on payments. Can show how many Online banking payments are made, cc, pad and bcol type of thing and get generated daily
      - Amit/Melissa to work with Steven using jupiter Notebook
1. Requests for “FR CR Reviews” - Jason
1. Dependency Tickets
  - https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/5331
    - To bring the topic again with team - Jason
  - https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/5801
    - Jyoti to book a meeting across dev teams
----
Dec 18, 2021
----
  - IAAS has communicated they may not be able to get signoff on Registries and CAS's FRCR in time for January 17 risk date. 
    - 6 weeks review period has been asked for FRCR - Financial Risk and Control Review. Should be signed off by controller general.
    - Has been escalated to Carol/Bev
    - Steering committee on Jan 14th where the Go/No-Go decission will be taken
    - ADM for CAS is the ADM for the review, so likely hood of getting this extended is very little
    - There is no Impact t moving the release date for payment. 
  - As we expand services there is a risk we won’t have enough memory available to run apps efficiently.
    - There is some memory created
  - Not getting cloud access will impact how we store data and its associated costs. It is and will continue to impact creating a full data lake service.
    - There is some work being done by Greg. 
    - Some cordination work required
    - Monitor for few weeks and discuss again in few week
  - NR issues with payment. We can discuss how we handle dependencies for existing endpoints to ensure the implementation of what is already built is captured
    - Jyoti and Jason to work to avoid this in future.
  - Update on the Card Reader retirement
    - Shutting off by Feb 8th
    - If they already have a card reader then its fine, but nothing new
    - Cameron's team is asking for option - the only thing availbale is paper filing
    - Carol has very less interest in other system solution
    - Next Steps: Paper filign is doable. Lets bring this up in new year.
            - Add this in new year PO Sync agenda - Jan 8th 
            - Other option is to send the client to D&D
  - Auditing 'no fee' payments has been raised a gap in our financial controls by the auditor.
    - Team to create a report and review the report on quaterly basis
  - Melissa to bring up 5790
    - Comment updated in ZenHub
  - Dependency for Payment Release
    - AMit and Melissa to scan their dependency list and flag "Must" have ones to LInda and Jyoti by Monday so that it can be accomodated in the next Sprint(46)
  - Having all the OCM taks on ZenHub and tagging it to release
    - All Agreed. No concerns from anyone.
----
Dec 11, 2021
----
* Discuss the support for release - Name Request
   - Do we need a dedicated line?
      - Having a Teams channel/chat
      - Jump to Video when required
      - Kaine/Linda/Sienna/Scott/Janis - One of them would be available
         - Kial/Richard can also be made available
      - Kaine to Setup the channel before Go-live
      - Staff - Invite Debbie's team and Cameron's Team
      - Have an email for staff to let them know about the process
   - What support mechanism would be in place to support staff?
      - Same as Above
   - Is IT ops ready to take whats being delivered?
      - They would escalate to Project team - Normal process
   
 * Research On EFT
   - Kaine wants to be involved
      - Who are the EFT users?
      - What products are they purchasing?

* Dependency Ticket discussion
   - 5806
      - Changes are done. In Ready for QA
   - 5331
      - Lorent o check with Sumesh around estimate and see if Vysakh can pull any of the stuff from Sumesh plate
      - There would most probably an error for premium users who are trying to pay which should be fixed by Friday

* Refund
   - Linda to confirm the current refund process
   

----
Dec 4, 2021
----
- Openshift Container Platform 4 Upgrade - Mandate from the Lab
   - Discsuss API topics - When can we reach out to exrernal 
   - Firewalls rule changing - IStore Request
   - DNS are changing
   - Network security policies has to be updated
      - Patrick and Richard are working on this
      - Jyoti to Create a ticket and assign it to Patrick and Richard, check with Richard A
      - Create some space in the release planing and update in tri weekly
   - #5652 - Entity to target the work for Dec 17. Linda and Sienna to look into this
   - #5591 - Melissa to work with Sumesh on getting the details.
----
Nov 27, 2021
----
- Roy to showcase design to PO's
   - Off all the feature proposed, Kaine/Linda has no concerns.

----
Nov 20, 2021
----
- Variable Fee codes
   - For now just use one variable code
   - The real requireemnt to have this is far out in the future. We will discuss this again when it comes up.
- IDIM Card Reader
   - IDIM Card reader is going away.
   - What is the communication plan - IDIM will manage their own front, and we will manage ours.
      - Is there a way to know if any of our users are using IDIM card reader - Loren to check with Sumesh
         - Trish to check with IDM team on the communication plan
         - To have a better solution for clients who are not connected through internet - Jyoti to set it up
            - Who should be invited? - Olisa, Sinead, Trish, Linda, Kaine, Loren, Ian A.
- Cameron team meeting on Nov 27th
   - Get the list of requirement from the staff and then decide on the priority and ownership later

Nov 13, 2021
---
1. Automatic Passcode resets? 
   - Staff need the ability to remove all affiliations associated to the account.
      - This is currently a manual process
      - Roy and Melissa will work on that
         - To be reviewed on Nov 27 PO Sync
2. Manage Business Page as Login for Staff.
   -- Raised by entities as a high priority bug.
   -When staff exit entity dashboard or reopen site in another tab they should see staff dashboard.	- When staff exit entity dashboard or reopen site in another tab they should see staff dashboard.
   -If we go straight to the dashboard for staff what about when we add access to other apps? Button to link to staff dashboard from main page?	- If we go straight to the dashboard for staff what about when we add access to other apps? Button to link to staff dashboard from main page?
   - Linda and Sienna to talk to Staff to understand the depth of the problem
   
3. Movember Volunteer:
- Loren 
- Jason to look for more volunteer
----

Nov 6, 2021
----
1. Spike in issue where client affiliates to their legal entity they wants to remove from their own dashboard for another party to manage. 
   - process involves issue being logged by staff, escalated (IT Ops), sent to our team, new passcode generated in CPRD, auth tables updated, response to IT   Ops,IT Ops response to staff then back to the client.
   - Janis has dashboard requirements for moving an entity for staff
   - No client facing option logged
   - Consideration for building solution ideally before additional entity types are added
      - This needs to be added to the roadmap for the next PI
      - Melissa and Linda to work on this and create a ticket for this
1. Quantitative Analytics: With Names coming out we are going to see a significant increase in our user base across the applications. This will lead to more calls to staff for help. I want to ensure we have quantitative analytics so we know the percentage of clients who successfully complete a task in the system vs those who call
   - SRE team should have this in their roadmap for next PI
   - It might not be possible to get this before the Name request go live
1. API technical session - Loren to bring this up
   - Technical session with technical folks of "how legal API works?" was asked by the new company (RBC-OWNR)
   - Loren to share the contact details with Kaine
   - Technical session not being planned till end of this year
1. Vulnerability: SonarQube Security Advisory - Who should own this? 
   - This has been already taken care
1. Automatic refund
   - Verbal timeline 4.5 month, with an earliest start date of mid january
   - Quote is $51,000
      - Not leaning towards paying for this solution in this fiscal. There would be more development cost apart from $50K for building this end to end solution.

----
Oct 30, 2020
----
1. Third Party scan 
   - Scan on annual basis recommended from IDIM
   - Gary perkins from the ministry group has offered to do the scan in $1
   - This is covered in capital fund
   - Which Env: Test or Prod
   - Outage: No outage
   - Timeline: Early Feb
   - Codebase: All the different repos
1. GL Coding 
   - Loren to reach out to Carol for the approval on Monday
1. Automated Refund
   - Deloitte(CAS) to confirm before next Thursday on the timeline
   - We will only require refund for Direct pay. Automated refund only needed for Names flow.
   - A dependency should be cretaed for Relationship team for NR to not allow Direct pay
      - Kaine to create the ticket. BA's to discus the the ticket in the next BA guild
      - Timeline would be end of PI
   - Is there a partial refund scenario ever possible? 
      - Linda to create the research ticket
      - Timeline to get the answer by Monday(Nov 2nd)
   - For all non direct pay scenarios, Manual refund is possible through Finance
1. Search(In general)
   - Entities team to own the search feature as PPR team has already started working on it
   - Work start in Dec
   - Bob wants to stay till PPR is done. 

----
Oct 23, 2020
----
1. PayBC SLA
   - Loren to work on the SLA proposal with Melissa
   - Also, to circulate with other stakeholders like Sinead, Ian A, Ian B
1. Autoamated Refund update
   - Meeting Next week, discussed in Steering committee
   - More news to come on Monday
1. New Release Date for Payment Solution
   - new Release date is Jan 17th
   - UAT Date: Nov 23rd
   - Last Production release is Dec 1st
   - Between Dec 1st and Jan 17th - highlevel plan is to include Journal Voucher, Manage Business Dashboard etc..
   - Dec 7th is the proposed date for NR golive
1. Pro data account features
   - No concerns from anyone
1. 3-Day confirmation period for PAD
   - This will be included in Terms of Use
   - Usually under Canada processing rules, the waiting period is 15 days
1. Financial Risks and control review
   - A third party assessment is required for all the financial tools being built
   - Pay, Authentification, Lear(receipts) would be under assessment
   - Is this a mandate for go-live? - YES
   - Contract to start on Nov 7th
1. Data reset tool - Linda
   - Patrick has this on the roadmap
   - If its done early, QA team would be able to accomodate Automation testing
1. Release timing - Name Request and Relationships - Linda
   - No More users getting added to Beta NR release
1. Discussion on experience: As a premium user I am requesting a name from the new name request system, When I decide to log in with services card and have a new account mid name request, When I have a bad PAD payment, Then I am blocked completely from my transaction and if the below is true Then
   - Login with Non-authenticated user and pay with credit card
1. As a premium user I have logged in with services card and have a bad PAD payment, When I need to clear the payment with the only option of credit card, When CAS is down which affects the invoice and Credit Card payment frequently, Then I am not able to file anything urgent or able to recover my account immediately >>> just flagging this experience for discussion
   - This can happen and might result in bad experience
   - At this point, there is no solution to this. A risk to be raised for below two things and discuss in tri-weekly
      - How do we manage the down payment?
      - How do we cater the client who are in non-payment status?
1. Licensing Agrement for APIGEE..Jennifer to disucss this
   - Jennifer to check with Lisa
   - Check with Ian B for operating budget? - Kaine to action this.
1. Melissa actioned the action item for current process with GRAMS:
   - Current process Link here:
   - Proposed process: 
1. USC Direct(Procured solution to replace GRAMS) will be delayed till June 2021
----
Oct 16, 2020
----
1. Premium Payment, payment calculator - Kaine
2. Possibility of delaying the Name Request release to accomodate Premium payments release
   - General agreement to create the space for the team to have their time by either combining two releases or keeping them apart in January.
3. How ServiceBC reps will do NRs at the counter and how payment will be processed
   - Melissa is going to map out the current process with GRAMS
      - When are we going to meet to discuss? - Next PO Sync
      - Discuss the proposal and figure out the plan
      - This has to be done before NRO shut down
   - Trish is meeting with Crystal (Service BC Manager) to next week 
4. Schedule for staff to return part-time to lab (https://bcdevexchange.org/docs/Return-to-Workplace-Playbook.pdf)
   - Jason to set up discussion with team on this topic separately for the teams
   - Figure out the dependencies before moving to the LAB - Each of the PO's to maange the orientation for their respective team
   - First thing, 8 internal team members can join the home office and LAB space.
5. Ticket for Auto Refund(PayBC) - 
   - PayBC will present the options(time and cost) in the next steering committee, next Thursday
   -  Relationship team(@Melissa) to create a ticket and track the work under that.

----
Oct 9, 2020
----
1. Online Banking design review - decision on the Online Banking flow  ? - Loren
   - DECISION: Relationship team will own the payment design and build for Online banking
   - Kaine/Linda to send the Address future dated transaction to Policy and keep Loren in loop
   - For TO DO list - there is some work required by Entities team. It would to good to have a dependency tickets. Amit/Melissa to create one?
1. Is there any work remaining for embedding change on the project team? - If yes, how should we get there? - Trish/Simona
   - Loren and Kaine to check with BA's
   - Jyoti to brought this again after 3 months
1. NSF discusion with Carol
   - Loren to do some more research 
1. PPR Discussion
   - Approval for funding recieved
   - Couple developer, Nov + Dec
   - Jason + Linda/Sienna + Jyoti
1. Corp Supervisor meeting 
   - In general, all good. Nothing happened
   - Auto Analyze testing are being tested by Thor and Kial
   - Kaine will share the results of testing when its available
1. Sprint Demo share on Youtube - Unlisted. Confirmation required from PO's.
   - Decisison - To share the recorded file with Lab team. No objections
1. Christmas holiday celebration - Linda
   - PO's to discuss with their team if they are willing to come to Sticky Wicket
----
Oct 3, 2020
----
1. NSF changes to be review - Loren
   - Discussion still open to whether the client would be able to access their dashboard at all.

1 Payment calculator review - 4018 - Kaine
   - No concerns for the new wrapper

----
Sep 25, 2020
----
### Standing Agenda:
1. Scope of Release going next
   - incorporation application correction filing
      - OCM tasks for Public should be put on hold. Release date should not change 

### Moving Agenda:
1. Showing account setup with payment methods - Loren
1. Name request cutover action items
   - Jyoti to follow up with Trish/Lorna on the dependency of Socities online with payment around NRO
1. Sharing a recording of our Sprint Review with Dev Exchange for their Youtube channel - Jason
   - No concerns from the PO's. 
   - Jason/Jyoti to work with Ari
1. PPR MHR roadmapping
   - Will out this on hold for next week
1. Long term planning board update - things have changed and we should update our board to put up a realistic picture
   - Jyoti to setup the meetings
1. Idea: More business involvement in our Program Increment
   - Jyoti to plan this out.
1. Idea: Allocate points for Change management activities
   - This might disrupt the planning process as the team has a good average going on
   - Also, it wont be only CM activities but it would be everything apart from Dev which needs to be accounted
----
Sep 18, 2020
----
### Standing Agenda:
1. Scope of Release going next
   - On the 22nd we will put out the one time password authenticator reset (no common component changes required for Entities)

### Moving Agenda:
1. What filings clients will be able to do in person at at Service BC centre - Loren added this to agenda
   - Discussion required to make recommendations to Carol (invite Patty to this for context questions)
   - Loren to follow up with Cameron and Debbie for more detail around job aids
   - Jennifer will look into past experience in a similar situation
1. BCSC Outage this week. The BCSC will be down in production on Sunday, September 27th between 6am – 9am. Do we need a banner message as last time?
   - Covered, we are dealing with it. We have a ticket to do a banner -Loren
1. Do we need to expose(or plan to expose) Name API to other partners in the next quarter(Dec - Oct)? If yes, relationship needs to account some work on Pro data partner.
   - This will likely happen in the Spring


----
Sep 11, 2020
----
### Standing Agenda:
1. Scope of Release going next

### Moving Agenda:
1. Dependency on BCOL for NR go-live or NRO decommision on Jan 15. If there is any dependency, that needs to be scoped in the next PI
   - No Dependency on relationship team
   - Work should be done by NR Core team
1. Moving the last sprint of the year by a week for better outcome
   - All in agreement
1. Corporate search - Who is doing it?. This was discussed before, so we should revisit that and confirm the scope of work for this PI.
   - The ownership needs to be discussed. This isnt the roadmap for next PI(oct - dec). Team to revisit this by end of Dec
   - Jyoti to add this to agenda for Mid dec
1. Budget considerations for upcoming PI
   - This is in PO's radar. Plan which is put in place is considering the budget pressure. 
   - Because of uncertainity, Relationship team might drop Pro data account and Vital stats.
   - PayBC is the priority, so full focus on completing Pay BC requirement
   - For Entity team, there is no implication as of now.
1. Credit Card refund
   - Raised at the Steering committee
   - Next steps are work in progress from CAS. 
   - Amit has chalked out the current process - 4353
   - Whats the SLA on the refund process from PayBC side for Refund? - Loren to check it.
   - @Amit - To draft the the proposed solution to send an automated email notification to CAS and IT OPS. To be reviewed in next PO sync.
      - Who is building this? - Entity Team
      - When? - Next Sprint? Use the notification service
   - @Amit to check with Sumesh on whats the unique transaction number
   - @Melisa to be setup the meeting with Ian B and team to review the support process for IT OPS
   - Keep the ticket 4353 updated with findings

----
Sep 4, 2020
----
### Standing Agenda:
1. Scope of Release going next

### Moving Agenda:
1. Name Request Account Authentification
   - Are we going to do it? - Yes, by Oct 30'ish
   - If yes, which team needs to do what? - It would be mostly core Entity team. Some dependency might be on Relationship team.
   - If no, how are we going to manage the Pilot release to corp supervisor
2. Payment
   - When would we hook up other payment method with Name request payment? this decission is important for lot of things(Onboarding users like BCOL users and Corp supervisor, change impact)
   - Which team needs to do what?
      - Its all based on Auth, so all the features would be part of Oct 30'ish release when Auth piece is done
3. Credit card refund: Any update on this?
   - No update as of now. 
   - Whom to call for support requirement? 
      - Amit/Loren to get the info.
      - Ticket which can be updated with the info - 4353. Ticket updated with action items
      - Loren/Amit to complete the SLA/Email by end of next week
      - Loren/Amit to confirm with IT OPS about current NR( or any) Refund Process. 
   - Loren to follow up with Kevin.
4. Define relationship requirements for Staff Dashboard - 4688
   - Document management research is required. Which tool can be used? Entity team need to own this.
5. IT OPS
   - Linda reached out to Steven Chen. Steven Chen is to create a ZenHub ticket for IT OPS related item
   - BA Guild team to create the Zenhub template for creating above tickets.
   - IT OPS to update the distribution list
   - IT OPS to confirm whether they can take the Passcode reset.

----
Aug 28, 2020
----
### Standing Agenda:
1. Scope of Release going next

### Moving Agenda:
1. 4753(Relationship team asked Entity to do) - Grooming done
1. API Discussion on Sept 28th with PPR stakeholders
   - Pro data account will not be ready for production this PI.
1. CAS/CFS downtime email notifications
   - Linda/Jyoti/Loren/Kaine/ITOPS should be part of the email notification group
   - Loren to follow up to have the above group added for notification
   - For next weekend, we need a notice up on Business Registry page that the payment wont be available till "X" date
   - Create a ticket(Amit/Melissa) for banner update today?
      - Raise this in Tech Release meeting?
      - Banner should be up and Running by Sept 2nd till Sept 8th(6AM)

----
Aug 21, 2020
----
### Standing Agenda:
1. Scope of Release going next - Do we need to look at our upcoming releases(Sep 8th) and see whats the scope? If we are clear then we dont need to.
- Discussed

### Moving Agenda:
1. Loren - Manage business dashboard, will this make it in the PI?
   - We will defer this work on this PI
1. IT Ops Workflow - BA's starting to create the Zenhub tickets for IT OPs - Linda to bring up to discuss with relationship team
   - Steven will open tickets in ZH (except passcode ones), and post in chat if he's away. Linda will talk with him to start the week after next, with BAs covering for next week.
1. Staff dashboard scope - Confirm the requirements by Sept 15th.(4687 - Epic, 4688 - Relationship)
   - Loren bringing this into grooming for the grooming after next
1. Corporate search - when are we doing this? and who is doing this? - This came up during the long term planning for relationship team. Loren to discuss
   - Not currently a part of Entity team's planned work. We will plan for this to be added to roadmap and split between the teams (design/frontend/backend)
   - Entities is bringing corporations over in March and has a dependency on this being done
   - Plan for this in December to be able to build in January
1. Quantitative Analysis across application - when should we prioritize this? Loren to bring up
   - Proposed value of seeing where people stop and potentially identifying issues before reported
   - Review this at the end of the next PI to consider implementing before user numbers get higher
   - Giving this to the SRE team - Kaine to chat with Thor
1. Staff ability to Filter records on Account management screen. Near real names for Basic Account types(ABC Company" "ABC - Company" "ABC Company." all with different emails) - This came up in a meeting with Staff for Loren
   - Talk to designers and make sure it's consistent - Loren and Kaine
   - Respond to what staff is asking for (put in ability to find account name on staff dashboard, for example) - Loren
1. Share the user testing result with the team - Forgot what was this about?
   - updates shared
1. How to execute the upcoming PI's?
   - Remote vs In person?
   -- remote
   - When should we do it? - I propose 3rd week of September
   -- yes
   - Involvement? - Same as last one?
   -- yes
   - Duration? - 4 hrs? so that we can address the Retro
   -- yes
----
Aug 14, 2020
----
### Standing Agenda:
1. Scope of Release going next
### Moving Agenda:
1. Data lake availability to customer. Thor to bring up. Invite Thor for this meeting
   - Approval recieved for creation of project
   - Targetting to have something ready for end of September
1. Manage Business Dashboard - Decission on priority of this work.
   - Thor to break out the story on Monday and Tuesday
   - Idea would be to put some story in scope for the next Sprint and then the remaining in the following sprint
1. Staff Dashboard design
   - Not sure what the topic was to discuss
   - Quick visual whih can be sahred with teh team - mid september(TBD based on Scott availability)
1. Upgrade to Vuetify - Vuetify is undergoing a major version upgrade and our version is being deprecated 
   - Should we wait for Vue 3.0 so that we can be done upgrading all at once?
   - Decision is to wait for Vue 3.0 and put it on the table for next PI discussion
1. Dependency items which needs PO inputs:-
   1. Discuss 3966 - A temp solution was implemented, do we need to revisit this?
      - Ticket updated
   1. 2007 - What work is remaining on URL Structure?
      - Thor and Sumesh to work on the next steps
   1. 2396 - In app notificattions? Where are we going to fit this?
      - After Dec 2020
   1. Update Component component documentation : 3092
      - Ticket closed
1. SBC_Pay doesnt support credit card refund. General discussion on how are we going to manage this? Next steps(dependency?) and risk assessment if we are not able to work get to a solution by Name Request go live.
   - This has been raised in Steering committee and is on the radar of the PO's
   - The idea is to keep pushing and the deadline would be end of Sept
   - If the deadline is not met, team(Entity) woud need to build auto generated notification to a mailbox
   - Kaine to talk to Lorna about the ticket creation
1. Pro Data API meeting co-ordination - Kaine also has another meeting planned for PPR
   - Meeting with Pro data users in September
   - Kaine to share the list of companies who would be interested in interviews
1. GL Code granularity?
   - What level of revenue detail do we need to make decisions/take action?
      - This can be dealyed for few weeks. Thor, Sumesh and Greg are working on the data lake piece and should be ready with something towards the end of this PI to show the team the value of Data lake
      - Thor to connect with Sumesh on the urgency of this item
   - What data do we need to go to the CFS and be reported out by SBC Finance vs data that we keep in the data lake that we can pull ourselves?
   - Note when looking at filings codes 154 for Corporate Online, 157 for Societies Online, 74 for Firms, 27 for Coops and other entities, not considering other products like assets
----
Aug 07, 2020
----
* Meeting Cancelled

----
July 31, 2020
----
* Meeting Cancelled

----
July 24, 2020
----
1. Lab/home team release communications
   - Improve communications for Home team
   - Send the link for our Release PLanning document
   - Send the release communication email to everyone over registry


----
July 17, 2020
----
1. BC Registry Homepage - Review the draft(Loren)
   - Some feedback captured in the meeting:
      - "Go To" looks noisy.
      -  Include Names Request under Modernization Initiative
      -  Registered/Log-In section - doesnt make sense as there are three "Create Accounts" options on the page
1. To prioritize tickets 3092, 2436, 4304  - Linda
   - 3092 --> Can we start the documentation? Amit to check with team to see the progress made so far
   - 2436 --> Ticket closed
   - 4304 --> Thor and Sumesh are handling it
1. Update the Zenhub Roadmap
   - Team to update the Roadmap in next few weeks
1. Use the Friday Meeting for Organizing tickets on the releases.
   - Bring it in the PO Sync as an standing agenda
1. Getting back to work in the LAB
   - This is voluntary

----
July 10, 2020
----
* Authorization for Business in COLIN
   - We are creating a ticket for this and assigning it to Thor
   - Idea: Use the AR code or Password code to affiliate their business to their account
* Manage Business Dashboard:
   - Amit to create a spike ticket and assign it to UI folks()
* Requirements for Search functionality
   - Jyoti to create a ticket and assign it to BA's. This would be research ticket
   - Create an Epic for Staff search
   - Corp staff, Help desk staff needs to be involved
   - requirements need to be handed over to Dev team
   - Should be done by next 2 weeks
* PI Agenda and timings
   -  Invite all the team member
   - Include the team members from Home team and keep them optionals
      - David Roberts, Bob Bowles, Mihai Dinu, Cameron Wulff and Amber Andresen


----
July 03, 2020
----
a. Discuss the PI planning together
   - Have a longer term plan done for Relationship team. @Amit and Jyoti to connect.
   - 
b. PIA/STRA update for BCOMP/release on june 30th - whats outstanding?
   - Nothing is outstanding
   
c. Jyoti, Jennifer and Sandra to work on OKR's and bring more solid plan to the table.

d. Loren to create his Epics in Zenhub

e. Linda, Kaine and Jyoti to update the release board and Epics in Zenhub.
   
----
June 24, 2020
----
1. Combined Retro for Entity and Relationship team
- Lets do it every PI, after the PI, we cna bring in people for last 1 hr and do a combined retro
1. Bring the board at grooming
- Shahriar
1. Celebration
- Different options. 
1. OPS readiness for BCOMP
- Immediate need would be to include everyone on the team
- Tech review across teams on regular basis
- Do more impromptu demos - explain the features in demos
   - Record the session
   - Involve the home team
   - Lunch and learn in the month
- Long term solution- Train the IT OPS
   - Third phase is to train the HOme dev
- Involve all the team members in the email from IT OPS
- Develop a process to indicate the SLA 
- Someone still need to be accountablefor managing this
- Linda to add folks to the email which IT OPS sends us
----
June 19, 2020
----
1. Business Registry Home Page for Coops users
   - Decission was to leave it as is for now. 
   - For CO-OP users, we will wait for staff to see how many questions do they get for CO-OP users?
   - Linda to check with Trish to see the communication plan?
   - Loren to see in future if we can add " If you already have an account, Please login?" below the prominent button "Create BC Resgistry Account". Relationship team already have this in backlog
1. BComp NR Type
   - The dependency ticket wont be needed as relationship doesnt check for NR type
   - This would be there for only few months. Later NR will come in picture
1. Shared business access - Came in relationship PI Planning topic
   - How to provide access to people who are outside your account?
   - Since we are getting away from passcodes. This should be on our radar when Entity starts owning Manage business 
   - There would be epics for "Manage business" dashboard which relationshp team has it in their backlog. One of such epics would be "Search for Premium users"
1. Quality Metrics across team
   - Team to have more room in the team sprints for bugs and tech debt - almost 15% capacity should be reserved for that

----
June 12, 2020
----
1. OPS Support for account affiliation - trainings/documentation?
   - Training IT OPS for managing account affiliation. Not for now, may be sometime in july
   - Cross train LAB OPS team. This needs to be addressed
      - Shahriar has the list of cross train skills required. 
         - This needs to be specific for internal team in terms of OPS training
1. Partner support/status for BC Services Card
   - Service interupptions from PayBC and IDIM needs to be raised
   - How can we ensure PayBC is available on 24th June? - Action item to Loren
1. "Create Account" option not present when user logged in.
   - We need a place to create account option for logged in version?. Amit to create a dependency ticket
   - Do we need this before Go-live?
   - Where should we place the option? From a design standpoint, Loren to check 
1. Entities to upgrade to the latest common components so clients can access transaction history (after the 16th) or a choice of login (BCeID vs BCSC) by the June 29th
   - Relationship team(Amit) to create the dependency ticket for doing this work
   - We need to bring this up in standup.
1. BCOL Fee codes
   - Is there a need to differntiate the system while collecting the fees?
   - {Loren}: Doesn't look like
1. Celebration after june 30th
   - For planing involve Ian, Karla Maria, MRAS team
   - Jyoti and Shahriar to work together and bring up some fresh plans
1. Tri weekly status touch points
   - Odi might leave the project, may be by end of month
   - Risks around managing other filing for BCOMP's - team presented a manual way of doing that. So the risk is mitigated
   - Procurement for APA-G(cloud) has been done, contract signing pending

----
June 05, 2020
----
1. Staff payment as a common payment
   - This can be done after June 30th - Staffs are OK with that.
   - Component should have No Fee, Routing slip number, BCOL payments, help in the payment rim
      - This needs more discussion
      - Do a spike and estimate it
   - Give two weeks of time
   - bring it next to next po sync
1. Payment type for Basic account: Credit card and Online Banking
   - for Online banking, till we get the funds, the transaction wouldnt be mark completed
   - Have regression impact to Entities team
   - Loren to send the recommendations to Kaine and seek feedback.
----
May 29, 2020
----
1. Name for payees for online banking
   - "BC Registries" could be the name used
1. Deadline for dependency ticket #3806
   - Jyoti to talk to Sumesh/Saravan to align the release
1. Staff filings with BCOL payments - BCOL account vs BCOL UserID
   - Linda to do some research on this with Sumesh
   - No rush for June 30th
1. Update on Entities release dates
   - Entity team next two release dates are June 9th and June 17th
1. Staff Dashboard
   - Entity team to start own this in next Program Increment and start doing some design work
----
May 22, 2020
----
1. Linda to bring the proposal for "Static text - help text in the application"
   - Team to continue on the approach as of now and get more user feedback and then decide on the concise approach
1. Quick disucssion around Out of Province Solution
   - Account administrator will have the notary verify the person or have law firm
   - Notary will notarize the document
   - Basic BCeID, Passowrd and one time password on phone will be required for authentification - IDIM needs to sign off on use of Basic BCeID
   - Account flow will take over then - User to upload the affidavit document
   - Staff to Review the document and approve
   - Deadline - 23rd of June if everything gets right
   - Cordinator/user will get an invite from Account administrator and they can use Basic BCeID, Passowrd and one time password to login
1. Flow mapping meeting discussion
   - Involve Amit
1. Direction on documentation of requirements - Choose the right tool
   - Jamstack is another option apart from Microsot team
   - Business as usual for now. We need to bring this up post June
1. Create receipts for all types of payment #3482
- Discussed in the PO sync that the logo will be added in the footer to keep it consistent. Amit to create another ticket for that work which will be taken in the next sprint.

----
May 15, 2020
----
1. What APIs and API docs we will provide partners, when these APIs and docs will be available
   - D&D reached out for "what APIs they have".
   - Partner might have need to different API's.
   - We need to come up with a plan 
   - D&D are expected to meet early June
      - Kaine, Loren, Thor, Sumesh, Linda need to be avalable for the planning event.
   - What does need to plan have:
      - API Names
      - API Documentation
      - What does the API have?
      - When they would be available?
      - How they actually explore the API? Ex: Consoles?
      - Terms of Service
      - When we shutting down the old service, the API service need to be available. Is there any blocker with this?
   - Jyoti to schedule the meeting
1. To discuss how the navigation menu bar changes based upon logged in state.
   - Entity team can decide on the navigation part on the Business Registry page and dont need to have the existing Navigation bar
   - Cameron need to connect with Sumesh on the flow of "Create account" depending upon login state.
1. Getting feedback on strucutre of Sprint review from stakeholders
1. Remote Program Increment planning discussion. How can we do it?
   - Have distributed team co-located in different spaces
      - Entity team in one space
      - Relationship team in one space
      - All others in a different space
   - Co-locate where we can
      - Rest team can be remote
   - All Remote
   Regardless of this, if there is any remote element, we have to consider this:
      - Leverage real time digita tools
         - Real time board which can be used for Program Board, Team board and Risk board - WE DONT HAVE THIS
         - A confrencing software which gives an option of breakout - We have Zoom which we can use
         - Slack --> For any communication across team during breakout - We have this
            - Other option to have Microsoft Teams
      - More planning upfromnt. Team should have their created and Sprint goals defined before the PI planning meeting
      - Detaied Agenda and timeboxed events
         - Have the planning session in June - Epic planning
         - Have the bigger session in July - 2nd week

----
May 08, 2020
----
1. Thor and Sumesh will have a discussion with URL to be used and re-directs and bring to the table for decision to be implemented in next sprint.
   - Kaine is following up with Thor on the same.
1. Jennifer to bring the following topics for discussion
   - Updated Partner Roadmap
      - Jennifer to take a closer look at the old Roadmap and see whats mis-matching between two
   - Risk and action item log
      - Discussed and updated in the meeting
1. Discuss the dependency around BCSC content - #3655
   - Agreement on this from both the team. 
   - Jeremy can update the ticket 3655 with details.
   - Ideal time would be to recieve the updated version by end of the current sprint.
1. Sprint Planning timings
   - Entity team from 8:30-10
   - Relationship team from 10:30 AM - 12 PM

----
May 01, 2020
----
- Discussion about "where do we land" after we have created the account.
   - For MVP, users would land on Business Registry Page.
   - Some visual changes needs to be added by Scott for that
- To go through the BC registry page and gather feedback
   - [Loren]: Anything wrt to BCSC needs to be reviewed by IDIM. ANy new page needs a full review from IDIM
      - Jeremy to share the updated content of BCSC.
   - [Trish]: OPtions like "I have lost my passcode?" and "I have not recieved my consent letter"
   - There is no search functionality built in on Business Registry Page.
- A new business registry page with JAMSTACK implementation and not using the CO-OP page.
   - For now, we will haul the existing CO-OP page
      - Entities team will do the work and push the PR

----
Apr 24, 2020
----
1. Linda to bring the proposal for "Static text - help text in the application"
   - Postponed for 2 weeks
1. To discuss the "Registeries roadmap" with all PO's
   - Sandra, kaine and Loren are going to have an internal discussion and then have a discussion with Carol in the early weeks of May. 
   - We will discuss this topic later in mid may
1. To discuss the ownership of the Manage Business Dashboard in future.
   - Relationship team will own the piece till June and then later Entity team will own that.
   - Thor and Sumesh are working on carving this out from web_auth
   - Setup a meeting for early next week to discuss the missing pieces
1. Business Registry page vs CO-OP page
   - Can Co-OP page be used as Business registry page?
      - Yes it can be, but by end of June
   - Is it easy to use this page for Busienss Registry page?
      - Details will be figured out to by Dev's
   - For now,we will have a button on the Coperative online which can be used for integration test- this is the target for next sprint.
      - Linda to create a ticket for the same
      - Jyoti to book a meeting to discuss both the above topics next week
1. BN Messaging capacity
   - We will have Steven chen to look into this and take help from Kial where needed.

----
Apr, 17, 2020
----
Meeting was cancelled as Loren was not available for this meeting.
   
----
Apr, 09, 2020
----

## To discuss the release cadence process.
#### Problem statement: 
- A) Not enough time for QA’s in the release to complete the test and regression. There is always a rush to complete things in the end.
- B) Technical dependencies between the teams.
- C) Frequent change in actual deployment time of the release results in context switching and communications through multiple channel also takes important time away from Dev’s.
- D) Multiple communications to Staff for multiple release which are happening in parallel.
 
##### Ideas:-
- For problem statement A) Based on the nature of our delivery, most of the features are testable towards the end of sprint. In order to give enough time for QA, we can plan to give some buffer in the release.
- For problem statement B) Start documenting the business communication and technical dependency in the release ticket in ZenHub. This will ensure that everyone knows what the other team is doing and CM will also have a clear picture.
- For problem statement C) To work on a release cadence for both the teams. If we agree on a specific date for a release from both the teams which gives buffer to QA’s as well, then we stick to those timelines no matter if we are done early.
    - Proposal is Tuesday after the Sprint. Gives 4 days buffer for QA’s.
    - Friday and Monday after the Sprint were ruled out because,
    - Wednesday after the Sprint – Team is focussed on Sprint planning and wrapping up the previous left over items
    - Thursday after the Sprint – Doesn’t give enough buffer for our QA team
    - Friday has not been a good day for deploying something towards the end of day and have a fear of not working something over the weekend.
    - Monday – Lot of flex’s. John from QA side is on flex on the Monday after the sprint ends and he usually performs production deployment verification
- For Problem Statement D) If the team agrees on a set release cadence as described in the above point, then the release planning can be done accordingly with the PO’s for all future releases. 
    - Release cadence – Have releases from both the teams on Tuesdays after the sprint. This can be treated as a set date unless anything urgent comes up.

#### Conclusion:
- Agreement to move forward with this plan.
- Jyoti to check the release schedule and adjust the dates as needed.

## To discuss the test automation and DevOps proposal
### Phase 1:
#### Timeline : <>
- Somebody to lead the DevOps work who can drive the value of automation and DevOps through continuous improvements.
- Scrum master and Jyoti to have a workshop(with Dev’s and QA) to come up with a Spike to document the gaps
- Develop the backlog of items which needs to be done
    - Example of this could be:-
        - Create an Epic for this and break out all the stories to cover what would be required to have a fully automated tests in Dev
        - Create an Epic for browser automation test by involving one of the QA person + One Front end dev.
- The minimum which we can do(low hanging fruits) –
    - For any schema changes, can we ask the dev’s to update the Data reset tool to make sure it doesn’t fail?
 
### Phase 2:
#### Timeline: <>
- Start estimating the Devops and Test Automation work
- Size the Browser Automation work
- Size the Automated tests in Dev
- Size the Pipeline work for items to move to test
- Once we have the rough estimation, develop the technical roadmap which shows how we are going to meet our long term goals
- The roadmap would have high level features which we can deliver in the sprint in the next quarter.
- We need to keep aside some bandwidth from Dev’s capacity to keep this going. We would need PO’s buy-in for this.
 
### Long term goals:
- Develop the DevOps skill within the Dev team
- Code coverage using a tool decided by team
- Fully running automated tests in Dev
- Automated Integration tests to move things from Dev to Test
- Have a full proof release deployment strategy
 
### What we are doing now:-
- Refactoring of Data reset tool
- QA Integration test

#### Conclusion:
- Agreement to move forward with this plan.
- Jyoti and SHahriar to move forward with this plan starting with small workshops.

### Email captured at Business Level vs Account level
  #### Short term questions
  - How do we capture those emails? Can the account level email used? 
   - Yes, we do have the emails at account level which can be used.
   - If we are collecting the email(Registered office email) at Incorporation flow, should we send this info to Relationship team(Business Profile level)?
  
  #### Long term questions
  - How do we manage the flow going forward?
   
- A decission was taken to not pursue this item as of now the value this might bring compared to the effort involved is not on the higher side.
 - Start planting these questions in the upcoming user session if possible, otherwise postpone it after BCOMP go-live.

----
Apr, 03, 2020
----
1. Discussion about Business profile: need to make email field as a mandatory input by user. #3080
https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/3080
    - Can we check the data from database to see if the email address from business contact and user profile is same? If yes, it can be prepopulated.
    - Email at the account level is mandatory but not at the business level
    - Action items:
        - Get all the emails for CO-OPs. Loren to check with Steven. Change management needs it as well.
        - BA's to confirm the user flows. Can we reconcile this?
1. Release planning process- technical dependencies between teams.
    - Timing of the release changed where the Dev's was not sure when its going to be deployed.
    - Jyoti to work throguh this process - and work on the alignment of releases between teams.
----
Mar, 26, 2020
----
1. UAT testing for Staff. UAT process was discussed in SOS and there are some inputs required.UAT process is documented here:-  https://github.com/bcgov/entity/blob/master/docs/Way%20of%20Working/UAT-Process.md
    - Recommendation to go forward with : "User testing" for staff
1. Sandra wants to discuss below topics: - For Decision:
   - ROI on prototyping ppr
      - Decission to move forward with this. Financing statement, search, dashboard. These will be wireframes or HTML mockup.
      - Demo for PO's on April 7th
      - Kevin is working on the list of Regulatory changes required in order to start the PPR again in Fiscal year. Probably by end of next month.
   - PPR production content- keep it standing or remove from cluster?
      - This shoud be put down as it takes resources. 
      - Can be done as per team convienence. 
   - Advise needed: before we unplug, what dependencies does we need to consider?
      - No concerns from any other team
   - API specs doc approach
      - During the course of documentation, some resource would be required from Loren and Kaine team.
    - Lessons learnt 
      - Do we need to involve more folks apart from Assets team?
        - Sandra to conduct the lessons learnt within Assets team and circulate the results/outcome to PO's.
1. Loren agree w. Kaine: Business profile: need to make email field as a mandatory input by user. #3080
https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/3080
    - Ticket has been updated.
1. Jyoti to bring up Organizational level changes(if there is anything required)
    - Waldemar and Bryan is going to roll off by end of this month(31st March)
1. Information architecture
    - Proposal to be sent to Linda, Kaine and Thor after Loren reviews it.
    - To be done by Next PO SYNC

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
