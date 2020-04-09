module.exports = {
    '@tags': [''],

    'POST data to the auth reset tool': function (browser) {
        bcsc = browser.page.bcscPage();
        browser.url(browser.globals.launch_url);
        bcsc
            .verifyLandingPage()
            .moveToBCSC()
            .enterBCSCCardUser(process.env.ServiceCard3)
            .enterBCSCPassword(process.env.ServiceCard3Pw)
            .pause(10000);

    },

    after: function(browser) {
        browser.authReset();  
    }
            
           
};

