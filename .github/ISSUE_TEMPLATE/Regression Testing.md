---
name: Regression Testing
about: A template for the entities test scnearios
title: ''
labels: ''
assignees: ''

---

### Entity type
* Benefit Company
* Cooperative Association

### Filings as a client
- [ ] Incorporation application (BEN, CP)
     - [ ] Happy path Named (BEN, CP)
     - [ ] Happy path Numbered (BEN)
     - [ ] Happy path Future effective dated (BEN)
     - [ ] Save and Resume
     - [ ] Edge: NR expired while in draft
- [ ] ~Registration (SP, GP)~
     - [ ] SP DBA
     - [ ] SP Individual
     - [ ] Use Business Lookup in filing to add company
     - [ ] Use "business or corproation unregistered in BC" to add company
     - [ ] GP with individual partners
     - [ ] GP with company partners

- [ ] Incorproation Application Correction (BEN)
- [ ] Address Change (BEN, CP)
- [ ] Director Change (BEN, CP)
- [ ] Annual Report (BEN, CP)
- [ ] ~Co-op Special Resolution (CP)~
- [ ] ~Change of Registration (SP, GP)~
- [ ] Alteration (change of company information, i.e. no entity type change)
- [ ] Alteration Limited to BEN
- [ ] Alteration ULC to BEN
- [ ] Alteration BEN to BC
- [ ] Alteration (entity type) (BEN)
- [ ] Voluntary dissolution (CP, BEN, LTD, CCC, ULC)
     - [ ] Happy path immediate filing (CP, BEN, LTD, CCC, ULC)
     - [ ] Happy path future effective filing (BEN, LTD, CC, ULC)
     - [ ] Happy path save and resume (all)
- [ ] ~Firm Dissolution (SP, GP)~

### Filings as Registry IDIR staff
- [ ] Incorporation application (BEN, CP)
- [ ] ~Registration (SP, GP)~
- [ ] Incorproation Application Correction (BEN)
- [ ] Address Change (BEN, CP)
- [ ] Director Change (BEN, CP)
- [ ] Annual Report (BEN, CP)
- [ ] ~Change of Registration (SP, GP)~
- [ ] Alteration (change of company information, i.e. no entity type change)
- [ ] Alteration Limited to BEN
- [ ] Alteration ULC to BEN
- [ ] Alteration BEN to BC
- [ ] Alteration (entity type) (BEN)
- [ ] Voluntary dissolution (CP, BEN, LTD, CCC, ULC)
- [ ] ~Firm Dissolution (SP, GP)~

### Filings as SBC Regional Office Staff
- [ ] Can affiliate an NR to an account
- [ ] ~Registration (SP, GP)~

### Staff only filings
- [ ] Court order / Plan of arrangement
- [ ] Registrar's notation
- [ ] Registrar's order
- [ ] Ledger Detail
- [ ] Ledger correction (basic version)
- [ ] Incorporation application correction (BCOMP)
- [ ] Staff comment

### Authenticaiton
* BCeID
* BC Services Card
* IDIR

### Payment method
* BC OnLine
* Pre-Authorized Debit
* Credit Card
* Online Banking
* Staff:
  * Routing slip
  * BC OnLine
  * No fee

### Features
- [ ] Email notifications
  - [ ] Email notifications listed here: https://docs.google.com/spreadsheets/d/17wMY9znmWMr2RoXH9S2elffC8uE7iifUGB5Hu3VVFpE/edit?usp=sharing
- [ ] Send data back to legacy system
- [ ] Outputs
- [ ] Future effective filings (BEN)
