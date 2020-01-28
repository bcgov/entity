module.exports = {
  '@tags': ['COD'],
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
  '1.Verify initial state of dashboard, then start COD filing': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.verifyTombstone(browser.globals.CP0000019);
      dashboard.verifyAddresses(browser.globals.CP0000019);
     // dashboard.verifyDirectorCount(browser.globals.CP0000019.director_count)
      dashboard.startCodFiling()
  },

  '2.Confirm initial state of COD filing': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.verfifyInitialCodState(browser.globals.CP0000019);
      CodPage.checkTotalFees('$0.00');
    },
    
    '3.Appoint New Director': function (browser) {
      CodPage = browser.page.CodPage()
      CodPage.startAppointingNewDirector()
      CodPage.AddNewDirector(browser.globals.CP0000019.director7,7);
      CodPage.validateDirectorByNumber(browser.globals.CP0000019.director4,4)
    },

    '4.Certify who filed': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.setValue('@certifyLegalName', 'Tester');
      CodPage.click('@certifyCheckBox')
    },

    '5.Save draft and resume later': function (browser) {
      CodPage = browser.page.CodPage()
      CodPage.click('@saveAndResumeLaterButton')
    },

    '6.Resume draft from Dashboard': function (browser) {
      dashboard = browser.page.dashboardPage()
      dashboard.waitForElementVisible('@resumeDraftButton')
      dashboard.click('@resumeDraftButton')
    },

    '7.Verify draft resumed correctly then return to dashoard': function (browser) {
      CodPage = browser.page.CodPage()
      CodPage.checkFeeCouncls
      CodPage.checkFeeByIndex('Change of Director', '$20.00', 0)
      CodPage.checkTotalFees('$20.00')
    },

   '8.Assert the directors are present': function (browser) {
      //CodPage.assert.valueContains('@certifyLegalName', 'Tester');
      CodPage.moveToElement('@saveAndResumeLaterButton', 5, 5);
      CodPage.click('@saveAndResumeLaterButton');
    },

    '9.Delete draft': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.waitForElementVisible('@resumeDraftButton');
      dashboard.click('@toDoButtonMoreActionsArrow');
      dashboard.click('@deleteDraftButton');
      dashboard.waitForElementVisible('@confirmDeleteDraftButton');
      dashboard.click('@confirmDeleteDraftButton');
      dashboard.waitForElementVisible('@fileNowButton1');   
    },

    '10.Start COD filing after deleting draft': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.startCodFiling();
    },

    '11.Confirm initial state of COD filing - POST DRAFT': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.verfifyInitialCodState(browser.globals.CP0000019);
      CodPage.checkTotalFees('$0.00');
    },

    '12.Appoint New DIRECTOR - POST DRAFT': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.startAppointingNewDirector()
      CodPage.AddNewDirector(browser.globals.CP0000019.director7,7);
     // CodPage.validateDirectorByNumber(browser.globals.CP0000019.director3,3)
    },

    '13.Certify who filed - POST DRAFT': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.setValue('@certifyLegalName', 'Tester');
      CodPage.click('@certifyCheckBox');
      CodPage.click('@nextButton');
    },

    '14.Review Page':function(browser) {
      CodPage = browser.page.CodPage();
      CodPage.reviewPage()
    },

    '14.PayBC': function (browser) {
      browser
        .waitForElementVisible('#paylistbutton')
        .click('#paylistbutton')
        .waitForElementVisible('#credit_payBtn')
        .click('#credit_payBtn')
        .waitForElementVisible('input[name=trnCardNumber]')
        .setValue('input[name=trnCardNumber]',process.credit_card)
        .setValue('input[name=trnCardCvd]', process.cvv_no)
        .moveToElement('input[name=submitButton]', 10, 10)
        .click('input[name=submitButton]');
    },

    '15.Verify Dashboard after filing': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.assert.containsText('@toDoListHeader', 'To Do (3)');
      dashboard.assert.containsText('@filingHistoryHeader', 'Recent Filing History (57)');
      dashboard.assert.containsText('@topFilingInHistoryName', 'Director Change');
     // dashboard.verifyDirectorCount(browser.globals.CP0000019.new_director_count);
     dashboard.assert.containsText('@deliveryAddressLabel', 'Delivery Address');
     dashboard.assert.containsText('@deliveryLine1', '123 test street');
     dashboard.assert.containsText('@deliveryLine2', 'Victoria BC V8V 4K9');
     dashboard.assert.containsText('@deliveryLine3', 'CA');
    }
  
  }

