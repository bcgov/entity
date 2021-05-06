# Quarterly Review Check List
This is a procedure of reviewing the production code quarterly to reduce application security risks.

## Team member access review:
Remove or downgrade the access when a team member no longer supports an application.
- Review the access privilege of team member in Github.
- Review team member roles in Openshift platform
- Review realm admins in Keycloak platform
- Review team member access permissions in other third party applications: Hotjar, 1Password, Sentry, LaunchDarkly

## Application Libraries review:
Check the third-party library that the application uses to view any public warnings; if it is, we must upgrade to a secure version as soon as possible.

## Production code scanning:
Review production code to find any hard code value, secrets and dead end code.

## Production code log scanning:
Review the log to see any special events.

## Audit log scanning:
Go through audit table to see any unexpected behaviors.
