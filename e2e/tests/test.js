module.exports = {
    'Google Test': function (browser) {
        browser
            .url('https://www.google.ca', function (result) {
                console.log('Test ran!!! :)');
            }).waitForElementVisible('#tsf');
    },

    'IDIR Test': function(browser) {
        browser
            .url('https://test.bcregistryallservices.gov.bc.ca/sofi/login/login.htm')
            .waitForElementVisible('#user')
            .setValue('#user', process.env.IDIRCredU)
            .waitForElementVisible('#password')
            .setValue('#password', process.env.IDIRCredP)
            .click('input[name="btnSubmit"]')
            .waitForElementVisible('div.outage_message')
    }
};