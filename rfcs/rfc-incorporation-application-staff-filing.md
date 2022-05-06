- Start Date: 2022-05-05
- Target Major Version: 
- Entity Issue: [9248](https://github.com/bcgov/entity/issues/9248)
- Implementation PR: (leave this empty)

# Summary

This RFC outlines how the changes required for the staff to file an incorporation application.

# Detailed design

For a registration/incorporation, the temporary registration is created using an account and the temp registration
is affiliated to the account. Once the temporary registration is converted to actual business, the business 
is affiliated to the account. If the temp registration and business are not affiliated to an account, the business
will not be accessible from the dashboard.

The suggestion is to use a specific account( as in PPR) for staff incorporation applications. The account id can be 
stored as a config value. If the logged in user is a staff, 'Create Named or Numbered Company' will use this 
account id for creating temporary registration, affiliation etc. 

# Advantages

This approach may not require any changes in the API or other backend components

# Unresolved items
Some UI components in the 'create UI' will require changes as a number of items (completing party etc.) are defaulted from the account.

The UI flow from the staff dashboard also has to be determined.
 
