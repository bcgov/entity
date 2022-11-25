- Start Date: 2022-11-21
- Target Major Version: None
- Reference Issues: https://github.com/bcgov/entity/issues/14125
- Entity Issue: (leave this empty)
- Implementation PR: (leave this empty)

(1. submit this RFC as a regular PR -- remove this line when submitting)
(2. make a copy of the template, and rename to rfc-YOUR_FEATURE.md)

# Summary

## **General idea:**
- Retrieve filing PDFs that the COLIN report server generates and load them into doc storage service in the modern system.

## **Background so far:**
 - COLIN has a monolith architecture.
 - COLIN UI connects to the COLIN server which talks to the Oracle database for some processes and the report server to generate PDFs.
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
    - would like to see documentation for more details though
## **Draft diagram of current understanding of architecture**
![Draft diagram](rfc-load-colin-pdfs-to-doc-store/draft%20diagram.png)

## **Possible Approaches:**
 - ### **screenscraping through COLIN UI if I can't call the report server directly.**
    - could be done using ParseHub, but might not be able to download PDFs into Doc Store
    - Python autoscrape package might be useful for scraping one page
    - do we want to grab all PDF filings for all orgs? if yes how would we automate a scraper to do that
    - **Pros**
      - Easier to implement
    - **Cons** 
      - wouldn't work when COLIN UI gets shut down in March
      - probably slower and less reliable than directly calling the report server
 - ### **directly calling the report server to generate PDFs.**
    - Need to track down which filings are handled by Jasper and which are handled by RMI
    - Might involve making a lot of extra code to handle both branches depending on how different each one
    handles PDF generation
    - **Pros**
        - will work after COLIN gets retired
        - might be faster
    - **Cons**
        - Need to handle two branches of PDF generation, could get messy
        - might run into issues with firewalls between COLIN and modern reg app
 - ### **directly generate PDFs like Jasper and RMI using data from Oracle Database and send them over to modern app**
    - not liking this one, would require deeper understanding of how Jasper and RMI generate reports to create and integrate
    a lightweight app that generates reports with the same formatting they do.
    - **Pros**
        - Can integrate a lightweight app between Colin and modern app that generates PDFs like Jasper and RMI while they're being phased out, makes sense to do that
    - **Cons**
        - a lot more work for similar result as other approaches

 - other appraoches? need more information.

~~Brief explanation of the feature.~~

# Basic example


~~If the proposal involves a new or changed API, component, etc., include a basic code example.
Omit this section if it's not applicable.~~

# Motivation

Why are we doing this? What use cases does it support? What is the expected outcome?

Please focus on explaining the motivation so that if this RFC is not accepted, the motivation could be used to develop alternative solutions. In other words, enumerate the constraints you are trying to solve without coupling them too closely to the solution you have in mind.

# Detailed design

This is the bulk of the RFC. Explain the design in enough detail for somebody familiar with the Entity system to understand, and for somebody familiar with the implementation to implement. This should get into specifics and corner-cases and include examples of how the feature is used. Any new terminology should be defined here.

# Drawbacks

Why should we *not* do this? Please consider:

- implementation cost, both in term of code size and complexity
- whether the proposed feature can be implemented in user space
- the impact on teaching people
- integration of this feature with other existing and planned features
- cost of migrating existing applications (is it a breaking change?)

There are tradeoffs to choosing any path. Attempt to identify them here.

# Alternatives

- ~~What other designs have been considered?~~
- ~~What is the impact of not doing this?~~

# Adoption strategy

If we implement this proposal, how will existing developers adopt it? Is this a breaking change? How will this affect other projects in the Entity ecosystem?

# Unresolved questions

Optional, but suggested for first drafts. What parts of the design are still TBD?
What do calls to the report server look like? what parametres are passed? what are they used for?
How does COLIN call/interact with the report server?

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
