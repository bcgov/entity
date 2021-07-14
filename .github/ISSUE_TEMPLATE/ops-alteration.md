---
name: ops-alteration
about: manual alteration filings that need to be processed using jupyter notebooks

---

Title of ticket: [Entity number and name] - Alteration, [Entity type] > [Entity type]

#### ServiceNow incident:

#### Contact information


#### Description
Summarize issue and attach email OR copy and paste email content into ticket

### ALTERATION TASKS - BEN > LTD:
- [ ] [Check out this flowchart for the steps](https://drive.google.com/file/d/1jMR6eAe2jr4B8cWdQgZQrwziiVUXWl5f/view?usp=sharing)
- [ ] use jupyter notebooks to file BEN > LTD
- [ ] Dev inform BAs that it has been filed and paid
- [ ] BAs review in [SOFI PROD environment](https://www.bcregistryallservices.gov.bc.ca/sofi/login/login.htm)
- [ ] BA downloads the alteration outputs from bcregistry.ca (because the outputs won't be available for the client in SOFI, which is expected)
- [ ] BAs tell dev to unaffiliate the entity from bcregistry.ca (so the client doesn't mess anything up over there)
- [ ] Devs unaffiliate the entity from the account
- [ ] BAs inform staff that they can proceed with [their steps](https://drive.google.com/file/d/1jMR6eAe2jr4B8cWdQgZQrwziiVUXWl5f/view?usp=sharing)

### ALTERATION TASKS - LTD/ULC > BEN:
- [ ] [Check out this flow chart for the steps](https://drive.google.com/file/d/1aXdlPyefjab6hhMw9U9JZsHQProGS6sA/view?usp=sharing)
- [ ] Affiliate entity to account
- [ ] Freeze entity in COLIN
- [ ] Load historical filings to the BC Business Registry
- [ ] Put draft alteration in their to do list (don't edit anything)
- [ ] Send client the email letting them know that they can start their alteration filing
- [ ] Tell a BA when these steps have been completed
- [ ] BA tells the staff member when these steps have been completed

#### General Ops Tasks
- [ ] When ticket has been created, post the ticket in RocketChat '#Operations Tasks' channel
- [ ] Add **entity** or **relationships** label to zenhub ticket
- [ ] Add 'Priority1' label to zenhub ticket
- [ ] Assign zenhub ticket to milestone: current, and place in pipeline: sprint backlog
- [ ] Reply All to IT Ops email and provide zenhub ticket number opened and which team it was assigned to
- [ ] Dev/BAs to complete work & close zenhub ticket
- [ ] Author of zenhub ticket to mark ServiceNow ticket as resolved or ask IT Ops to do so
