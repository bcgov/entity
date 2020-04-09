require('dotenv').config();
module.exports = {
  '@tags': ['regression', 'staff'],
  before: function (browser) {
    browser.maximizeWindow()
    browser.setupData('CP1001188', function (busObject) {
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

    staffLogin.searchForBusiness(browser.globals.CP1001188.identifier);
  },

  '3. Verify initial state of dashboard, then start COA filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.verifyTombstone(browser.globals.CP1001188);
    dashboard.verifyAddresses(browser.globals.CP1001188);
    // dashboard.verifyDirectorCount(browser.globals.CP1001188.director_count);
    dashboard.startCoaFiling(browser.globals.CP1001188);
  },

  '4. Confirm initial state of COA filing': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.verfifyInitialCoaState(browser.globals.CP1001188);
    CoaPage.checkTotalFees('$0.00');
    CoaPage.verifyOfficeAddresses(browser.globals.CP1001188);
  },

  '5. Edit the Office Addresses': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.startEditingOfficeAddresses();
    CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryStreetAddress.selector, '123 test street', browser);
    CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryCity.selector, 'Victoria', browser);
    CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryPostalCode.selector, 'V1V1V1', browser);
    CoaPage.click('@sameAsDeliveryButton');
    CoaPage.moveToElement('@updateAddressesButton', 5, 5);
    CoaPage.click('@updateAddressesButton');
    CoaPage.checkFeeCount(1);
    CoaPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 0);
    CoaPage.checkTotalFees('$20.00');
    CoaPage.assert.visible('@resetOfficeAddressButton');
    CoaPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    CoaPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V1V1V1');
    CoaPage.assert.containsText('@officeDeliveryLine3', 'Canada');
  },

  '6. Certify who filed': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.setValue('@certifyLegalName', 'Tester');
    CoaPage.click('@certifyCheckBox');
  },

  '7. Save draft and resume later': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.click('@saveAndResumeLaterButton');
  },

  '8. Resume draft from Dashboard': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.waitForElementVisible('@resumeDraftButton');
    dashboard.click('@resumeDraftButton');
  },

  '9. Verify draft resumed correctly then return to dashoard': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.checkFeeCount(1);
    CoaPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 0);
    CoaPage.checkTotalFees('$20.00');
    CoaPage.assert.visible('@resetOfficeAddressButton');
    CoaPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    CoaPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V1V1V1');
    CoaPage.assert.containsText('@officeDeliveryLine3', 'Canada');
    // CoaPage.assert.valueContains('@certifyLegalName', 'Tester');
    CoaPage.moveToElement('@saveAndResumeLaterButton', 5, 5);
    CoaPage.click('@saveAndResumeLaterButton');
  },

  '10. Delete draft': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.waitForElementVisible('@resumeDraftButton');
    dashboard.click('@toDoButtonMoreActionsArrow');
    dashboard.click('@deleteDraftButton');
    dashboard.waitForElementVisible('@confirmDeleteDraftButton');
    dashboard.click('@confirmDeleteDraftButton');
    dashboard.waitForElementVisible('@fileNowButton');
  },

  '11. Start COA filing after deleting draft': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.startCoaFiling(browser.globals.CP1001188);
  },

  '12. Confirm initial state of COA filing - POST DRAFT': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.verfifyInitialCoaState(browser.globals.CP1001188);
    CoaPage.checkTotalFees('$0.00');
    CoaPage.verifyOfficeAddresses(browser.globals.CP1001188);
  },

  '13. Edit the Office Addresses - POST DRAFT': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.startEditingOfficeAddresses();
    CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryStreetAddress.selector, '123 test street', browser);
    CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryCity.selector, 'Victoria', browser);
    CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryPostalCode.selector, 'V8V 4K9', browser);
    CoaPage.click('@sameAsDeliveryButton');
    CoaPage.moveToElement('@updateAddressesButton', 5, 5);
    CoaPage.click('@updateAddressesButton');
    CoaPage.checkFeeCount(1);
    CoaPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 0);
    CoaPage.checkTotalFees('$20.00');
    CoaPage.assert.visible('@resetOfficeAddressButton');
    CoaPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    CoaPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
    CoaPage.assert.containsText('@officeDeliveryLine3', 'Canada');
  },

  '14. Certify who filed - POST DRAFT': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.waitForElementVisible('@certifyBlock')
    CoaPage.waitForElementVisible('@certifyLegalName')
    CoaPage.moveToElement('@certifyLegalName', 5, 5)
    CoaPage.setValue('@certifyLegalName', 'Tester');
    CoaPage.click('@certifyCheckBox');
    CoaPage.assert.cssClassPresent('@fileAndPayButton', 'v-btn--disabled');
  },

  '15. Entering RoutingSlip Number': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.enterRoutingSlipNumber()
      .setValue('#routing-slip-number-textfield', '111111111')
      .click('#coa-file-pay-btn')
  },

  '16. Verify Dashboard after filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.assert.containsText('@toDoListHeader', 'To Do (3)');
    dashboard.assert.containsText('@filingHistoryHeader', 'Recent Filing History (38)');
    dashboard.assert.containsText('@topFilingInHistoryName', 'Address Change');
    // dashboard.verifyDirectorCount(browser.globals.CP1001188.director_count + 1);
    dashboard.assert.containsText('@deliveryAddressLabel', 'Delivery Address');
    dashboard.assert.containsText('@deliveryLine1', '123 test street');
    dashboard.assert.containsText('@deliveryLine2', 'Victoria BC V8V 4K9');
    dashboard.assert.containsText('@deliveryLine3', 'Canada');
  },
}