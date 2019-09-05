module.exports = {
    
    'NameX login IDIR creds': function (browser) {
        browser
            .useXpath()
            .url('https://namex-test.pathfinder.gov.bc.ca')
            .waitForElementVisible("//h2[text()='Your authorization is missing or has expired. Please login.']");
        
        browser
            .useCss()
            .waitForElementVisible('#header-login-button')
            .click('#header-login-button')
            .waitForElementVisible('#zocial-idir')
            .click('#zocial-idir')
            .waitForElementVisible('#user')
            .setValue('#user', process.env.IDIRCredU)
            .waitForElementVisible('#password')
            .setValue('#password', process.env.IDIRCredP)
            .waitForElementVisible('input[name="btnSubmit"]')
            .click('input[name="btnSubmit"]')
            .waitForElementVisible('#userid', 15000)
            .end();
    }
};