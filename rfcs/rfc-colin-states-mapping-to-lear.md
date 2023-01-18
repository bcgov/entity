- Start Date: 2021-12-03
- Target Major Version: 
- Reference Issues: [10098](https://github.com/bcgov/entity/issues/4797)
- Entity Issue: [8285](https://github.com/bcgov/entity/issues/14691)
- Implementation PR: (leave this empty)

# Summary

COLIN represents a business state as two states which are referred to as an operational state(`CORP_OP_STATE` table) and a corp state(`CORP_STATE`) table.  In many instances, these two states are used in conjunction to drive business logic and to determine allowable business state transitions between `ACTIVE` and `HISTORICAL` states for a given business.

LEAR will not be adopting the COLIN approach of using the `CORP_STATE` table.  

This RFC will provide design details as to how LEAR will achieve the same functionality as COLIN without the use of the `CORP_STATE` table.

Note that the [Business States RFC](rfc-business-states.md) as well the current implementation of the Legal API was used as a starting point for the creation of this document.

#### COLIN Database Structure for Business States
![colin_states.png](rfc-colin-states-mapping-to-lear/colin_states.png)

#### Current Corp State Data in CPRD
![colin_corp_state_stats.png](rfc-colin-states-mapping-to-lear/colin_corp_state_stats.png)


# Basic design

The COLIN operational states can be mapped 1-1 to the business states(`businesses.state`) in LEAR currently.  Only `ACTIVE` and `HISTORICAL` states are used by COLIN.  Additional states may be added to LEAR if it is determined to be required based on analysis and work done when implementing filings such as _liquidation_ and _involuntary dissolution_.

The COLIN `CORP_STATE` table can be represented in LEAR by using a combination of the filing type, dynamic calculations (warning structures or business properties like good standing) or using the filing type that transitioned a business into its current state.

Allowable COLIN business state transitions between `HISTORICAL` and `ACTIVE` will be handled using a combination of the filing that transitioned the business to its current state and a map that provides allowable business state transitions.

# Detailed design

Business GET endpoint will return currently actionable filings list.  This will be determined using the allowable filing transitions map.

_Example of what this might look like but will need to represent sub-types of filings where applicable_
``` http request

GET https://legal-api-dev.apps.silver.devops.gov.bc.ca/api/v2/businesses/CP0001199

{
    "business": {
        "legalName": "XYZ TEST CORP.",
        "legalType": "BC",
        "state": "HISTORICAL",
        "currentlyActionableFilingTypes": ["putBackOn", "restoration"],
        ...
}
```

An invalid business state transition map will be implemented as a python dictionary or database table.  This map can be used in conjunction with the existing [ALLOWABLE_FILINGS](https://github.com/bcgov/lear/blob/e850f9a22672910db6e4ceb2f1ddb9437541a86f/legal-api/src/legal_api/services/authz.py#L96) dictionary as well as any other conditions to determine what filings are allowed for a business at a given point in time.

_Example of what invalid state transition might look like_
``` python
INVALID_STATE_TRANSITION_FILINGS: Final = {
    'staff': {
        Business.State.ACTIVE: { # current business state
            'restoration': { # target filing
                # invalid target filing if filing that transitioned business to its current state is in list
                'fullRestoration': ['registration', 'incorporationApplication'], 
                'limitedRestoration': ['registration', 'incorporationApplication'], 
            }
            ...
        },
        Business.State.HISTORICAL: {
            'restoration': { 
                'fullRestoration': ['almagmation', 'continuationOut', 'continuationIn'], 
                'limitedRestoration': ['almagmation', 'continuationOut', 'continuationIn'],
            },
            'putBackOn': ['almagmation', 'withdrawal']
            ...
        },
        Business.State.LIQUIDATION: {
            'restoration': {
                'fullRestoration': ['liquidation'], 
                'limitedRestoration': ['liquidation'], 
            },
            ...
        }
    },
    'client': {
        Business.State.ACTIVE: { # current business state
            ...
        },
        Business.State.HISTORICAL: {
            ...
        },
        Business.State.LIQUIDATION: {
            'restoration': {
                'fullRestoration': ['liquidation'], 
                'limitedRestoration': ['liquidation'], 
            },
            'putBackOn': ['liquidation']
            ...
        }
    }        
    
}
```

_Allowable state transitions matrix in COLIN for restoration and put back on filings_
![colin_allowable_filings.png](rfc-colin-states-mapping-to-lear/colin_allowable_filings.png)

Filing validation logic will be updated to include logic to ensure that only valid business state transitions are allowed. 

All filings resulting in business state transitions will need to populate the businesses.state_filing_id field.  This is used to determine if future business state transitions are permitted.

Filings.meta_data field for any filings where a business state transitions occurs will include from/to state.

API consumers such as the FE with a need to determine which filing transitioned the business to its current state will retrieve the business state filing provided by the business response of the GET business endpoint.  For example, this can be used to determine if an ACTIVE business is currently in _limited restoration_.

# Adoption strategy

The _LEAR_ team will create tickets to implement the required components.

# Unresolved questions

There are still some details that need to be fleshed out for filings like the ones below. These details will be worked out as we implement the filings in LEAR.

**Involuntary dissolution** - this is currently a manual process that transitions a business to D1 to D2 based on some conditions. Uncertain as to how this changes in LEAR and how we will represent the involuntary dissolution process from a data and process perspective. Will the manual process become an automated process in LEAR?

**Liquidation** - how does this process look? do we need additional business states for the liquidation steps or will we be able to just use the business state of “LIQUIDATION” and determine which step in the liquidation process a business is in via some dynamic calculations?


# Reference

[Business States RFC](rfc-business-states.md)
