- Start Date: 2022-08-25
- Target Major Version: None
- Reference Issues: github/entity#13367
- Entity Issue: github/entity#13368
- Implementation PR: (leave this empty)


# Summary
Registries search relies on the data in the search solr core to be up to date so that it returns relevant data based on a user search. The current solr core updater is a batch update that happens once every hour and it is an expensive process that takes up to 15 minutes. This means the search solr core could miss searches or show incorrect data changed within the past hour and 15 minutes. Building a trickle feeder implementation will ensure that the search solr core is updated immediately (within a couple minutes) after any changes made to an entity in LEAR or COLIN.

# Basic example
### LEAR
1. User makes change to the business name in the LEAR front end application via a filing. (existing)
2. Filing is validated, saved, payment completed, etc. in the legal-api and put on the queue. (existing)
3. Filing is processed and applied to the LEAR database by the entity-filer and event for business is put on the queue. (existing)
4. search-entity-events-listener (NATS listener based off of sbc-auth/queue_services/business-events-listener) picks up the completion event and calls the search-api (new private endpoint) to update the solr doc for the business **(new service)**
5. User searches for the entity via Registries Search and see's the entity with the changed name.
### COLIN
1. User makes change to the business name in the COLIN front end application via a filing. (existing)
2. Filing is processed and completed through existing processes. (existing)
3. Existing sql pckgs (identified in namex/nro-legacy/sql/object/..) calls the solr-feeder **(needs update)**
4. solr-feeder calls search-api to update the solr doc for the business **(needs update)**
5. User searches for the entity via Registries Search and see's the entity with the changed name.


# Motivation
Registry Search needs to be as accurate as possible. Having out of date data will cause users to call in and/or not trust the system. 

# Detailed design
The diagram below summarizes the flow of this solutution.
![SOLR-Feeder-Updates](https://user-images.githubusercontent.com/1042854/185244689-0ed3d37b-a8e4-4071-907e-0f08fa7ed082.jpg)
Contents:
1. search-events-listener (New NATS listener that calls the search-api to update search solr)
2. search-api (new private endpoint that allows internal entity services to update solr docs)
3. oracle sql pckg updates (update to call solr-feeder on owners changes)
4. solr-feeder (Update solr-feeder to update search solr docs via the search-api)
### search-events-listener
Refer to `sbc-auth/queue_services/business-events-listener` for setup (it will be getting the same message payload and listening to the same publisher). Check for business change messages and then call the search-api to update the solr doc for the business.
### search-api
Add a new PUT endpoint for updating solr docs. It will be given and then validate the full data for the solr doc (in case it is an COLIN business) and then update solr with it. Configure it as private to internal services in GCP.
### Oracle sql packages
We have existing oracle sql packages in `namex/nro-legacy/sql/object/...` that call the solr-feeder when a business state or name change happens. This will include updating the correct packages to call the solr-feeder when an owner change happens. A release will need to be added in `namex/nro-legacy/sql/release` and coordination with David Roberts to add the changes into CDEV/CTST/CPRD.
### solr-feeder
Update the existing solr-feeder in `namex/solr-feeder` to call the new search-api endpoint to update search solr docs. It will need to pass the changed data from COLIN (it should have it in the payload it is given from the sql pckg call)

# Drawbacks
1. We will throw out the code added for trickle feeding from COLIN once it is migrated to LEAR.
2. This approach is a lot more work than increasing the solr-updater job frequency.

# Alternatives
Run the current solr-updater constantly. This would use up a lot of resources and would still be up to 15 minutes out of date.

# Adoption strategy
1. Create tickets for search-entity-events-listener (new NATS listener), updating search-api (new private endpoint for updating solr), changes to oracle sql packages (add owner changes + data in solr feeder call), updating solr feeder (search-api call)
2. Implement tickets, test, release
3. Pause the solr-updater job (keep it in case we need it later)

# Unresolved questions
None.

# Thanks
This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
