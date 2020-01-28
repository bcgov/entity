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
      .assert.visible('#app > div > div.app-body > div > div > article > h1','Search Co-operatives')
      .assert.visible('#app > div > div.app-body > div > div > article > h2','Incorporation Number')
      .setValue('#txtBusinessNumber', browser.globals.CP0001496.identifier)
      .click('#app > div > div.app-body > div > div > article > div > form > div.layout.align-end.justify-end > button > span')
  },

  'Verify initial state of dashboard, then start AR filing': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.verifyTombstone(browser.globals.CP0001496);
      dashboard.verifyAddresses(browser.globals.CP0001496);
      dashboard.verifyDirectorCount(browser.globals.CP0001496.director_count);
      dashboard.startCoaFiling();
    },

    'Confirm initial state of COA filing': function (browser) {
      CoaPage = browser.page.CoaPage();
      CoaPage.verfifyInitialCoaState(browser.globals.CP0001496);
      CoaPage.checkTotalFees('$0.00');
      CoaPage.verifyOfficeAddresses(browser.globals.CP0001496);
    },
    
'Edit the Office Addresses': function (browser) {
  CoaPage = browser.page.CoaPage();
  CoaPage.startEditingOfficeAddresses();
  CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryStreetAddress.selector, '123 test street', browser);
  CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryCity.selector, 'Victoria', browser);
  CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryPostalCode.selector, 'V1V1V1', browser);
  CoaPage.fillInAddressField(CoaPage.elements.officeDeliveryCountry.selector, 'CANADA', browser);
  CoaPage.click('@sameAsDeliveryButton');
  CoaPage.moveToElement('@updateAddressesButton', 5, 5);
  CoaPage.click('@updateAddressesButton');
  CoaPage.checkFeeCount(1);
  CoaPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 0);
  CoaPage.checkTotalFees('$20.00');
  CoaPage.assert.visible('@resetOfficeAddressButton');
  CoaPage.assert.containsText('@officeDeliveryLine1', '123 test street');
  CoaPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V1V1V1');
  CoaPage.assert.containsText('@officeDeliveryLine3', 'CANADA');
  CoaPage.assert.containsText('@officeMailingLine1', '123 test street');
  CoaPage.assert.containsText('@officeMailingLine2', 'Victoria BC V1V1V1');
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
  CoaPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V1V1V1');
  CoaPage.assert.containsText('@officeDeliveryLine3', 'CANADA');
  CoaPage.assert.containsText('@officeMailingLine1', '123 test street');
  CoaPage.assert.containsText('@officeMailingLine2', 'Victoria BC V1V1V1');
  CoaPage.assert.containsText('@officeMailingLine3', 'CANADA');
  CoaPage.assert.valueContains('@certifyLegalName', 'Tester');
  CoaPage.moveToElement('@saveAndResumeLaterButton', 5, 5);
  CoaPage.click('@saveAndResumeLaterButton');
},
}