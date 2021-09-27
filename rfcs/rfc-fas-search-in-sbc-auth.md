# RFC For Including FAS [Fee Accounting System] dashboard in Auth application's staff dashboard

- Start Date: (2021-09-15)
- Target Major Version: None
- Reference Issues: None
- Entity Issue: https://github.com/bcgov/entity/issues/8510
- Implementation PR: None

# Summary

Embed Fas Search component in SBC-Auth project so that  staff can avail FAS Routing slip search functionality without navigating to FAS system.
 
# Basic example

Building as search component can see below 
https://github.com/shabeeb-aot/fas-ui/blob/feature/8605/src/lib-setup.js


# Motivation

This FAS search component is developed with in the fas application. The requirement is to host the search page with in the auth application as well with minimal changes in the auth-web[hosting application].
With this approach , the major benefit is that the component still lives with in FAS application which makes maintainence easier for developers rather than maintaining in a different shared library repo.This approach can be adapted incase if another dashboards ie PPR dashboard has to be hosted in auth application. The component still lives with in the original application as well as it can be used in another project. More dadvantges are listed below
 
1) Reuse existing FAS Routing slips search functionality in SBC Auth or any project needed

2) Eliminate duplicate code / fix bugs in one place only

3) code once, use it in multiple place

4) Easier component maintainability

6) Pathway for other similar use cases where one applications dashboard have to be used in another application.


# Detailed design

**How to build the components**

The components will be developed in same fas repo https://github.com/bcgov/fas-ui/. Only search component will build as a vue plugin.

https://cli.vuejs.org/guide/build-targets.html#library 

In short:
1. use same Fas github repo
2. Check it out locally
3. build as library using npm run build:lib
4. it will generate lib folder.
5. Commit/publish to GitHub (*)

No changes needed to FAS project



**Hosting**

The components will be on github only and use npm install https://github.com/bcgov/fas-ui/. This will install in code base with umd minified file and search.scss only.

**How to use it**

Just use it like any other npm package. 
install using below comment from git
```
npm i https://github.com/bcgov/fas-ui/\#feature/8605 --save
```
```
inside main.ts  `import Search from 'fas-ui'`
Vue.use(Search, { store, i18n })
```
include style if needed as non-scoped
```
@import '~fas-ui/src/assets/scss/search.scss';
```
use component where ever needed  
```          
<fas-search-component :isLibraryMode="true"/>
```

# Drawbacks

No particular drawbacks. Since we already developer FAS components in vue with compostion api, it was littile hard to make it compatable with existing SBC-Auth.
The idea is still use existing FAS as it is and build only necessary component as plugina and export.



# Main Options Considered

1) Duplicated code between projects

    Don't actually do this if possible!

2) Use as Iframe 

    It is easiest and simplest approch.But still we need to controll some part of application when we are using as a component. which we cant do by  using iframe. Also need to consider about security

3) Inside SBC-common-components

    Another option to write code inside common component and use it in both sbc-auth and fas system. Since common component is used accross project and its not exported as component by component, it will increase bundile size in all project. Also we already wrote entire code for this component inside FAS using compostion api. which not supported by common component without any package updated.

4) Inside BCRS-shared-components
    
    The FAS Search component is developed using Vue Composition API.Composition api is not compatablie as such with current vue version in bcrs-shared and demands  lot of code changes to make it work with bcrs shared component library.
    BCRS-shared-component is developed with the idelogy of simple components which can stand alone.Vuex, Store etc has to be passed externally so that component is lean and the simplicity is atttained.But since FAS search component is complicated and it requires store , axios etc , this will demand rewrite of the existing search component so that it can fit well into bcrs-shared-component.With the approach opted , minimal code change is only necessry. 
   

# Additional Tools Considered


No additional tools required.

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
