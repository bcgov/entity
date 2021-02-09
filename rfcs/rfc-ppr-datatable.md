# RFC For PPR UI Data Table

- Start Date: (2021-02-05)
- Target Major Version: (None)
- Reference Issues: (None)
- Entity Issue: (https://github.com/bcgov/entity/issues/6240)
- Implementation PR: (None)

# Summary

The PPR UI centres around displaying data in tables for users. There was similar data table work done in NameX 2 years ago for displaying NR information to staff. This was an investigation to see whether or not we should re-use code from the NameX search screen data table or if we should consider other Vue data table implementations.

After looking at current available Vue data tables we have decided to use the same Vuetify v-data-table implementation that NameX uses, however we will not re-use the same NameX search table component because it is too specific to the NameX search screen requirements and updating it would require a lot of work. 

We have made this decision based on the following:
  - v-data-table has all the functionality needed for our UX requirements
  - v-data-table is very well documented
  - we are using Vuetify throughout the rest of our apps so it will not complicate our migration to Vue 3
  - v-data-table is simple/easy to implement and gives a lot of options for customization

# Basic example

Implemented locally with fake data and rendered successfully in our app and included all basic UX requirements. This was done by taking some example code off the Vuetify v-data-table documentation page (https://v2.vuetifyjs.com/en/components/data-tables/)

# Motivation

PPR revolves around displaying data to clients in data tables.

# Detailed design

Create a table.vue that implements v-data-table and can be used for search results, saved results, and any other tables needed for this app. Settings (i.e. custom columns/filters/etc.) can be passed to the component. Data will be held in the store passed to the component as well.

# Drawbacks

None.

# Alternatives

Each of these have good documentation and look easy to implement as well, but have drawbacks:

Cheetah Grid
  - Very fast (could load 1000000 records if needed), but we only need to load up to 1000 quickly so unnecessary
  - Unsure when they will be moving to Vue 3
  - More difference than what we already have implemented in other apps


vue-good-table
  - Would require extra work to migrate to Vue 3 (so far no Vue 3 support has been posted)
  - More difference than what we already have implemented in other apps

vue-tables-2: 
  - Would require extra work to migrate to Vue 3
  - Need to pay for advanced features that we need
  - Harder ot customize
  - More difference than what we already have implemented in other apps

Vuetable-2
  - Unsure if we could migrate it to Vue 3
  - Has not been updated in 2 years
  - More difference than what we already have implemented in other apps

# Adoption strategy

*See Detailed Design*

Implement in PPR and possibly add the base compnent to NameX later if there is time.

# Unresolved questions

None at this time.

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
