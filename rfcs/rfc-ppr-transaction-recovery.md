- Start Date: 2022-02-10
- Target Major Version: 1
- Reference Issues: 
- Entity Issue: #11146
- State: Proposal
- Implementation PR: (leave this empty)

# Summary

The PPR-API relies on a number of downstream services that may have different outcomes based on changes to configuration, hosting or other issues outside of the PPR services control.

In particular based on timeouts, connection failures, network outages, etc. the outcome of a request may be in an unknown state. Audit mecahnisms that can be used in an automated fashion to discover the outcome of an event are needed.


# Motivation

Why are we doing this? What use cases does it support? What is the expected outcome?

Please focus on explaining the motivation so that if this RFC is not accepted, the motivation could be used to develop alternative solutions. In other words, enumerate the constraints you are trying to solve without coupling them too closely to the solution you have in mind.

# Design / Options

### A. Increase API Gateway timeout (**COMPLETED**)
Increase the gateway timeout to account for downstream changes.

### B. Add a query parameter to constrain responses for _financing-statements_

Add Query Parameters to the financing statement endpoint to constrain the response to a date range and by the clientReferenceId [```https://host/ppr/api/v1/financing-statements```](https://bcregistry-demo.apigee.io/docs/pprproxy/1/routes/ppr/api/v1/financing-statements/get) 

This would be a non-breaking change to the API.

### C. Add a query parameter to _financing-statements/registrations_

Add a Query Parameter to registration endpoint to constrain the response by the clientReferenceId
[```https://host/ppr/api/v1/financing-statements/registrations```](https://bcregistry-demo.apigee.io/docs/pprproxy/1/routes/ppr/api/v1/financing-statements/registrations/get)

This is a **Breakeing Change** as the response json is different. Well formed clients should still be able to accept the modified JSON, but the content and scope of the results are different than in the 1.0.0 version of the specification. This is a _BETA_ feature that could be made availble outside of the regular release candence.

### D. Allow external subscription to CloudEvents

Internally the Registry uses the standard CloudEvent specification 1.0 to exchange messages on events of interest to participating systems. Long term this mechanism will be extended to partners to be made aware of various changes to entities managed across the Registry. In the near term, it can made available to partners by registering a Callback that the CloudEvents can be published to for their accounts in PPR.

The partner would provide a Callback URI that we would manually register, and then deliver CloudEvents, similar to that shown below to them for events happening in their account. These messages could then be used as an audit against their record of events.

```json
cloudEvent = {"datacontenttype": "application/json",
              "id": "6f589627-448c-4586-85b3-fca406aacf1b",
              "identifier": "9000300B",
              "source": "https://bcregistry-prod.apigee.net/ppr",
              "specversion": "1.0",
              "subject": "ppr",
              "time": "2021-12-16T06:59:11.135685+00:00",
              "type": "financingStatement",
              "data": {
                  "registrationNumber": "9000300B",
                  "baseRegistrationNumber": "9000300B",
                  "statusType": "ACT",
                  "registrationType": "SA",
                  "expireDays": 1422,
                  "clientReferenceId": "T-0000003",
                  "path": "/api/v1/financing-statements/9000300B",
                  "createDateTime": "2021-06-03T22:58:45+00:00"
                }
            }
```

# Adoption strategy

This short proposal should be shared with our partners to determine if any of these solutions will meet their processing and automation needs, and if one or more are requested, the priority order in which they should be made available.

# Unresolved questions

Partner fit and priority.

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
