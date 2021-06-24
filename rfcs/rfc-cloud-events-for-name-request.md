- Start Date: 2021-06-21
- Target Major Version: 
- Reference Issues: n/a
- Entity Issue: https://github.com/bcgov/entity/issues/7975
- Implementation PR: (leave this empty)

# Summary

Name Request will publish messages using the CloudEvent standard to a queue when a NR has been paid for or when a 
state change occurs for a NR.  The events will be published to a specific subject and relevant
applications/services will be able to subscribe to the subject, consuming the events as required.

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

Implementing an event driven architecture through the use of queues allows us to decouple services and 
reduce the likelihood of a single point of failure.  This architecture is also highly scaleable both from 
the perpsective that there is no need for point to point integration and that it is very easy
to integrate new services that need to consume a certain type of message in an adhoc manner.

In addition, the CloudEvent standard will provide a common messaging format that all developers can 
reference when implementing queue related logic for producing and consuming messages.


# Detailed design

![Name Request CloudEvents Diagram](rfc-cloud-events-for-name-request/cloud_events_diagram.png)


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



