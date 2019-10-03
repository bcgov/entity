module.exports = {
    '@tags': ['COD','local'],
    'signin':function (browser){
        browser
            .url('https://coops-test.pathfinder.gov.bc.ca/')
            .waitForElementVisible('input[aria-label="Enter your Incorporation Number"]')
            .setValue('input[aria-label="Enter your Incorporation Number"]','CP0002141')
            .waitForElementVisible('input[aria-label="Enter your Passcode"]')
            .setValue('input[aria-label="Enter your Passcode"]','415563022')
            .waitForElementVisible('button.sign-in-btn')
            .click('button.sign-in-btn')
            .pause(5000)
    },
    'Coops Dasboard to COD': function (browser) {
            var cod_dashboard=browser.page.cod_dashboard()
            cod_dashboard.CoopsDasboardtoCOD(browser)
            cod_dashboard.Appointnewdirector(browser)
            cod_dashboard.Assertionsfornewdirector(browser)
        },
    'Checking with the resume button': function (browser) {
           var cod_resume=browser.page.cod_resume()
           cod_resume.certifypage(browser)
           cod_resume.checkdashboardassertions(browser)
        },
        'PayBC': function (browser) {
            var paybc=browser.page.paybc()
            paybc.paybcassertions(browser)
        },
        'Confirm Filing Completes': function (browser) {
            var cod_filingcomplete=browser.page.cod_filingcomplete()
            cod_filingcomplete.FilingsCompletedDashboard(browser)
        },
    
};
