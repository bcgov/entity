module.exports={
    '@tags': ['ar',  'local'],
    
    'signin':function (browser){
        browser
            .url('https://coops-test.pathfinder.gov.bc.ca/')
            .waitForElementVisible('input[aria-label="Enter your Incorporation Number"]')
            .setValue('input[aria-label="Enter your Incorporation Number"]','CP0000977')
            .waitForElementVisible('input[aria-label="Enter your Passcode"]')
            .setValue('input[aria-label="Enter your Passcode"]','448226753')
            .waitForElementVisible('button.sign-in-btn')
            .click('button.sign-in-btn')
            .pause(5000)
    },
    'Dashboard':function(browser){
        var dashboard=browser.page.dashboard()
        dashboard.dashboardassertions(browser) 
        dashboard.baseaddressassertions(browser)
        dashboard.basedirectorsassertions(browser)
    },
    'Launch AR filing and confirm initial state':function(browser){
      var Arfilings=browser.page.Arfilings()
      Arfilings.Ardashboardassertions(browser)
      Arfilings.Datepickerassertions(browser)
      Arfilings.ARPageAddress(browser)
     }, 
     
    'Edit the Office Addresses': function(browser){
        browser
        .waitForElementVisible('#reg-off-addr-change-btn')
        .click('#reg-off-addr-change-btn')
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]', function() {
              browser.execute(function() {
                    var event = new Event('input', {
                        'bubbles': true,
                        'cancelable': true
                    });
    
                    var element = document.querySelector('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]');                                
                    element.value = "123 test street";  
                    element.dispatchEvent(event);                 
                    return element;
    
                }, [], function(result) {
                    console.log(result);
                });
        });
    
    browser
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]', function() {
            browser
                .execute(function() {
                    var event = new Event('input', {
                        'bubbles': true,
                        'cancelable': true
                    });
    
                    var element = document.querySelector('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]');                                
                    element.value = "additional info";     
                    element.dispatchEvent(event);                
                    return element;
    
                }, [], function(result) {
                    console.log(result);
                });
        });
    
    browser
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(1) > div > div.v-input__slot > div > input[type=text]', function() {
            browser
                .execute(function() {
                    var event = new Event('input', {
                        'bubbles': true,
                        'cancelable': true
                    });
    
                    var element = document.querySelector('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(1) > div > div.v-input__slot > div > input[type=text]');                                
                    element.value = "Victoria"; 
                    element.dispatchEvent(event);                    
                    return element;
    
                }, [], function(result) {
                    console.log(result);
                });
        });
    
    browser
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]', function() {
            browser
                .execute(function() {
                    var event = new Event('input', {
                        'bubbles': true,
                        'cancelable': true
                    });
    
                    var element = document.querySelector('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]');                                
                    element.value = "V8V 4K9"; 
                    element.dispatchEvent(event);                    
                    return element;
    
                }, [], function(result) {
                    console.log(result);
                });
        });
    
    browser
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input', function() {
            browser
                .execute(function() {
                    var event = new Event('input', {
                        'bubbles': true,
                        'cancelable': true
                    });
    
                    var element = document.querySelector('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input');                                
                    element.value = "CANADA";  
                    element.dispatchEvent(event);                   
                    return element;
    
                }, [], function(result) {
                    console.log(result);
                });
            });
        var Addresscomplete=browser.page.Addresscomplete()
        Addresscomplete.Completedassertions(browser)
        },   
    'Appoint Director':function(browser){
        var Director=browser.page.Director()
        Director.DirectorAssertions(browser)
       // Director.NewDirectorAssertions(browser)
    },
            
    'Certify Page':function(browser){
        var certify=browser.page.certify()
        certify.Certifypage(browser)
    },
    'PayBC': function (browser) {
        var paybc=browser.page.paybc()
        paybc.paybcassertions(browser)
    },
    'Confirm Filing Completes': function (browser) {
        var Filingcomplete=browser.page.Filingscomplete()
        Filingcomplete.Filingcompleteassertions(browser)
        end();
    }
    };
    
    
