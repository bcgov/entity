- Start Date: (2019-05-10)
- Target Major Version: None
- Reference Issues: 
- Entity Issue: github/entity#501
- Implementation PR: 


# Summary

Common UI component [widgets] library to be used across projects in SBC [as of now , auth-web,pay-web,coops-ui]
 
 
# Basic example

The components are documented here
https://saravankumarpa.github.io/sbc-common-components/

# Motivation

1) Component re use

    If a Vue component is created in one of these projects , there is no way to share it. Say a file uploader is developed by auth-web team , the coops-ui has no way of sharing it rather than copy/paste the code.
    This sbc-common-component repo will be a place for hosting such components
    
2) Consistent styles for all app

    As of now , the headers, footers , buttons etc are all coded into each repo.Its hard to enforce a common and consistent look and feel.
    
3) separation of concern
         
    Components will be loosely coupled with target systems since they live in shared space. for example , the fee widget will encompass only fee related logic and the target system just has to pass only the necessary args for making it work
    
4) Easier to apply changes to multiple app

    Getting a a new link in header? Change the header components and all app's will get the update.    
    

# Detailed design

**How to build the components**

The components will be developed in the github sbc-common-components space. They will be built as library.Vue provides bundling it as Library

https://cli.vuejs.org/guide/build-targets.html#library 

**Hosting**

The components will be deployed to NPM so that any project which needs it can be used.
https://www.npmjs.com/package/sbc-common-components

***How to use it**

Just use it like any other npm package.More details on the github page

# Drawbacks

No particular drawbacks.The initial path to getting the components into this repo will be a little hard , but rewarding.
Care will be have to be taken to see if a particular belongs to common space.

The idea is still budding and it takes some time to establish a matured library for all components.


# Alternatives

- What other designs have been considered?
    
    Microfront end : Takes time to implement and not enough sources on that.
    
    web components [https://developer.mozilla.org/en-US/docs/Web/Web_Components] : No native support For IE.
    
    
- What is the impact of not doing this?

    code duplication in multiple vue projects
    
    hard to enforce common style/UX
    
    Maintenance effort of UI will be increased

# Adoption strategy

Inform the team about the library

As of now , few components are incorporated into the repo.Going forward , if the team feels they are developing a common component , they should develop that in here
 

# Unresolved questions



# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
