module.exports={
    '@tags': ['coops', 'single'],

'Signin': function (browser) {
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

'Confirm initial state of Annual Report': function (browser) {
    ArPage = browser.page.annualReportPage();   
    ArPage.verfifyInitialArState(browser.globals.CP0000977);
    ArPage.checkFee1('Annual Report', '$30.00');
    ArPage.checkFeeCount(1);
    ArPage.checkTotalFees('$30.00');
    ArPage.verifyOfficeAddresses(browser.globals.CP0000977);
    ArPage.verifyDirectorCount(browser.globals.CP0000977.director_count);

},

'Edit the Office Addresses': function (browser) {
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
    ArPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    ArPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
    ArPage.assert.containsText('@officeDeliveryLine3', 'CANADA');
    ArPage.assert.containsText('@officeMailingLine1', '123 test street');
    ArPage.assert.containsText('@officeMailingLine2', 'Victoria BC V8V 4K9');
    ArPage.assert.containsText('@officeMailingLine3', 'CANADA');

  },   

  'Appoint a Director': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.appointDirector();
    ArPage.checkFeeCount(3);
    ArPage.checkFee3('Change of Director','$20.00');
    ArPage.checkTotalFees('$70.00');
  },

  'Certify who filed': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.setValue('@certifyLegalName', 'Tester');
    ArPage.click('@certifyCheckBox');
  },

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
