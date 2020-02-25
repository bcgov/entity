module.exports =  {
  '@tags': [''],
  before:function(browser ){
    browser.setupData('CP1001171', function(busObject){
         console.log(busObject);
    });
},
  '1.Verify initial login with bcsc': function (browser) {
    bcsc = browser.page.bcscPage();
    browser.url(browser.globals.launch_url)
    bcsc.verifyLandingPage()
    bcsc.moveToBCSC()
    bcsc.enterBCSCCardUser(process.env.ServiceCard3)
    bcsc.enterBCSCPassword(process.env.ServiceCard3Pw)
  },
  '2.Enter contact information': function (browser) {
      relationship = browser.page.relationshipPage();
      relationship.enterContactInformation()
      relationship.scrollToTerms(browser.execute(function() { window.scrollBy(0, 5500); }, []))
      relationship.clickOnAcceptButton()
      relationship.createAccount('bossbaby22')
      //relationship.manageTeamPage()
      relationship.AddBusinesses(browser.globals.CP1001171)
      relationship.checkAddBusinessesSuccess()
      relationship.checkForAffliatedBusinesses(browser.globals.CP1001171)
  },
  '3.Verify initial state of dashboard, then start COD filing': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.verifyTombstone(browser.globals.CP1001171);
      dashboard.verifyAddresses(browser.globals.CP1001171);
     // dashboard.verifyDirectorCount(browser.globals.CP1001171.director_count)
      dashboard.startCodFiling()
  },

  '4.Confirm initial state of COD filing': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.verfifyInitialCodState(browser.globals.CP1001171);
      CodPage.checkTotalFees('$0.00');
    },
    
    '5.Appoint New Director': function (browser) {
      CodPage = browser.page.CodPage()
      CodPage.startAppointingNewDirector()
      CodPage.AddNewDirector(browser.globals.CP1001171.director7,7);
     // CodPage.validateDirectorByNumber(browser.globals.CP1001171.director4,4)
    },

    '6.Certify who filed': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.setValue('@certifyLegalName', 'Tester');
      CodPage.click('@certifyCheckBox')
    },

    '7.Save draft and resume later': function (browser) {
      CodPage = browser.page.CodPage()
      CodPage.click('@saveAndResumeLaterButton')
    },

    '8.Resume draft from Dashboard': function (browser) {
      dashboard = browser.page.dashboardPage()
      dashboard.waitForElementVisible('@resumeDraftButton')
      dashboard.click('@resumeDraftButton')
    },

    '9.Verify draft resumed correctly then return to dashoard': function (browser) {
      CodPage = browser.page.CodPage()
      CodPage.checkFeeCount(1)
      CodPage.checkFeeByIndex('Change of Director', '$20.00', 0)
      CodPage.checkTotalFees('$20.00')
    },

   '10.Assert the directors are present': function (browser) {
      //Add assertions for directors present
      CodPage.moveToElement('@saveAndResumeLaterButton', 5, 5);
      CodPage.click('@saveAndResumeLaterButton');
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

    '12.Start COD filing after deleting draft': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.startCodFiling();
    },

    '13.Confirm initial state of COD filing - POST DRAFT': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.verfifyInitialCodState(browser.globals.CP1001171);
      CodPage.checkTotalFees('$0.00');
    },

    '14.Appoint New DIRECTOR - POST DRAFT': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.startAppointingNewDirector()
      CodPage.AddNewDirector(browser.globals.CP1001171.director7,7);
     // CodPage.validateDirectorByNumber(browser.globals.CP1001171.director3,3)
    },

    '15.Certify who filed - POST DRAFT': function (browser) {
      CodPage = browser.page.CodPage();
      CodPage.setValue('@certifyLegalName', 'Tester');
      CodPage.click('@certifyCheckBox');
      CodPage.click('@nextButton');
    },

    '16.Review Page':function(browser) {
      CodPage = browser.page.CodPage();
      CodPage.reviewPage()
      .click('@fileAndPayButton')
    },
    
    '17.PayBC': function (browser) {
      browser
        .waitForElementVisible('#paylistbutton')
        .click('#paylistbutton')
        .waitForElementVisible('#credit_payBtn')
        .click('#credit_payBtn')
        .waitForElementVisible('input[name=trnCardNumber]')
        .setValue('input[name=trnCardNumber]',process.env.credit_card)
        .setValue('input[name=trnCardCvd]', process.env.cvv_no)
        .moveToElement('input[name=submitButton]', 10, 10)
        .click('input[name=submitButton]');
    },

    '18.Verify Dashboard after filing': function (browser) {
      dashboard = browser.page.dashboardPage();
      dashboard.assert.containsText('@toDoListHeader', 'To Do (3)');
      dashboard.assert.containsText('@filingHistoryHeader', 'Recent Filing History (53)');
      dashboard.assert.containsText('@topFilingInHistoryName', 'Director Change');
      //dashboard.verifyDirectorCount(browser.globals.CP1001171.new_director_count);
    }
  
  }

