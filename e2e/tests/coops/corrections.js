require('dotenv').config();
module.exports = {
  '@tags': ['regression','staff'],
  before: function (browser) {
    browser.maximizeWindow()
    browser.setupData('CP1001560', function (busObject) {
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

    staffLogin.searchForBusiness(browser.globals.CP1001560.identifier);
  },

  '3. Verify initial state of dashboard': function (browser) {
    dashboard = browser.page.dashboardPage();
    dashboard.verifyTombstone(browser.globals.CP1001560);
    dashboard.verifyAddresses(browser.globals.CP1001560);
},

 '4.Click add detail and assert add detail':function(browser){
    addDetail=browser.page.addDetailPage()
    addDetail.addComment('Add Comment')
    addDetail.assertAddDetail()
 },
 '5.Add Correction':function(browser){
   Correction=browser.page.addDetailPage()
   Correction.addCorrection()
   Correction.correctionFiling()
   Correction.completePyament(process.env.routingslip)
 },
 '6.Assert Payment Module':function(browser){
   feeModule=browser.page.dashboardPage()
   feeModule.checkFeeCount(2)
   feeModule.checkFeeByIndex('Correction', '$20.00', 0)
   feeModule.checkFeeByIndex('Priority Fee', '$100.00', 1)
   feeModule.checkTotalFees('$120.00')
   feeModule.click('@fileandpay')
 },
 '7.Assert dashboard after correction':function(browser){
    correctionAssertion=browser.page.addDetailPage()
    correctionAssertion.dashboardAssertion()

 }
}
