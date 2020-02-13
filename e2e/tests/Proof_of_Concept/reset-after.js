module.exports = {
    '@tags': ['single'],

    'POST data to the auth reset tool': function (browser) {
        bcsc = browser.page.bcscPage();
        browser.url(browser.globals.launch_url);
        bcsc.loginWithBCSC(process.env.ServiceCard2, process.env.ServiceCard2Pw);

        browser
            .useCss()
            .waitForElementVisible('h1.view-header__title');
    },

    after: function(browser) {
        browser.authReset();  
    }
            
           
};

