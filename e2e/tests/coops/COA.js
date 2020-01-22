module.exports = {
    '@tags': ['COA','single'], 
      'Verify initial login with bcsc': function (browser) {
          bcsc = browser.page.bcscPage();
          browser.url(browser.globals.launch_url)
          bcsc.verifyCoperativesPage()
          bcsc.verifyBcscLogin()
      },
      'Enter contact information': function (browser) {
          relationship = browser.page.relationshipPage();
          relationship.checkForAffliatedBusinesses()
      },
    '1.Verify initial state of dashboard, then start COA filing': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.verifyTombstone(browser.globals.CP0000019);
      dashboard.verifyAddresses(browser.globals.CP0000019);
      //dashboard.verifyDirectorCount(browser.globals.CP0000019.director_count);
      dashboard.startCoaFiling();
    },
  
    '2.Confirm initial state of COA filing': function (browser) {
      CoaPage = browser.page.CoaPage();
      CoaPage.verfifyInitialCoaState(browser.globals.CP0000019);
      CoaPage.checkTotalFees('$0.00');
      CoaPage.verifyOfficeAddresses(browser.globals.CP0000019);
    },
  
    '3.Edit the Office Addresses': function (browser) {
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
      CoaPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
      CoaPage.assert.containsText('@officeDeliveryLine3', 'Canada');
      CoaPage.waitForElementVisible('@certifyBlock')
      CoaPage.waitForElementVisible('@certifyLegalName')
      CoaPage.moveToElement('@certifyLegalName',5,5)
      //CoaPage.assert.valueContains('@certifyLegalName', 'Tester');
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
      CoaPage.verfifyInitialCoaState(browser.globals.CP0000019);
      CoaPage.checkTotalFees('$0.00');
      CoaPage.verifyOfficeAddresses(browser.globals.CP0000019);
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
      CoaPage.setValue('@certifyLegalName', 'Tester');
      CoaPage.click('@certifyCheckBox');
      CoaPage.assert.cssClassNotPresent('@fileAndPayButton', 'v-btn--disabled');
    },
  
    '13.Check with Resume Payment/Cancel Payment': function(browser){
      CoaPage.click('@fileAndPayButton')
      .assert.containsText('#main-content > h1','Add Invoice(s) to your Cart to make payment')
      .waitForElementVisible('#searchForm > div.panel-footer > a')
      .click('#searchForm > div.panel-footer > a') 
      .waitForElementVisible('[data-test-id="btn-resume-payment"]')
      .click('[data-test-id="btn-resume-payment"]')
      .assert.containsText('#main-content > h1','Add Invoice(s) to your Cart to make payment')
      .assert.containsText('#oamount__0','20.00')
      .click('#searchForm > div.panel-footer > a')
      .waitForElementVisible('[data-test-id="btn-resume-payment"]')
      .click('#pending-item-menu-activator > span > i')
      .click('[data-test-id="btn-cancel-payment"]')
      .click('#dialog-yes-button > span')
    },
  
    '14.Resume draft from Dashboard after Cancel Payment': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.waitForElementVisible('@resumeDraftButton');
      dashboard.click('@resumeDraftButton');
    },
  
    '15.Verify draft resumed correctly after Cancel Payment': function (browser) {
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
      CoaPage.moveToElement('@certifyLegalName',5,5)
     // CoaPage.assert.valueContains('@certifyLegalName', 'Tester');
      CoaPage.click('@certifyCheckBox');
      CoaPage.click('@fileAndPayButton');
    },
  
  
  
    '16.PayBC': function (browser) {
      browser
        .waitForElementVisible('#paylistbutton')
        .click('#paylistbutton')
        .waitForElementVisible('#credit_payBtn')
        .click('#credit_payBtn')
        .waitForElementVisible('input[name=trnCardNumber]')
        .setValue('input[name=trnCardNumber]','4030000010001234')
        .setValue('input[name=trnCardCvd]', '123')
        .moveToElement('input[name=submitButton]', 10, 10)
        .click('input[name=submitButton]');
    },
  
    '17.Verify Dashboard after filing': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.assert.containsText('@toDoListHeader', 'To Do (3)');
      dashboard.assert.containsText('@filingHistoryHeader', 'Recent Filing History (56)');
      dashboard.assert.containsText('@topFilingInHistoryName', 'Address Change');
     // dashboard.verifyDirectorCount(browser.globals.CP0000019.director_count);
      dashboard.assert.containsText('@deliveryAddressLabel', 'Delivery Address');
      dashboard.assert.containsText('@deliveryLine1', '123 test street');
      dashboard.assert.containsText('@deliveryLine2', 'Victoria BC V8V 4K9');
      dashboard.assert.containsText('@deliveryLine3', 'CA');
    }
  };
