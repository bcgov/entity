Start Date: 2022-09-09

Target Major Version: (EPIC or User Story TAG|Link)

Reference Issues: BCOL partner monthly reports #13512

Entity Issue: 

Implementation PR: 

# Summary

This document outlines the approach of incorporating BCOL monthly reports for our partner - BC Assessment in our new modernized world. These reports are required by our partners to reconcile their financial transactions at the end of each month. 

Currently these reports are generated off the mainframe and only includes the BCOL account payments. The new modernized world also incorporates other payment methods such as PAD (pre-authorized debit), credit card, wire transfer, online banking etc. 

# Motivation

BCOL partner agencies receive certain reports monthly. They total the amount spent on their product and give a list of active accounts/users that are using their product.

BCA is going live soon and they are awaiting the new version of these reports. The expected outcome is to generate these reports off the new modernized system before BCA goes live.

# Detailed design

To begin with, start with the development of simplified reports for each month. The two main reports (Current state):

BCA_MONTHLY

Required columns
CUSTOMER ACCOUNT (BCROS account #)
ACCOUNT NAME (+branch)
USER ID (first + last of person who did transaction)
DATE
PRODUCT NAME
TRANSACTION REMARKS (may not exist in new world?)
FOLIO
PRODUCT AMOUNT (stat fee)
PRODUCT GST
SERVICE FEE AMOUNT
SERVICE FEE GST
TOTAL AMOUNT (stat + service fee)

BCA_USERS

Required columns
CUSTOMER ACCOUNT (BCROS account #)
ACCOUNT NAME (+branch)
ACCOUNT STATUS
ACCOUNT ADDRESS
USER ID (first + last of team members)
USER ROLE (ADMIN/COOR/USER)
USER EMAIL ADDRESS

# Drawbacks

When tried duplicating these reports - there was a huge knowledge gap and we found it difficult to understand few of the columns in the report that BCA is currently receiving off the mainframe.

We went through so many resources and teams to help identify these columns. We still have some doubts on the mapping of these columns in the new system..

# Alternatives/ Impact

We need to get BC Assessment reports sorted very quickly or we can’t migrate them until after their 5-month blackout period starting in October.

# Adoption strategy

We can start with building these two reports in TEST pay-db as we dont have a ny data pertaining to BCA in prod database yet.
1. BCOL monthly transaction report 
2. BCOL accounts and BCOL users report

Once we have some feedback from BCA, we can refine these reports further.

# Unresolved questions

We couldn't identify few columns in the new database:

branch name (need to concatenate this to the Account Name)
GST both Service Fee GST and Product GST - there are only '0' value in GST columns
Account Status - Is it linked to cfs_account -> status
User email/ address - the only info we have is in the statement_recipient table (Does this info sits in auth db?)
Account address not available.

# Thanks
