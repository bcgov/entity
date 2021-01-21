# RFC For COVID AGM date extension

- Start Date: (2021-01-19)
- Target Major Version: (None)
- Reference Issues: (None)
- Entity Issue: (https://app.zenhub.com/workspaces/entity-5bf2f2164b5806bc2bf60531/issues/bcgov/entity/6198)
- Implementation PR: (None)

# Summary

The registrar gave all co-ops an extension on their AGMs for COVID. We need to enable them to select those extended dates in the AR with the AGM date picker. It currently restricts them to Jan 1st - Dec 31st of the calendar year.

First, we need to update the default date picker validation, and allow an AGM date anywhere from Jan 1st to April 30th of the next year. Currently it is Jan 1st to Dec 31st of the same year. This is because many co-ops filing their 2020 AR hold the AGM for that year in 2021

Our solution for the COVID AGM extensions is to have them check a checkbox that they are taking the blanket extension. When they check the checkbox, validation on the date picker will go from the default (April 30th of the next year), to 6 months ahead (October 31st of the next year).

 - This COVID AGM extension checkbox is optional.
 - It's only purpose is to extend the AGM date picker validation.
 - It will only exist in the 2020 Annual Report filing.
 - There is no change to the ledger item if the checkbox is selected.
 - We do not need to store if the check box was checked or not for later reference.

# Basic example

# Motivation

# Detailed design

Changes required in annual_report validation and get todo task.
  - In validation `expected_date` has been calculated from `last_ar_date` by adding a year, which creates an issue with the new requirement

    Example: Filing an ar for 2020 on 2021 Aug 15th the `last_filing_ar` will set to 2021 Aug 15th, when user tries to file an ar for the year 2021 the existing validation restrict to file on or before 2022 Aug 15th. Based on the requirement user cannot file after 2022 Apr 30. For the first time filer has same kind of issue. If the founding date is 2020 Jan 15th and trying to file on Mar 15th, the validation restrict to file after 2021 Jan 15th

  - In todo task `todo_start_date` is calculating in the same logic as above (by adding 1 year). This will fail in the upcomming year.    

  - Add a new column `next_ar_year` into Business table. For existing business update value with the year + 1 of last_ar_date (since all the existing ar filing is filed in the same year) or year of founding_date.
    calculate `min_date` and `max_date` from `next_ar_year`, that has to be provided with todo task (props in header) to centralize logic.
    if user select "we did not hold an AGM" the ar_date will set to Dec 31st (existing functionality) 
    
    `min_date` is always `next_ar_year`-01-01 or `last_filing_ar` + 1 day, which ever is greater

    if `next_ar_year` is 2020 then `max_date` will be `next_ar_year`-09-30 else `next_ar_year`-04-30 

# Drawbacks

# Alternatives

# Adoption strategy

# Unresolved questions

Right now we are identifying `ARFilingYear` from `founding_date` and `last_filing_ar`. It was fine with the current implementaion (will be always in the same year on or before 31st December). Should we add another field to identify the year from filing?

# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
