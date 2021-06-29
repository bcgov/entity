- Start Date: 2021-06-21
- Target Major Version:
- Reference Issues: n/a
- Entity Issue: https://github.com/bcgov/entity/issues/7975
- Implementation PR: (leave this empty)

# Summary

Name Request will publish messages using the CloudEvent standard to a queue when a NR has been paid for or when a
state change occurs for a NR.  The events will be published to a specific subject and relevant applications/services 
will be able to subscribe to the subject, consuming the events as required.

_Note: the CloudEvent format is already being used by the names pay service when publishing to the entity emailer queue.
As such, some of the queue common code can be leveraged during implementation._

# Basic example

Example CloudEvent format currently being used by names pay service to publish a message to the entity emailer queue.

``` json

        {
            "specversion": "1.x-wip",
            "type": "bc.registry.names.request",
            "source": "nr_pay",
            "id": "16fd2706-8baf-433b-82eb-8c7fada847da",
            "time": "",
            "datacontenttype": "application/json",
            "identifier": "781020202",
            "data": {
                "header": {"nrNum": "781020202"},
                "paymentToken": "234234234324asjdkfhjsdhf23949239423",
                "statusCode": "PAID"
            }
        }

```

###Code snippets from names pay service's CloudEvent implementation:

``` python

def create_cloud_event_msg(msg_id, msg_type, source, time, identifier, json_data_body):  # pylint: disable=too-many-arguments # noqa E501
    # industry standard arguments for this message
    """Create a payload for the email service."""
    
    cloud_event_msg = {
        'specversion': '1.x-wip',
        'type': msg_type,
        'source': source,
        'id': msg_id,
        'time': time,
        'datacontenttype': 'application/json',
        'identifier': identifier
    }
    
    if json_data_body:
      cloud_event_msg['data'] = json_data_body

    return cloud_event_msg
    
```


``` python
   
    nr = RequestDAO.find_by_id(payment.nrId)
    cloud_event_msg = create_cloud_event_msg(msg_id=str(uuid.uuid4()),
                                             msg_type='bc.registry.names.request',
                                             source=f'/requests/{nr.nrNum}',
                                             time=datetime.
                                             utcfromtimestamp(time.time()).
                                             replace(tzinfo=timezone.utc).
                                             isoformat(),
                                             identifier=nr.nrNum,
                                             json_data_body={
                                                 'request': {
                                                     'header': {'nrNum': nr.nrNum},
                                                     'paymentToken': payment.payment_token,
                                                     'statusCode': nr.stateCd
                                                 }}
                                             )
    
    await publish_email_message(qsm, cloud_event_msg)
```

# Motivation

To provide a way for other services and applications to subscribe to different NR events(NR state changes and NR payment
completed) and to be able to act on the event data accordingly.  This will be particularly helpful as we add more 
features to the My Business Dashboard.


# CloudEvent Attributes Usage

This section is intended to provide a general set of guidelines as to how the attributes of the CloudEvent payload should
be used within the context of the development teams at BC Registries.  As such, this section will not contain an 
exhaustive description of CloudEvent attributes.  For more details of CloudEvent attributes, please refer to the 
CloudEvents specification as provided in the references section of this document.


| Attribute Name  | Attribute Type | Data Type      | Example Value                        | Required | Notes      |
|-----------------|----------------|----------------|--------------------------------------|----------|------------|
| specversion     | context        | string         | 1.0.1                                | Y        |            |
| source          | context        | URI-reference  | /sbc_pay_api/invoice/<INVOICE_ID>    | Y        |            |
| id              | context        | string         | 16fd2706-8baf-433b-82eb-8c7fada847da | Y        | use uuidv4 |
| type            | context        | string         | bc.registry.nr_payment.complete      | Y        |            |
| datacontenttype | context        | string         | application/json                     | N        |            |
| time            | context        | timestamp      |                                      | N        |            |
| identifier      | custom         | string         | 111111(FILING_ID)                    | N        |            |
| data            | data           | no restriction | datacontenttype format               | N        |            |

Of particular interest are the following items:

**Idempotent use of a message (`source` + `id`)** - to ensure that producers of messages are publishing distinct events, 
a unique combination of `source` + `id` must be used.  The subscribers will have the responsibility of using the 
`source` + `id` combination to determine how to process messages in an idempotent manner if that is required for a given
subscriber's use case.  This will likely mean that the `source` + `id` will need to be recorded/tracked in order to 
determine if a message has already been processed.

**source** - identifies the context in which an event happened. 

**id** - identifies the event.  Use uuidv4 for the id which is provided by the uuid python module. i.e. `uuid.uuid4()`  

**data** - contains information specific to the event.  Typically this will contain a json payload and services consuming
this data payload will do most of the core processing of an event with the information provided in this payload.  The content
type of this field is encoded in the media format specified by the `datacontenttype` attribute.


# Detailed design

The diagram below provides the flows that will need to be updated to support our CloudEvent implementation.  Specifically,
the integration points are the areas where work will need to be done.

![Integration Points Diagram](rfc-cloud-events-for-name-request/cloud_events_diagram.png)


## Integration Point Details
The following section details the expected formats of the CloudEvent payloads that need to be used at each integration point
outlined in the Integration Points Diagram above and any specific design details for the given integration point.

### Integration Point 1 - NR Payment Completed CloudEvent

The names pay job will need to publish a NR payment completed CloudEvent message to the `nr.events` subject 
when it receives a message from sbc-pay indicating that the payment is complete.  This NR payment completed message
will then be used by sbc-auth to affiliate the NR to the manage business dashboard can occur.  The CloudEvent payload 
format that is to be used can found below.  

In terms of implementation, the names pay service already publishes messages.  It will be a matter of adding configuration
for the new `nr.events` subject and publishing the new NR payment completed message to this new subject.

**CloudEvent Payload Format**

``` json

        {
            "specversion": "1.0.1",
            "type": "bc.registry.nr_payment.completed",
            "source": "/names_pay/nr/<NR_ID>",
            "id": "16fd2706-8baf-433b-82eb-8c7fada847da",
            "time": "<PUBLISH_TIME>",
            "datacontenttype": "application/json",
            "identifier": "<NR_ID>",
            "data": {
                "nrId": "<NR_ID>"
				 ...
            }
        }

```


### Integration Point 2 - SBC Auth NR Events Subscriber & Affiliate NR to Manage Business Dashboard

A new listener in sbc-auth will need to be added to listen for the new NR payment completed message via the new 
`nr.events` subject.  Logic will also need to be added to parse the CloudEvent defined in Integration Point 1 and 
affiliate the NR to the manage business dashboard.

sbc-auth has already implemented several listeners so the implementation should just be fairly similar to the other 
listeners.  It will just be a matter of copying an existing listener, updating subject to subscribe to `nr.events` 
and implementing the event parsing and processing logic.


### Integration Point 3a & 3b - Publish NR State Change CloudEvent

The namex-api and names pay subscriber will need to be updated such that at any point where a state change occurs for a NR, 
a CloudEvent similar to the one below is sent to the queue. 

The namex-api in its current state does not publish and queue messages but queue publishing code can be leveraged in 
the names-pay service in the namex repo.  The publishing of this new NR state change message should be to a 
new subject named `nr.events`.

The names pay subscriber currently already publishes messages but so there is some code that can be leveraged with respect
to queue publishing.  The code will need to be updated to publish to state change messages to the `nr.events` subject.

**CloudEvent Payload Format**

``` json

        {
            "specversion": "1.0.1",
            "type": "bc.registry.nr_state.changed",
            "source": "/namex_api/nr/6724165",
            "id": "16fd2706-8baf-433b-82eb-8c7fada847da",
            "time": "PUBLISH_TIME",
            "datacontenttype": "application/json",
            "identifier": "6724165",
            "data": {
                "nrNum": "6724165",
                "previousState": "DRAFT"
                "newState": "PENDING_PAYMENT"
                ...
            }
        }

```


### Integration Point 4 - SOLR Updater Subscriber

Currently, when NameX updates the NamesDB, this results in an Oracle trigger populating a record in the NamesDB 
transaction table.  From there a series of processes are executed eventually leading to the update of the SOLR indexes.
These series of processes are similar to this [diagram](https://raw.githubusercontent.com/bcgov/namex/main/docs/img/flow-1.png)

We would like to replace this existing way of triggering an update to SOLR names indexes by creating a new SOLR updater 
subscriber.  This new subscriber will subscribe to the `nr.events` subject and will update SOLR indexes the same way
the previous process did when a NR state change message that requires a SOLR index update is received.  

### Integration Point 5 - SBC-Auth NR Events Subscriber

A new subscriber may need to be created to listen for the `nr.events` subject to process NR state change messages.  Note
that it may not be necessary to create a new subscriber if the subscriber used in integration point 2 will be used to process
multiple message types.  i.e. payment completed and NR state change messages.

The details of what will the subscriber will do with a NR state change message is has not been decided at this point in 
time.  The Entities or the Relationships team will be implementing this subscriber.

# Drawbacks

Event publishing or consumption may not happen in a timely enough matter in particular scenarios.

May be difficult to debug errors when trying to trace the publishing and consumption of messages.  Particularly in
scenarios where there are a lot of messages being published and consumed.

_Note:  We are moving to implement spans across our queues which will allow tracebility through a common
context.  Implementation of this feature is possible once our queue infrastructure has been upgraded to a version
that supports spans._


# Alternatives

Expose endpoints for services/applications to poll for relevant information or integrate directly with other services
through api calls in instances where information needs to be pushed to other applications.


# Adoption strategy

Should be straightforward as we can reference names-pay and queues are already used in a lot of places.  As well,
as the use of queues is already a loosely coupled approach(i.e. consumers and producers don't know about each other),
the introduction of new messages and consumption of new messages should have minimal effects on other services and components.

# Unresolved questions

None


# References

[CloudEvents - Version 1.0.1 Specification](https://github.com/cloudevents/spec/blob/v1.0.1/spec.md)



