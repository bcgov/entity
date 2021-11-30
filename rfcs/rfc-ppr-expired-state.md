- Start Date: 2021-11-09
- Target Major Version: (EPIC or User Story TAG|Link)
- Reference Issues: (fill in existing related issues, if any)
- Entity Issue: (leave this empty)
- Implementation PR: (leave this empty)

# Summary
Automate PPR registration transition from an active to an expired state.
Build a PPR nightly batch process that runs just after midnight Pacific Time and transitions all database registrations that expired on the previous day to an expired state.

Background:
- Discharge registrations set the state to discharged (HDC).
- No changes may be made to expired registrations.
- The scope is PPR API only: regardless of the decision, no change to the PPR UI is required. 

# Motivation
Explore implementing an efficient solution to setting a registration to an expired state. Most PPR API operations require
examining and reporting on the registration state; an expired registration is a distinct state.
Setting the state once and referencing a well-known value for all states is a desirable outcome.
Explicitly setting the state facilates identifying registrations that are eligible for "purging".
Purging is a separate, future ETL process that moves records from the PPR active database to a historical one.

# Detailed design

## Create a PostgreSQL database table
Record the status of the job execution in a new log table.

## Create a PostgreSQL SQL Script
This script will transition the financing statement state from active (ACT) to expired (HEX) 
for all registrations that are active and expired at 23:59:59 Pacific Time on the previous day.
The script will also log the status of the update in the new log table.

## Create a script container 
Create a container and python script that will run the SQL script.

## Create a scheduled k8s cronjob/GCP cloud scheduler
Schedule the script container to run daily just after midnight Pacific Time. Add robustness/reliability including retrying
a number of times on failure.

## Add monitoring support
Leverage existing monitoring: run a daily database query on the log table to report the status of the job.

# Drawbacks
- Registries does not run any other PostgreSQL database scheduled jobs. Another process to maintain and monitor.
- Some additional setup for monitoring and notification of job failures. 

# Alternatives
Update all API code that examines registration state as a condition to also compare the registration 
expiry date to the system timestamp.
Costs:
- Some code change to the API.
- Small overall API performance hit.

# Adoption strategy
- Needs to occur before PPR go-live.
- Isolated to the PPR API and database.
- Developer needs to write the db stored procedure to execute and configure the job to run.

# Unresolved questions
What is the impact of incorrectly representing the state of a registration, even for a short period of time (hours).

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
