# Accessing the COLIN-API Hosted in OpenShift

The following instructions assume:
1. You have the `oc` command line tool installed on your system and it is functioning.
1. You know how to login to an OpenShift server from the command line; using the login token from the web console.
1. You have permissions to access the colin-api pod.


## Port forwarding to your local system

To accomplish this, we will use OpenShift port forwarding.  Some additional details on port forwarding can be found here; [Connecting to a Database Using Port Forwarding in OpenShift](https://blog.openshift.com/openshift-connecting-database-using-port-forwarding/).

- Login to the OpenShift server.
- Switch to the project containing the colin-api pod.
  ```
  $ oc project servicebc-ne-dev

  Now using project "servicebc-ne-dev" on server "https://console.pathfinder.gov.bc.ca:8443".
 - List the pods
	```
	$ oc get pods
	```
	NAME                                   READY     STATUS      RESTARTS   AGE
	backup-2-2lbt6                         1/1       Running     0          6d
	colin-api-213-497df                    1/1       Running     0          6d
 ```
 - Port forward the colin-api port to your local machine
  ```
  $ oc port-forward colin-api-213-497df 5432:5432
  ```
  Forwarding from 127.0.0.1:5432 -> 5432
  Forwarding from [::1]:5432 -> 5432
  127.0.0.1:5432Handling connection for 5432
  Handling connection for 5432
  Handling connection for 5432
  ```
The colin-api is available for use in Namex.