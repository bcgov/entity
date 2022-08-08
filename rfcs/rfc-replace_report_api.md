- Start Date: 2022-07-14
- Target Major Version: bcgov/entity#12840
- Reference Issues: bcgov/entity#12930
- Entity Issue: 
- Implementation PR: 

# Summary

PPR Search Result reports can be very large in size (> 70MB). API consumers submit report requests in batches.
The current report api service is unable to complete some requests, either because of load or report size. 
Under load the report services returns timeout responses.

# Motivation

Clients request reports when the report service fails. A relatively high number of op support tickets are created to manually generate reports.
A new report service implementation will reduce or eliminate the number of failed report requests and the 
related ops tickets.
The current implementation performance is significantly poorer than the alteratives. 

# Detailed design

Replace the current report api with a Gotenberg version 7 implementation running in GCP as a Cloud Run container.
Gotenberg version 7 provides a GCP tuned container. A previous POC was completed to prove that existing reports could be generated with Gotenberg.
- Container access will be restricted using GCP IAM (service account) authentication.
- The BC Sans and Calibri fonts will be installed in the container.
- The Gotenberg chromium HTML endpoint generates pdf's from html.
- The Gotenberg pdfengines Merge endpoint merges/concatenates pdf reports (meets the mailout with cover letter requirement).
- The GCP Cloud Run html2 configuration has no maximum size on response data (report sizes).
- The GCP Cloud Run container memory size, number of CPU's, and timeout can be tuned to improve performance.
- Report api clients are now responsible for generating html using existing report templates and the jinja2 python libary. 
- With this implemenation report api clients submit report header and footer content as separate html files.
- Existing non-Assets reports can migrate to the new implemtation with relatively minor report template changes. Assets search reports will require some additonall processing.

The current and new report services will run in parallel for a period of time. Applications will switch over to the new service for all report types, not one report type at a time.
When all applications have moved to the new service the current one will be retired.
# Adoption

As products migrate from OCP to GCP they should also migrate to this new ReportAPI service, it is not a blocking issue.

The PPR migration work will be presented to the teams to provide an idea of impact, effort and other issues tha are needed when creating estimates and completing the work needed to move to the new service.

All services are setup to use launchdarkly flags and that should be used to to manage the switch between the services to reduce the possibility of issues in the production environment.
# Drawbacks

Assets specific support for search report table of contents with internal links and page numbers is poor.
Reports must be modified after generation to add this functionality. 

# Alternatives

- Stay with the current implementation with manual intervention as OPs tickets when report generation failes.
- Move to a different implementation such as JSReport, which as with Gotenberg uses headless chrome to generate pdf's from html.
