- Start Date: 2010-07-06
- Target Major Version:
- Reference Issues: n/a
- Entity Issue: https://github.com/bcgov/entity/issues/3729
- Implementation PR: (leave this empty)

# Summary

Namerequest application currently doesnt require users to be authenitcated/logged in to submit a name request.
This demands the namerequest API's and web application to be public without a user contenxt and hence introduces more challenges regarding the security.

few general requirement from the previous discussions are as below.

1) Prevent any threats from bots accessing the Namerequest apis? kind of which can lead to a potential Ddos attacks

2) Reduce the junk data which user can put in to the system since its a public system

3) Ensure only our web app is accessing our api's [noone else should be accessing apis via any other source]

*The RFC doesnt discuss the authenticated option since the specific ticket is around solutions for unauthenticated usage*

# Detailed requirements

#### 1) Prevent any threats from bots accessing the Namerequest apis? kind of which can lead to a  Ddos attacks

The public apis are generally vulnerable to Denial of service attacks potentially leading to service unavailability.The APIs are flooded by continuous requests which will overwhelm the server and the application becomes unaviable.

 
- #####   Infrastructure level solutions
    
  Openshift provides protection against ddos attacks at the HAProxy Router levels which can be leveraged to secure the applications.  
  https://docs.openshift.com/container-platform/3.11/install_config/router/default_haproxy_router.html#deploy-router-protecting-against-ddos-attacks. 
  The settings has to be verfied with platform team to make sure they will provide enough security.
  
  When the API Gateway solutions are in place and if gateway is used to serve the name request api , gateway will have ways to rate limit the api and policies to prevent dos attacks.
      
- #####   Application layer solutions
  
  Incase if we need finer control at application layer against attacks , or If we think our application is particularly prone to dos attacks [*ie.somebody gains specific advantage by making application inaccessible and unavailable to others; for example a bidding web application*] , the following solutions can be considered.
  
  From the analysis , the name request submission post api is sitting behind the payment process. To submit a name request , one has to go through payment.So with a good validation layer , the main POST api can be secured from the Ddos attacks at application layer.If the validation layer can do filtering of invalid requests in an effective manner , the imapct on the actual api will be less. 
  Since the GET requests cant be validated , they are prone to repeated accessing. Mitigations options include integrating a captcha service or other alternatives to ensure only human is filling the form. Captcha solution will be discussed in detail later.
  
#### 2) Reduce the junk data which user can put in to the system since its a public system
   
Since the name request submission post apis sit behind a payment wall , this concern has already been addressed by the namex team.

#### 3) Ensure only our web app is accessing our api's [noone else should be accessing apis via any other source]

To lock the api to the web app , is something which is not easily doable. Controlling WHAT is accessing my API will be challenging to achieve. Since the API's are public in nature , any solution which we put into the web app can be exposed to the user and can be forged.

A good read on this will be 
[https://stackoverflow.com/questions/54369416/how-to-secure-own-backend-api-which-serves-only-my-frontend](https://stackoverflow.com/questions/54369416/how-to-secure-own-backend-api-which-serves-only-my-frontend)

# Suggestions or Possible approaches

The team already handled the logic of submitting the name request after the payment is done.This approach already mitigtated many of the bigger risks and brought in a manual intervention to the submission of the forms.
Incase if the application needs more tighter security , the following options can be considered 

- #####  The system AS-IS with Openshift Router settings to prevent Ddos and a possible strong layer of validation
  - Pros 
    	- Minimal effort to implement
    	- No additional overhead for the user to fill in captcha
  - cons
    	- If at all , applicaiton level ddos attacks occur after bypassing openshift setting , the GET api's are vulnerable to attacks. 
            

- #####  Captcha solutions  
   Different kind of captcha related solutions can be exterted to ensure non-robotic access of the api's .Either bcgov captcha [https://github.com/bcgov/MyGovBC-CAPTCHA-Service] Or Google's Recaptcha or other solutions are also avaiable. Or even non-captcha alternatives like Honeypot can be considered.
 
   - Pros 
     - Solid protection against automated access of the API's
     - The API's are protected using the JWT's which will in future will be helpful incase the applciation moves towards authenticated version 
   - cons
     - Incase if bcgov solutions has to be used , the implementation effort will be high since its designed to support applications with one time submission . 
        The current captcha widget is developed in Angular and the team has to come up with Vue component for that.  
     - Recaptcha makes implementaiton easier ; but we will have to check from policy standards since they pose privacy risks.
       
       
- #####  Keycloak related solutions

  - More R&D needed for keycloak related solutions. A local temporary user can be created programatically with in the application to replicate an actual user .But to make it bot-proof , this temporary user has to be married with some kind of 2FA[to make sure its a real human]. But Since the local user has to follow the implicit login flow , adding 2FA to this user will be tricky and more research might be needed on this ;may be this might not be possible at all.


# Detailed design on the BCGOV Captcha incase team decides to go for it   
 The captcha need to have the following layers to make it work
 
####  1) A service to generate the captcha token
 
The code is already in place with necessary templates to host the service in openshift. The source can be found in 
        https://github.com/bcgov/MyGovBC-CAPTCHA-Service
Most of the customations can be done via configurations as environment variables   

**Efforts** involved are to deploy the application in openshift and customise the settings
     
      
####  2) The captcha widget which gets shown to the user
   Currently the widget is written as angular component .The component interfaces with captcha service and does the necessry things to get the captcha , validate the captcha and retrieve a user token.A new version of this component has to be developed in Vue.

**Efforts** involved developing the Vue version of the [https://github.com/bcgov/MyGovBC-CAPTCHA-Widget](https://github.com/bcgov/MyGovBC-CAPTCHA-Widget). Probably the effort is high in this category.
    
  
####  3) The validation service which validates the JWT
   The name request applcation has to validate the JWT to make sure the JWT is valid. This can be done in multiple ways. Either [https://github.com/thorwolpert/flask-jwt-oidc/](https://github.com/thorwolpert/flask-jwt-oidc/) can be used with some customistions or a new JWT validatior has to be created.
    For more robust solution , a reverse proxy application can also be developed which will proxy all the calls to name request application and ensure the requests comes with a valid token [for example ;https://github.com/bcgov/MyGovBC-MSP-Service ]
    
**Efforts** depends on the approach taken. A medium to high effort wil be required for this. 
          

# Recommendation
	# Recommendation
	From the discussion with Thor and Lorna , it has been decided that the risks are low at this point of time and the application doesnt have to go with any of the above options.
	
	From Lorna ,
	After discussion with Thor(2020-07-06), it was pointed put that COLIN, NRO and many 
	government apps such as eDivorce do not require a login and do not have additional 
	protection in these apps such as captcha to protect the database from being hacked or 
	filled up by bots. The government network handle ddos attacks so all we need to do in the 
	api is to ensure that we are validating data being captured in the database. He also 
	pointed out that login is not necessarily foolproof as logins can be compromised which 
	results in the same level of risk as apps that do not require a login. Hence we have 
	concluded that we will not proceed with any of these options and go with the status quo as 
	the risk is considered low.
# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
