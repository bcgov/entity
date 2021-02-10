# Pull Request Review Guidelines

1. Does the PR description follow our template?

2. Does the PR title and description describe the changes (at least at a high level)? (Useful for going through commit history later.)

3. Does the change satisfy its ticket? (Or have other tickets been created for un-implemented things?)

4. Should this change be made?
  - is it in line with good architecture?
  - does it agree with business requirements?
  - does it have no security issues?

5. Does the code follow our coding standards?
  - code style
  - cleanly written
  - improves architecture (or at least doesn't worsen it), eg. use of CSS, variables, mixins, etc
  - adequately commented so reviewers/future devs can understand what it's doing
  - adequately commented to explain special cases, business logic, etc
  - has sufficient unit tests to verify all code paths
