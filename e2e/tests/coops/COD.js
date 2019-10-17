module.exports = {
    '@tags': ['COD', 'single'],
  
    'Signin': function (browser) {
      browser
        .url(browser.globals.launch_url)
        .waitForElementVisible('#input-17')
        .setValue('#input-17', browser.globals.CP0001252.identifier)
        .waitForElementVisible('#input-20')
        .setValue('#input-20', browser.globals.CP0001252.passcode)
        .waitForElementVisible('button.sign-in-btn')
        .click('button.sign-in-btn')
        .assert.urlEquals(browser.globals.launch_url + '/auth/businessprofile');
    },

    'Enter Business Contact Info': function (browser) {
        browser
          .waitForElementVisible('#input-18')
          .setValue('#input-18', 'test.outputs@gov.bc.ca')
          .setValue('#input-21', 'test.outputs@gov.bc.ca')
          .setValue('#input-24', '2505555555')
          .setValue('#input-27', '234')
    
    browser
    .useXpath()
    .assert.cssClassNotPresent('//*[@id="app"]/div/div[2]/div/div/article/div/div/div/form/div[5]/div/button[2]/span/span', 'v-btn--disabled')
    .click('//*[@id="app"]/div/div[2]/div/div/article/div/div/div/form/div[5]/div/button[2]/span/span')
    },

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
      'Assert the directors are present': function (browser) {
        CodPage = browser.page.CodPage()
       // CodPage.assert.conatainsText(CodPage.AssertDirectors('@FIRSTNAME', '1'))
        CodPage.AssertDirectors('@FIRSTNAME','7')
      },
    


}