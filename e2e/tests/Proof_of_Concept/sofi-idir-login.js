module.exports = {
    
    'IDIR Test': function(browser) {
        browser
            .url('https://test.bcregistryallservices.gov.bc.ca/sofi/login/login.htm')
            .waitForElementVisible('#user')
            .setValue('#user', process.env.IDIRCredU)
            .waitForElementVisible('#password')
            .setValue('#password', process.env.IDIRCredP)
            .click('input[name="btnSubmit"]')
            .waitForElementVisible('div.outage_message', 15000)
            .end();
    }
};