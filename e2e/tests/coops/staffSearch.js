require('dotenv').config();
module.exports={
  '@tags': ['staffsearch'],

  'Login with IDIR':function (browser){
      browser
      .url(browser.globals.launch_idirurl)
      .assert.visible('#login-to','Log in to sfstest7.gov.bc.ca')
      .setValue('#user', process.env.IDIRCredU)
      .setValue('#password', process.env.IDIRCredP)
      .click('#login-form > section > div > div.col-sm-7.col-md-8 > div > div.panel-body > div.login-form-action > input')
  },

  'Login To Dashboard':function(browser){
      browser
      .assert.visible('#app > div > div.app-body > div > div > article > h1','Search Co-operatives')
      .assert.visible('#app > div > div.app-body > div > div > article > h2','Incorporation Number')
      .setValue('#txtBusinessNumber', browser.globals.CP0001468.identifier)
      .click('#app > div > div.app-body > div > div > article > div > form > div.layout.align-end.justify-end > button > span')
  },

  'Verify initial state of dashboard, then start AR filing': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.verifyTombstone(browser.globals.CP0001468);
      dashboard.verifyAddresses(browser.globals.CP0001468);
      dashboard.verifyDirectorCount(browser.globals.CP0001468.director_count);
      dashboard.startArFiling();
    },

    'Confirm initial state of Annual Report': function (browser) {
      ArPage = browser.page.annualReportPage();
      ArPage.verfifyInitialArState(browser.globals.CP0001468);
      ArPage.checkFeeByIndex('Annual Report', '$30.00', 0);
      ArPage.checkFeeCount(1);
      ArPage.checkTotalFees('$30.00');
      ArPage.verifyOfficeAddresses(browser.globals.CP0001468);
      ArPage.verifyDirectorCount(browser.globals.CP0001468.director_count);
    },

    'Edit the Office Addresses': function (browser) {
      ArPage = browser.page.annualReportPage();
      ArPage.startEditingOfficeAddresses();
      ArPage.fillInAddressField(ArPage.elements.officeDeliveryStreetAddress.selector, '123 test street', browser);
      ArPage.fillInAddressField(ArPage.elements.officeDeliveryCity.selector, 'Victoria', browser);
      ArPage.fillInAddressField(ArPage.elements.officeDeliveryPostalCode.selector, 'V1V1V1', browser);
      ArPage.fillInAddressField(ArPage.elements.officeDeliveryCountry.selector, 'CANADA', browser);
      ArPage.click('@sameAsDeliveryButton');
      ArPage.moveToElement('@updateAddressesButton', 5, 5);
      ArPage.click('@updateAddressesButton');
      ArPage.checkFeeCount(2);
      ArPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 1);
      ArPage.checkTotalFees('$50.00');
      ArPage.assert.visible('@resetOfficeAddressButton');
      ArPage.assert.containsText('@officeDeliveryLine1', '123 test street');
      ArPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V1V1V1');
      ArPage.assert.containsText('@officeDeliveryLine3', 'CANADA');
      ArPage.assert.containsText('@officeMailingLine1', '123 test street');
      ArPage.assert.containsText('@officeMailingLine2', 'Victoria BC V1V1V1');
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
     // ArPage.assert.visible('@newDirectorChip');
      ArPage.assert.visible('@resetOfficeAddressButton');
      ArPage.assert.containsText('@officeDeliveryLine1', '123 test street');
      ArPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V1V1V1');
      ArPage.assert.containsText('@officeDeliveryLine3', 'CANADA');
      ArPage.assert.containsText('@officeMailingLine1', '123 test street');
      ArPage.assert.containsText('@officeMailingLine2', 'Victoria BC V1V1V1');
      ArPage.assert.containsText('@officeMailingLine3', 'CANADA');
      ArPage.assert.valueContains('@certifyLegalName', 'Tester');
      ArPage.moveToElement('@saveAndResumeLaterButton', 5, 5);
      ArPage.click('@saveAndResumeLaterButton');
    },


}