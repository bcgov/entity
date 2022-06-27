- Start Date: (2022-07-23)
- Target Major Version: N/A
- Reference Issues: (fill in existing related issues, if any)
- Entity Issue: https://github.com/bcgov/entity/issues/12226
- Implementation PR: None


# Summary

SBC staff need to access staff dashboard with limited privileges to support Sp/GP filing/alteration.

This is RFC draft to discuss more about suitable approaches 

# Basic example

If the proposal involves a new or changed API, component, etc., include a basic code example.
Omit this section if it's not applicable.

# Motivation
SBC staff want to access staff dashboard to search for SP/GP filing for clients, They may have to registor SP/GP companies behalf of client

# Solution Options
## 1) Use a new role for sbc staff from key cloak

### Summary
keycloak Roles are used accross application to determine who can access staff dashboard.
We have to create a new role for sbc-staff and use the same role check (similear to staff) in application and show appropriate pages for sbc-staff and Staffs 

### Detailed design
1. Have to create a new role in keycloak for sbc-staff and
2. In code we have to check in all place where we need to give permission for new role , like staffed
3. They should be able to switch to account or as a staff.
4. According to role sbc-staff will have limitted permission

## 2) Bring all staff into one account and connect accounts using account deligation

### Summary
Now staff is not a part of any accounts, and staff is role is checking directly from keycloak. As a part of this solution all users will be under at least one account and staff will be deligated to all accounts accordign to access permissions. Then we will handle grannual permission for staff from sbc-auth like end users. This
The same will be applicable to sbc-staff also. Sbc-staff will deligate access to accocunt which they want to work on behalf of client

it will be similear to below rfc (instad of entity, account will be deligated to another acccounts)
https://github.com/bcgov/entity/blob/master/rfcs/rfc-delegation-and-permissions.md

### Detailed design
1. Account will be deligated to another account
2. All permissions will be grannualar level , Auth API will control Permissions
3. All partner apps should have to make API call to Auth API and get permissions before allowing access to application


# Solution Options
## 3) Allow staff to be part of GVM account 

### Summary
Now staff is not part any account, sbc-staff are part of one GOVM account. 
sbc-staff can switch account staff dashboard and do search and altreation of filing using keycloak role, and they can file new SP/GP using their GOVM acccont.

### Detailed design
1. sbc-staffs will have to nre role in keycloak
2. While accessing partner app, partner app can check role from keycloak and show component/page accordingly
3. sbc-staff can access staff dashboard with new permissions


# Drawbacks

Why should we *not* do this? Please consider:

- implementation cost, both in term of code size and complexity
- whether the proposed feature can be implemented in user space
- the impact on teaching people
- integration of this feature with other existing and planned features
- cost of migrating existing applications (is it a breaking change?)

There are tradeoffs to choosing any path. Attempt to identify them here.


# Adoption strategy

If we implement this proposal, how will existing developers adopt it? Is this a breaking change? How will this affect other projects in the Entity ecosystem?

# Unresolved questions

Optional, but suggested for first drafts. What parts of the design are still TBD?

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
