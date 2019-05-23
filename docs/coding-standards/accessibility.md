# Accessibility Guidelines
## Common issues:
- Alt Text
    - For screen readers, this describes non-text elements such as 
- Descriptive link text
    - Not “click here” or “more” 
- Keyboard tabbing
    - Does the tab order make sense?
    - Is it not annoying, ie: hard to get to the main part of the page without tabbing through 200 insignificant elements first? 
- Page titles and headings
    - Short and clear
    - Nested properly – ie: h1 above h2 above h3, etc – no jumping around 
- Colour contrast
    - Enough contrast between text and background 

## Less common issues:
- Data tables
    - Make sure to use <thead> and <th> for headers
- Video and Audio
    - Description for those that can’t see/hear it
    - All important info in description 
- Form inputs
    - Vuetify takes care of this, so only relevant if not using Vuetify component
    - Use labels with “for” attributes to associate labels and input fields
    - Ie: <label for=”the_id”>Name</label> <input id=”the_id” />

Site can be validated using Google Lighthouse in Chrome dev tools:
https://developers.google.com/web/tools/lighthouse/#devtools
