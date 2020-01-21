require('dotenv').config();
module.exports = {
  '@tags': ['bcsc','single'], 
    'Verify initial login with bcsc': function (browser) {
        bcsc = browser.page.bcscPage();
        browser.url(browser.globals.launch_url)
        bcsc.verifyCoperativesPage()
        bcsc.verifyBcscLogin()
    },

    
    'Enter contact information': function (browser) {
        relationship = browser.page.relationshipPage();
        relationship.enterContactInformation()
        relationship.createTeam()
        relationship.manageTeamPage()
        relationship.AddBusinesses()
        relationship.checkAddBusinessesSuccess()
        relationship.checkForAffliatedBusinesses()
    },

      
  '1.Verify initial state of dashboard, then start AR filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.verifyTombstone(browser.globals.CP0000019);
    dashboard.verifyAddresses(browser.globals.CP0000019);
    //dashboard.verifyDirectorCount(browser.globals.CP0000019.director_count);
    dashboard.verifyTodolistandRecentFilings();
    dashboard.startArFiling();
  },

  '2.Confirm initial state of Annual Report': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.verfifyInitialArState(browser.globals.CP0000019);
    ArPage.checkFeeByIndex('Annual Report', '$30.00', 0);
    ArPage.checkFeeCount(1);
    ArPage.checkTotalFees('$30.00');
    ArPage.verifyOfficeAddresses(browser.globals.CP0000019);
    //ArPage.verifyDirectorCount(browser.globals.CP0000019.director_count);
  },

  '3.Edit the Office Addresses': function (browser) {
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
    ArPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 2);
    ArPage.checkTotalFees('$70.00');
    ArPage.assert.visible('@resetOfficeAddressButton');
    ArPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    ArPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
    ArPage.assert.containsText('@officeDeliveryLine3', 'Canada');
    ArPage.assert.containsText('@certifyLegalName', 'Tester');
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
  },

  '11.Confirm initial state of Annual Report - POST DRAFT': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.verfifyInitialArState(browser.globals.CP0000019);
    ArPage.checkFeeByIndex('Annual Report', '$30.00', 0);
    ArPage.checkFeeCount(1);
    ArPage.checkTotalFees('$30.00');
    ArPage.verifyOfficeAddresses(browser.globals.CP0000019);
    //ArPage.verifyDirectorCount(browser.globals.CP0000019.director_count);
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
    ArPage.assert.cssClassNotPresent('@fileAndPayButton', 'v-btn--disabled');
  },

  '15.Check with Resume Payment/Cancel Payment': function(browser){
    ArPage.click('@fileAndPayButton')
    .assert.containsText('#main-content > h1','Add Invoice(s) to your Cart to make payment')
    .waitForElementVisible('#searchForm > div.panel-footer > a')
    .click('#searchForm > div.panel-footer > a') 
    .waitForElementVisible('[data-test-id="btn-resume-payment"]')
    .click('[data-test-id="btn-resume-payment"]')
    .assert.containsText('#main-content > h1','Add Invoice(s) to your Cart to make payment')
    .assert.containsText('#oamount__0','70.00')
    .click('#searchForm > div.panel-footer > a')
    .waitForElementVisible('[data-test-id="btn-resume-payment"]')
    .click('#pending-item-menu-activator > span > i')
    .click('[data-test-id="btn-cancel-payment"]')
    .click('#dialog-yes-button > span')
  },

  '16.Resume draft from Dashboard after Cancel Payment': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.waitForElementVisible('@resumeDraftButton');
    dashboard.click('@resumeDraftButton');
  },

  '17.Verify draft resumed correctly then return to dashoard': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.checkFeeCount(3);
    ArPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 2);
    ArPage.checkTotalFees('$70.00');
    ArPage.assert.visible('@resetOfficeAddressButton');
    ArPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    ArPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
    ArPage.assert.containsText('@officeDeliveryLine3', 'Canada');
    ArPage.assert.valueContains('@certifyLegalName', 'Tester');
    ArPage.click('@certifyCheckBox');
    ArPage.click('@fileAndPayButton');
  },

  '18.PayBC': function (browser) {
    browser
      .waitForElementVisible('#paylistbutton')
      .click('#paylistbutton')
      .waitForElementVisible('#credit_payBtn')
      .click('#credit_payBtn')
      .waitForElementVisible('input[name=trnCardNumber]')
      .setValue('input[name=trnCardNumber]', '4030000010001234')
      .setValue('input[name=trnCardCvd]', '123')
      .moveToElement('input[name=submitButton]', 10, 10)
      .click('input[name=submitButton]');
  },

  '19.Verify Dashboard after filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.assert.containsText('@toDoListHeader', 'To Do (2)');
    dashboard.assert.containsText('@filingHistoryHeader', 'Recent Filing History (56)');
    dashboard.assert.containsText('@topFilingInHistoryName', 'Annual Report');
   // dashboard.verifyDirectorCount(browser.globals.CP0000019.director_count + 1);
    dashboard.assert.containsText('@mailingAddressLabel', 'Mailing Address');
    dashboard.assert.containsText('@mailingLine1', '123 test street');
    dashboard.assert.containsText('@mailingLine2', 'Victoria BC V8V 4K9');
    dashboard.assert.containsText('@mailingLine3', 'CA');
    dashboard.assert.containsText('@deliveryAddressLabel', 'Delivery Address');
    dashboard.assert.containsText('@deliveryLine1', '123 test street');
    dashboard.assert.containsText('@deliveryLine2', 'Victoria BC V8V 4K9');
    dashboard.assert.containsText('@deliveryLine3', 'CA');
  }
};
