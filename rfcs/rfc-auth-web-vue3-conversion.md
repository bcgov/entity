- Start Date: 2023-01-09
- Target Major Version: 1.2.0
- Reference Issues: github/entity#14475
- Entity Issue: github/entity#14475
- Implementation PR: tbd

# Summary

We need to upgrade auth-web from Vue 2 to Vue 3. To do this we will also need to upgrade the sbc-common-components, bcrs-shared-components breadcrumb/staff-comments components and the fas-ui to Vue 3. Currently most of the components are built in the vue-class-component style which is incompatible with Vue 3. Components written in the vue-composition-api style can be used directly in Vue 3 with minimal changes. In an effort to incrementally upgrade auth-web we are planning to convert the vue-class-component style components to vue-composition-api, which will allow us to catch any errors with the existing test suite and update components a few at a time instead of all at once. From there we can upgrade to Vue 3 with minimal changes.

To further avoid changes needed when upgrading to Vue 3 we also plan to rewrite the vuex store for sbc-common-components and auth-web into composables similar to registries-search. This will simplify the logic and reduce the risk of bugs when we release.

Once all the components are written using the composition-api and composables we will need to do the following to upgrade to Vue 3:

- remove Vue 2 composition-api boiler plate (it is built into Vue 3) <- _possibly update everything to script setup here as well?_
- upgrade to Vuetify 3 (styling and lots of html will need to be updated)
- rewrite test suite (auth-web is using a beta version vue-test-utils so there are a lot of changes for setting up tests etc.)
- figure out datatables (depends on what Vuetify 3.x releases). Worst case we can refactor them to use registries-search base-table
- add versioned composables/requests from auth-web/registries-search into sbc-common-components or bcrs-shared-components so that any Vue 3 apps can use them going forward with minimal effort

# Motivation

In order to keep the auth-web up to date with Vue we need to upgrade. Vue 2 end of life is the end of 2023. Additionally Vue 3 is faster, provides more flexibility for coding, has better typescript support, allows script setup with composition-api (less boiler plate, easier to read and faster to code), etc.

# Detailed design

The following are the main steps for us to upgrade to Vue 3

1. Convert auth-web components to use vue-composition-api
2. Convert sbc-common-components to use vue-composition-api
3. Convert bcrs-shared-components breadcrumb to use vue-composition-api
4. Upgrade sbc-common-components to Vue 3
5. Upgrade bcrs-shared-components to Vue 3
6. Upgrade fas-ui to Vue 3
7. Upgrade auth-web to Vue 3

## Convert auth-web components to use vue-composition-api

The vue/composition-api library is already imported and working. Each vue-class-component will be converted. The vuex store will also be rewritten into composables.

First glance esimated time for converting components to composition-api (small is 30 mins to 2 hours to convert, medium is 2 hours to half a day to convert, large is half a day to a day to convert):
**grand total: 155 small, 29 medium, 7 large, 1 xlarge**

- components **total: 89 small, 22 medium, 6 large**

  - auth
    - account-deactivate _(1 small)_
    - account-freeze _(3 small)_
    - account-settings
      - account-info _(4 small, 1 large)_
      - activity-log _(1 small)_
      - advance-settings _(1 small, 1 medium)_
      - login-options _(1 small)_
      - payment _(1 medium)_
      - product _(1 medium)_
      - statement _(2 medium)_
      - team-management _(6 small, 3 medium, 1 large)_
      - transaction _(2 medium)_
    - common
      - stepper _(3 small)_
      - _25 small, 3 medium_
    - create-account
      - non-bcsc _(5 small)_
      - _8 small, 2 medium, 1 large_
    - home _(5 small)_
    - manage-business _(3 small, 3 large)_
    - staff
      - account-management _(4 small, 3 medium)_
      - admin _(2 small, 1 medium)_
      - gl-code _(2 small)_
      - review-task _(4 small 1 medium)_
      - _2 small, 1 medium_
    - _4 small, 1 medium_
  - pay
    - common _(1 small)_
    - _3 small_
  - _1 small_

- views **(total: 58 small, 4 medium)**
  - auth
    - account-freeze _(4 small)_
    - creat-account
      - non-bcsc _(3 small, 1 medium)_
      - _6 small, 1 medium_
    - home _(5 small)_
    - staff _(8 small, 1 medium)_
    - _29 small_
  - pay _(3 small, 1 medium)_
- App.vue (medium)

Store/mixins to convert into composables **total: 8 small, 3 medium, 1 large, 1 xlarge**

- mixins _(5 small, 1 medium)_
- store modules _(3 small, 2 medium, 1 large, 1 xlarge)_

## Convert sbc-common-components to use vue-composition-api

This project does not use the vue-composition-api yet. This will be added and then all of the components / store / mixins updated to vue-composition-api. We will do this on a separate branch (or separate major version) so we do not disrupt other projects.

First time glance estimates (following the same scale as auth-web above):
**total: 29 small, 2 medium, 1 large, 1 xlarge**

- components _(21 small, 1 medium, 1 large, 1 xlarge)_
- views _(1 small)_
- mixins _(3 small)_
- store modules _(4 small, 1 medium)_

## Convert fas-ui to use vue-composition-api

This project is already using the vue-composition-api, but we still need to convert several components.

First time glance estimates (following the same scale as auth-web above):
**total: 43 small**

- components
  - common _(11 small)_
  - Dashboard _(3 small)_
  - ReviewRoutingSlip _(5 small)_
  - RoutingSlip _(5 small)_
  - ViewRoutingSlip _(11 small)_
- views
  - auth _(2 small)_
  - _5 small_
- App.vue (small)

## Convert bcrs-shared-components breadcrumb/staff-comments to use vue-composition-api

The breadcrumb component is already rewritten in Vue 3 in registries-search so we can use that when we upgrade auth-web. This step will be to rewrite the staff-comments component into vue-composition-api. Since this is the only one we need to convert we will not be rewriting the entire library.

## Upgrade sbc-common-components to Vue 3

- Upgrade Vue (follow the migration guide for config etc.)
- Remove Vue 2 composition-api boiler plate
- Upgrade vuetify
- Update tests for vue 3

## Upgrade fas-ui to Vue 3

- Upgrade Vue (follow the migration guide for config etc.)
- Remove Vue 2 composition-api boiler plate
- Upgrade vuetify
- Update tests for vue 3

## Upgrade auth-web breadcrumb and fas-ui staff-comments to Vue 3

- Import the registries-search version of the breadcrumb (move it into the vue 3 branch for sbc-common-components)
- Update the staff-comments component for Vue 3 (remove Vue 2 boiler plate)
- Update tests for vue 3

## Upgrade auth-web to Vue 3

- Upgrade Vue (follow the migration guide for config etc.)
- Remove Vue 2 composition-api boiler plate
- Upgrade vuetify
- Update tests for vue 3 (very large task)

# Drawbacks

1. Rewriting everything into the vue-composition-api will require retesting each of the components (outside of the unit test coverage). There is a chance of introducing new bugs during this conversion, but this greatly reduces the chances of introducing bugs when we upgrade to Vue 3.

# Alternatives

1. Upgrading to Vue 2.7 first. Travis and Kial investigated this and it caused the usage of the vuex store to break in several areas. It is doable, but it would require rewriting a lot of the existing code that accesses the vuex store and testing the entire app. Going to 2.7 first would give some advantages, but they do not out weigh the extra time it would take to do the upgrade in auth-web.
2. There is an npm package https://www.npmjs.com/package/vue-declassify that could potentially work well for converting from class components. I think this is risky because the unit tests in auth-web are not very extensive so this could leave us with small bugs everywhere. It will also leave auth-web looking much different than registries-search (our only other Vue 3 project).

# Adoption strategy

1. Create tickets for converting groups of components / store modules and test them incrementally.
2. Complete the conversion tickets over multiple sprints.
3. Upgrade sbc-common-components to Vue 3 first.
4. Upgrade fas-ui to Vue 3.
5. Upgrade auth-web to Vue 3.

# Unresolved questions

1. Do we want to attempt using https://www.npmjs.com/package/vue-declassify? It is not as good a solution as the vue-composition-api, but it could potentially save us a lot of time.

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
