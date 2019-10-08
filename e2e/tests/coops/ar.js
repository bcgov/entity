module.exports={
    '@tags': ['coops', 'single'],

'Signin':function (browser){
    browser
        .url(browser.globals.launch_url)
        .waitForElementVisible('#input-17')
        .setValue('#input-17', browser.globals.CP0000977.identifier)
        .waitForElementVisible('#input-20')
        .setValue('#input-20', browser.globals.CP0000977.passcode)
        .waitForElementVisible('button.sign-in-btn')
        .click('button.sign-in-btn')
        .assert.urlEquals(browser.globals.launch_url + '/auth/businessprofile');
},

'Verify initial state of dashboard, then start AR filing': function (browser) {
    dashboard = browser.page.dashboardPage().navigate();
    dashboard.verifyTombstone(browser.globals.CP0000977);
    dashboard.verifyAddresses(browser.globals.CP0000977);
    dashboard.verifyDirectorCount(browser.globals.CP0000977);
    dashboard.startArFiling();
},

'Confirm initial state of Annual Report':function(browser){
    ArPage = browser.page.annualReportPage();   
    ArPage.verfifyInitialArState(browser.globals.CP0000977);
    ArPage.checkFee1('Annual Report', '$30.00');
    ArPage.checkFeeCount(1);
    ArPage.checkTotalFees('$30.00');
    ArPage.verifyOfficeAddresses(browser.globals.CP0000977);
    ArPage.verifyDirectorCount(browser.globals.CP0000977.director_count);

},

'Edit the Office Addresses': function(browser){
    ArPage = browser.page.annualReportPage();
    ArPage.startEditingOfficeAddresses();
    ArPage.fillInAddressField(ArPage.elements.officeDeliveryStreetAddress.selector, '123 test street', browser);
    ArPage.fillInAddressField(ArPage.elements.officeDeliveryCity.selector, 'Victoria', browser);
    ArPage.fillInAddressField(ArPage.elements.officeDeliveryPostalCode.selector, 'V8V 4K9', browser);
    ArPage.fillInAddressField(ArPage.elements.officeDeliveryCountry.selector, 'CANADA', browser);
    ArPage.click('@sameAsDeliveryButton');
    ArPage.moveToElement('@updateAddressesButton', 5, 5);
    ArPage.click('@updateAddressesButton');
    ArPage.checkFeeCount(2);
    ArPage.checkFee2('Change of Registered Office Address','$20.00');
    ArPage.checkTotalFees('$50.00');
    ArPage.assert.visible('@resetOfficeAddressButton');

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
