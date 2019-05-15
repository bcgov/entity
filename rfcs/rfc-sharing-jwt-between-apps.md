- Start Date: (fill me in with today's date, 2019-05-19)
- Target Major Version: (EPIC or User Story TAG|Link)
- Reference Issues: (fill in existing related issues, if any)
- Entity Issue: github/entity#502
- Implementation PR: (leave this empty)



# Summary

The filing website or the overall filing experience for the user compromises of multiple web application. User logs into SBC-AUTH web application and then gets redirected to COOPS web application .
To keep the user logged into multiple application , its necessary to share the JWT token across all these applications.

The challenge is once the user logs into auth-app , the user gets redirected to coops-ui and the browser redirect doesnt support any headers.Or else the token could've been passed as headers.
Most of the browser storage are limited to single domain and this might the not be the case of auth app and coops.




# Basic example



# Motivation


# Detailed design

There are multiple options to address this problem.The team chose the sharing of JWT via embedded iframes and iframe messaging [https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage]

##### The auth app  changes

It gets a handle to coops-ui app by embedding a hidden iframe in the source. This enables the cross origin communication.


 `<iframe :src="VUE_APP_COPS_REDIRECT_URL" ref="iframeContent" style="display: none"></iframe>
`

Once user enters successful credentails and get a token from keycloak , the auth-app emits a message to the coops origin


 `IframeServices.emit(this.$refs.iframeContent.contentWindow, response.data.access_token) 
`

[IframeServices.ts ](https://github.com/bcgov/sbc-auth/blob/development/auth-web/src/services/iframe.services.ts)

`export default {
  emit (framewindow :Window, token:string) {
    framewindow.postMessage(token, process.env.VUE_APP_COPS_REDIRECT_URL)
  }
}`

##### The client app [coops-ui in this case]  changes

In the coops-ui apps entry point , it should listen for any message from the auth-app'origin

` window.addEventListener('message', function (e) {
       if (e.origin == SBC-AUTH-URL) {
        sessionStorage.setItem("KEYCLOAK_TOKEN", e.data);
       }
    }}`
    
    
_The urls has to be set to make sure the message is for targeted origins only._    
    


# Drawbacks

I am unable to find much drawbacks with the solution as such.But any XSS vulnerabilities in one of these sites will lead to the solution to be vulnerable as well.So prevention of XSS and other security scans is pretty important.
CSRF might also have the same implications


# Alternatives

- What other designs have been considered?
    
    There are other solutions which were also evaluated as below
    
    - passing the token as url query param
        
        The solution is not robust enough and might hit a URL character limit as well.Not an ideal solution
    
    - Cookies
            
         Cookies are limited to same origin domain.At this point , since the details of origins are not known .Also its highly likely that the auth-app will have to redirect to a different origin in future as well.So being mindful of the future , cookies are eliminated.
         If its not known that , these all sites will be of same origin , cookies can be considered
         
    - Custom Solution
                
         A potential option was a custom solution using a random generated GUID. Once the auth-app gets the token from keycloak , it creates a GUID and stores the mapping between GUID and JWT.In the UI , the GUID will be attached to the coops url.
         The redirection will look like https://coopsurl/secretid=7626e82b-9021-42ba-bdea-5cfd45894661
         
         In the coops side , it makes an api call to the auth app with this guid and the auth-app returns a JWT. 
         
         The mapping of JWT and GUID will age out after a short span.ie 1 mint or after the first retrieval of the record so that user cant just use the url once again.  

         The solution doesnt have any disadvantages except the additional effort for implementing the solution.At this point , no drawbacks with IFRAME solution has been found and easier to implement. Thats why the custom  solution is not preferred.
  
     - single app aka microfront end
                   
          The solution is not robust enough and might hit a character limit as well.Not an ideal solution
      
- What is the impact of not doing this?

# Adoption strategy

The change is already implemented and it works well.

# Unresolved questions

There are more about the tokens[offline token, expiry etc].But thats a different solution and is not considered here.
# Thanks

This template is heavily based on the Vue, Golang, React, and other RFC templates. Thanks to those groups for allowing us to stand on their shoulders.
