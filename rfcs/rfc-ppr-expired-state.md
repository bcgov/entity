- Start Date: 2021-11-09
- Target Major Version: (EPIC or User Story TAG|Link)
- Reference Issues: (fill in existing related issues, if any)
- Entity Issue: (leave this empty)
- Implementation PR: (leave this empty)

# Summary

Build a PPR nightly batch process that runs just after midnight and transitions all database registrations 
that expired on the previous day to an expired state. 
- No changes may be made to expired registrations.
- The scope is PPR API only: regardless of the decision, no change is required to the PPR UI. 

# Motivation
Implement an efficient solution to setting a registration to an expired state. Most PPR API operations require
examining and reporting on the registration state; an expired registration is a distinct state.
Setting the state once and referencing a well-known value for all states is a desirable outcome.

# Detailed design

## Create a PostgreSQL database table
Record the status of the job in a new log table. This step may be unnecessary if pg_cron is 
implemented.

## Create a PostgreSQL database function
This function will transition the financing statement state from active (ACT) to expired (HEX) 
for all registrations that are active and expired at 23:59:59 Pacific Time on the previous day.
The function will log the result and return a status.
Estimated lines of code: < 50.

## Create a Scheduled job 
Create either a PostgreSQL job (pg_cron extension) or an OS cron job or use an existing Registries job scheduler. 
Run the database function nightly after midnight Pacific Time. Add robustness/reliability including retrying
a number of times on failure.
Long term moving to GCP pg_cron may be preferrable to an OS job.
Estimated duration of job execution: < 1 minute.

## Add monitoring support
Leverage existing monitoring: run a daily database query on the log table to report the status of the job.

# Drawbacks
- Registries does not run any other PostgreSQL database scheduled jobs. Another process to maintain and monitor.
- Some additional setup for monitoring and notification of job failures. 

# Alternatives
Update all API code that examines registration state as a condition to also compare the registration 
expiry date to the system timestamp. Update all API responses that include registration state to also 
conditionally set the state to expired with new code.
Costs:
- More code to update and maintain.
- Overall API performance hit.

# Adoption strategy
- Needs to occur before PPR go-live.
- Isolated to the PPR API and database.
- Developer needs to write the db stored procedure to execute and configure the job to run.

# Unresolved questions
What is the impact of incorrectly representing the state of a registration, even for a short period of time (hours).

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
