module.exports = {
    
    'NameX login Keycloak creds': function (browser) {
        browser
            .useXpath()
            .url('https://namex-test.pathfinder.gov.bc.ca')
            .waitForElementVisible("//h2[text()='Your authorization is missing or has expired. Please login.']");
        
        browser
            .useCss()
            .waitForElementVisible('#header-login-button')
            .click('#header-login-button')
            .waitForElementVisible('#username')
            .setValue('#username', process.env.KeycloakCredU)
            .waitForElementVisible('#password')
            .setValue('#password', process.env.KeycloakCredP)
            .waitForElementVisible('#kc-login')
            .click('#kc-login')
            .waitForElementVisible('#userid', 15000)
            .end();
    }
};
