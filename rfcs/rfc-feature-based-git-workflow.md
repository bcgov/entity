- Start Date: 2019-09-24
- Target Major Version: N/A
- Reference Issues: N/A
- Entity Issue: 
- Implementation PR: 

# Summary

This RFC proposes an approach to code management in the master branch of [https://github.com/bcgov/lear](https://github.com/bcgov/lear), specifically around branching, code reviews, and merging pull requests into the master branch.

The proposal is to use a feature branch workflow to increase the stability of the master branch by merging larger, more complete, and fully tested batches of work. The team agreement proposed is to shoot for a commit history on master that reflects changes feature-by-feature, where each feature is complete and has been tested. 

# Basic example

Dev1 and Dev2 are working on a feature that requires changes to the Vue application, the API, and the data model as well as end to end tests. 

1. Dev1 and Dev2 have a conversation (probably including the PO or BA), reviewing the goal, the UX design, and technical approach.
2. Dev1 and Dev2 create a feature branch off master (choosing a name that identifies their feature). 
3. Working off a shared design and technical understanding, Dev1 begins the API and data model changes while Dev2 starts working up the screens. They can choose how they wish to commit to their shared branch (they can use pull requests and get each other to do code reviews if they want, do informal "over the shoulder" code reviews , or pair program).
4. Dev1 and Dev2 work together to update the automated test coverage and ensure the tests all run in their local environment. They review their own code against common, published project coding standards and run any necessary static analysis tests, making corrections as necessary.
5. As needed, Dev1 and Dev2 compare their branch with Master and rebase as necessary to keep from getting too far out of date. Rebasing early and often is easier than waiting, but it depends on the circumstaces. Dev1 and Dev2 stay in communication daily with the rest of the committers to stay abreast of changes that are coming soon to master.
6. As needed, Dev1 and Dev2 compare their branch with other feature branches that are currently in progress (same reason as above). 
7. When Dev1 and Dev2 are satisfied that their feature is complete and is up-to-date with MASTER, they create a pull request.
8. The code is reviewed and a few small issues are corrected.
9. The code is merged into master (squashing commits from the feature branch) and the full test suite is re-run in the E2E environment. Because the tests have been run already, there is little chance of breaking the build at this point.
10. The feature branch is cleaned up (destroyed).

# Motivation

The original entities team ("A" team, "Coops" team, team "Aardvark") has been using an approach where they all fork the master branch individually and commit small changes as often as possible. The advantage to this approach is that it keeps merges incremental and small. 

Adding team Bumblebee (FreshWorks) as codebase contributors to the <https://github.com/bcgov/lear> repository exposed some workflow issues around being able to continuously develop with non co-located teams comprised of many team members. The review and commit strategies that were effective with one team do not scale to two teams. There are some other advantages to feature branching that can be realized as well.

Here are some of the issues we have seen:

* Frequent small commits that invalidate the test cycle for a feature that is almost ready to be created as a pull request
* Lack of transparency between developers' work in progress (individual developer forks live on GitHub accounts on an ad-hoc basis)
* Commits to master that are incomplete or break the build
* Commits to master that do not pass linting
* Developers committing their own code without a review

# Detailed design

No detailed design necessary as the actual technical aspects are not complicated. This RFC describes a potential team agreement for WoW (way of working), not a technical design change.

# Drawbacks

- Disrupting the current team's WoW (Way of Working)
- Not consistent with how public committers would be working (if we were using them - although we could create branches for them as well if the volume is low)
- Currently difficult to do E2E testing in local development environment
- Risk of "features" being defined in a very course-grained way and loooooong running PRs being difficult/impossible to merge


# Alternatives

## Running tests in a PR environment before merging
If an E2E environment can be set up in an automated fashion, webhooks can be used to trigger a dedicated environment set up when the PR is created. All the automated tests will be run in that environment. 

**Advantages of PR environment:**
 
* Automated tests are scripted to run in OpenShift, not local (less chance of "works on my machine")
* PR reviewer does not have to clone the branch and run the tests themselves -- they can just focus on the code and trust that it works.
* There is an environment where the working story or feature can be demoed or manually tested
* Reduced risk of incomplete or buggy code being merged into master -- shared program E2E environment will be more stable

**Disadvantages of PR environment:** 

* Consumes OpenShift resources
* Requires DevOps effort (current build/deploy/test cycle is not fully scripted)
* Pipelines can be slow

**Recommendation**: Work toward automated, scripted, consistent environments

## Forking instead of Branching
To date, the entities team has not been using branches. Because the code is open source, developers can fork and share their fork between each other on an ad-hoc basis. 

**Advantages of forking:**
* No need to take the extra step to create a branch (public contributors don't need to have any permissions)

**Disadvantages of forking:**
* Code in progress does not exist in a repository owned by the BC Government
* Code in progress is not discoverable to other developers
* DevOps can't automate webhooks from forks

**Recommendation:** Branching for internal project team members, forking for public contributors.

## Merging to a DEV branch instead of MASTER

Some teams like to keep MASTER in sync with the current production release. All features that have not released are merged to a DEV branch. When a release to production is done, the feature commits included in the release are then merged to MASTER.

Advantages of DEV branch:
* MASTER reflects production. A "hotfix" branch to correct a production defect can easily be created from the head of MASTER at any time.
* The history of production is clearly reflected in the commit history of master.
* Releases in progress can be managed more granularly. A feature can be pulled out of a release by reversing a commit (this can be done in MASTER as well, but it creates less risk to do it on a release branch)
* Easier to manage multiple releases at once (for example, a release that is going through UAT vs. developers working on the following release).

Disadvantages of DEV branch:
* More branch management may mean more work (less simple). A hotfix or a release can always be managed by branching from a release tag on master instead of from head.

**Recommendation:** Stay on MASTER branch for the time being to minimize the number of changes to the flow at this time


# Adoption strategy

This should be a team agreement for Aardvark and Bumblebee to adopt at the same time. Things that would need to happen:

* An agreement around creating branches. All project team members should be able to create a branch (or the process to get one created should be trivial).
* A branch naming convention should be created. If branches are story-based, it would be helpful to refer to the ZenHub ticket number in the branch name. If the ticket is actually tracked on the same repo as the work, ZenHub has some features to support this natively (currently we work on *lear* but track work tickets on *entity* and on *fw-ben*)
* An agreement to communicate often as a large team and synchronize branches if necessary to keep from drifting too far between pull requests to MASTER

# Unresolved questions

The current approach has some thought and history behind it that this author (Conrad) wasn't around for. Hoping for some history and solid pros/cons in the comments.

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
