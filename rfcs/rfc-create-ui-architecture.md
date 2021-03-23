# RFC for a "Create UI" Architecture To Support New Filing Types

- Start Date: (2021-03-10)
- Target Major Version: [Epic #6705](https://github.com/bcgov/entity/issues/6705)
- Reference Issues: (None)
- Entity Issue: [Task #6725](https://github.com/bcgov/entity/issues/6725)
- Implementation PR: (None)

# Summary

Currently, the [Create UI web app](https://github.com/bcgov/bcrs-business-create-ui) allows a user to enter and file a Benefit Company (BCOMP) Incorporation Application (IA).

We need a software architecture/design to extend this web app to support many other types of incorporation and continuation filings easily and efficiently. The new filing types will have various differences with each other and the original filing type, and we want to be able to add them while keeping the code straightforward to implement, validate and maintain.

# Basic example

The specific configuration and resources (eg, flags, string, rules) for the different filing types should be stored separately from the code that processes them. This entails a new module to store and access this data, and other code changes to function according to this data.

# Motivation

A proper software architecture/design to handle new, different filing types will:

- speed up the integration of new types of filings
- promote easy-to-understand code flows as they relate to different filing types
- promote maximum reuse of existing architecture, components and other code
- facilitate maintenance of increasingly-complex code
- minimize large future code refactors

This RFC will inform upcoming task breakdown, grooming and sprint planning to implement the new filing types.

# Detailed design

## Config/resource module

This is the code that stores specific configuration and resources (eg, flags, string, rules) for the different filing types. It can contain:

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

The code below is an example only. Note that:

- different data types or rules could be stored differently
- a single config array is shown, but if it makes sense, some data could be stored in separate objects (eg, the steps/pages for a specific filing type)
- an abstraction layer may be needed to group bundles of similar filing types
- the data could come from external files, or even from a network server

```typescript
/** Sample array of config objects. */
const myConfigArray: ConfigObjectIf[] = [
   {
      type: FilingTypes.BenefitIncorpApp
      showComponentX: true,
      titleString: 'Benefit Company',
      directorsRules: [
         (directors: DirectorIF[]) => (directors.length >= 3)
      ]
   },
   {
      type: FilingTypes.NewContinuationFilingX
      showComponentX: false,
      titleString: 'Continuation Filing',
      directorsRules: [
         (directors: DirectorIF[]) => (directors.length >= 1),
         (directors: DirectorIF[]) => (directors.length <= 3)
      ]
   }
]

/** Returns the Show Component X flag for the specified type. */
getShowComponentA (type: FilingTypes): boolean {
   const obj = this.myConfigArray.find(o => o.type === type)
   return obj?.showComponentX || null
}

/** Returns the Title String for the specified type. */
getTitleString (type: FilingTypes): string {
   const obj = this.myConfigArray.find(o => o.type === type)
   return obj?.titleString || ''
}

/** Returns the Directors Rules for the specified type. */
getDirectorsRules (type: FilingTypes): Function[] {
   const obj = this.myConfigArray.find(o => o.type === type)
   return obj?.directorsRules || []
}

/** If desired, functions can be added to Vue instance like this. */
Vue.prototype.$showComponentX = getShowComponentX(this.currentFilingType)
Vue.prototype.$titleString = getTitleString(this.currentFilingType)
Vue.prototype.$directorsRules = getDirectorsRules(this.currentFilingType)
```

## Processing

This is the code that processes differently according to the specific configuration and resources (eg, flags, string, rules) of the current filing type, for example:

- conditional logic based on flags/rules
- display specific titles/text
- do not use `if (a) then ... else ...` as the else (fallback) case will make it harder in the future to understand when rules apply or don't apply
- do use `if (a) then ... else if (b) then ...` -- a condition for each filing type
- avoid cascading rules; instead, use more specific conditions (*)
- add new resources to all existing filing types
  - if a rule doesn't apply, add an explicit code comment so it doesn't look like an oversight
- refactor existing resources as needed to maintain clarity/cleanliness

(*) Although default/overarching rules, with specific exceptions for some filing types, initially sound like a good idea, their use should be minimized or heavily scrutinized, as they can lead to complicated logic -- which will lead to complicated or hard-to-understand (and therefore, hard to implement, debug and maintain) code.

The code below is an example only. Additional logic can build upon this, and it will be refined as implementation progresses.

```typescript
if (Vue.$getShowComponentX) {
   // Render component X.
}

// Log the display string.
console.log('Type =', Vue.$displayString)

// Compute directors validity.
// (False if some rule is false, else True.)
const validDirectors = Vue.$directorsRules.some(rule => !rule(directors))
```

# Drawbacks

There is an additional up-front cost in implementing this architecture/design -- but it is expected to be quickly recouped in savings in code complexity and its resultant cost.

Developers will have to use externalized/abstracted configuration/resources per filing type (ie, instead having them right there in the code) -- but the examples in this RFC should help to explain this -- and this too is an overall reduction in code complexity as more filing types are added.

Each time a filing type is added, the existing filing types (beginning with the BCOMP IA) will need their configuration/resources extracted and their existing refactored. We will only know what to extact and refactor as we identify differences with the new filing types. However this effort should decrease with each new filing type, and can be considered "evidence" of code complexity avoided.

# Alternatives

The following designs have been considered:

1. Creating a new app for each new filing type was rejected outright as overkill and resulting in much code duplication (and thus harder to maintain).

2. Updating the code independently for each new filing type was rejected outright as that usually leads to a "blinders" approach (where only the immediate code is considered), quickly resulting in complex/convulted logic that is difficult to write, understand, verify and maintain.

3. Implementing/enhancing a component once with all possible permutations to handle all different filings was rejected as difficult or impossible to build correctly (as we can't know everything up front). Also, with this approach, it is not possible to test end-to-end during development, and new filing types cannot be released (deployed) one by one.

4. Adding filings types one by one, enhancing components as we go and adding in per-type handling where needed, is likely easy and flexible as we only update what we need, when we need it (ie, Agile). This is probably less work than the above alternatives, and even though we'll touch components often, and we can release new filing types as they are implemented.

The preferred design is a blend of options 3 and 4:

- add filing types in small bundles, eg, one bundle for IA - BC, CCC, ULC; one bundle for Continuation Ins - BEN, BC, CCC, ULC
- have awareness of other permutations outside of current bundle to inform configuration and logic changes
- it is not possible to test end-to-end developments until a bundle is completed
- can still enhance components as we go, adding in per-type handling where needed
- still only update what we need, when we need it, but with awareness when designing configs to make it easier to implement future bundles
- can release new filing types as they are implemented

# Adoption strategy

We should implement this proposal as a way to reduce the overall effort/cost of implementing new types of incorporation and continuation filings and of maintaining the subject web app.

Existing developers will have to use externalized/abstracted configuration/resources per filing type (ie, instead having them right there in the code) -- but the examples in this RFC should help to explain this.

This is a "breaking change" for all existing filing types (beginning with the BCOMP IA), insofar as they need their resources extracted and their code refactored to handle differences with new filing types -- but this will be resolved by each new filing type added.

The subject changes in the Create UI web app are not dependent upon, and do not affect, other Entity projects directly. However, ongoing development of other projects may be needed to support other filing/business types; that will be subject of other epics, RFCs, etc as needed.

# Unresolved questions

1. Are there any dependencies? Do we know what we need to, to begin?

   ```text
   ➼ to be resolved during grooming
   ```

2. Can we update a schema(s) so that the API can validate the "business logic" captured in the data? Which other non-schema API validations will be needed?

   ```text
   ➼ may require an additional RFC or "spike" task to answer
   ```

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.

# Appendix

## Approach/principles

- start small and add to it
- keep a sane architecture as we build upon it
- keep it general so that it can be extended easily
- refactor resources/config object as needed
- minimize code refactoring
- create unit tests to ensure resource object and components continue to function correctly through code changes
- parameterize unit tests to minimize duplication
- create and use common or [shared components](https://github.com/bcgov/bcrs-shared-components) as opportunities arise

## Grooming considerations

1. Use a story per "bundle of filing types" (instead of a story per component).
2. Within stories, add tasks for different application steps/pages.
3. The first story for a new filing type (other than IA) needs extra time to design and implement the resource/config object (and refactor the BCOMP IA-specific code).
4. The first story also needs extra time to create initial (parameterized) unit tests.
5. Subsequent stories will need time to update the resources/config object and refactor any new, different config/code.
6. Subsequent stories will need time to update code where functionality differs between "bundles".
7. Subsequent stories will need time to update unit tests.

## Resolved issues

The following issues were discussed by the team during a review of the initial draft of this RFC.

1. We should investigate existing mechanisms/libraries to manage the resources object.
   - [vue-config](https://github.com/alex-oleshkevich/vue-config) may have code we can use to access a "config"
   - see what we did for resources in Filings UI and maybe build upon it
   - we may be able to use this "under the hood" to store and/or access our per-filing config

   ```text
   ➼ what we develop will be a wrapper for our use, possibly using vue-config to store/access data
   ```

2. Should we implement i18n for internationalization (ie, support for English/French/FN) at the same time?
   - see [vue-i18n](https://kazupon.github.io/vue-i18n/)
   - our resources/config object should support future internationalization (ie, whatever titles/blurbs it contains)
   - we should try to design our config accessor functions similarly to i18's (see their Guide section), to leverage and promote familiarity with that style
   - we should be able to support i18n "under the hood" to store internationalized strings as needed; this is not needed at the moment and can likely be added later

   ```text
   ➼ what we develop will be a wrapper for our use, ideally looking similar to i18 syntax, and possibly
      supporting i18n internally in the future as needed
   ```

3. Should we add our resources/config object to the Vuex store?
   - no, as our config data is static (not changing like the store)
   - no, because our config object will support reactivity anyway
   - no, because we don't want to complicate the store if we don't have to

   ```text
   ➼ no, as there is no advantage to using the store at the moment; this can be changd later if needed
   ```

4. Should we support the fetching of "rules" like a date range from the API?
   - either when the app starts, or as part of the data for the subject business/type
   - inject those dynamically into the resources data (or store)?
   - consider this when designing the resources architecture/data oject
   - can be added/enhanced later

   ```text
   ➼ not at the moment, but if possible, design/implement config architecture to support this later if
      needed
   ````

5. What about different steps/routing between filing types?
   - Create UI anticipated different steps but this is the first time we'd actually be configuring/using this and we haven't yet worked through the finer details (eg, overall filing validation)
   - definitely need to keep supporting different steps/routes

   ```text
   ➼ work through this during implementation; be aware of possibe extra work here
   ```

6. Are there different entry points -- is there always a draft? Any other app init differences?
   - future user flows are still being designed (UX high level design)
   - it is expected that Create UI will always have a draft to load

   ```text
   ➼ current flow is OK; nothing further to do at the moment
   ```

7. We may need to refactor existing data management (ie, Vuex store objects) to handle different filing types instead of what was developed specifically for IAs.
   - ie, generalize some data structures away from "IA" (and towards incorporation? continuation? generic filing?)

   ```text
   ➼ work through this during implementation; be aware of possibe extra work here
   ```

8. How do we manage Feature Flags to deploy filing types independently?
   - definitely need to consider this, as new filing types (and probably legal types) may need to be released at different times
   - also, may want to release this to specific user groups only
   - Create UI already supports LaunchDarkly user profiles
   - LaunchDarkly already supports user grouping, etc
   - note that some features flags are temporary (ie, to manage deployments), while others may exist for long-term external configuration purposes (eg, to turn on or off banners, or turn on or off a route to payments, etc)

   ```text
   ➼ this is a larger discussion outside the scope of this RFC, but be aware that feature flags will be
      utilized extensively
   ```

9. Is there any new staff-only functionality? should this be configurable or hard-coded?
   - yes, it is expected that staff will have not only sections hard-coded for them only, but also some conditional filing types or sections within a filing type
   - note that roles may be provided by an auth call or JWT data

   ```text
   ➼ design and implementation needs to support flexibility around staff (or other) roles
   ```

## References

- Create UI web app: https://github.com/bcgov/bcrs-business-create-ui
- Existing UI address schema: https://github.com/bcgov/bcrs-business-create-ui/blob/master/src/schemas/office-address-schema.ts
- BCRS Shared Components: https://github.com/bcgov/bcrs-shared-components
- vue-config: https://github.com/alex-oleshkevich/vue-config
- vue-i18n: https://kazupon.github.io/vue-i18n/
