----
November 17, 2021
----
**Pain points in registration**

**Thoughts on the DBA helptext?**
- Design here: https://projects.invisionapp.com/share/3511UPXPMT2P#/screens/460952915

**Thoughts on the Sole Prop individual helptext?**
- Design here: https://projects.invisionapp.com/d/#/console/21712216/460287156/comments
- Do they both have to be residential addresses?

----
November 10, 2021
----
- ~9249 - when looking at this ticket, we realized that it isn't really secure to have anyone file an SP GP using any old corporation. OneStop doesn't have any security, and anyone can register their SP or GP to be any corporation, but maybe we should add some security?~  Kaine and Linda decided to follow guiding principle of like for like and not build in any additional security.


- **From Yui: "Tracey said that Janis said that we may not be able to display BN9 on the UI for privacy reasons. This is in context of SP/GP registration. Do you guys have any supporting knowledge about that to either confirm or counter this point?"**
  - We definitely don't need to see the BN in the lookup, the name and corp num is enough. Address is an additonal value add.
  - If they enter the BN 9 wrong, is there a way for us to fix it? Its happens often and is a pain. 5 manual steps. We get this issue daily.
  - Usually these are basic users. In the filing flow, we auto-fill the completing party name from the BCSC, and we 100% know their name and account type. We can also monitor these issues and determine if we can make improvements. Linda suspects this will go down with the modernized UI. Lauren also suspects this will go down sence right now there has been an influx since the covid grant.
  - Sienna mentioned the idea of removing the automated process to generate a BN 15
  - Something to note: OrgBook shows the BNs (9s and 15s)(anyone in the public can see that info). 
  - BN 15 currently shows in the output (this is the generated BN for the firm, based on the BN 9 that was entered)
  - We are not sure where Janis heard this was secure info, Linda is talking to hometeam BAs and CRA contacts to double check.
  - As of right now:
    - We are not going to prepopulate the BN if the corp has one
    - We are going to allow someone to enter a BN manually if the lookup doesn't have one
    - We are going to show the BN in the review page and the output (BN 15)
  - Kyle: Why do we even show the BN on the registration statement? Staff don't look for it or use it.
    - We will run into issues either way, and this way is less issues


- 9243 - registration statement output designs


- 10029 - lots of questions (see ticket)


- what types of non-incorporated in BC businesses/organizations can register a SP/GP/DBA in BC?  Need a list!  Want to make some sort of drop-down list where user needs to specify they are one of these before we let them enter just a business name (no inc #) and optional BN#.
  - What will work in Onestop:
  -   Corporation - BC Company
  -   Corporation - Extraprovincial Company
  -   Corporation - Incorporated Society
  -   Partnership - General Partnership
  -   Partnership - Limited Partnership
  -   Partnership - Limited Liability Partnership
  -   Partnership - Extraprovincial Limited Partnership 
  -   Partnership - Extraprovincial Limited Liability Partnership
  -   The above partnerships if the owner is more than one person or company and is currently registered in B.C.
  -   Corporation - **Extraprovincial Incorporated Society** ⭐️ Staff have filed these, and it **wasn't it OneStop**
  - What won't work in Onestop:
    - Corporation - not registered in BC ⭐️ Staff have filed these (bank, railway, **shipping??) Linda to get policy input on this**
    - Corporation - Incorporated Association ⭐️ Staff have filed these
    - Corporation - Incorporated Financial Institution ⭐️ Staff have filed these

    - Corporation - Incorporated Hospital
    - corporation - Incorporated Municipal Government
    - Corporation - Incorporated Religious Organization
    - Corporation - Incorporated Union
    - Corporation - Incorporated University or School
    - Other Government Body
    - Unincorporated Association
    - Unincorporated Financial Institution
    - Unincorporated Hospital
    - Unincorporated Municipal Government
    - Unincorporated Religious Organization
    - Unincorporated Union
    - Unincorporated University or School
      - This list will be in a help text, saying these cannot be registered as Sole Proprietorships, General Partnerships, or DBA names
- Can staff do any of the above SP/GP registrations
- Under section 375 BCA - Corporation - not registered in BC would include: banks, railways, anything else?

- Others:
    - Private acts ⭐️ Staff have filed these?
    - Strata Corporation ⭐️ Staff have filed these? (these are not incorproated with us, they are with land titles)

- Court orders - have you ever had a court order to register an SP/GP/DBA?  We're looking at SBC Offices doing any paper registrations instead of our staff and wondered if this was ever a scenario.
  - Kyle: Never heard of register by court order
  - Claudine has seen dissolve by court order, never seen registration
  - **Linda to check with Debbie and David**


- review emails, and the outputs attached to them - https://docs.google.com/spreadsheets/d/17wMY9znmWMr2RoXH9S2elffC8uE7iifUGB5Hu3VVFpE/edit#gid=797805835

----
November 3, 2021
----
Emailed Debbie/Kyle/Laurent Oct 28th for the following 3 items.
- 9828 - Can SP/GPs have court orders or plans of arrangement?  Court orders - **yes**. plan of arrangement - **no**.  We'll keep the full component in there so that with Partnership Act legislation rewrite if it is included, it is there.  Goes with practice principle of reusing components.  I think I asked Debbie about this before.
- 9260 & 9246 - Re DBA proprietors.. How much should we help client with company name, incorporation number, BN?  Onestop makes them enter the name exactly and the corp# or BN#. For SOFI, if you enter one, the other appears. Also a partian name will return results. Will get advice from UX/UI folks but would like your input.
  - We want to do a lookup where they can start typing in the number or name
  - That sounds good to staff
- 9841 - Entity dashboard - we'll replace "Current directors" section with proprietor/partner information.  What should we call this section?  "Owner" and use for both?  Or have it be entity specific.
  - We decided: "Proprietor" or "Partners" as the title for those components.
  - We also decided: Office addresses section will, we will keep the main label as "office addresses" and will replace "Registered office addresses" with "business address"

Do we have to specify "residential" address if it is a individual sole proprietor / partner?
- Right now, in bold on the form, it says "must be a residential address if the proprietor / partner is an individual".
- We need to keep this, legislation specifies it.
- If Business, need mailing address, and delivery address.
- If Individual, need mailing address, and delivery address, and this section has a tool tip saying that their addresses need to be residential.
    - "Residential" means the address of their home residence. 
If the sole proprietor / partner is a company, do we not care if it is a physical, mailing, or delivery address? It's just an address? The form doesn't say either way.

For DBA's or partners if address we pull from the company is out of date, should we 1) make address uneditable and tell them they need to go to COLIN and update there first and then register? 2) made addressuneditable and tell them to change the address in COLIN and we'll automatically make the update to the SP? or 3) make it editable and tell them to update the address in COLIN afterwards?
- If this happens with forms, Lauren's instructions were "if the address gets pulled, but the form says something else, you should use the form".
- Are we going to let them change their address later on, no validation making them use the owning business' address? If so, why do we bother validation at the beginning?
    - Decision: Let's pull it in, but let them edit it. **Not** force them to go to the company and update thatt address.
    - Add a tooltip to the in that address section, informing them: We have entered in the address of the owner. If this address is incorrect, enter the correct address in this registration. Once you have completed your registration, please go to where you usually complete your corproate filings to update the address.

Can you give me some examples of DBAs that were registered with us after April 8, 2011 where the owner was not a registered BC entity?  Can't find any after this date (which might be the conversion date from when SP/GPs loaded into SOFI.  So do we really need the ability to register a SP/GP with a non-registered business owner?
- Federal banks (and other letters patent) don't have to xpro register here, this is a rare scenario where we need this process (e.g. FM0861264)
- Linda to investigate this example more and see if she can find more instances
- Staff do indeed need to manually enter the name (since the lookup won't work). They don't enter the corproation number (letters patent don't have numbers). Clients are required to enter both (select something from the lookup) but staff are not required. They can still optionally enter a BN.


Should staff be able to have multiple drafts on the go? Clients are not allowed (to prevent out of order filings). Do we want to allow staff to have multiple drafts? Are there scenarios that it would be useful?
- These filings are fast to do, i never really need to save a draft. I don't have the ability to save a draft now, and don't need it.
- Think it would be easiest to delete a draft before you start a new one. No filing we have is complicated enough that deleting a draft is such a serious loss of work.


----
October 27, 2021
----

- 9247
- 9248
- Should [this letter](https://zh-file.s3.amazonaws.com/157936592/b7f9663f-2a83-45a0-b2d1-1ddc5031c21e?Expires=1634924910&AWSAccessKeyId=AKIAI5X57DET3FHKSALA&Signature=zP9dYySZYCfChPQbGg8WMt5y2VA%3D) be from 2019? Is this updated? where do we get the most updated versions? How often are they updated? Do you mind if we merge it together as 1 set of letters and guides, then the registration as a seperate output? That is preferred from a technical perspective. ([discussion happening in this email thread, this link only works for sienna](https://mail.google.com/mail/u/0/?zx=nv2aa2snq520#inbox/FMfcgzGlkXvvrGndpNhQHRJZqxTDHlSK))
- 9737 Letter from SBBC
  - If there are changes to this PDF, then devs need to fix it and test it and release it.
  - How importnat is it for us to attach this as a PDF in the email? Or could we just link it out in the email?
  - If it does have to be a PDF, can it be a sepeprate attachment from the registration output?
    - Lauren thinks it would be better to separate, so the registration statement is more noticable, not missed. People often miss it, delete the email, then they need to order it again.
    - This comes from the minister, Carol, other higher ups, they want it included. They are in the process of updating this letter. I don't think they will want a link.
    - **Linda to follow up with Carol on this**
- 9254
- 9721
- 9246
- 8283
- Do we want to add the "start date" or "nature of business" to the company dashboard here? For the firm/staff to see at a glance. (add answer to bottom of [doc](https://docs.google.com/document/d/19nKisnQ9Pw0H8wyIH-YDFeR4S3wAk4gtKlAbDC-KLNs/edit?usp=sharing))
- Help text and content for registration.. has anyone asked you to review the content yet?
- Change filings, review flow diagram?

### Notes from Amber

**Can a sole prop register with the proprietor being another company that is not registered in BC, or not extraprovincially registered in BC?**

This has recently come up with a bank being a person who wanted to register a DBA. Section 88 of the Partnership Act states that “a person… must file a registration statement with the registrar within 3 months after the day on which the business name is first used”. Person is defined in the Interpretation Act as “… a corporation, partnership or party, and the personal or other legal representatives of a person to whom the context can apply according to law”. For the recent inquiry of the bank registering a DBA we were a bit hung up on the fact that a bank is specifically precluded from carrying on business in BC under section 375(3)(a) under the BCA and we therefore couldn’t register it as an extraprovincial company to allow it to register a DBA. In this case it was determined that the “person” (the bank) could provide proof of registration in the home jurisdiction and submit the DBA sole prop registration form for a manual filing. I don’t think it would appropriate for staff to immediately turn manual forms away for entities in this situation – they should be evaluated on a case by case basis to ensure the registrant meets the definition of “person”.


**Can a sole proprietor have a start date in the future, and if so, does it mean we need to wait to file it (like a future effective filing) or is it effective immediately?**

I understand that currently when staff get a paper filing with a date in the future they hold onto it until the start date is closer and One Stop allows for future dated filings up to 180 days in the future. Future dated filings don’t appear to be within the scope of the legislation under section 82 which requires the registration statement to be filed within 3 months after the formation of the firm. Additionally the registration of the firm doesn’t create the existence of the firm itself – it is more a notification that they are formed and conducting business. This is similar to extraprovincial companies that have a requirement to register within 3 months of carrying on business in BC but different than entities incorporated in BC where the incorporation must be effective for the entity to exist – hence why future dated filings are offered under the BCA and require separate fees and filing requirements. Based on this I imagine allowing for a start date in the future for firms was designed to be a convenience factor, whether to allow them the time to open bank accounts/get business licenses, or just so that they would not forget to register with us at all. I also imagine that there is no withdrawal equivalent for a registration dated in the future – and if there is please let me know as this may change my understanding. If there have been no concerns raised from clients in the past surrounding the offering of future start dates, I would suggest continuing to offer them unless the requirements are onerous (such as staff needing to hold on to paper forms for extended periods of time or extensive system requirements to be built).  


**How far in the past can a sole prop’s start date be?**

I’m not sure why the 150 year logic is baked into the One Stop system. As you’ve said, section 82 requires the registration statement to be filed within 3 months after the formation of the firm. Filing outside of this timeframe leads the firm to be out of compliance with the legislation, but with one of the primary purposes of the registration of businesses is so that the public can identify and locate the individuals involved in the business I can understand why we would still want to allow firms to register even if they are not in compliance with the three month timeline – ultimately it serves our purposes by having them on the register, not missing from it because they didn’t register in that three month period. With this in mind, I’d recommend still allowing registrations that are set XX many months or years in the past – perhaps it does not need to be 150 years (this actually seems comically long considering the lifespan of proprietors/partners/companies) but some statistics around registrations can likely be requested to help find the most common periods of time to inform the business decision around the exact parameters to allow going forward.

----
October 19, 2021
----
Finish reviewing requirements doc and questions in the comments: https://docs.google.com/document/d/19nKisnQ9Pw0H8wyIH-YDFeR4S3wAk4gtKlAbDC-KLNs/edit?usp=sharing

**Review designs**
1. Copy change: "I acknowledge that a sole prop cannot be changed into a GP, a new Name Request is Number and statement of registration...." - let's change it to use what is in OneStop. Replace with:
  - "This is to certify that no other individual is associated with me in this proprietorship. I acknowledge that a Sole Proprietorship cannot be changed into a General Partnership. If this is necessary, a new Name Request Number and Statement of Registration (along with associated fees) will be required."
2. Need to add "mailing address", also need it to be default UNselected "same as"
3. Change start date copy text: "Less than or equal to 150 years int he past and less than or equal to 180 days in the future" -> 
4. Change validation of start date: **waiting on amber to find out more about if you can have a start date in the future, and if it means you need to wait to file it (like a future effective filing) or if it is still effective immediately.**
5. Nature of Business, more research needed: We were thinking about NOT using NAICS but Janis reminded us that this is used for reporting, Linda is going to ask Carol if we should use NAICS or not. Would be easier for clients to enter free form text, but we might still want reporting from NAICS.
6. Nature of Business, send nature of business (NOB) back to name request: let's not.
  - It gets prepopulated from name request NOB, and you can edit it for your firm registration, and save it as your firm NOB.
  - Want to keep the NOB the same way it was when the NR was examined, don't want it to be changed after that
  - This seems messy also, staff don't want more bugs for little added value
7. Let's keep this as "completing party", not "submitting party" so it is the same across entities.
8. Confusion on the people and roles step, want the completing party and the sole prop separated more. There is only one person in this entitiy, and that is the sole prop. Wording it like the completing party is part of the sole prop is not good, people already get confused by this. Most staff were confused by that. Linda and Yui to assess this.
  - Also, sometimes the completing party and the proprietor are the same person, but have different addresses. Will that still work?
  - Yes, we will have mailing **and** delivery for these roles. **Need to add that.**
9. Business and company are the same (when adding people & roles), need to make it the same as the corproation flow.
10. Need help text from staff for step 2
11. Ask Amber to check if a sole prop can register with the proprietor being another company that is 1. Not registered in BC, or 2. Not xpro registered in BC. Staff sometimes allow it, but you can't do it through OneStop. Some staff reject it all together. Let's let Amber's decision and implement that.
12. Fee acknowledgement: let's keep this component

----
October 13, 2021
----
- Discuss expectations of being a subject matter expert (SME) for the modernization teams
- Review flow chart: https://drive.google.com/file/d/1VkcBtiUlfJCPMXLz3iF3iGCPFneoY_P4/view?usp=sharing
- Review requirements doc and questions in the comments: https://docs.google.com/document/d/19nKisnQ9Pw0H8wyIH-YDFeR4S3wAk4gtKlAbDC-KLNs/edit?usp=sharing
