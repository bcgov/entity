# RFC: Proposal to Switch from Postman to Bruno

**Start Date:** 2024-07-30  
**Target Major Version:** (EPIC or User Story TAG|Link)  
**Reference Issues:** 22574, 22514  
**Entity Issue:** (leave this empty)  
**Implementation PR:** (leave this empty)

## Summary

This RFC proposes switching from Postman to Bruno for API testing and development. Bruno addresses several Postman concerns, including improved version control, enhanced data privacy, and offline capabilities.

## Motivation

The primary motivation for this switch is to resolve several shortcomings of Postman:

- **Version Control and Collaboration**: Postman saves collections as single JSON files, making version control cumbersome. Bruno stores collections in a folder structure, allowing easy use with Git or other version control systems.
- **Data Privacy**: Postman's use of a proprietary proxy server raises data privacy concerns, particularly when handling sensitive information like passwords and JWT tokens. Bruno, as a desktop app, makes requests directly from the user's machine, ensuring complete control over data.
- **Offline Capability**: Postman requires an internet connection, while Bruno is designed for offline use, providing reliability in environments with limited connectivity.
- **Cost and Accessibility**: Postman charges for team collaboration features. Bruno is free and open-source, with no restrictions on team size or features.
- **Security and Compliance**: Postman's forced auto-updates and cloud syncing can conflict with corporate security policies. Bruno's offline nature and lack of forced cloud sync ensure better compliance with security protocols.

## Detailed Design - Postman vs Bruno Comparison

**How Collections are Saved**

- Postman: Collections are saved as a single JSON file.
- Bruno: Collections are saved in a folder structure using Bru, a plain text markup language, enabling decentralized version control.

**Where Collections are Saved**

- Postman: Collections are stored in the cloud.
- Bruno: Collections are stored locally.

**How API Requests are Made**

- Postman: Requests are made via a proprietary proxy server.
- Bruno: Requests are made directly from the user's computer.

**Online vs Offline**

- Postman: Requires an online connection.
- Bruno: Designed for offline use.

**Team Collaboration**

- Postman: Paid feature with a free tier limited to 3 users.
- Bruno: Free and open-source with no team size restrictions.

**Collection Runs**

- Postman: Limited runs based on subscription plans.
- Bruno: Unlimited runs with no restrictions.

**Loading NPM Modules**

- Postman: Involves complex workarounds.
- Bruno: Supports standard use of package.json.

**Declarative Scripting and Assertions**

- Postman: Requires scripting for both post-response variable updates and test writing.
- Bruno: Supports declarative scripting and assertions using simple expressions.

## Drawbacks

- **Migration Cost**: Initial time and effort are required to migrate collections and train the team on Bruno.
- **Feature Parity**: Bruno may lack specific features available in Postman.

## Alternatives

- **Status Quo**: Continue using Postman and mitigate shortcomings internally.

- **Other Tools**: Consider alternatives like Insomnia, Httpie Desktop, or Hoppscotch.

## Adoption Strategy

The transition will involve:

1. Migrating existing collections from Postman to Bruno.
2. Training the team on Bruno.
3. Adjusting version control systems for collaborative development.

## Unresolved Questions

- Are there any specific features in Postman that are crucial to our workflow and not available in Bruno? (since most teams use Postman just for its basic capabilities, this is unlikely)
- What will be the support and maintenance strategy for Bruno within the organization?

## Selection Criteria

How did Bruno became the prime candidate for the switch?

The following [web site](https://testfully.io/blog/top-5-postman-alternatives/) provides a recent overview of all the tools available in the API testing Space. The included [Excel file](rfc-postman-to-bruno/api-tools.xlsx) contains a summary of the key features of the tools that are most relevant. A scoring system was used to rank the tools. After that, by applying the following criteria, Bruno emerged as the best alternative to Postman:

- Coding Skills Required: Yes
- Environments: Yes, Being able to have test sets available for different environments (Local, Dev, Test) is a must.
- API Testing: Yes - Default
- CLI: Yes
- Team Collaboration: Yes, either by cloud based or Git file sharing
- Open Source: Yes
- Web Connection Needed: No

### Conclusion

Even though Bruno is not as feature-rich as Postman, it is the best alternative for the organization based on the selection criteria. To trade some features for better security, privacy, and offline capabilities seems a small price to pay.

## Thanks

- SSO-Pathfinder team, who first alerted on the emerging issues with Postman that would make Postman a security risk. This team has switched to Bruno.
