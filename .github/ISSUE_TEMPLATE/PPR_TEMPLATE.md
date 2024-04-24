## Production Readiness Review (PRR) 

| Feature       | `[TICKET_NUMBER]: FeatureName`         |
| ------------- | -------------------------------------- |
| Authors       | `author_name`                          |
| GitHub Handle | `github_handle`                        |
| Start Date    | `YYYY-MM-DD`                           |
| End Date      | `YYYY-MM-DD`                           |
| Status        | `Not Started` / `In Progress` / `Done` |

### References

| Category          | Links                                  |
| ----------------- | -------------------------------------- |
| GitHub repository | `org/repository`                       |
| Requirements      | `link to documents`                    |
### Approval Documents

- [ ] PIA: `<location link>`
- [ ] STRA: `<location link>`
- [ ] FRCR: `<location link>`
- [ ] PenTest: `<location link>`

### Reviewers

Once review has been completed, corresponding reviewer will check the box next to their name when the review is completed. If there are any subordinate tasks, please link in the issue

#### Required

- [ ] SRE Team: `<reviewer name>`
- [ ] Infosec Team: `<reviewer name>`
- [ ] Product Owner: `<reviewer name>`
#### Optional

- [ ] Database Team: `<reviewer name>`
- [ ] Development Team: `<reviewer name>`

### Architectrure

- [ ] Is there are high level summary of the product feature documented along with use-cases ? 
- [ ] Are there any architecture diagrams which shows the feature and how it interact with other services / features. Please add following: dependencies ( internal / external , ports, encryption, protocols, ACLs, security policies etc )
- [ ] Are there interaction or sequence diagrams of critical components ?
- [ ] Is there a SBOM ?
- [ ] Do all diagrams have a textual / versioned source ? (eg Visio Image with accompanying VSDX file, formats like mermaid in markdown files do not need a separate file)

### Operational / Scaling risks

- [ ] What are the potential scaling issues / design tradeoffs that were made
- [ ] List all the dependencies and mention if the dependency is `soft/hard` and how service might be impacted by failure of that dependency ?
- [ ] What is the blast radius if this feature fails ?
- [ ] Are there any SPOF in this feature design and if yes, how are we going to handle that ?
- [ ] How easily can we scale the service ?
- [ ] How are we going to scale the service ( horizontal or vertical ) ?

### SLA / SLO / SLI

- [ ] Is there a SLA defined for this feature / service ? If yes, then list out all the associated SLI and map to each SLA ?
- [ ] List out SLOs ?
- [ ] Map SLI each SLO ?
- [ ] How are the SLIs measured ?

#### CI/CD
- [ ] Are we producing any build artifacts ? (list artifact names)
- [ ] What is the release schedule release ?
- [ ] Is there a downtime involved in the release ? If yes, what is the expected downtime ?
- [ ] Is there a rollback process,  how long does it take ?

##### If the CI/CD is not using the current standard
- [ ] Where are build artifacts stored and how long are they retained ?
- [ ] Does CI process consist of following
    - [ ] linting
    - [ ] unit testing
    - [ ] security testing
    - [ ] code scanning (`sonarqube`)
- [ ] How are build artifacts labelled ? How many copies of build artifact do we store ( `:latest`, `:semVer`) ?
- [ ] Is release process fully automated ? If not, list how automated and non-automated steps.
- [ ] What deployment strategy are we using ( `blue-green, canary, A/B, Recreated, Shadow`)

### Database

- [ ] Does this service use any database ?
- [ ] Is database schema verified by Database Team ?
- [ ] What is the expected growth rate ?

### Patching

- [ ] How often is the service patched ?
- [ ] How are dependencies maintained ?
- [ ] Is patching fully automated ? If not, list of the automated and non automated ones ?
- [ ] Is there a runbook for patching of service, infrastructures and application used by this feature ?
- [ ] Is there an expected downtime during patching ? If yes, how long it is expected ?


### Security and Compliance

##### Elevated access control
- [ ] Are there users that have elevated access ?
- [ ] If so, how are they managed ?
- [ ] Is there an elevated access audit / approval process ?

##### Design
- [ ] Does service follow company infosec guidelines ?
- [ ] Is anything not using HTTPS for communication ?
- [ ] How are certificates managed ? Are they renewed manually or automatically ?

##### Infrastructure
- [ ] Are there any new resources added that this service uses ?
- [ ] Is IaC(terraform) used to creat infrastructure required for this service ?
    - [ ] If yes, is IaC code checked using secure code analysis tool ?
    - [ ] Where is the state file stored  and who has access to it ?
    - [ ] Is statefile backed up from remote storage ?
    - [ ] Is statefile version controlled ?
    - [ ] Is there any secret in the statefile ?
- [ ] Are we using configuration management tool like ansible
  - [ ] How are variables and secrets passed ?
- [ ] Are there network security policy applied
    - [ ] Do firewall follow the principle of least principle
    - [ ] Is service able to handle and mitigate DDOS attack ?
    - [ ] Is service behind IDS / IPS ?


##### Development and Operations

- [ ] Is security scanning done as part of pipeline ?
- [ ] Are all the secrets encrypted at Rest and in Transit ?
- [ ] Is this service adding any form of authentication and authorization ?
- [ ] Does service follow principle of least previlege ?
- [ ] Are there any audit logs for data access ?

##### Logs

- [ ] Do logs write any secrets data ?
- [ ] Do logs capture any PII ?
- [ ] Are logs sanitized to hide sensitive customer information ?

### Performance

- [ ] Are there any potential performance impacts to data when this service is enabled ?
- [ ] Are there any throttling applied to the service ?
- [ ] What do customer experience if limit is reached ?
- [ ] Are there return and back-off stratefies for external and internal dependencies ?
- [ ] Will service auto-scale if there is a sudden spikes in traffic ?

### Backup and Restore

- [ ] What is the backend datastore ?
- [ ] Are there any backup process present ?
- [ ] What kind of backup is being done ( full / differential / incremental ) ?
- [ ] What is the Recovery Time Objective (RTO) and Recovery Point Objective (RPO) ?
- [ ] Are backups monitored ? If yes, please provide link to the dashboard
- [ ] What is the backup retention period ?
- [ ] Was restore from backup tested ?
- [ ] How frequently backups is being done ?
- [ ] How much data is lost if datastore was restored from last point in time backup ?

### Observability

#### Metrics
- [ ] Is service exposing metrics ?
- [ ] Is service exposing metrics which can be related to SLO ?
- [ ] Do exported metrics allow RED style analysis ?

#### Logs
- [ ] Does service expose logs ?
- [ ] Are logs sent to centralized logging system ?
- [ ] Do logs expose any secrets or PII data ?
- [ ] Are logs being exposed in JSON format ?
- [ ] Are logs being sent to centralized observability platform for correlation ?

#### Traces
- [ ] What platform is used to store traces ?
- [ ] Are traces exposing sensitive information ?

#### Alerts
- [ ] Are there alerts that will be triggered when SLA is not met ?
- [ ] Are there alerts that will be triggered when SLO is not met ?
- [ ] Are there any troubleshooting runbooks to handle the alerts ? If yes, please provide link to the document
- [ ] Are the alerts already configured into the SRE platform ?
- [ ] Are alerts configuration version controlled ?
- [ ] Are alerts being routed to correct place ? platform, channel, team ?
- [ ] Are there proper threshold for issuing an official customer notification for an outage related to this service ?

### Responsibility

- [ ] Which team will take the responsibility of reliability of service once it is in production ?
- [ ] Is there a RACI document created for this service ? If not, explain why not
- [ ] Who are the SMEs for this service ?

### On call and Incident Response

- [ ] Who is on call for Tier 3 support ?
- [ ] What is the coverage, please provide hours and days of the week ?
- [ ] Is on-call rotation adequately staffed ?
- [ ] Are individuals on call given adequate training on how to handle specific alerts ?
- [ ] Is there a defined escalation ?
- [ ] Does service has a private / public status page ? 
- [ ] Are there enough runbooks to handle each incident or alerts ?
- [ ] What communication channel are we using for this service ? ( Teams, Rocketchat, other )
- [ ] Is on-call configuration version controlled ?
- [ ] Has there been any post-mortem reports done on this service before ? If yes, provide the link

### Testing and Code Coverage

- [ ] Do all test cases pass ?
- [ ] Did we do any load tests ? If yes, then what were the breaking points that were validated ?
- [ ] What tests are currently not included in the CI/CD pipeline ?
