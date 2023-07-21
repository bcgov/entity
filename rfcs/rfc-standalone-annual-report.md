

# Summary

Create a standalone Annual Report filing and Beneficial Ownership registration to prove out the workflow and UX for capturing the data required for the Transparency Registry.

# Motivation

1. Creating a standalone AR filing that includes beneficial owner registration delivers on one of the key selling points made to the Digital Investment Board by Registries to undertake the registry assignment, namely, that the requirement for private corporations to make an annual report filing gave Registries the means to guarantee a mandated pathway to compliance for a large percentage of the more than 550,000 BC corporations.
  
2. The annual report standalone filing is a better place to start for collecting beneficial ownership information. For example, it would require less development work initially than starting with incorporation.
  
3. The sooner we can stand up a working version of the Register workflow, the sooner we can get it in front of users in the dev environment for UX research purposes. This is crucial because the OCM component of Registering beneficial owners will be extensive and challenging.
  
4. The sooner we can get data into the beneficial owner database (even just sample data) the sooner we can extend SOLR to beneficial owner database and include it along with director search to create the integrated Person Search.

# Detailed design

## Include Add a Beneficial Owner workflow
The filing flow would be:
The workflow is only relevant for BCA entities.
1. Annual Report Date (this will be save to _lear_ or _colin_ as required)
2. Significant Individual Assessment section
3. UXA to determine:
   a. Add Beneficial Owner Details: OR
   b. Choose from Beneficial Ownership profile
4. Possibly create a Beneficial Ownership profile
```sequenceDiagram
    actor Business Manager
    Business Manager->>+Annual Report: Need to file a businesses Annual Report
    Annual Report->>+Beneficial Ownership: Need to update Beneficial Owners
    Beneficial Ownership-->>-Annual Report: Beneficial Owners updated
    alt Business in Colin
      Annual Report->>Colin: File the AR Date
    else Business in Lear
          Annual Report->>Lear: File the AR Date
    end
    Annual Report-->>-Business Manager: Done!
```
## Wireframes:

[https://www.figma.com/file/C2ThYIhZSO44dYBVGp8xAj/Register-Beneficial-Owners?type=design&node-id=0-1&mode=design]

## Personal Information (PI) Sequestered
Beneficial owner data collected that is personal information is to be sequestered from business information. 

## Timeframe
The RTR team estimates this as a medium size epic: one sprint to create the environment and two sprints to code the AR standalone filing, for a total of 3 sprints.

# Drawbacks
(There are tradeoffs to choosing any path. Attempt to identify them here.
Why should we *not* do this? Please consider:

- implementation cost, both in term of code size and complexity

- whether the proposed feature can be implemented in user space

- the impact on teaching people

- integration of this feature with other existing and planned features

- cost of migrating existing applications (is it a breaking change?)


# Alternatives
(instructions:
- What is the impact of not doing this?
- What other approaches to Registering a BO can be considered?)


# Adoption strategy

The RTR development team is ready to implement this proposed feature. 

The design team is working on wireframes and they will be included with this RFC.

First step is to create the environment for the beneficial ownership data including database, API, front-end. The RTR team has begun designing this. Coding can begin as early as PI 18.2


## Breaking Change
(Will this be a breaking change?)

## Benefits for Entities
The AR standalone filing may benefit other projects in the Entity ecosystem as follows:
1. 
2.


# Unresolved questions

## What parts of the design are still TBD?
1. Exact design and setup of the BO data environment (personal information sequestered from business information)
