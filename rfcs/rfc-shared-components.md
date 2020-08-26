# RFC For BCRS Shared Components

- Start Date: (2020-08-07)
- Target Major Version: None
- Reference Issues: None
- Entity Issue: https://github.com/bcgov/entity/issues/4551
- Implementation PR: None

# Summary

Using current best practices and available tools/packages, create a library of _shared_ Vue (UI) components that can be
used by different UI projects.

In particular, this library/framework/architecture will contain (simple) business-focused components (eg, BaseAddress,
list of directors, entity info, etc) that won't be in every app but will get reused. This is in contrast to the
https://github.com/bcgov/sbc-common-components library that contains components that will probably be in every BCRS app
and which contains more complex components that use services, etc. Ultimately, there may be a thin line between the
proposed and existing library and, in the future, they could possibly be merged.

Another goal is to be able to individually version each component. This would allow components to be individually
updated without forcing the consuming project to import all other changes to the library. This should make smaller
rollouts easier.

Whether the proposed approach is a good one -- or needs tweaking -- should become clear when we start to use it and
accumulate numerous (increasingingly complex) components over time.

# Prototype

BCRS Shared Components is a multi-package Lerna repository of shared Vue components, each published individually and
that you can explore/ develop/ document/ test using Storybook.

The prototype repository is here: https://github.com/bcgov/bcrs-shared-components

The Storybook pages for this project is here: https://bcgov.github.io/bcrs-shared-components/

# Motivation

1) Reuse existing functionality in new projects

2) Reduce duplicated code / fix bugs in one place only

3) Common design / styles between apps

4) Simpler component development than in sbc-common-components

5) Easier component maintainability than in sbc-common-components

6) Independent versioning of each component

# Main Options Considered

1) Duplicated code between projects

    Don't actually do this if possible!

2) Component inheritance / mixins / plugins / slots (ie, within Vue framework itself)

    We are already doing some of this but it's a compromise between development effort and value, and is within
    individual projects only.

3) Git submodules

    Is not generally recommended.

4) Multiple repositories

    Lots of overhead.

5) Monorepo

    All projects/components/packages are within a single repository.

    Sbc-common-components is a library example of this (using npm alone). However, additional tools can facilitate
    management of multiple projects, packages, libraries, components - see below.

# Additional Tools Considered

1) https://github.com/features/packages

    GitHub Packages (Registry) is an alternative to npm. I did not look into this deeply because we already use npm and
    it does not seem to limit us at the moment. Also there are many online examples using npm and few using GPR.

2) https://www.npmjs.com/package/meta

    Meta is a tool for managing multi-project systems and libraries. I did not look into this deeply due to a lack of
    online examples.

3) https://github.com/git/git/tree/master/contrib/subtree

    Git-subtree allows you to merge subtrees and split a repository into subtrees, which allows projects to be included
    within a subdirectory of the main project. I did not look into this deeply due to a lack of online examples, and it
    didn't seem like subtrees was a great way to deal with multiple projects and versioning.

4) https://github.com/lerna/lerna

    Lerna a tool for managing JavaScript projects with multiple packages. The prototype uses this.

5) https://storybook.js.org/

    Storybook is an open source tool for developing UI components in isolation. The prototyps uses this.

6) https://bit.dev/

    Bit an open source tool that helps you easily publish and manage reusable components. I did not look into this
    deeply due to unanswered questions about hosting and cost.

    See https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/4551#issuecomment-680186316.

# Other Options Not Considered

1) https://cobalt.dev/

2) https://about.gitlab.com/

3) https://bitbucket.org/product

# Detailed Design (of prototype)

## How To Build

The prototype is based on https://github.com/pixari/component-library-monorepo.

In short:
1. Create a GitHub repo
2. Check it out locally
3. Install and initialize Lerna
4. Install and configure Storybook
5. Add a component to the library
6. Run/build Storybook
7. Commit/publish to GitHub (*)

(*) The prototype uses GitHub Pages to serve the Storybook app folder.

## How To Consume The Component

This section is incomplete. In theory, each component can simply be imported as follows:
```
{
  "dependencies": {
    "@mylibrary/my-button": "*"
  }
}
```

I am not sure how Lerna/npm work together here. (Research was time-boxed.) However, I am confident that the information
is easily available on the Internet as Lerna seems to be popular.

# Adoption Strategy

- Inform the team about this RFC and solicit feedback.
- Add some components to the prototype library.
- Learn to use the tools and document the steps for other developers to use.
- Evaluate as time goes by. Review and make changes as needed.

# Unresolved Questions

See ticket https://github.com/bcgov/entity/issues/4551.

# Still To Do

1. Update prototype to latest config (ie, current config is a few years old)
2. Document our Lerna config and usage
3. Document our Storybook config and usage
4. Figure out how to use individual components in an app
5. Document any other development processes (how to develop, test, publish, import, etc)
6. Figure out how components can use VueX
7. Figure out how components can use services, etc

# References

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
    https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/4551#issuecomment-677903928

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
