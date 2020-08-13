module.exports = {
  '@tags': ['regression'],
  before: function (browser) {
    browser.maximizeWindow()
    browser.setupData('CP1002111', function (busObject) {
      console.log(busObject);
    });
  },

  after: function (browser) {
    browser.authReset();
  },

  '1.Verify initial login with bcsc': function (browser) {
    bcsc = browser.page.bcscPage();
    browser.url(browser.globals.launch_url)
    bcsc.verifyLandingPage()
    bcsc.moveToBCSC()
    bcsc.enterBCSCCardUser(process.env.BCServiceCardUsername)
    bcsc.enterBCSCPassword(process.env.BCServiceCardPasscode)
    bcsc.proceedPastCardUseHistory()
  },

  '2.Enter contact information': function (browser) {
    relationship = browser.page.relationshipPage();
    relationship.enterContactInformation();
    relationship.acceptTermsOfUse();
    relationship.saveProfileInformation();
    relationship.createAccount('You-nique Gifts and Such TOO');
    relationship.AddBusinesses(browser.globals.CP1002111);
    relationship.checkAddBusinessesSuccess();
    relationship.checkForAffliatedBusinesses(browser.globals.CP1002111);
  },

  '3.Verify initial state of dashboard, then start COA filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.verifyTombstone(browser.globals.CP1002111);
    dashboard.verifyAddresses(browser.globals.CP1002111);
    //dashboard.verifyDirectorCount(browser.globals.CP1002111.director_count);
    dashboard.startCoaFiling(browser.globals.CP1002111);
  },

  '4.Confirm initial state of COA filing': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.verfifyInitialCoaState(browser.globals.CP1002111);
    CoaPage.checkTotalFees('$0.00');
    CoaPage.verifyOfficeAddresses(browser.globals.CP1002111);
  },

  '5.Edit the Office Addresses': function (browser) {
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

  '6.Certify who filed': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.setValue('@certifyLegalName', 'Tester');
    CoaPage.click('@certifyCheckBox');
  },

  '7.Save draft and resume later': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.click('@saveAndResumeLaterButton');
  },

  '8.Resume draft from Dashboard': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.waitForElementVisible('@resumeDraftButton');
    dashboard.click('@resumeDraftButton');
  },

  '9.Verify draft resumed correctly then return to dashoard': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.checkFeeCount(1);
    CoaPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 0);
    CoaPage.checkTotalFees('$20.00');
    CoaPage.assert.visible('@resetOfficeAddressButton');
    CoaPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    CoaPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
    CoaPage.assert.containsText('@officeDeliveryLine3', 'Canada');
    CoaPage.waitForElementVisible('@certifyBlock')
    CoaPage.waitForElementVisible('@certifyLegalName')
    CoaPage.moveToElement('@certifyLegalName', 5, 5)
    CoaPage.moveToElement('@saveAndResumeLaterButton', 5, 5);
    CoaPage.click('@saveAndResumeLaterButton');
  },

  '10.Delete draft': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.waitForElementVisible('@resumeDraftButton');
    dashboard.click('@toDoButtonMoreActionsArrow');
    dashboard.click('@deleteDraftButton');
    dashboard.waitForElementVisible('@confirmDeleteDraftButton');
    dashboard.click('@confirmDeleteDraftButton');
    dashboard.waitForElementVisible('@fileNowButton');
    dashboard.assert.not.cssClassPresent('@fileNowButton', 'v-btn--disabled');
  },

  '11.Start COA filing after deleting draft': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.startCoaFiling(browser.globals.CP1002111);
  },

  '12.Confirm initial state of COA filing - POST DRAFT': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.verfifyInitialCoaState(browser.globals.CP1002111);
    CoaPage.checkTotalFees('$0.00');
    CoaPage.verifyOfficeAddresses(browser.globals.CP1002111);
  },

  '13.Edit the Office Addresses - POST DRAFT': function (browser) {
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

  '14.Certify who filed - POST DRAFT': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.waitForElementVisible('@certifyBlock')
    CoaPage.waitForElementVisible('@certifyLegalName')
    CoaPage.moveToElement('@certifyLegalName', 5, 5)
    CoaPage.setValue('@certifyLegalName', 'Tester');
    CoaPage.click('@certifyCheckBox');
    CoaPage.assert.cssClassNotPresent('@fileAndPayButton', 'v-btn--disabled');
  },

  '15.Check with Resume Payment/Cancel Payment': function (browser) {
    CoaPage.click('@fileAndPayButton')
      .assert.containsText('#main-content > h1', 'Add Invoice(s) to your Cart to make payment')
      .waitForElementVisible('#searchForm > div.panel-footer > a')
      .click('#searchForm > div.panel-footer > a')
      .waitForElementVisible('[data-test-id="btn-resume-payment"]')
      .click('[data-test-id="btn-resume-payment"]')
      .assert.containsText('#main-content > h1', 'Add Invoice(s) to your Cart to make payment')
      .assert.containsText('#oamount__0', '20.00')
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

  '17.Verify draft resumed correctly after Cancel Payment': function (browser) {
    CoaPage = browser.page.CoaPage();
    CoaPage.checkFeeCount(1);
    CoaPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 0);
    CoaPage.checkTotalFees('$20.00');
    CoaPage.assert.visible('@resetOfficeAddressButton');
    CoaPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    CoaPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
    CoaPage.assert.containsText('@officeDeliveryLine3', 'Canada');
    CoaPage.waitForElementVisible('@certifyBlock')
    CoaPage.waitForElementVisible('@certifyLegalName')
    CoaPage.click('@certifyCheckBox');
    CoaPage.click('@fileAndPayButton');
  },

  '18.PayBC': function (browser) {
    browser
      .waitForElementVisible('#paylistbutton')
      .click('#paylistbutton')
      .waitForElementVisible('#credit_payBtn')
      .click('#credit_payBtn')
      .waitForElementVisible('input[name=trnCardNumber]')
      .setValue('input[name=trnCardNumber]', process.env.credit_card)
      .setValue('input[name=trnCardCvd]', process.env.cvv_no)
      .moveToElement('input[name=submitButton]', 10, 10)
      .click('input[name=submitButton]');
  },

  '19 .Verify Dashboard after filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.assert.containsText('@toDoListHeader', 'To Do (3)');
    dashboard.assert.containsText('@filingHistoryHeader', 'Recent Filing History (13)');
    dashboard.assert.containsText('@topFilingInHistoryName', 'Address Change');
    // dashboard.verifyDirectorCount(browser.globals.CP1002111.director_count);
    dashboard.assert.containsText('@deliveryAddressLabel', 'Delivery Address');
    dashboard.assert.containsText('@deliveryLine1', '123 test street');
    dashboard.assert.containsText('@deliveryLine2', 'Victoria BC V8V 4K9');
    dashboard.assert.containsText('@deliveryLine3', 'Canada');
  }
};