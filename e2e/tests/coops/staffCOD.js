require('dotenv').config();
module.exports = {

  '@tags': ['regression', 'staff'],
  before: function (browser) {
    browser.maximizeWindow()
    browser.setupData('CP1001403', function (busObject) {
      console.log(busObject);
    });
  },

  '1. Login with IDIR': function (browser) {
    staffLogin = browser.page.staffDashboardPage();

    staffLogin
      .navigate()
      .signInWithIDIR(process.env.IDIRCredU, process.env.IDIRCredP);
  },

  '2. Staff Dashboard': function (browser) {
    staffLogin = browser.page.staffDashboardPage();

    staffLogin.searchForBusiness(browser.globals.CP1001403.identifier);
  },

  '3. Verify initial state of dashboard, then start COD filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.verifyTombstone(browser.globals.CP1001403);
    dashboard.verifyAddresses(browser.globals.CP1001403);
    // dashboard.verifyDirectorCount(browser.globals.CP1001403.director_count)
    dashboard.startCodFiling(browser.globals.CP1001403);
  },

  '4. Confirm initial state of COD filing': function (browser) {
    CodPage = browser.page.CodPage();
    CodPage.verfifyInitialCodState(browser.globals.CP1001403);
    CodPage.checkTotalFees('$0.00');
  },

  '5. Appoint New Director': function (browser) {
    CodPage = browser.page.CodPage()
    CodPage.startAppointingNewDirector()
    CodPage.AddNewDirector(browser.globals.CP1001403.director4, 4);
    // CodPage.validateDirectorByNumber(browser.globals.CP1001403.director2,2)
  },

  '6. Certify who filed': function (browser) {
    CodPage = browser.page.CodPage();
    CodPage.setValue('@certifyLegalName', 'Tester');
    CodPage.click('@certifyCheckBox')
  },

  '7. Save draft and resume later': function (browser) {
    CodPage = browser.page.CodPage()
    CodPage.click('@saveAndResumeLaterButton')
  },

  '8. Resume draft from Dashboard': function (browser) {
    dashboard = browser.page.dashboardPage()
    dashboard.waitForElementVisible('@resumeDraftButton')
    dashboard.click('@resumeDraftButton')
  },

  '9. Verify draft resumed correctly then return to dashoard': function (browser) {
    CodPage = browser.page.CodPage()
    CodPage.checkFeeByIndex('Change of Director', '$20.00', 0)
    CodPage.checkTotalFees('$20.00')
  },

  '10. Assert the directors are present': function (browser) {
    //CodPage.assert.valueContains('@certifyLegalName', 'Tester');
    CodPage.moveToElement('@saveAndResumeLaterButton', 5, 5);
    CodPage.click('@saveAndResumeLaterButton');
  },

  '11. Delete draft': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.waitForElementVisible('@resumeDraftButton');
    dashboard.click('@toDoButtonMoreActionsArrow');
    dashboard.click('@deleteDraftButton');
    dashboard.waitForElementVisible('@confirmDeleteDraftButton');
    dashboard.click('@confirmDeleteDraftButton');
    dashboard.waitForElementVisible('@fileNowButton');
  },

  '12. Start COD filing after deleting draft': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.startCodFiling(browser.globals.CP1001403);
  },

  '13. Confirm initial state of COD filing - POST DRAFT': function (browser) {
    CodPage = browser.page.CodPage();
    CodPage.verfifyInitialCodState(browser.globals.CP1001403);
    CodPage.checkTotalFees('$0.00');
  },

  '14. Appoint New DIRECTOR - POST DRAFT': function (browser) {
    CodPage = browser.page.CodPage();
    CodPage.startAppointingNewDirector()
    CodPage.AddNewDirector(browser.globals.CP1001403.director4, 4);
    // CodPage.validateDirectorByNumber(browser.globals.CP1001403.director2,2)
  },

  '15. Certify who filed - POST DRAFT': function (browser) {
    CodPage = browser.page.CodPage();
    CodPage.setValue('@certifyLegalName', 'Tester');
    CodPage.click('@certifyCheckBox');
  },

  '16. Entering RoutingSlip Number': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.enterRoutingSlipNumber()
      .setValue('#routing-slip-number-textfield', 111111111)
      .click('#cod-next-btn > span')
  },

  '17. Review Page': function (browser) {
    CodPage = browser.page.CodPage();
    CodPage.reviewPage()
      .click('#cod-file-pay-btn')
  },

  '18. Verify Dashboard after filing': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.assert.containsText('@toDoListHeader', 'To Do (3)');
    dashboard.assert.containsText('@filingHistoryHeader', 'Recent Filing History (58)');
    dashboard.assert.containsText('@topFilingInHistoryName', 'Director Change');
    // dashboard.verifyDirectorCount(browser.globals.CP1001403.new_director_count)
  }
}