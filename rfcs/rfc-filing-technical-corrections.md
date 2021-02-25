- Start Date: 2021-02-25
- Target Major Version: (EPIC or User Story TAG|Link)
- Reference Issues: n/a
- Entity Issue: (leave this empty)
- Implementation PR: (leave this empty)

# Summary

An implementation to support technical changes to a customer filing done directly by support engineers.

# Basic example

A failure in the validation rules may have allowed for an address like this
``` 
'deliveryAddress': {
    'streetAddress': '1 Main st.',
    'addressCity': 'Vancouver',
    'addressCountry': 'CA',
    'postalCode': 'H0H0H0',
    'addressRegion': 'B'
},
```
where it can clearly be deduced that the Region should be **BC** and not just **B**.
The submitted JSON can be corrected, and still applied to the business model correctly.
``` 
'deliveryAddress': {
    'streetAddress': '1 Main st.',
    'addressCity': 'Vancouver',
    'addressCountry': 'CA',
    'postalCode': 'H0H0H0',
    'addressRegion': 'BC'
},
```


# Motivation

There are times when a filing gets accepted, but due to an error in the validation it may have technical issues that make applying the filing impossible.
In these cases it has already been paid for and because it cannot be applied, it cannot even be corrected by customer our business staff.

The filing_json as submitted by the customer must be treated as immutable, so that it can always be retrieved and used in cases of legal challenges.

Where the error is simple to understand, a corrected version can be used to get the filing to apply properly.
Further changes can be filed as corrections by business staff.


# Detailed design

Adding a tech-json attribute to the Filing model. If this field is populated it will get used by the Filer and reporting services (until marked complete).
A note on the business should also be created with the fix and the tech staff id that implemented the fix.
The ```businesses/<identifier>/filings/<filing_id>?raw=True``` endpoint and query parameter will still return the filing json submitted by the customer.

# Drawbacks

Why should we *not* do this? Please consider:

There could be errors in deducing what is required to be fixed in more complex examples. This approach does allow simple fixes without having to remove or rollback the filing, create a refund to the customer and having them resubmit, as well as maintaining the correct submission dates, which can have legal impact in some cases.

# Alternatives

1. move away from immutable customer filings. This makes audit and legal support more difficult.
2. Always delete or rollback a filing and refund fees paid. For smaller issues the amount of work and lower service to the customer make this approach less palatable.

# Adoption strategy

This should be rolled in via regular Issue/PR/QA processes.
As it is very much in the technical Ops realm, the impact beyond the SRE team is negligible.

Errors of this type show up in the technical queues, and in theory would be enacted upon before business staff are involved.

# Unresolved questions

There could be times the SRE team needs to contact the customer.
This should be recorded and follow the regular customer outreach methods of the BCRegistry.

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
