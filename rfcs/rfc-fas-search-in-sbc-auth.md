# RFC For BCRS Shared Components

- Start Date: (2021-09-15)
- Target Major Version: None
- Reference Issues: None
- Entity Issue: https://github.com/bcgov/entity/issues/8510
- Implementation PR: None

# Summary
Use existing Fas Search component inside SBC-Auth project to help staff to view FAS Routing slips without moving to fas system.
 
# Basic example

Building as search component can see below 
https://github.com/shabeeb-aot/fas-ui/blob/feature/8605/src/lib-setup.js


# Motivation

1) Reuse existing FAS Routing slips search functionality in SBC Auth or any project needed

2) Reduce duplicated code / fix bugs in one place only

3) code once, use it in multiple place

4) Easier component maintainability


# Detailed design

**How to build the components**

The components will be developed in same fas repo https://github.com/bcgov/fas-ui/. Only search component will build as a vue plugin.

https://cli.vuejs.org/guide/build-targets.html#library 

In short:
1. use same Fas git repo
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

3) Inside commont components

    Another option to write code inside common component and use it in both sbc-auth and fas system. Since common component is used accross project and its not exported as component by component, it will increase bundile size in all project. Also we already wrote entire code for this component inside FAS using compostion api. which not supported by common component without any package updated.

4) Inside shared components
    This is another good option to consider. From requirements stand point, This component need to work with out any coding (or minimal) in sbc-auth Shared component basic principle is pass store and axios from parent and use as a complete re-usable component. We need to impliment store and axios inside component to work as a stand alon component. Also we already wrote entire code for this component inside FAS using compostion api. Code is using compostion api which will need lot of changes to move to shared component
    


# Additional Tools Considered


1) https://www.npmjs.com/

    Npm is good option , we need to push to npm after build. When multiple projects come we can think about it. 


<!-- # References

- https://github.com/storybookjs/storybook
- https://storybook.js.org/docs/vue/
- https://www.learnstorybook.com/
- https://christopherkade.com/posts/storybook - automatically deploying your Storybook to Github Pages
- https://github.com/storybookjs/storybook-deployer - can deploy to GH Pages using CI
- https://www.npmjs.com/package/@storybook/cli
- https://www.npmjs.com/package/@storybook/vue - a UI development environment for your Vue components, to visualize
    different states of your UI components and develop them interactively
- https://www.npmjs.com/package/vue-storybook - a Webpack loader + helper script that allows you to embellish your
    pre-existing Vue single file components (SFC) with a custom block that's automatically translated into a
    Storybook-flavored story - use in future maybe?
- https://github.com/storybookjs/vue-cli-plugin-storybook - will create a config folder for storybook, a sample component
    and a sample story
- https://github.com/white-rabbit-japan/vue-vuetify-storybook
- https://github.com/pixari/component-library-monorepo - monorepo solution for multiple VueJs Apps and a shared component
    library
- https://github.com/lerna/lerna - a tool for managing JavaScript projects with multiple packages
- https://medium.com/js-dojo/sharing-reusable-vue-js-components-with-lerna-storybook-and-npm-7dc33b38b011 - sharing
    reusable Vue.js components with Lerna, Storybook, and npm or GitHub Package Registries

As part of my research, I visited many other pages. They are documented here:
    https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/4551#issuecomment-677903928 -->

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
