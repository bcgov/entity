- Start Date: 2022-11-21
- Target Major Version: None
- Reference Issues: https://github.com/bcgov/entity/issues/14125
- Entity Issue: (leave this empty)
- Implementation PR: (leave this empty)

(1. submit this RFC as a regular PR -- remove this line when submitting)
(2. make a copy of the template, and rename to rfc-YOUR_FEATURE.md)

# Summary

## **idea:**
Each organization in COLIN has a filing history with multiple PDFs per filing. As COLIN becomes too cumbersome to work with and the transition to the modern app continues, there needs to be a way to migrate filing history of all organizations in in COLIN over to the modern system.

This approach will implement a web crawler to retrieve all PDFs for each filing in an org's filing history and store them under a directory tree then send them into Doc Storage on the modern app. This approach is relatively lightweight and simple to implement compared to directly accessing Jasper and RMI, while achieving the same result with similar performance.

## **Background info:**
 - COLIN has a monolith architecture.
 - COLIN UI connects to the COLIN server which talks the report server to generate PDFs.
 - COLIN makes calls to the report server using some parametres then the report server talks with the Oracle Database to query the data needed to generate all the necessary PDFs for a filing (maybe done using a filing ID? not sure yet)
 - The report server generates all the PDFs for a filing and sends it back to COLIN. 
 - There are 2 report services running on the report server that generate PDFs for filings, Jasper and RMI
 - Each one generates all the PDFs for a particular type of filing
    - ie: RMI generates PDFs for annual reports, Jasper generates PDFs for most other filings
 - Both can be accessed and called directly although, only Jasper has documentation
    - There are files in COLIN that call Jasper and RMI to generate PDFs, they might be useful to look into
    - requires that I get access to COLIN though
 - Most of the PDFs generated aren't saved and are made dynamically from data pulled from Oracle Database,
 although some are saved like an entire days worth of dissolutions are saved in batches and then sent out
 - To call the report server looks like I only need a batch ID which identifies the filing to generate PDFs for, and a document type
  
## **Draft diagram of current understanding of architecture**
![Draft diagram](rfc-load-colin-pdfs-to-doc-store/draft%20diagram.png)

# Basic example
**TODO**

If the proposal involves a new or changed API, component, etc., include a basic code example.
Omit this section if it's not applicable.

# Motivation

To automate the migration of filing data from orgs in COLIN into orgs in the modern app. Since COLIN already has filing data as PDFs, it doesn't make sense to regenerate these PDFs for orgs in the modern app when they're already available in COLIN. It would just be a waste of time, resources, and money. So it  makes more sense to download all the filing PDFs COLIN makes and send them into the modern Doc Storage system.

When this feature is complete it should be able to transfer the entire filing history of all orgs in COLIN over to the Doc Storage system (around 1 - 1.4 million orgs) before COLIN is retired. 

# Detailed design

**In Progress**


 ### screenscraping through COLIN UI
  - could use beuatifulsoup to parse data and autoscrape package to scrape a webpage
  - do we want to grab all PDF filings for all orgs? if yes how would we automate a scraper to do that
      - maybe just go and run the scraper on all orgs in the Oracle database 
  - **Pros**
    - Easier/more straight forward to implement and integrate
    - comparable perfomance to other approaches
    - used by many services like by Google, CSO, and our partners. We're just doing what they're doing.
  

This is the bulk of the RFC. Explain the design in enough detail for somebody familiar with the Entity system to understand, and for somebody familiar with the implementation to implement. This should get into specifics and corner-cases and include examples of how the feature is used. Any new terminology should be defined here.

# Drawbacks

**In Progress**
  - wouldn't work when COLIN UI gets shut down, but that's okay because by that time we'll have migrated all the filing data over
  - might conflict with features that depend on Doc Store?

Why should we *not* do this? Please consider:

- implementation cost, both in term of code size and complexity
- whether the proposed feature can be implemented in user space
- the impact on teaching people
- integration of this feature with other existing and planned features
- cost of migrating existing applications (is it a breaking change?)

There are tradeoffs to choosing any path. Attempt to identify them here.

# Alternatives

 - ### **directly calling the report server to generate PDFs.**
    - **Pros**
        - will work after COLIN gets retired, but doesn't matter because we'll have migrated everything by then.
        - might be faster than scraping, not by much though

    - **Cons**
        - Need to track down which filings are handled by Jasper and which are handled by RMI
        - Need to create a Java app and figure out how to use Java RMI to generate PDFs
        - Will also need to create another service to call Jasper to generate PDFs
        - a lot of extra code and work for the same result as screenscraping with marginal performance improvements
        - might run into issues with firewalls between COLIN and modern app

 - ### **directly generating PDFs like Jasper and RMI using data from Oracle Database and send them over to modern app**
    - **Pros**
        - Can integrate a lightweight app between Colin and modern app that generates PDFs like Jasper and RMI while they're being phased out, makes sense to do that

    - **Cons**
        - a lot more work for a different result than what we want
        - would require a lot of tracing through COLIN to understand how Jasper and RMI generate reports
        - needs all the data to generate PDFs which requires all the data to already be migrated, which is the purpose of this feature


**In Progress**

- What is the impact of not doing this?

If it's decided to not retrieve PDFs from filings from COLIN then COLIN's data would need to be migrated to the modern system and PDFs would be generated by the modern app's report service, using a lot of time and resources as it would be remaking PDFs that have already been made by COLIN.

# Adoption strategy

**TODO**

If we implement this proposal, how will existing developers adopt it? Is this a breaking change? How will this affect other projects in the Entity ecosystem?

# Unresolved questions

 - how would I integrate this with modern app?
 - where would I store downloaded PDFs before sending them into Doc Store?
 - what would my directory tree look like for storing PDFs before Doc Store?
 - not sure on how to integrate this with doc storage on modern app.

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
