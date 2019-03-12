- Start Date: 2019-03-06
- Target Major Version: 
- Reference Issues: N/A
- Entity Issue: 
- Implementation PR: 

# Summary

Sample API code in python using Flask API to generate PDF reports

# Basic example

See the code sample

# Motivation



# Detailed design

The API uses Jinja2 (http://jinja.pocoo.org/docs/2.10/) for creating the report templates. The template would contain normal HTML elements with some place holders for dynamic values. API uses weasypoint for converting the HTML to PDF. The API goes through below steps when a request is received for report generation
* Retrieve template (either from local folder or from request body)
* Apply the template variables received to the template using jinja2 library
* Convert the HTML to PDF using weasyprint library

The API provides 2 endpoints:
* /reports-api/v1/templates               - Returns all the stored template names
* /reports-api/v1/reports                 - Generate report using the template(either encoded string or template_name) from request

# Drawbacks


# Alternatives


# Adoption strategy


# Unresolved questions

First draft only, subject to change based on feedback
