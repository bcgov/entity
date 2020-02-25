require('dotenv').config();
module.exports = {

  '@tags': [''], 
  before:function(browser ){
    browser.setupData('CP1000019', function(busObject){
         console.log(busObject);
    });
},
    '1.Verify initial login with bcsc': function (browser) {
        bcsc = browser.page.bcscPage();
        browser.url(browser.globals.launch_url)
        bcsc.verifyLandingPage()
        bcsc.moveToBCSC()
        bcsc.enterBCSCCardUser(process.env.ServiceCard6)
        bcsc.enterBCSCPassword(process.env.ServiceCard6Pw)
    }, 
    '2.Enter contact information': function (browser) {
        relationship = browser.page.relationshipPage();
        relationship.enterContactInformation()
        relationship.scrollToTerms(browser.execute(function() { window.scrollBy(0, 5500); }, []))
        relationship.clickOnAcceptButton()
        relationship.createAccount('bossbaby24') 
        //relationship.manageTeamPage()
        relationship.AddBusinesses(browser.globals.CP1000019)
        relationship.checkAddBusinessesSuccess()
        relationship.checkForAffliatedBusinesses(browser.globals.CP1000019)
    },

      
  '3.Verify initial state of dashboard, then start AR filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.verifyTombstone(browser.globals.CP1000019);
    dashboard.verifyAddresses(browser.globals.CP1000019);
    //dashboard.verifyDirectorCount(browser.globals.CP1000019.director_count);
    dashboard.verifyTodolistandRecentFilings('To Do (3)');
    dashboard.startArFiling()
    dashboard.selectAGMDate('File 2018 Annual Report')
  },

  '4.Confirm initial state of Annual Report': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.verfifyInitialArState(browser.globals.CP1000019,'File 2018 Annual Report');
    ArPage.checkFeeByIndex('Annual Report', '$30.00', 0);
    ArPage.checkFeeCount(1);
    ArPage.checkTotalFees('$30.00');
    ArPage.verifyOfficeAddresses(browser.globals.CP1000019);
    //ArPage.verifyDirectorCount(browser.globals.CP1000019.director_count);
  },

  '5.Edit the Office Addresses': function (browser) {
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

  '6.Appoint a Director': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.appointDirector();
    ArPage.checkFeeCount(3);
    ArPage.checkFeeByIndex('Change of Director', '$20.00', 2);
    ArPage.checkTotalFees('$70.00');
  },

  '7.Certify who filed': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.setValue('@certifyLegalName', 'Tester');
    ArPage.click('@certifyCheckBox');
  },

  '8.Save draft and resume later': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.click('@saveAndResumeLaterButton');
  },

  '9.Resume draft from Dashboard': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.waitForElementVisible('@resumeDraftButton');
    dashboard.click('@resumeDraftButton');
  },

  '10.Verify draft resumed correctly then return to dashoard': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.checkFeeCount(3);
    //Note fees re-ordered on resume
    ArPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 1);
    ArPage.checkTotalFees('$70.00');
    ArPage.assert.visible('@resetOfficeAddressButton');
    ArPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    ArPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
    ArPage.assert.containsText('@officeDeliveryLine3', 'Canada');
    ArPage.waitForElementVisible('@certifyBlock')
    ArPage.waitForElementVisible('@certifyLegalName')
   // ArPage.expect.element('@certifyLegalName').text.to.equal('Tester');
    //ArPage.assert.containsText('@certifyLegalName', 'Tester');
    ArPage.moveToElement('@saveAndResumeLaterButton', 5, 5);
    ArPage.click('@saveAndResumeLaterButton');
  },

  '11.Delete draft': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.waitForElementVisible('@resumeDraftButton');
    dashboard.click('@toDoButtonMoreActionsArrow');
    dashboard.click('@deleteDraftButton');
    dashboard.waitForElementVisible('@confirmDeleteDraftButton');
    dashboard.click('@confirmDeleteDraftButton');
    dashboard.waitForElementVisible('@fileNowButton1');
  },

  '12.Start AR filing after deleting draft': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.startArFiling()
    dashboard.selectAGMDate('File 2018 Annual Report')
  },

  '13.Confirm initial state of Annual Report - POST DRAFT': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.verfifyInitialArState(browser.globals.CP1000019, 'File 2018 Annual Report');
    ArPage.checkFeeByIndex('Annual Report', '$30.00', 0);
    ArPage.checkFeeCount(1);
    ArPage.checkTotalFees('$30.00');
    ArPage.verifyOfficeAddresses(browser.globals.CP1000019);
    //ArPage.verifyDirectorCount(browser.globals.CP1000019.director_count);
  },

  '14.Edit the Office Addresses - POST DRAFT': function (browser) {
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

  '15.Appoint a Director - POST DRAFT': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.appointDirector();
    ArPage.checkFeeCount(3);
    ArPage.checkFeeByIndex('Change of Director', '$20.00', 2);
    ArPage.checkTotalFees('$70.00');
  },

  '16.Certify who filed - POST DRAFT': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.setValue('@certifyLegalName', 'Tester');
    ArPage.click('@certifyCheckBox');
    ArPage.assert.cssClassNotPresent('@fileAndPayButton', 'v-btn--disabled');
  },

  '17.Check with Resume Payment/Cancel Payment': function(browser){
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

  '18.Resume draft from Dashboard after Cancel Payment': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.waitForElementVisible('@resumeDraftButton');
    dashboard.click('@resumeDraftButton');
  },

  '19.Verify draft resumed correctly then return to dashoard': function (browser) {
    ArPage = browser.page.annualReportPage();
    ArPage.checkFeeCount(3);
    ArPage.checkFeeByIndex('Change of Registered Office Address', '$20.00', 1);
    ArPage.checkTotalFees('$70.00');
    ArPage.assert.visible('@resetOfficeAddressButton');
    ArPage.assert.containsText('@officeDeliveryLine1', '123 test street');
    ArPage.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
    ArPage.assert.containsText('@officeDeliveryLine3', 'Canada');
    ArPage.click('@certifyCheckBox');
    ArPage.click('@fileAndPayButton');
  },

  '20.PayBC': function (browser) {
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

  '21.Verify Dashboard after filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.assert.containsText('@toDoListHeader', 'To Do (2)');
    dashboard.assert.containsText('@filingHistoryHeader', 'Recent Filing History (2)');
    dashboard.assert.containsText('@topFilingInHistoryName', '>Annual Report (2018)');
   // dashboard.verifyDirectorCount(browser.globals.CP1000019.director_count + 1);
    dashboard.assert.containsText('@deliveryAddressLabel', 'Delivery Address');
    dashboard.assert.containsText('@deliveryLine1', '123 test street');
    dashboard.assert.containsText('@deliveryLine2', 'Victoria BC V8V 4K9');
    dashboard.assert.containsText('@deliveryLine3', 'Canada');
  }
};

