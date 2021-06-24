- Start Date: 2021-05-10
- Target Major Version: (EPIC or User Story TAG|Link)
- Reference Issues: udef
- Entity Issue: (leave this empty)
- Implementation PR: (leave this empty)

# Summary

This document outlines the approach of migrating the IMS database used by the legacy PPR service into the new relational model used by the _modernized_ PPR set of services.

The PPR modernization project is already underway with work products to leverage and a decision to migrate entirely to the new system and _go live_ as a new and complete service.

This document will outline the work necessary to transition entirely to the target database, now that the requirement for a temporary DB that can accessed by both the mainframe and the modernized application is no longer valid.

# Motivation

The original mainframe migration project was to either connect to the mainframe environment and access a set of simplified transactions directly, or alter the storage routines to mover from IMS to access an external Oracle database running on a middle-tier environment.

Due to the current state of that effort, the work left to complete, and timeline pressures, an alternate approach of converting to the new target environment and going live with a completed service was decided upon.

# Detailed design

## Mainframe Data Migration

A set of GDG (generationdatagroup) data sets will be extracted from IMS using a series of batch jobs that will use a date card to extract a subset of the IMS data.

The following IMS data segments will be used:
- DO1DOCUMT	parent document
- DO1SPART	child secured party
- DO1DEBRT	child debtor
- DO1VHICL	child vehicle
- DO1GCOLL	child general collateral
- DO1DTAIL	child detail description
- DOCHDOC	parent change to base relationship
- CL1CLIEN	parent client code
- CL1HIST	child historical code
- US0USERS    users

These output of the jobs for these segments will be loaded directly into _temp tables_ and further transformed as necessary, and then finally appended to the existing the table in the target database.

Since the historical and new data will be treated as immutable records where any change to the data results in a new record being created and the historical record as being marked as closed. The migration approach makes adding new records additive and therefore an on-going incremental load technique, based on the date card, can be used to continuously migrate data from the legacy DB to the new one.

## Data Model

The existing model will be converted to a set of Alembic scripts, like the other new Registry systems, and going forward will then be controlled by the _domain model_ maintained in the new application's API service.

## Advanced Text Search

It is recommended that the core extensions to Postgres be leveraged, and that some effort be made to choose the most appropriate set of extensions and operators be used to meet the required search needs.
Postgres has trigrams and generalized indexes across those, along with metaphones, Levenshtein term distances and other techniques that can leverage indexing on par with the SOLR services the Registry is already using.
Using the core extensions will also the Registry to easily migrate to any Postgres based service with the minimum amount of effort required.


# Drawbacks

Other than existing risk of a complete migration that has already been accepted, there is additional testing required to prove out the search mechanisms. As the testing of the new search being built has not completed, switching now would better, but the testing on the existing search will need to be redone.


# Alternatives

It is possible to stay with the current Oracle DB, but
- it would be managed differently than all our other storage models
- require the current new search to be completed
- require the current new search to be migrated to Postgres and the testing be done again

# Adoption strategy

The work to migrate to Postgres should be done now, either by bumping features or in a Project-X style.

# Unresolved questions

The Levenshtein distance is a more popular algorithm than the Jaro-Winkler, but it will need to be proven that it meets the needs of the PPR search.

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
