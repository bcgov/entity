# RFC for a "Create UI" Architecture To Support New Filing Types

- Start Date: (2021-03-10)
- Target Major Version: None
- Zenhub Ticket #: https://github.com/bcgov/entity/issues/6725

## Introduction

Currently, the [Create UI web app](https://github.com/bcgov/bcrs-business-create-ui
) allows a user to enter and file a Benefit Company (BEN) Incorporation Application (IA). This web app needs to be enhanced to support many other types of incorporation and continuation filings.

The purpose of this RFC is to propose/communicate/discuss/plan the implementation of an architecture in this web app to support these other filings. The goals of this architecture are to:

- speed up the integration of new types of filings
- promote easy-to-understand code flows as they relate to different filing types
- promote maximum reuse of existing architecture, components and other code
- facilitate maintenance of increasingly-complex code
- minimize large future refactors
- apply best practices learned in the development of other BCROS web apps (and other apps in general)

## Summary

The requirement is for a way to capture business logic in the code, but have it easy to work with.

The proposed solution is two-fold:

1. centralize the differences of the various filing types in one place -- using a "resources" (aka config) object that contains data specific to each filing type

2. update the code to function differently, where needed, according to each filing's configuration

Note: This discussion excludes the integration of a high-level rules engine such as [json-rules-engine](https://www.npmjs.com/package/json-rules-engine). However, we may be able to copy its syntax and terminology -- to be looked at during detailed design of our config object.

## Detailed Solution

### 1. Resources (Config) Object

Create a global "resources" (aka config) object (and access methods) that can contain:

- flags or variables to enable/disable features or modify code flows
- specific text fields for a filing (titles, blurbs, etc)
- dynamic "rules" -- such as a date range -- or other constraints
- schemas passed to components (eg, for address validation)
  - or constraints that could be used in a schema (eg, country must be Canada)
  - see [existing UI address schema](https://github.com/bcgov/bcrs-business-create-ui/blob/master/src/schemas/office-address-schema.ts)
- other validation rules or functions (eg, for Vuetify components)
- doesn't have to be one large file -- could import/specify references to other objects
- hopefully make this clear/clean enough that a Business Analyst could (help) verify the config per filing type
- probably don't need to fetch this resources/config object from server/db at this time
  - we don't need the flexibility at the moment (and our code may not support the flexibility anyway)
  - resources/config object can just be part of the codebase for now (can be changed later if needed)

### 2. Code Changes

As new filing types are added, update the code to use the resources for the current filing type, eg:

- conditional logic based on flags/rules
- display specific titles/text
- do not use `if (a) then ... else ...` as the else (fallback) case will make it harder in the future to understand when rules apply or don't apply
- do use `if (a) then ... else if (b) then ...` -- a condition for each filing type
- avoid cascading rules; instead, use more specific conditions (*)
- add new resources to all existing filing types
  - if a rule doesn't apply, add an explicit code comment so it doesn't look like an oversight
- refactor existing resources as needed to maintain clarity/cleanliness

(*) Although default/overarching rules, with specific exceptions for some filing types, initially sound like a good idea, their use should be minimized or heavily scrutinized, as they can lead to complicated logic -- which will lead to complicated or hard-to-understand (and therefore, hard to implement, debug and maintain) code.

## Principles

- start small and add to it
- keep a sane architecture as we build upon it
- keep it general so that it can be extended easily
- refactor resources/config object as needed
- minimize code refactoring
- create unit tests to ensure resource object and components continue to function through code changes
- parameterize unit tests to minimize duplication
- create and use common or [shared components](https://github.com/bcgov/bcrs-shared-components) as opportunities arise

## Implementation

### Option 1

- implement/enhance a component once with all possible permutations to handle all different filings
- difficult or impossible to build correctly (we can't know everything up front)
- not possible to test end-to-end during development
- cannot release (deploy) new filing types one by one

### Option 2

- add filings types one by one
- enhance components as we go, adding in per-type handling where needed
- this is likely easier and more flexible as we only update what we need, when we need it (ie, Agile)
- this is probably less work, even though we'll touch components often
- can release new filing types as they are implemented

### Option 3

This is a blend of options 1 and 2:

- add filing types in small bundles, eg, one bundle for IA - BC, CCC, ULC; one bundle for Continuation Ins - BEN, BC, CCC, ULC
- have awareness of other permutations outside of current bundle to inform configuration and logic changes
- it is not possible to test end-to-end developments until a bundle is completed
- can still enhance components as we go, adding in per-type handling where needed
- still only update what we need, when we need it, but with awareness when designing configs to make it easier to implement future bundles
- can release new filing types as they are implemented

### Recommendation

~~Follow option 2.~~

Proceed with option 3.

## Grooming Considerations

1. use a story per "bundle of filing types" (instead of a story per component)
2. within stories, add tasks for different application steps/pages
3. first story for a new filing type (other than IA) needs extra time to design and implement the resource/config object
4. first story also needs extra time to create initial (parameterized) unit tests
5. subsequent stories will need time to update the resources/config object
6. subsequent stories will need time to update code where functionality differs between "bundles"
7. subsequent stories will need time to update unit tests
8. are there any dependencies? do we know what we need to, to begin?
9. can we update a schema(s) so that the API can validate the "business logic" captured in the data? which other non-schema API validations will be needed?

## Complications/Outstanding Questions

1. we should investigate existing mechanisms/libraries to manage the resources object
   - [vue-config](https://github.com/alex-oleshkevich/vue-config) may have code we can use to access a "config"
   - see what we did for resources in Filings UI and maybe build upon it
   - we may be able to use this "under the hood" to store and/or access our per-filing config
   - **decision**: what we develop will be a wrapper for our use, possibly using vue-config to store/access data
2. should we implement i18n for internationalization (ie, support for English/French/FN) at the same time?
   - see [vue-i18n](https://kazupon.github.io/vue-i18n/)
   - ~~this is probably different enough that there is little value in doing it as the same time~~
   - our resources/config object should support future internationalization (ie, whatever titles/blurbs it contains)
   - we should try to design our config accessor functions similarly to i18's (see their Guide section), to leverage and promote familiarity with that style
   - we should be able to support i18n "under the hood" to store internationalized strings as needed; this is not needed at the moment and can likely be added later
   - **decision**: what we develop will be a wrapper for our use, ideally looking similar to i18 syntax, and possibly supporting i18n internally in the future as needed
3. should we add our resources/config object to the Vuex store?
   - no, as our config data is static (not changing like the store)
   - no, because our config object will support reactivity anyway
   - no, because we don't want to complicate the store if we don't have to
   - **decision**: no, as there is no advantage to using the store at the moment; this can be changd later if needed
4. should we support the fetching of "rules" like a date range from the API?
   - either when the app starts, or as part of the data for the subject business/type
   - inject those dynamically into the resources data (or store)?
   - consider this when designing the resources architecture/data oject
   - can be added/enhanced later
   - **decision**: not at the moment, but if possible, design/implement config architecture to support this later if needed
5. what about different steps/routing between filing types?
   - Create UI anticipated different steps but this is the first time we'd actually be configuring/using this and we haven't yet worked through the finer details (eg, overall filing validation)
   - definitely need to keep supporting different steps/routes
   - **decision**: work through this during implementation; be aware of possibe extra work here
6. are there different entry points -- is there always a draft? other app init differences?
   - future user flows are still being designed (UX high level design)
   - it is expected that Create UI will always have a draft to load
   - **decision**: nothing further to do at the moment; current flow is OK for the moment
7. may need to refactor existing data management (ie, Vuex store objects) to handle different filing types instead of what was developed specifically for IAs
   - ie, generalize some data structures away from "IA" (and towards incorporation? continuation? generic filing?)
   - **decision**: work through this during implementation; be aware of possibe extra work here
8. how do we manage Feature Flags to deploy filing types independently?
   - definitely need to consider this, as new filing types (and probably legal types) may need to be released at different times
   - also, may want to release this to specific user groups only
   - Create UI already supports LaunchDarkly user profiles
   - LaunchDarkly already supports user grouping, etc
   - note that some features flags are temporary (ie, to manage deployments), while others may exist for long-term external configuration purposes (eg, to turn on or off banners, or turn on or off a route to payments, etc)
   - **decision**: this is a larger discussion outside the scope of this RFC, but be aware that feature flags will be utilized extensively
9. is there any new staff-only functionality? should this be configurable or hard-coded?
   - yes, it is expected that staff will have not only sections hard-coded for them only, but also some conditional filing types or sections within a filing type
   - note that roles may be provided by an auth call or JWT data
   - **decision**: design and implementation needs to support flexibility around staff (or other) roles

## References

- Create UI web app: https://github.com/bcgov/bcrs-business-create-ui
- jason-rules-engine: https://www.npmjs.com/package/json-rules-engine
- Existing UI address schema: https://github.com/bcgov/bcrs-business-create-ui/blob/master/src/schemas/office-address-schema.ts
- BCRS Shared Components: https://github.com/bcgov/bcrs-shared-components
- vue-config: https://github.com/alex-oleshkevich/vue-config
- vue-i18n: https://kazupon.github.io/vue-i18n/

## Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
