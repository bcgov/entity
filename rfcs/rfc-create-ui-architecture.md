# RFC for a "Create UI" Architecture To Support New Filing Types

- Start Date: (2021-03-10)
- Target Major Version: None
- Zenhub Ticket #: https://github.com/bcgov/entity/issues/6733

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

Note: This discussion excludes the use of a high-level rules engine such as [json-rules-engine](https://www.npmjs.com/package/json-rules-engine), which is deemed overly generic and likely to lead to more complexity, not less.

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

### Recommendation

Follow option 2.

## Grooming Considerations

1. should use a story per filing type (instead of a story per component)
2. within stories, add tasks for different application steps/pages
3. first story for a new filing type (other than IA) needs extra time to design and implement the resource/config object
4. first story also needs extra time to create initial (parameterized) unit tests
5. subsequent stories will need time to update the resources/config object
6. subsequent stories will need time to update code where functionality differs between filing types
7. subsequent stories will need time to update unit tests
8. are there any dependencies? do we know what we need to, to begin?
9. can we update a schema(s) so that the API can validate the "business logic" captured in the data? which other non-schema API validations will be needed?

## Complications/Outstanding Questions

1. we should investigate existing mechanisms/libraries to manage the resources object
   - [vue-config](https://github.com/alex-oleshkevich/vue-config) may have code we can use to access a "config"
   - see what we did for resources in Filings UI and maybe build upon it
2. should we implement i18n for internationalization (ie, support for English/French/FN) at the same time?
   - see [vue-i18n](https://kazupon.github.io/vue-i18n/)
   - this is probably different enough that there is little value in doing it as the same time
   - however, our resources/config object should support future internationalization (ie, whatever titles/blurbs it contains)
3. should we add our resources/config object to the Vuex store?
   - not if we don't have to (esp. if it's static data)
4. should we support the fetching of "rules" like a date range from the API?
   - either when the app starts, or as part of the data for the subject business/type
   - inject those dynamically into the resources data (or store)?
   - consider this when designing the resources architecture/data oject
   - can be added/enhanced later
5. what about different steps/routing between filing types?
   - Create UI anticipated different steps but this is the first time we'd actually be configuring/using this and we haven't yet worked through the finer details (eg, overall filing validation)
6. are there different entry points -- is there always a draft? other app init differences?
7. may need to refactor existing data management (ie, Vuex store objects) to handle different filing types instead of what was developed specifically for IAs
   - ie, generalize some data structures away from "IA" (and towards incorporation? continuation? generic filing?)
8. how do we manage Feature Flags to deploy filing types independently?
9. is there any new staff-only functionality? should this be configurable or hard-coded?

## References

- Create UI web app: https://github.com/bcgov/bcrs-business-create-ui
- jason-rules-engine: https://www.npmjs.com/package/json-rules-engine
- Existing UI address schema: https://github.com/bcgov/bcrs-business-create-ui/blob/master/src/schemas/office-address-schema.ts
- BCRS Shared Components: https://github.com/bcgov/bcrs-shared-components
- vue-config: https://github.com/alex-oleshkevich/vue-config
- vue-i18n: https://kazupon.github.io/vue-i18n/

## Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
