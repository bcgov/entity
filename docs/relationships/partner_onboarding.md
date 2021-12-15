
# BC Registries Partner On-boarding

BC Registries and Online Services account holders can access and purchase products from partner applications. To enable this, partner application needs to authenticate BC Registries account holders into their system and integrate with BC Registries web services. 
This document lists the integration points for BC Registries application partners to enable authentication and payment using BC Registries account.
# 1. Flow diagrams

## 1.1  Authentication Flow

BC Registries uses [Keycloak](https://www.keycloak.org/documentation) for identity management. Partner application needs to integrate with Keycloak (configuration to be provided by BC Registries team) to authenticate BC Registries Users onto partner application. Below diagram shows the sequence of integration.
![Registry Pay System Flow Diagram](https://github.com/bcgov/sbc-pay/blob/main/docs/docs/architecture/Authentication%20Flow.png?raw=true)

 - Login Flow : This is the first integration point where the partner application integrates with keycloak. Application needs to integrate with Keycloak using [OIDC](https://openid.net/developers/specs/) [authorization code](https://auth0.com/docs/flows/authorization-code-flow) flow to get *access_token* and *refresh_token*. 
 - Registration Flow : If the access_token doesn't have the role *account_holder* means user doesn't have any account registered with BC Registries, so redirect the user to create an account. Details on redirection is added in later sections.
 - Authorizations : BC Registries users can be part of multiple accounts, and the partner application need to confirm the user is working on by presenting the user list of accounts.

## 1.2 Payment Flow

Below diagram shows the sequence of integration from pay perspective.
![Registry Pay System Flow Diagram](https://github.com/bcgov/sbc-pay/blob/main/docs/docs/architecture/Pay%20Flow.png?raw=true)
 - Calculate Fees :  This endpoint would return fee details for the selected product.
 - Post payment request : Once the user is ready to pay call this endpoint to send the payment details.
 - Redirect for payment : If the user is working for a basic account, then they needs to be redirected for credit card payment.
 - Check payment request status : For the partner application to confirm the payment, they need to call the GET payment request with identifier and check the status. This additional call is needed only if the user was redirected for credit card payment, else use the status received from post payment request response.

# 2. Keycloak integration
Partner application needs to integrate with Keycloak for authenticating BC Registries users onto their application. Please check this [documentation](https://www.keycloak.org/docs/latest/securing_apps/) from keycloak on how this can be done based on the technology they use.
Upon successful integration and authentication keycloak would provide access_token and refresh_token. access_token is needed for all API calls to BC Registries system, and refresh_token can be used for refreshing the user session when the access_token is about to expire.
A new keycloak client specific to the partner will be issued by BC Registries team, which would like below;

    {
      "realm": "bcr-registry-realm-name",
      "auth-server-url": "sso-auth-server-url",
      "ssl-required": "external",
      "resource": "partner-client-id",
      "credentials": {
        "secret": "******"
      },
      "confidential-port": 0
    }

# 3. API Integration
All the endpoints are secured by keycloak and partner system must send the access_token as a Bearer Authorization header to all API requests. API Key for the gateway would be provided by BC Registries team which needs to be passed as a request header to Auth and Pay API calls.
# 4. Auth API Integration
Auth API handles the accounts and authorizations related services. 
> Please check [API Spec](https://github.com/bcgov/sbc-auth/blob/main/docs/docs/api_contract/auth-api-1.0.0.yaml) for details on available services and examples.
## 4.1 User settings

REST Endpoint : `GET` `{auth-api-base-url}/api/v1/users/{user-guid}/settings`

Request Headers
- `Authorization : Bearer {access_token}`
- `x-apikey : {api_key}`

Parameters : 

&nbsp;&nbsp;&nbsp;&nbsp;`user-guid` is the `sub` claim from access_token

Response : Please see the [API Spec](https://github.com/bcgov/sbc-auth/blob/main/docs/docs/api_contract/auth-api-1.0.0.yaml#L3545) for the response schema

### Handle user settings response

Iterate the response from User Settings endpoint;
- Match the attribute `type` == `ACCOUNT` and `accountStatus`==`ACTIVE`. 
- If the partner system doesn't allow basic accounts, then filter out any object with attribute `accountType` == `BASIC`. For premium accounts the value will be `PREMIUM`.
- If user doesn't have any account then they need to be redirected to BC Registries for creating an account. For getting the create account URL, Iterate user settings response and match attribute `type` == `CREATE_ACCOUNT`. Then construct the URL by  `urlorigin` + `urlpath` from the object.
- If the user have only one account store the Account-Id (`id` from the object), this Account-Id is needed for any API calls hereafter.
- If the user have more than one account, ask the user to select an account and store the selected the Account-Id (`id` from the object), this Account-Id is needed for any API calls hereafter. 

## 4.2 Authorization call to check if account have access to partner system
Once the Account-Id is selected, then make a call to Auth-API to see if the account have access to the partner system.

REST Endpoint : `GET` `{auth-api-base-url}/api/v1/accounts/{Account-Id}/products/{product-code}/authorizations`

Request Headers
- `Authorization : Bearer {access_token}`
- `x-apikey : {api_key}`

Parameters : 

&nbsp;&nbsp;&nbsp;&nbsp;`Account-Id` is the selected account id from previous step.

&nbsp;&nbsp;&nbsp;&nbsp;`product-code` to be provided for each partner upon on-boarding by BC Registries.

Response : Please see the [API Spec](https://github.com/bcgov/sbc-auth/blob/main/docs/docs/api_contract/auth-api-1.0.0.yaml#L3231) for the response schema


### Check if account have authorization
- From the authorization response, check if `roles` have the role `edit`. If the role is not present then redirect the user to BC Registries so that they can request access to the partner system. 
- For constructing the request access URL, add `urlorigin`+`productSettings` from the user settings response for the account.

## 4.3 Get account details
If the partner system needs account details then use the below endpoint,

REST Endpoint : `GET` `{auth-api-base-url}/api/v1/orgs/{Account-Id}`

Request Headers
- `Authorization : Bearer {access_token}`
- `x-apikey : {api_key}`

Parameters : 

&nbsp;&nbsp;&nbsp;&nbsp;`Account-Id` is the selected account id from previous step.

Response : Please see the [API Spec](https://github.com/bcgov/sbc-auth/blob/main/docs/docs/api_contract/auth-api-1.0.0.yaml#L3180) for the response schema

## 4.4 Get account contact
If the partner system needs account contact details then use the below endpoint,

REST Endpoint : `GET` `{auth-api-base-url}/api/v1/orgs/{Account-Id}/contacts`

Request Headers
- `Authorization : Bearer {access_token}`
- `x-apikey : {api_key}`

Parameters : 

&nbsp;&nbsp;&nbsp;&nbsp;`Account-Id` is the selected account id from previous step.

## 4.5 Get user contact
If the partner system needs user contact details then use the below endpoint,

REST Endpoint : `GET` `{auth-api-base-url}/api/v1/users/@me`

Request Headers
- `Authorization : Bearer {access_token}`
- `x-apikey : {api_key}`


Response : Please see the [API Spec](https://github.com/bcgov/sbc-auth/blob/main/docs/docs/api_contract/auth-api-1.0.0.yaml#L2994) for the response schema

# 5. Pay API Integration
Pay API handles the account payments related services. 
> Please check [API Spec](https://yfthig-test.web.app/pay-api) for details on available services and examples.


## 5.1 Get Fees
REST Endpoint : `GET` `{pay-api-base-url}/api/v1/fees/{product-code}/{filing-type}`

Request Headers : 

- `Authorization` : `Bearer {access_token}`
- `x-apikey : {api_key}`
- `Account-Id` : `{Account-Id}`

Parameters : 

&nbsp;&nbsp;&nbsp;&nbsp;`Account-Id` is the selected account id from previous step.

&nbsp;&nbsp;&nbsp;&nbsp;`access_token` is the access token from keycloak.

&nbsp;&nbsp;&nbsp;&nbsp;`product-code` to be provided for each partner upon on-boarding by BC Registries.

&nbsp;&nbsp;&nbsp;&nbsp;`filing-type` to be provided for each fees upon on-boarding by BC Registries.



Response : Please see the [API Spec](https://bcregistry-demo.apigee.io/docs/payment-proxy/1/types/Fee) for the response schema and example.

## 5.2 Create a payment request

REST Endpoint : `POST` `{pay-api-base-url}/api/v1/payment-requests`

Request Headers : 

- `Authorization` : `Bearer {access_token}`
- `x-apikey : {api_key}`
- `Account-Id` : `{Account-Id}`

Parameters : 

&nbsp;&nbsp;&nbsp;&nbsp;`Account-Id` is the selected account id from previous step.

&nbsp;&nbsp;&nbsp;&nbsp;`access_token` is the access token from keycloak.

&nbsp;&nbsp;&nbsp;&nbsp;`api_key` is the API gateway consumer key.

Request Body: Please see the [API Spec](https://bcregistry-demo.apigee.io/docs/payment-proxy/1/types/PaymentRequest) for the request schema.

Response: Please see the [API Spec](https://bcregistry-demo.apigee.io/docs/payment-proxy/1/types/Invoice) for the response schema and examples.


### Handle payment request response
- Store the attribute `id` if any further correlation between the transaction from partner and BC Registries system is needed.
- If the attribute `isPaymentActionRequired` == `true` then user needs to be redirected for payment. The value will be true only the account is using either online banking or credit card payments. 
- If the attribute `statusCode` is `PAID|COMPLETED|APPROVED` then it means payment is completed or account is in good standing and PAD payment is underway, and the product can be released.

### Redirect For payment
For a credit card payment user has to be redirected to BC Registries application to collect the payment and BC Registries would redirect the user back to the partner application on successful payment. 

Redirect URL : `{make-payment-url}/{payment-request-id}/{redirect-url}`

Parameters:

&nbsp;&nbsp;&nbsp;&nbsp;`make-payment-url` : To be provided by BC Registries. 

&nbsp;&nbsp;&nbsp;&nbsp;`payment-request-id` : `id` received from payment request response.

&nbsp;&nbsp;&nbsp;&nbsp;`redirect-url` : URL encoded return URL to partner application which will be used upon payment completion.

### Check payment request status

If the user gets redirected for payment in above step, once the user is redirected back to the partner application then they need to make an API call back to BC Registries to check the status of payment.

REST Endpoint : `GET` `{pay-api-base-url}/api/v1/payment-requests/{payment-request-id}`

Request Headers : 

- `Authorization` : `Bearer {access_token}`
- `x-apikey : {api_key}`
- `Account-Id` : `{Account-Id}`

Parameters : 

&nbsp;&nbsp;&nbsp;&nbsp;`Account-Id` is the selected account id from previous step.

&nbsp;&nbsp;&nbsp;&nbsp;`access_token` is the access token from keycloak.

&nbsp;&nbsp;&nbsp;&nbsp;`payment-request-id` : `id` received from payment request response.

&nbsp;&nbsp;&nbsp;&nbsp;`api_key` is the API gateway consumer key.



Response: Please see the [API Spec](https://bcregistry-demo.apigee.io/docs/payment-proxy/1/types/Invoice) for the response schema and examples.

# 6. Notify API Integration
Notify API can be used to send any email notification. 
> Please check [API Spec](https://github.com/bcgov/sbc-auth/blob/main/docs/docs/api_contract/notify-api-1.0.0.yaml) for details on available services and examples.


## 6.1 Send Notification
REST Endpoint : `POST` `{notify-api-base-url}/api/v1/notify/`

Request Headers : 

- `Authorization` : `Bearer {access_token}`
- `x-apikey : {api_key}`



Response: Please see the [API Spec](https://github.com/bcgov/sbc-auth/blob/main/docs/docs/api_contract/notify-api-1.0.0.yaml#L11) for the response schema and examples.
