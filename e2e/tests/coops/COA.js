 module.exports = {
  '@tags': ['COA','single'],

  'Signin': function (browser) {
    browser
      .url(browser.globals.launch_url)
      .useXpath()
      .waitForElementVisible('/html/body/div/div/div[2]/div/div/article/div/div/div/form/div[2]/div/div[1]/div/input')
      .setValue('/html/body/div/div/div[2]/div/div/article/div/div/div/form/div[2]/div/div[1]/div/input', browser.globals.CP0001024.identifier)
      .waitForElementVisible('/html/body/div/div/div[2]/div/div/article/div/div/div/form/div[3]/div/div[1]/div[1]/input')
      .setValue('/html/body/div/div/div[2]/div/div/article/div/div/div/form/div[3]/div/div[1]/div[1]/input', browser.globals.CP0001024.passcode)
      .useCss()
      .waitForElementVisible('button.sign-in-btn')
      .click('button.sign-in-btn')
     // .assert.urlEquals(browser.globals.launch_url + '/auth/businessprofile');
  },

  
  /*'Enter Business Contact Info': function (browser) {
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

  },*/

  'Verify initial state of dashboard, then start COA filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.verifyTombstone(browser.globals.CP0001024);
    dashboard.verifyAddresses(browser.globals.CP0001024);
    dashboard.verifyDirectorCount(browser.globals.CP0001024.director_count);
    dashboard.startCoaFiling();
  },

  'Confirm initial state of COA filing': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.verfifyInitialCoaState(browser.globals.CP0001024);
    CoaPage.checkTotalFees('$0.00');
    CoaPage.verifyOfficeAddresses(browser.globals.CP0001024);
  },

  'Edit the Office Addresses': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.startEditingOfficeAddresses();
    CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryStreetAddress.selector, '123 test street', browser);
    CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryCity.selector, 'Victoria', browser);
    CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryPostalCode.selector, 'V8V 4K9', browser);
    CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryCountry.selector, 'CANADA', browser);
   // CoaPage.click('@sameAsDeliveryButton');
    CoaPage.moveToElement('@updateAddressesButton', 5, 5);
    CoaPage.click('@updateAddressesButton');
    CoaPage.checkFeeCount(1);
    CoaPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 0);
    CoaPage.checkTotalFees('$20.00');
    CoaPage.assert.visible('@resetOfficeAddressButton');
    CoaPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    CoaPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
    CoaPage.assert.containsText('@officeDeliveryLine3', 'CANADA');
    CoaPage.assert.containsText('@officeMailingLine1', '123 test street');
    CoaPage.assert.containsText('@officeMailingLine2', 'Victoria BC V8V 4K9');
    CoaPage.assert.containsText('@officeMailingLine3', 'CANADA');
  },

  'Certify who filed': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.setValue('@certifyLegalName', 'Tester');
    CoaPage.click('@certifyCheckBox');
  },

  'Save draft and resume later': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.click('@saveAndResumeLaterButton');
  },

  'Resume draft from Dashboard': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.waitForElementVisible('@resumeDraftButton');
    dashboard.click('@resumeDraftButton');
  },

  'Verify draft resumed correctly then return to dashoard': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.checkFeeCount(1);
    CoaPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 0);
    CoaPage.checkTotalFees('$20.00');
    CoaPage.assert.visible('@resetOfficeAddressButton');
    CoaPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    CoaPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
    CoaPage.assert.containsText('@officeDeliveryLine3', 'CANADA');
    CoaPage.assert.containsText('@officeMailingLine1', '123 test street');
    CoaPage.assert.containsText('@officeMailingLine2', 'Victoria BC V8V 4K9');
    CoaPage.assert.containsText('@officeMailingLine3', 'CANADA');
    CoaPage.assert.valueContains('@certifyLegalName', 'Tester');
    CoaPage.moveToElement('@saveAndResumeLaterButton', 5, 5);
    CoaPage.click('@saveAndResumeLaterButton');
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

  'Start COA filing after deleting draft': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.startCoaFiling();
  },

  'Confirm initial state of COA filing - POST DRAFT': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.verfifyInitialCoaState(browser.globals.CP0001024);
    CoaPage.checkTotalFees('$0.00');
    CoaPage.verifyOfficeAddresses(browser.globals.CP0001024);
  },

  'Edit the Office Addresses - POST DRAFT': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.startEditingOfficeAddresses();
    CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryStreetAddress.selector, '123 test street', browser);
    CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryCity.selector, 'Victoria', browser);
    CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryPostalCode.selector, 'V8V 4K9', browser);
    CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryCountry.selector, 'CANADA', browser);
   // CoaPage.click('@sameAsDeliveryButton');
    CoaPage.moveToElement('@updateAddressesButton', 5, 5);
    CoaPage.click('@updateAddressesButton');
    CoaPage.checkFeeCount(1);
    CoaPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 0);
    CoaPage.checkTotalFees('$20.00');
    CoaPage.assert.visible('@resetOfficeAddressButton');
    CoaPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    CoaPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
    CoaPage.assert.containsText('@officeDeliveryLine3', 'CANADA');
    CoaPage.assert.containsText('@officeMailingLine1', '123 test street');
    CoaPage.assert.containsText('@officeMailingLine2', 'Victoria BC V8V 4K9');
    CoaPage.assert.containsText('@officeMailingLine3', 'CANADA');
  },

  'Certify who filed - POST DRAFT': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.setValue('@certifyLegalName', 'Tester');
    CoaPage.click('@certifyCheckBox');
    CoaPage.assert.cssClassNotPresent('@fileAndPayButton', 'v-btn--disabled');
    CoaPage.click('@fileAndPayButton');
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
    dashboard.assert.containsText('@toDoListHeader', 'To Do (1)');
    dashboard.assert.containsText('@filingHistoryHeader', 'Recent Filing History (1)');
    dashboard.assert.containsText('@topFilingInHistoryName', 'Address Change');
    dashboard.assert.containsText('@topFilingInHistoryStatus', 'FILED AND PAID');
    dashboard.verifyDirectorCount(browser.globals.CP0001024.director_count);
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
