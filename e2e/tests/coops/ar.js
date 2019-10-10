module.exports = {
  '@tags': ['coops'],

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

  'Enter Business Contact Info': function (browser) {
    browser
      .waitForElementVisible('#input-42')
      .setValue('#input-42', 'test.outputs@gov.bc.ca')
      .setValue('#input-45', 'test.outputs@gov.bc.ca')
      .setValue('#input-48', '2505555555')
      .setValue('#input-51', '234');

    browser
      .useXpath()
      .assert.cssClassNotPresent('//*[@id="app"]/div/div[2]/div/div/article/div/div/div/form/div[5]/div/button[2]/span/span', 'v-btn--disabled')
      .click('//*[@id="app"]/div/div[2]/div/div/article/div/div/div/form/div[5]/div/button[2]/span/span');
        
},

  'Verify initial state of dashboard, then start AR filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.verifyTombstone(browser.globals.CP0000977);
    dashboard.verifyAddresses(browser.globals.CP0000977);
    dashboard.verifyDirectorCount(browser.globals.CP0000977.director_count);
    dashboard.startArFiling();
  },

  'Confirm initial state of Annual Report': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.verfifyInitialArState(browser.globals.CP0000977);
    ArPage.checkFeeByIndex('Annual Report', '$30.00', 0);
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
    ArPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 1);
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
    ArPage.checkFeeByIndex('Change of Director', '$20.00', 2);
    ArPage.checkTotalFees('$70.00');
  },

  'Certify who filed': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.setValue('@certifyLegalName', 'Tester');
    ArPage.click('@certifyCheckBox');
  },

  'Save draft and resume later': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.click('@saveAndResumeLaterButton');
  },

  'Resume draft from Dashboard': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.waitForElementVisible('@resumeDraftButton');
    dashboard.click('@resumeDraftButton');
  },

  'Verify draft resumed correctly then return to dashoard': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.checkFeeCount(3);
    //Note fees re-ordered on resume
    ArPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 2);
    ArPage.checkTotalFees('$70.00');
    ArPage.assert.visible('@newDirectorChip');
    ArPage.assert.visible('@resetOfficeAddressButton');
    ArPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    ArPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
    ArPage.assert.containsText('@officeDeliveryLine3', 'CANADA');
    ArPage.assert.containsText('@officeMailingLine1', '123 test street');
    ArPage.assert.containsText('@officeMailingLine2', 'Victoria BC V8V 4K9');
    ArPage.assert.containsText('@officeMailingLine3', 'CANADA');
    ArPage.assert.valueContains('@certifyLegalName', 'Tester');
    ArPage.moveToElement('@saveAndResumeLaterButton', 5, 5);
    ArPage.click('@saveAndResumeLaterButton');
  },

  'Delete draft': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.waitForElementVisible('@resumeDraftButton');
    dashboard.click('@toDoButtonMoreActionsArrow');
    dashboard.click('@deleteDraftButton');
    dashboard.waitForElementVisible('@confirmDeleteDraftButton');
    dashboard.click('@confirmDeleteDraftButton');
    dashboard.waitForElementVisible('@fileNowButton');
  },

  'Start AR filing after deleting draft': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.startArFiling();
  },

  'Confirm initial state of Annual Report - POST DRAFT': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.verfifyInitialArState(browser.globals.CP0000977);
    ArPage.checkFeeByIndex('Annual Report', '$30.00', 0);
    ArPage.checkFeeCount(1);
    ArPage.checkTotalFees('$30.00');
    ArPage.verifyOfficeAddresses(browser.globals.CP0000977);
    ArPage.verifyDirectorCount(browser.globals.CP0000977.director_count);
  },

  'Edit the Office Addresses - POST DRAFT': function (browser) {
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
    ArPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 1);
    ArPage.checkTotalFees('$50.00');
    ArPage.assert.visible('@resetOfficeAddressButton');
    ArPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    ArPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
    ArPage.assert.containsText('@officeDeliveryLine3', 'CANADA');
    ArPage.assert.containsText('@officeMailingLine1', '123 test street');
    ArPage.assert.containsText('@officeMailingLine2', 'Victoria BC V8V 4K9');
    ArPage.assert.containsText('@officeMailingLine3', 'CANADA');
  },

  'Appoint a Director - POST DRAFT': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.appointDirector();
    ArPage.checkFeeCount(3);
    ArPage.checkFeeByIndex('Change of Director', '$20.00', 2);
    ArPage.checkTotalFees('$70.00');
  },

  'Certify who filed - POST DRAFT': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.setValue('@certifyLegalName', 'Tester');
    ArPage.click('@certifyCheckBox');
    ArPage.assert.cssClassNotPresent('@fileAndPayButton', 'v-btn--disabled');
    ArPage.click('@fileAndPayButton');
  },

  'PayBC': function (browser) {
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

  'Verify Dashboard after filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.assert.containsText('@toDoListHeader', 'To Do (0)');
    dashboard.assert.containsText('@filingHistoryHeader', 'Recent Filing History (1)');
    dashboard.assert.containsText('@topFilingInHistoryName', 'Annual Report');
    dashboard.assert.containsText('@topFilingInHistoryStatus', 'FILED AND PAID');
    dashboard.verifyDirectorCount(browser.globals.CP0000977.director_count + 1);
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
