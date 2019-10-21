module.exports={
    '@tags': ['staffsearch','single'],

    'Login with IDIR':function (browser){
        browser
        .url(browser.globals.launch_idirurl)
        .assert.visible('#login-to','Log in to sfstest7.gov.bc.ca')
        .setValue('#user','process.env.username')
        .setValue('#password','process.env.password')
        .click('#login-form > section > div > div.col-sm-7.col-md-8 > div > div.panel-body > div.login-form-action > input')
    },

    'Login To Dashboard':function(browser){
        browser
        .assert.visible('#app > div > div.app-body > div > div > article > h1','Search Co-operatives')
        .assert.visible('#app > div > div.app-body > div > div > article > h2','Incorporation Number')
        .setValue('#txtBusinessNumber', browser.globals.CP0001505.identifier)
        .click('#app > div > div.app-body > div > div > article > div > form > div.layout.align-end.justify-end > button > span')
    },

    'Verify initial state of dashboard, then start COD filing': function (browser) {
        dashboard = browser.page.dashboardPage();
        dashboard.verifyTombstone(browser.globals.CP0001505);
        dashboard.verifyAddresses(browser.globals.CP0001505);
        dashboard.verifyDirectorCount(browser.globals.CP0001505.director_count)
        dashboard.startCodFiling()
    },

    'Confirm initial state of COD filing': function (browser) {
        CodPage = browser.page.CodPage();
        CodPage.verfifyInitialCodState(browser.globals.CP0001505);
        CodPage.checkTotalFees('$0.00');
      },
      
      'Appoint New Director': function (browser) {
        CodPage = browser.page.CodPage()
        CodPage.startAppointingNewDirector()
        CodPage.AddNewDirector();
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

}
