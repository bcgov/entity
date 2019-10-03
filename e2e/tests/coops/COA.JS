module.exports={
    '@tags': ['COA','local'],

'signin':function (browser){
    browser
        .url('https://coops-test.pathfinder.gov.bc.ca/')
        .waitForElementVisible('input[aria-label="Enter your Incorporation Number"]')
        .setValue('input[aria-label="Enter your Incorporation Number"]','CP0001205')
        .waitForElementVisible('input[aria-label="Enter your Passcode"]')
        .setValue('input[aria-label="Enter your Passcode"]','828016238')
        .waitForElementVisible('button.sign-in-btn')
        .click('button.sign-in-btn')
        .pause(5000)
},
'Dashboard':function(browser){
    var COADashboard=browser.page.coa_dashboard()
    COADashboard.dashboardassertions(browser) 
    COADashboard.baseaddressassertions(browser)
    COADashboard.basedirectorsassertions(browser)
},
'Change of Address':function(browser){
    var assertions =browser.page.coa_assertions()
    assertions.COAAssertions(browser)
    browser
    .click('#reg-off-addr-change-btn')
    .waitForElementVisible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]', function() {
          browser.execute(function() {
                var event = new Event('input', {
                    'bubbles': true,
                    'cancelable': true
                });

                var element = document.querySelector('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]');                                
                element.value = "123 test street";  
                element.dispatchEvent(event);                 
                return element;

            }, [], function(result) {
                console.log(result);
            });
    });

browser
    .waitForElementVisible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]', function() {
        browser
            .execute(function() {
                var event = new Event('input', {
                    'bubbles': true,
                    'cancelable': true
                });

                var element = document.querySelector('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]');                                
                element.value = "additional info";     
                element.dispatchEvent(event);                
                return element;

            }, [], function(result) {
                console.log(result);
            });
    });

browser
    .waitForElementVisible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(1) > div > div.v-input__slot > div > input[type=text]', function() {
        browser
            .execute(function() {
                var event = new Event('input', {
                    'bubbles': true,
                    'cancelable': true
                });

                var element = document.querySelector('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(1) > div > div.v-input__slot > div > input[type=text]');                                
                element.value = "Victoria"; 
                element.dispatchEvent(event);                    
                return element;

            }, [], function(result) {
                console.log(result);
            });
    });

browser
    .waitForElementVisible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]', function() {
        browser
            .execute(function() {
                var event = new Event('input', {
                    'bubbles': true,
                    'cancelable': true
                });

                var element = document.querySelector('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]');                                
                element.value = "V8V 4K9"; 
                element.dispatchEvent(event);                    
                return element;

            }, [], function(result) {
                console.log(result);
            });
    });

browser
    .waitForElementVisible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input[type=text]', function() {
        browser
            .execute(function() {
                var event = new Event('input', {
                    'bubbles': true,
                    'cancelable': true
                });

                var element = document.querySelector('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input[type=text]');                                
                element.value = "CANADA";  
                element.dispatchEvent(event);                   
                return element;

            }, [], function(result) {
                console.log(result);
            });
        });
        browser
        .click('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div:nth-child(1) > div > div > div.v-input__slot > div > div')
        .click('#reg-off-update-addr-btn > div')
        var assertions =browser.page.coa_assertions()
        assertions.Assertionsforchangeinaddress(browser)  
},
'Certify Page':function(browser){
    var certify=browser.page.COAcertify()
    certify.COAcertifypage(browser)
    .click('#coa-file-pay-btn > div')
},
'PayBC': function (browser) {
    var paybc=browser.page.paybc()
    paybc.paybcassertions(browser)
},
'Confirm Filing Completes': function (browser) {
    var Filingcomplete=browser.page.Filingscomplete()
    Filingcomplete.Filingcompleteassertions(browser)
    .end();
},
};
