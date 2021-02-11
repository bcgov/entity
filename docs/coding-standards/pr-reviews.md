# Pull Request Review Guidelines

1. Does the PR description follow our template?

2. Does the PR title and description describe the changes (at least at a high level)? (useful for going through commit history later)

3. Does the change satisfy its ticket? (Or have other tickets been created for un-implemented things?)

4. Should this change be made?
   - does it agree with business requirements?
   - does it contribute to good architecture?
   - does it have no security issues? (eg, does not expose passwords)

5. Does the code follow our coding standards?
   - code style
   - cleanly written
   - improves architecture (or at least doesn't worsen it), eg. use of CSS, variables, mixins, etc
   - adequately commented so reviewers/future devs can understand what it's doing
   - adequately commented to explain special cases, business logic, etc
   - has sufficient unit tests to verify all code paths
   - does not reformat existing code (which, if needed, should be a separate ticket/PR)

6. Do PR checks pass?
   -  linting OK
   -  all unit tests pass
   -  code coverage OK (or if not, explainable and accepted)

See also https://github.com/alphagov/styleguides/blob/master/pull-requests.md
