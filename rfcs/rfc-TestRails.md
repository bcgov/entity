# RFC For Test Case Management Tool - TestRail

## Motivation

Currently BC ROS COLIN project does not have a Test Case Management Tool. This lack of tool has created a few headaches in our current testing process. The following is a brief overview of them.

- Difficult to document test plan in a way that is easy to understand
- It is time intensive to offload testing onto someone else, be they a part of the QA team or not. Since without a test plan, and familiarity of the product, they are unsure of what is a bug or a feature
- Tracking test execution and bug reporting is currently barely possible in google sheets .
- There is no test execution report at the end of the project
- Increase the time needed for someone to automate testing, as the test case must be written before coded, and there is no current written test cases
- An increased risk of bugs in productions due to inconsistent testing procedures

## Recommendation

- Purchase 5 TestRail licences to be shared by the QA team.
- Cost is $32 USD/user/month * 5 = $160/month
- TestRail Cloud licences chosen over on-prem

Having a test case management tool would have many benefits, but the two main benefits are in saving time and improving reliability. There are three main places that time will be saved and one where reliability will be increased.

- Firstly, a large amount of time will be saved in the writing of the test cases.
- Secondly, time will be saved when executing test cases as the steps and results are explicit and detailed. This will also improve the reliability of the software, as testing will be consistent and regression issues will be quickly found.
- Thirdly, time would be saved when trying to export test cases and share testing results to clients.

## Alternatives

A test case management tool would greatly solve all the issues mentioned above. Over the last few weeks a  few different tools were researched with the following results

Tool | Pro | Con | Pricing (USD)
---- | --- | --- | ---
Kuality | Free to use under 5 user, Can export tests in Word, CSV, Excel  | Cloud App, Difficult to navigate, Requires a lot of set up, Reports are not easy to read  | $45/user/month
Test Rails | Easy Github and zenhub Integration, Postman and other automation tools, Easy import and export of test cases, Easy to get started, Bulk editing cases and adding results | Cloud Solution, Reports aren't easy to export | $32/user/ month
Zephyr | Already integrated in JIRA, All JIRA users have access, Easy to create reports | Cost per JIRA user, BC ROS is not using JIRA and Zephyr is a JIRA plugin | $20/user/month

## Adoption strategy

QA must work with the planning/business to document all test cases from at least the feature level. Value is immediately lost if this suites get out of date. More work is needed to firm up when the scripts will be drafted and which resources will be primarily engaging in this work. Manual test runs will be tracked initially with ongoing work to determine:

- If any integrations would be helpful (GitHub, BrowserStack)
- If any lower-level test cases should be tracked here
- Can the tool be used to enhance the detail of the Definition of Done

## Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
