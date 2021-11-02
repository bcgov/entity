- Start Date: 2019-11-02
- Reference Issues: 
- Entity Issue: bcgov/entity#9430
- Implementation PR: [Completed](https://github.com/bcgov/sbc-pay/pull/801)

# Summary

Relationships team will use [Flask-Admin] (https://flask-admin.readthedocs.io/en/latest/) to manage the code table values around fee.

# Basic example


# Motivation

Flask-Admin is used by Namex. 
# Detailed design

Some level of role based authorization will be built as part of the implementation;
- SRE (Group in keycloak) : would get read only access to the admin UI.
- SRE/ADMIN  (Group in keycloak) : Would get edit and create access to the admin UI. This is done considering sensitive nature of the data.

# Drawbacks

A highly custom UI to match with BC Gov templates would be really hard to generate. Basic implementation will use defaults from Flask-Admin as the focus is more on functionality than User Experience.

# Alternatives

# Adoption strategy

Covered above.

# Unresolved questions

None at this time.

# Thanks


This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
