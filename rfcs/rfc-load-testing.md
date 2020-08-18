- Start Date: 2020-08-05
- Target Major Version: N/A
- Reference Issues: #4356
- Entity Issue:
- Implementation PR:

# Summary

The team proposal of which load testing framework should be used and which KPI indicators we should capture during testing.

# Basic example

A simple test demo

![load test demo](rfc-load-testing/k6-demo.gif)

# Motivation

The team want to know the behavior of the application when multiple users access it, and identify the bottlenecks in the UI, microservices, and partner applications. In addition, the team want to understand the KPI metrics of the current environment to make a plan for scalability and health checks.

# Solution

The releationship team will implement the [k6s](https://k6s.io) for test load testing tools.

## [K6s Features](https://raw.githubusercontent.com/loadimpact/k6/master/README.md)

- **Scripting in ES6 JS**: support for [modules](https://k6.io/docs/using-k6/modules) to aid code reusability across an organization
- **Everything as code**: test logic and [configuration options](https://k6.io/docs/using-k6/options) are both in JS for version control friendliness
- **Automation-friendly**: [checks](https://k6.io/docs/using-k6/checks) (like asserts) and [thresholds](https://k6.io/docs/using-k6/thresholds) for easy and flexible CI configuration!
- [**HTTP/1.1**](https://k6.io/docs/using-k6/http-requests), [**HTTP/2**](https://k6.io/docs/using-k6/protocols/http-2) and [**WebSocket**](https://k6.io/docs/using-k6/protocols/websockets) protocol support
- **TLS features**: [client certificates](https://k6.io/docs/using-k6/ssl-tls/ssl-tls-client-certificates), [configurable SSL/TLS versions and ciphers](https://k6.io/docs/using-k6/ssl-tls/ssl-tls-version-and-ciphers)
- **Batteries included**: [Cookies](https://k6.io/docs/using-k6/cookies), [Crypto](https://k6.io/docs/javascript-api/k6-crypto), [Custom metrics](https://k6.io/docs/using-k6/metrics#custom-metrics), [Encodings](https://k6.io/docs/javascript-api/k6-encoding), [Environment variables](https://k6.io/docs/using-k6/environment-variables), JSON, [HTML forms](https://k6.io/docs/using-k6/html/working-with-html-forms), [files](https://k6.io/docs/javascript-api/init-context/open-filepath-mode), [flexible execution control](https://k6.io/docs/getting-started/running-k6#section-stages-ramping-updown-vus), and more.
- **Built-in HAR converter**: record browser sessions as [`.har` files](https://en.wikipedia.org/wiki/.har) and [directly convert them to k6 scripts](https://k6.io/docs/using-k6/session-recording-har-support)
- **Flexible metrics storage and visualization**: [InfluxDB](https://k6.io/docs/results-visualization/influxdb-+-grafana) (+Grafana), [JSON](https://k6.io/docs/getting-started/results-output/json) or [k6 Cloud](https://k6.io/docs/cloud/analyzing-results/overview)
- [**Cloud execution**](https://k6.io/docs/using-k6/cloud-execution) and distributed tests _(currently only on infrastructure managed by [Load Impact](https://loadimpact.com/), with native distributed execution in k6 [planned](https://github.com/loadimpact/k6/wiki/Roadmap) for the near future!)_

## Testing strategies

- **Smoke testing** is a regular load test, configured for minimal load. You want to run a smoke test as a sanity check every time you write a new script or modify an existing script.
- **Load testing** is primarily concerned with assessing the current performance of your system in terms of concurrent users or requests per second.
- **Stress testing** is to assess the availability and stability of the system under heavy load.
- **Soak testing** is concerned with reliability over a long time.

## Typical testing scenario

- **Micro services**: the backend api services we build for the relatetionship team and entity team.
- **UI with Micro services**: the frontend applications we build for the relatetionship team and entity team.
- **Partner applications**: BC service card, PayBC, BC Online etc.

## [Key KPI Metrics](https://medium.com/swlh/beginners-guide-to-load-testing-with-k6-73d55ee23723)

- **Concurrency**: systems which would set this goal, usually have a concept of end-user and need to see how the system behaves while many concurrent users try to access the system. They basically want to test how many of requests fail/pass under high loads of users. This both includes many concurrent users and each requesting multiple resources at the same time.
- **Server response time**: this goal signifies the time it takes from the initial request from the client to the server up until a response is sent back from the server.
- **Throughput**: systems with no concept of end-users, would set this goal to see how the system behaves overall, while there is a ton of requests/responses coming in/out of the system.

# Drawbacks

# Alternatives

# Adoption strategy

We build a testing project follow the testing straegy and the testing scenario. We can try to covert the existing Postman test collection into k6s test cases. Run the project through github actions and send the result output report to Product Owners and SRE team members.

# Unresolved questions

- How often should we run the load testing?
- Do we want to run the testing in cloud service?
- Where do we save the test output?

# Thanks

- [k6s.io](https://k6.io/docs/)
- [Beginner’s Guide to Load Testing with k6](https://medium.com/swlh/beginners-guide-to-load-testing-with-k6-85ec614d2f0d)
