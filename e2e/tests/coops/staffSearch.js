require('dotenv').config();
module.exports={
  '@tags': ['Regression'],
  before:function(browser ){
    browser.setupData('CP1000992', function(busObject){
         console.log(busObject);
    });
},

  'Login with IDIR':function (browser){
      browser
      .maximizeWindow()
      .url(browser.globals.launch_idirurl)
      .assert.visible('#login-to','Log in to sfstest7.gov.bc.ca')
      .setValue('#user',process.env.IDIRCredU)
      .setValue('#password',process.env.IDIRCredP)
      .click('#login-form > section > div > div.col-sm-7.col-md-8 > div > div.panel-body > div.login-form-action > input')
  },

  'Login To Dashboard':function(browser){
      browser
      .assert.visible('#app > div > div.app-body > div > h1','Search Co-operatives')
      .setValue('#txtBusinessNumber', browser.globals.CP1000992.identifier)
      .click('#app > div > div.app-body > div > form > button')
  },

  '1.Verify initial state of dashboard, then start AR filing': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.verifyTombstone(browser.globals.CP1000992);
      dashboard.verifyAddresses(browser.globals.CP1000992);
      dashboard.startArFiling();
      dashboard.selectAGMDate()
     // dashboard.verifyDirectorCount(browser.globals.CP1000992.director_count);
    },

    '2.Confirm initial state of Annual Report': function (browser) {
      ArPage = browser.page.annualReportPage();
      ArPage.verfifyInitialArState(browser.globals.CP1000992);
      ArPage.checkFeeByIndex('Annual Report', '$30.00', 0);
      ArPage.checkFeeCount(1);
      ArPage.checkTotalFees('$30.00');
      ArPage.verifyOfficeAddresses(browser.globals.CP1000992);
      //ArPage.verifyDirectorCount(browser.globals.CP1000992.director_count);
    },

    '3.Edit the Office Addresses': function (browser) {
      ArPage = browser.page.annualReportPage();
      ArPage.startEditingOfficeAddresses();
      ArPage.fillInAddressField(ArPage.elements.officeDeliveryStreetAddress.selector, '123 test street', browser);
      ArPage.fillInAddressField(ArPage.elements.officeDeliveryCity.selector, 'Victoria', browser);
      ArPage.fillInAddressField(ArPage.elements.officeDeliveryPostalCode.selector, 'V1V1V1', browser);
      ArPage.click('@sameAsDeliveryButton');
      ArPage.moveToElement('@updateAddressesButton', 5, 5);
      ArPage.click('@updateAddressesButton');
      ArPage.checkFeeCount(2);
      ArPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 1);
      ArPage.checkTotalFees('$50.00');
      ArPage.assert.visible('@resetOfficeAddressButton');
      ArPage.assert.containsText('@officeDeliveryLine1', '123 test street');
      ArPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V1V1V1');
      ArPage.assert.containsText('@officeDeliveryLine3', 'Canada');
    },

    '4.Appoint a Director': function (browser) {
      ArPage = browser.page.annualReportPage();
      ArPage.appointDirector();
      ArPage.checkFeeCount(3);
      ArPage.checkFeeByIndex('Change of Director', '$20.00', 2);
      ArPage.checkTotalFees('$70.00');
    },
  
    '5.Certify who filed': function (browser) {
      ArPage = browser.page.annualReportPage();
      ArPage.setValue('@certifyLegalName', 'Tester');
      ArPage.click('@certifyCheckBox');
    },
    '6.Save draft and resume later': function (browser) {
      ArPage = browser.page.annualReportPage();
      ArPage.click('@saveAndResumeLaterButton');
    },
    '7.Resume draft from Dashboard': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.waitForElementVisible('@resumeDraftButton');
      dashboard.click('@resumeDraftButton');
    },
  
    '8.Verify draft resumed correctly then return to dashoard': function (browser) {
      ArPage = browser.page.annualReportPage();
      ArPage.checkFeeCount(3);
      //Note fees re-ordered on resume
      ArPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 1);
      ArPage.checkTotalFees('$70.00');
      ArPage.assert.visible('@resetOfficeAddressButton');
      ArPage.assert.containsText('@officeDeliveryLine1', '123 test street');
      ArPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V1V1V1');
      ArPage.assert.containsText('@officeDeliveryLine3', 'Canada');
      ArPage.moveToElement('@saveAndResumeLaterButton', 5, 5);
      ArPage.click('@saveAndResumeLaterButton');
    },

    '9.Delete draft': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.waitForElementVisible('@resumeDraftButton');
      dashboard.click('@toDoButtonMoreActionsArrow');
      dashboard.click('@deleteDraftButton');
      dashboard.waitForElementVisible('@confirmDeleteDraftButton');
      dashboard.click('@confirmDeleteDraftButton');
      dashboard.waitForElementVisible('@fileNowButton1');
    },
  
    '10.Start AR filing after deleting draft': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.startArFiling();
      dashboard.selectAGMDate()
    },
  
    '11.Confirm initial state of Annual Report - POST DRAFT': function (browser) {
      ArPage = browser.page.annualReportPage();
      ArPage.verfifyInitialArState(browser.globals.CP1000992);
      ArPage.checkFeeByIndex('Annual Report', '$30.00', 0);
      ArPage.checkFeeCount(1);
      ArPage.checkTotalFees('$30.00');
      ArPage.verifyOfficeAddresses(browser.globals.CP1000992);
      //ArPage.verifyDirectorCount(browser.globals.CP1000992.director_count);
    },
  
    '12.Edit the Office Addresses - POST DRAFT': function (browser) {
      ArPage = browser.page.annualReportPage();
      ArPage.startEditingOfficeAddresses();
      ArPage.fillInAddressField(ArPage.elements.officeDeliveryStreetAddress.selector, '123 test street', browser);
      ArPage.fillInAddressField(ArPage.elements.officeDeliveryCity.selector, 'Victoria', browser);
      ArPage.fillInAddressField(ArPage.elements.officeDeliveryPostalCode.selector, 'V8V 4K9', browser);
      ArPage.click('@sameAsDeliveryButton');
      ArPage.moveToElement('@updateAddressesButton', 5, 5);
      ArPage.click('@updateAddressesButton');
      ArPage.checkFeeCount(2);
      ArPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 1);
      ArPage.checkTotalFees('$50.00');
      ArPage.assert.visible('@resetOfficeAddressButton');
      ArPage.assert.containsText('@officeDeliveryLine1', '123 test street');
      ArPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
      ArPage.assert.containsText('@officeDeliveryLine3', 'Canada');
    },
  
    '13.Appoint a Director - POST DRAFT': function (browser) {
      ArPage = browser.page.annualReportPage();
      ArPage.appointDirector();
      ArPage.checkFeeCount(3);
      ArPage.checkFeeByIndex('Change of Director', '$20.00', 2);
      ArPage.checkTotalFees('$70.00');
  },

    '14.Certify who filed - POST DRAFT': function (browser) {
      ArPage = browser.page.annualReportPage();
      ArPage.setValue('@certifyLegalName', 'Tester');
      ArPage.click('@certifyCheckBox');
      ArPage.assert.cssClassPresent('@fileAndPayButton', 'v-btn--disabled');
    },

    '15.Entering RoutingSlip Number':function(browser){
      dashboard = browser.page.dashboardPage();
      dashboard.enterRoutingSlipNumber()
      .setValue('#routing-slip-number-textfield',111111111)
      .click('#ar-file-pay-btn > span')
    },

    '16.Verify Dashboard after filing': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.assert.containsText('@toDoListHeader', 'To Do (2)');
      dashboard.assert.containsText('@filingHistoryHeader', 'Recent Filing History (77)');
      dashboard.assert.containsText('@topFilingInHistoryName', 'Annual Report');
     // dashboard.verifyDirectorCount(browser.globals.CP0000019.director_count + 1);
      dashboard.assert.containsText('@deliveryAddressLabel', 'Delivery Address');
      dashboard.assert.containsText('@deliveryLine1', '123 test street');
      dashboard.assert.containsText('@deliveryLine2', 'Victoria BC V8V 4K9');
      dashboard.assert.containsText('@deliveryLine3', 'Canada');
    }

}