- Start Date: (2022-07-23)
- Target Major Version: N/A
- Reference Issues: (fill in existing related issues, if any)
- Entity Issue: https://github.com/bcgov/entity/issues/12226
- Implementation PR: None


# Summary

SBC staff need to access the staff dashboard with limited privileges to support SP/GP filing/alteration.

This is an RFC draft to discuss more suitable approaches 

# Basic example

If the proposal involves a new or changed API, component, etc., include a basic code example.
Omit this section if it's not applicable.

# Motivation
SBC staff want to access the staff dashboard to search for SP/GP filing for clients, They may have to register SP/GP companies on behalf of the client

# Solution Options
## 1) Use a new role for sbc staff from keycloak

### Summary
keycloak Roles are used across the application to determine who can access the staff dashboard.
We can create a new keycloak role for sbc-staff and in code we can use this group to give permission for required component/pages.
In this ways sbc-staff can do alteration for organization behalf of the user, and sbc-staff can use their GOVM account to create new SP/GP for Users
We can create a new GOVM account and add all staff into that GOVM account where our staff also can do the same like sbc-staffs


### Detailed design
1. Have to create a new role in keycloak for sbc-staff and
2. In code we have to check in all places where we need to give permission for the new role, like staffed
3. In addition to account (where they are part), we can show staff dashboard in menu, where they can switch between staff dashboard and account 
4. When sbc-staff/staff access via staff dashboard, they can access all the accounts in our system (behalf of user)
5. When sbc-staff/staff using their GOVM account then it will act as indidual account and they can do all the functionality (like creat organization / filing, etc..)
4. As in existing we can have multiple staff groups to limit permission (search only/view/edit permissions)


This approch will have high dev impact on sbc-auth and pay-api, less dev impact on and all partner application (can directly check user role from keycloak tokens)


## 2) Bring all staff into one account and connect accounts using account deligation

### Summary
Now, the staff is not a part of any accounts, and the staff's role is checking directly from keycloak. As a part of this solution, all users will be under at least one account and staff will be deligated to all accounts according to access permissions. Then we will handle granular permission for staff from sbc-auth like end-users. This
The same will be applicable to sbc-staff also. Sbc-staff will delegate access to accounts which they want to work on behalf of the client

it will be similar to the below RFC (instead of entity, the account will be deligated to another account)
https://github.com/bcgov/entity/blob/master/rfcs/rfc-delegation-and-permissions.md

### Detailed design
1. Account will be deligated to another account
2. All permissions will be granular level, Auth API will control Permissions
3. All partner apps should have to make API call to Auth API and get permissions before allowing access to the application
4. We can show/hide components depending on the permissions they have.
5. staff have access to all functionality (with higher permissions)
6. sbc-staff can assign less permissions than staff.


This approch will have high dev impact on both sbc-auth and other applications (partner applications always need to make call to sbc-auth to check permission)

# Adoption strategy

If we implement this proposal, how will existing developers adopt it? Is this a breaking change? How will this affect other projects in the Entity ecosystem?

# Unresolved questions

Optional, but suggested for first drafts. What parts of the design are still TBD?

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
