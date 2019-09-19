module.exports={
    '@tags': ['coops', 'single'],

'signin':function (browser){
    browser
        .url(browser.globals.launch_url)
        .waitForElementVisible('input[aria-label="Enter your Incorporation Number"]')
        .setValue('input[aria-label="Enter your Incorporation Number"]', browser.globals.CP0000977.identifier)
        .waitForElementVisible('input[aria-label="Enter your Passcode"]')
        .setValue('input[aria-label="Enter your Passcode"]', browser.globals.CP0000977.passcode)
        .waitForElementVisible('button.sign-in-btn')
        .click('button.sign-in-btn');
},
  'Launch AR filing and confirm initial state':function(browser){
    browser
        .waitForElementVisible('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button')
        .click('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button')
        .waitForElementVisible('#AR-header')
        .assert.containsText('#AR-header','File 2019 Annual Report')
        .assert.containsText('#AR-step-1-header','1. Annual General Meeting Date')
        .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > dl > dd.incorp-number', browser.globals.CP0000977.identifier)
        .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > div',browser.globals.CP0000977.legal_name)
        .assert.containsText('#annual-report-container > aside > div > div > ul > li > div.fee-list__item-name','Annual Report')
        .assert.containsText('#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__name','Total Fees')
        .assert.containsText('#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__value > div','$30.00')
        .waitForElementVisible('#agm-textfield')
        .click('#agm-textfield')
        .waitForElementVisible('#agm-datepicker > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(5) > td:nth-child(4) > button > div')
        .click('#agm-datepicker > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(5) > td:nth-child(4) > button > div');

    browser
        .assert.containsText('#AR-step-2-header','2. Registered Office Addresses (as of 2019 Annual General Meeting)')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > label','Delivery Address')
        .assert.visible('#reg-off-addr-change-btn > div > span')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)', browser.globals.CP0000977.mailing.street_address)
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(1)', browser.globals.CP0000977.mailing.city)
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)', browser.globals.CP0000977.mailing.postal_code)
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > label','Mailing Address')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(1)', browser.globals.CP0000977.delivery.street_address)
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(1)', browser.globals.CP0000977.delivery.city)
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)', browser.globals.CP0000977.delivery.postal_code)
        .waitForElementVisible('#reg-off-addr-change-btn');

    browser.assert.cssClassNotPresent('#reg-off-addr-change-btn', 'v-btn--disabled');

    browser.expect.elements('div.director-info').count.to.equal(browser.globals.CP0000977.director_count);
  },
  'Edit the Office Addresses': function(browser){
    browser
        .waitForElementVisible('#reg-off-addr-change-btn')
        .click('#reg-off-addr-change-btn')
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]', function() {
            browser
                .execute(function() {
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

    browser
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div:nth-child(1) > div > div > div.v-input__slot > div > div')
        .click('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div:nth-child(1) > div > div > div.v-input__slot > div > div')
        .assert.visible('#reg-off-update-addr-btn')
        .assert.visible('#reg-off-cancel-addr-btn > div')
        .click('#reg-off-update-addr-btn')
        .waitForElementNotVisible('#reg-off-update-addr-btn')
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)','123 test street')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(2)','additional info')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(1)', 'Victoria')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)','V8V 4K9')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > label','Mailing Address')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(1)','123 test')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(2)','additional info')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(1)', 'Victoria')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)','V8V 4K9')
        .assert.visible('#reg-off-addr-reset-btn > div');
    
    browser
        .useXpath()
        .waitForElementVisible('(//div[@class="fee-list__item-name"])[1]')
        .assert.containsText('(//div[@class="fee-list__item-name"])[1]', 'Annual Report')
        .assert.containsText('(//div[@class="fee-list__item-name"])[2]', 'Change of Registered Office Address');
    
    browser
        .useXpath()
        .waitForElementVisible('(//div[@class="fee-list__item-value"])[1]')
        .assert.containsText('(//div[@class="fee-list__item-value"])[1]', '$30.00')
        .assert.containsText('(//div[@class="fee-list__item-value"])[2]', '$20.00')
        .assert.containsText('//div[@class="fee-total__value"]', '$50.00');

  },   

// 'Appoint Director':function(browser){
//     browser
//         .assert.containsText('#AR-step-3-header','3. Directors')
//         .waitForElementVisible('#directors > div:nth-child(2) > button > div')
//         .click('#directors > div:nth-child(2) > button > div')
//         .waitForElementVisible('#new-director__first-name')
//         .setValue('#new-director__first-name','first')
//         .waitForElementVisible('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div.v-input.item.director-initial.v-text-field.v-text-field--box.v-text-field--enclosed.theme--light > div > div.v-input__slot > div > input[type=text]')
//         .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div.v-input.item.director-initial.v-text-field.v-text-field--box.v-text-field--enclosed.theme--light > div > div.v-input__slot > div > input[type=text]','initial')
//         .waitForElementVisible('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]')
//         .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]','last')
//         .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]','123 test st')
//         .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]','321 test st');

//     browser
//         .useXpath()
//         .setValue('//*[@id="directors"]/div[3]/ul[1]/li/div/div/form/div[2]/form/div[3]/div[1]/div/div[1]/div/input','victoria');

//     browser
//         .useCss()
//         .click('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections')
//         .click('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div > div')
//         .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]','v1v1v1')
//         .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input[type=text]','canada')
//         .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea','optional')
//         .assert.visible('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button:nth-child(2) > div')
//         .click('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.theme--light.primary > div')
//         .waitForElementVisible('#director-10 > div > label > div > span:nth-child(1) > span')
//         .assert.containsText('#director-10 > div > label > div > span:nth-child(1) > span','NEW')
//         .assert.containsText('#director-10 > div > div > div > div.director_dates > div:nth-child(2)','2019-03-27')
//         .assert.visible('#director-10-change-btn > div > span')
//         // .click('#director-5-cease-btn > div > span')
//         // .assert.visible('#director-7-cease-btn > div > span');
// },
// 'Certify Page':function(browser){
//     browser
//         .assert.containsText('#AR-step-4-header','4. Certify Correct')
//         .setValue('#certified-by-textfield','test')
//         .click('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div')
//         .assert.containsText('#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__name','Total Fees')
//     // .assert.containsText('#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__value > div','$70.00')
//         .assert.visible('#ar-save-btn')
//         .assert.visible('#ar-save-resume-btn')
//         .assert.visible('#ar-cancel-btn')
//         .assert.visible('#ar-file-pay-btn > div')
//         //.assert.visible('#app > div.application--wrap > header > div > div > span > button')
//         .click('#ar-file-pay-btn > div');
// },
// 'PayBC': function (browser) {
//     browser
//         .waitForElementVisible('#paylistbutton')
//         .click('#paylistbutton')
//         .waitForElementVisible('#credit_payBtn')
//         .click('#credit_payBtn')
//         .waitForElementVisible('input[name=trnCardNumber]')
//         .setValue('input[name=trnCardNumber]', '4030000010001234')
//         .setValue('input[name=trnCardCvd]', '123')
//         .moveToElement('input[name=submitButton]', 10, 10)
//         .click('input[name=submitButton]')
// },
// 'Confirm Filing Completes': function (browser) {
//     browser
//         .waitForElementVisible('#dashboard')
//         .waitForElementVisible('html body div#app.application.app-container.theme--light div.application--wrap div.app-body main div#dashboard div#dashboardContainer.container.view-container article#dashboardArticle div.dashboard-content div.dashboard-content__main section div ul.v-expansion-panel.theme--light li.v-expansion-panel__container.filing-history-list div.v-expansion-panel__header div.v-expansion-panel__header__status')
// },
// 'Checking Dashboard':function(browser){
//     browser
//         .assert.containsText('#dashboardArticle > div > div > section:nth-child(1) > header > h2','To Do (0)')
//         .assert.containsText('#dashboardArticle > div > div > section:nth-child(1) > div > div > div > div.no-results__subtitle','Filings that require your attention will appear here')
//         .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > header > h2','Recent Filing History (1)')
//         .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__body','Annual Report')
//         .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__header > div.v-expansion-panel__header__status','FILED AND PAID')
//         //New Director
//         //.assert.containsText('#dashboardArticle > div > aside > section:nth-child(2) > div > ul > li:nth-child(7) > div.director-info > div.list-item__title','TEST TEST3')
//         //.assert.containsText('#dashboardArticle > div > aside > section:nth-child(2) > div > ul > li:nth-child(7) > div.director-info > div.list-item__subtitle > ul > li:nth-child(1)','123 test st')
//         .end();
// }
};
