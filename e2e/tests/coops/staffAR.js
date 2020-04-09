require('dotenv').config();
module.exports = {
  '@tags': ['regression', 'staff'],
  before: function (browser) {
    browser.maximizeWindow()
    browser.setupData('CP1000992', function (busObject) {
      console.log(busObject);
    });
  },

  '1. Login with IDIR': function (browser) {
    staffLogin = browser.page.staffDashboardPage();

    staffLogin
      .navigate()
      .signInWithIDIR(process.env.IDIRCredU, process.env.IDIRCredP);
  },

  '2. Staff Dashboard': function (browser) {
    staffLogin = browser.page.staffDashboardPage();

    staffLogin.searchForBusiness(browser.globals.CP1000992.identifier);
  },

  '3. Verify initial state of dashboard, then start AR filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.verifyTombstone(browser.globals.CP1000992);
    dashboard.verifyAddresses(browser.globals.CP1000992);
    dashboard.startArFiling(browser.globals.CP1000992);
    dashboard.selectAGMDate('File 2018 Annual Report');
    // dashboard.verifyDirectorCount(browser.globals.CP1000992.director_count);
  },

  '4. Confirm initial state of Annual Report': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.verfifyInitialArState(browser.globals.CP1000992, 'File 2018 Annual Report');
    ArPage.checkFeeByIndex('Annual Report', '$30.00', 0);
    ArPage.checkFeeCount(1);
    ArPage.checkTotalFees('$30.00');
    ArPage.verifyOfficeAddresses(browser.globals.CP1000992);
    //ArPage.verifyDirectorCount(browser.globals.CP1000992.director_count);
  },

  '5. Edit the Office Addresses': function (browser) {
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

  '6. Appoint a Director': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.appointDirector();
    ArPage.checkFeeCount(3);
    ArPage.checkFeeByIndex('Change of Director', '$20.00', 2);
    ArPage.checkTotalFees('$70.00');
  },

  '7. Certify who filed': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.setValue('@certifyLegalName', 'Tester');
    ArPage.click('@certifyCheckBox');
  },

  '8. Save draft and resume later': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.click('@saveAndResumeLaterButton');
  },

  '9. Resume draft from Dashboard': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.waitForElementVisible('@resumeDraftButton');
    dashboard.click('@resumeDraftButton');
  },

  '10. Verify draft resumed correctly then return to dashoard': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.checkFeeCount(3);
    ArPage.checkTotalFees('$70.00');
    ArPage.assert.visible('@resetOfficeAddressButton');
    ArPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    ArPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V1V1V1');
    ArPage.assert.containsText('@officeDeliveryLine3', 'Canada');
    ArPage.moveToElement('@saveAndResumeLaterButton', 5, 5);
    ArPage.click('@saveAndResumeLaterButton');
  },

  '11. Delete draft': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.waitForElementVisible('@resumeDraftButton');
    dashboard.click('@toDoButtonMoreActionsArrow');
    dashboard.click('@deleteDraftButton');
    dashboard.waitForElementVisible('@confirmDeleteDraftButton');
    dashboard.click('@confirmDeleteDraftButton');
    dashboard.waitForElementVisible('@fileNowButton');
  },

  '12. Start AR filing after deleting draft': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.startArFiling(browser.globals.CP1000992);
    dashboard.selectAGMDate('File 2018 Annual Report')
  },

  '13. Confirm initial state of Annual Report - POST DRAFT': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.verfifyInitialArState(browser.globals.CP1000992, 'File 2018 Annual Report');
    ArPage.checkFeeByIndex('Annual Report', '$30.00', 0);
    ArPage.checkFeeCount(1);
    ArPage.checkTotalFees('$30.00');
    ArPage.verifyOfficeAddresses(browser.globals.CP1000992);
    //ArPage.verifyDirectorCount(browser.globals.CP1000992.director_count);
  },

  '14. Edit the Office Addresses - POST DRAFT': function (browser) {
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

  '15. Appoint a Director - POST DRAFT': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.appointDirector();
    ArPage.checkFeeCount(3);
    ArPage.checkFeeByIndex('Change of Director', '$20.00', 2);
    ArPage.checkTotalFees('$70.00');
  },

  '16. Certify who filed - POST DRAFT': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.setValue('@certifyLegalName', 'Tester');
    ArPage.click('@certifyCheckBox');
    ArPage.assert.cssClassPresent('@fileAndPayButton', 'v-btn--disabled');
  },

  '17. Entering RoutingSlip Number': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.enterRoutingSlipNumber()
      .setValue('#routing-slip-number-textfield', 111111111)
      .click('#ar-file-pay-btn > span')
  },

  '18. Verify Dashboard after filing': function (browser) {
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