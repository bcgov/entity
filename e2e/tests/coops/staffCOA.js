require('dotenv').config();
module.exports={
  '@tags': ['staffsearch'],

  'Login with IDIR':function (browser){
      browser
      .url(browser.globals.launch_idirurl)
      .assert.visible('#login-to','Log in to sfstest7.gov.bc.ca')
      .setValue('#user',process.env.IDIRCredU)
      .setValue('#password',process.env.IDIRCredP)
      .click('#login-form > section > div > div.col-sm-7.col-md-8 > div > div.panel-body > div.login-form-action > input')
  },

  'Login To Dashboard':function(browser){
      browser
      .assert.visible('#app > div > div.app-body > div > h1','Search Co-operatives')
      .setValue('#txtBusinessNumber', browser.globals.CP0002148.identifier)
      .click('#app > div > div.app-body > div > form > button')
  },

  '1.Verify initial state of dashboard, then start COA filing': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.verifyTombstone(browser.globals.CP0002148);
      dashboard.verifyAddresses(browser.globals.CP0002148);
     // dashboard.verifyDirectorCount(browser.globals.CP0002148.director_count);
      dashboard.startCoaFiling();
    },

'2.Confirm initial state of COA filing': function (browser) {
   CoaPage = browser.page.CoaPage();
   CoaPage.verfifyInitialCoaState(browser.globals.CP0002148);
   CoaPage.checkTotalFees('$0.00');
   CoaPage.verifyOfficeAddresses(browser.globals.CP0002148);
  },
    
'3.Edit the Office Addresses': function (browser) {
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

'4.Certify who filed': function (browser) {
  CoaPage = browser.page.CoaPage();
  CoaPage.setValue('@certifyLegalName', 'Tester');
  CoaPage.click('@certifyCheckBox');
},

'5.Save draft and resume later': function (browser) {
  CoaPage = browser.page.CoaPage();
  CoaPage.click('@saveAndResumeLaterButton');
},

'6.Resume draft from Dashboard': function (browser) {
  dashboard = browser.page.dashboardPage();
  dashboard.waitForElementVisible('@resumeDraftButton');
  dashboard.click('@resumeDraftButton');
},

'7.Verify draft resumed correctly then return to dashoard': function (browser) {
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

'8.Delete draft': function (browser) {
  dashboard = browser.page.dashboardPage();
  dashboard.waitForElementVisible('@resumeDraftButton');
  dashboard.click('@toDoButtonMoreActionsArrow');
  dashboard.click('@deleteDraftButton');
  dashboard.waitForElementVisible('@confirmDeleteDraftButton');
  dashboard.click('@confirmDeleteDraftButton');
  dashboard.waitForElementVisible('@fileNowButton1');
},

'9.Start COA filing after deleting draft': function (browser) {
  dashboard = browser.page.dashboardPage();
  dashboard.startCoaFiling();
},

'10.Confirm initial state of COA filing - POST DRAFT': function (browser) {
  CoaPage = browser.page.CoaPage();
  CoaPage.verfifyInitialCoaState(browser.globals.CP0002148);
  CoaPage.checkTotalFees('$0.00');
  CoaPage.verifyOfficeAddresses(browser.globals.CP0002148);
},

'11.Edit the Office Addresses - POST DRAFT': function (browser) {
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

'12.Certify who filed - POST DRAFT': function (browser) {
  CoaPage = browser.page.CoaPage();
  CoaPage.waitForElementVisible('@certifyBlock')
  CoaPage.waitForElementVisible('@certifyLegalName')
  CoaPage.moveToElement('@certifyLegalName',5,5)
  CoaPage.setValue('@certifyLegalName', 'Tester');
  CoaPage.click('@certifyCheckBox');
  CoaPage.assert.cssClassPresent('@fileAndPayButton', 'v-btn--disabled');
},

'13.Entering RoutingSlip Number':function(browser){
  dashboard = browser.page.dashboardPage();
  dashboard.enterRoutingSlipNumber()
  .click('#coa-file-pay-btn')
},

'14.Verify Dashboard after filing': function (browser) {
  dashboard = browser.page.dashboardPage();
  dashboard.assert.containsText('@toDoListHeader', 'To Do (3)');
  dashboard.assert.containsText('@filingHistoryHeader', 'Recent Filing History (9)');
  dashboard.assert.containsText('@topFilingInHistoryName', 'Address Change');
 // dashboard.verifyDirectorCount(browser.globals.CP0002148.director_count + 1);
  dashboard.assert.containsText('@deliveryAddressLabel', 'Delivery Address');
  dashboard.assert.containsText('@deliveryLine1', '123 test street');
  dashboard.assert.containsText('@deliveryLine2', 'Victoria BC V8V 4K9');
  dashboard.assert.containsText('@deliveryLine3', 'Canada');
},
}