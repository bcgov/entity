module.exports = {
  '@tags': ['COD','single'],

  'Signin': function (browser) {
    browser
      .url(browser.globals.launch_url)
      .waitForElementVisible('#input-17')
      .setValue('#input-17', browser.globals.CP0001252.identifier)
      .waitForElementVisible('#input-20')
      .setValue('#input-20', browser.globals.CP0001252.passcode)
      .waitForElementVisible('button.sign-in-btn')
      .click('button.sign-in-btn')
      //.assert.urlEquals(browser.globals.launch_url + '/auth/businessprofile');
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
  .click('//*[@id="app"]/div/div[2]/div/div/article/div/div/div/form/div[5]/div/button[2]/span/span')
  },*/

  'Verify initial state of dashboard, then start COD filing': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.verifyTombstone(browser.globals.CP0001252);
      dashboard.verifyAddresses(browser.globals.CP0001252);
      dashboard.verifyDirectorCount(browser.globals.CP0001252.director_count)
      dashboard.startCodFiling()
  },

  'Confirm initial state of COD filing': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.verfifyInitialCodState(browser.globals.CP0001252);
      CodPage.checkTotalFees('$0.00');
    },
    
    'Appoint New Director': function (browser) {
      CodPage = browser.page.CodPage()
      CodPage.startAppointingNewDirector()
      CodPage.AddNewDirector(browser.globals.CP0001252.director6,6);
      CodPage.validateDirectorByNumber(browser.globals.CP0001252.director5,5)
    },

    'Certify who filed': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.setValue('@certifyLegalName', 'Tester');
      CodPage.click('@certifyCheckBox')
    },

    'Save draft and resume later': function (browser) {
      CodPage = browser.page.CodPage()
      CodPage.click('@saveAndResumeLaterButton')
    },

    'Resume draft from Dashboard': function (browser) {
      dashboard = browser.page.dashboardPage()
      dashboard.waitForElementVisible('@resumeDraftButton')
      dashboard.click('@resumeDraftButton')
    },

    'Verify draft resumed correctly then return to dashoard': function (browser) {
      CodPage = browser.page.CodPage()
      CodPage.checkFeeCount(1)
      CodPage.checkFeeByIndex('Change of Director', '$20.00', 0)
      CodPage.checkTotalFees('$20.00')
      CodPage.assert.visible('@edit')
    },

    'Checking the directors are present': function (browser) {
      CodPage = browser.page.CodPage()
      CodPage.checkWithTheDirectors('@FIRSTNAME','s')
    },
   'Assert the directors are present': function (browser) {
      //CodPage.AssertDirectors()
      CodPage.assert.valueContains('@certifyLegalName', 'Tester');
      CodPage.moveToElement('@saveAndResumeLaterButton', 5, 5);
      CodPage.click('@saveAndResumeLaterButton');
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

    'Start COD filing after deleting draft': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.startCodFiling();
    },

    'Confirm initial state of COD filing - POST DRAFT': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.verfifyInitialCodState(browser.globals.CP0001252);
      CodPage.checkTotalFees('$0.00');
    },

    'Appoint New DIRECTOR - POST DRAFT': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.startAppointingNewDirector()
      CodPage.AddNewDirector();
      CodPage.validateDirectorByNumber(directorObject, number)
    },

    'Certify who filed - POST DRAFT': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.setValue('@certifyLegalName', 'Tester');
      CodPage.click('@certifyCheckBox');
      CodPage.assert.cssClassNotPresent('@fileAndPayButton', 'v-btn--disabled');
      CodPage.click('@fileAndPayButton');
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
      dashboard.assert.containsText('@topFilingInHistoryName', 'Director Change');
      dashboard.assert.containsText('@topFilingInHistoryStatus', 'FILED AND PAID');
      dashboard.verifyDirectorCount(browser.globals.CP0001252.new_director_count);
      dashboard.assert.containsText('@mailingAddressLabel', 'Mailing Address');
      dashboard.assert.containsText('@mailingLine1', '220 - 1651 COMMERCIAL DR');
      dashboard.assert.containsText('@mailingLine2', 'VANCOUVER BC V5L 3Y3');
      dashboard.assert.containsText('@mailingLine3', 'CA');
      dashboard.assert.containsText('@deliveryAddressLabel', 'Delivery Address');
      dashboard.assert.containsText('@deliveryLine1', '220 - 1651 COMMERCIAL DR');
      dashboard.assert.containsText('@deliveryLine2', 'VANCOUVER BC V5L 3Y3');
      dashboard.assert.containsText('@deliveryLine3', 'CA');
    }
  
  
  }

