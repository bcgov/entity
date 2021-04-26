- Start Date: 2021-04-22
- Target Major Version: [information on a ledger](https://github.com/bcgov/entity/issues/6969)
- Reference Issues: n/a
- Entity Issue: github/entity#7193
- Implementation PR: (leave this empty)

# Summary

Bulk listings of filings should return a catalog of filings, with enough information to be useful, to allow the user to further select the filing of interest.

The filing endpoint should not default to return the complete filing, of every filing on the businesses ledger.

# Basic example

The RESTful style call to ```GET /businesses/{business_identifier}/filings``` will return a cata log of filings.

The RESTful style call to ```GET /businesses/{business_identifier}/filings/{filing_id}``` will return the full individual filing.

The catalog call follows the following pattern:
``` json
{"filings":[
    {"name": "annualReport",
     "status": "Completed",
     "effectiveDate": "2003-07-01T00:00:00+00:00",
     "availableOnPaperOnly": True,
     ...
     "filingLink": "https://api.bcregistry.ca/v1/businesses/CP00001/filings/1243",
     ...
    },
]}
```

# Motivation

The Business Ledger should be a quick and useful access point into managing your business.
Most of the time people are accessing their business to update it, file an Annual Report, and maybe print off a historical filing or receipt.
Creating and returning all of the filings, to show almost none of the filing data a company has ever submitted to the registrar is neither quick, efficient or meets the needs of the customer base.

For note, most corporations should have copies of their filings in the corporate records that they are to maintain at their registered office.


# Detailed design

This RFC is only to create the data structure for the catalog of filings.
The first release of the data structure will have the following elements.
``` json
{"filings":[
    {
     "availableOnPaperOnly": "Boolean: If there is no electronic version of the filing available",
     "effectiveDate": "Date the filing became effective on the ledger",
     "filingId": "the ID of this filing",
     "isCorrected": "Boolean: if this filing has been corrected by another filing",
     "name": "standard name of the filing, from business-schema", 
     "paymentStatusCode": "state of payment, PENDING|COMPLETED",
     "status": "The current state of the filing PENDING|COMPLETED|DRAFT",
     "submittedDate": "date the filing was submitted and payment started, usually the same as effective date",
     "submitter": "the username of the submitter, or 'submitted by staff'",
     "commentsLink": "https://api.bcregistry.ca/v1/businesses/{business_identifier}/filings/{filingId}/comments",
     "correctionLink": "https://api.bcregistry.ca/v1/businesses/{business_identifier}/filings/{correctedFilingId}",
     "filingLink": "https://api.bcregistry.ca/v1/businesses/{business_identifier}/filings/{filingId}",
    },
]}
```

# Drawbacks

To get the actual content of the filing, an additional network call must be made.

# Alternatives

None.

# Adoption strategy

As the only people using the exposed API are currently inhouse developers, we will do a breaking change to implement this.

# Unresolved questions

If there is to be a _ledger note_ that could contain extra display info.

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
