- Start Date: 2020-01-06
- Target Major Version: Sprint 21
- Reference Issues: n/a
- Entity Issue: (leave this empty)
- Implementation PR: (leave this empty)

# Summary

The Registry is using a GitOps approach where possible, where the entire deploy and configuration are version managed or directly accessible from the deployment services without direct human intervention.

In support of this goal, the need for a centralized service that the team can use to store **secrets** is needed. Ideally that service is available outside of the existing lab infrastructure, so that it can be used in DR, future alternate lab locations and any cloud services used by the team.

The Registry team did a quick survey of what other teams in the lab are using. 1Password, as served from Toronto Canada, was identified and met the desired requirements.

# Basic example

## Example: Deployment
1. The Registry SRE team sets up a **Vault** for a service, and shares access to it across team members.
1. The deployment config is saved into the _Vault_
1. A service account (SA), or similar construct is created and given read access to the _Vault_.
1. The deployment service uses the SA to read the _config_ from the _Vault_
1. The deployment service deploys the configurations and images to the Kubernetes target.

## Example: Test
1. The Registry SRE team sets up a **Vault** for a service, and shares access to it across team members.
1. The deployment config is saved into the _Vault_
1. A service account (SA), or similar construct is created and given read access to the _Vault_.
1. The CI service then runs linting, tests, etc. on the code base using configs as required

# Motivation

The SRE needs to store configuration information for services it needs to test and deploy. Many configuration items are sensitive, such as passwords or access tokens, that cannot be stored in a publicly accessible repository. Storing the information in one of the Kubernete's secrets services does not make it accessible from other external services, or available in the case of DR to alternate sites. Setting up a local secrets manager also does not have DR and takes time away from the team to support business systems of the Registry.

Based on the above, the team looked for a Canadian resident service, that was available outside of our core services that would be accessible in a DR, across leveraged services, and useable on daily basis. The secret store also needs to be available to all of the SRE team members, so that they can support all Registry LOB services.

# Detailed design

A 1Password.CA account will be setup, with accounts for each SRE team member.
The team will create a series of Vaults to be used by the services across environments, such as:
- Build/QA (GH Actions)
- Storing Artifacts (npm, python, and other artifacts; supporting and deployable images)
- Deployments (dev, e2e, test, prod)

# Phase 1
- All build services will be updated to use 1Password in its GitHub Actions
- All storing of Artifacts will use 1Password

# Phase2
- One of the teams will start using 1Password in deployments
- recommendations, examples and best practices will be shared across the SRE team for approval

# Phase 3
- All teams will begin adoption of the new deployments using 1Password

# Drawbacks

Not choosing a common secrets storage place means that secrets and configuration are stored in multiple places, and in the case of DR can be lost, given the current SPOF of the existing site.

# Alternatives

- Storing config in a private GithUb repo
  - either not fine grained enough, and too easy to post to the public facing repos
- Storing in the OpenShift Secrets (possibly backed by Vault)
  - not accessible from other services such as GH Actions
  - not available in a site DR
  - not available to alternate deployments
- Other password managers
  - not available as a Service in Canada

# Adoption strategy

We will follow the same pattern we have taken for other services:
- A team will elect to be first
- Present their work to the rest of the teams
- Make adjustments if required
- Genericize or complete exemplars
- All teams start to adopt the new practices

# Unresolved questions

None

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
