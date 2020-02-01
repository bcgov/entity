require('dotenv').config();
module.exports={
  '@tags': ['staffsearch','single'],

  'Login with IDIR':function (browser){
    browser
    .url(browser.globals.launch_idirurl)
    .assert.visible('#login-to','Log in to sfstest7.gov.bc.ca')
    .setValue('#user',process.env.IDIRCredU)
    .setValue('#password',process.env.IDIRCredP)
    .click('#login-form > section > div > div.col-sm-7.col-md-8 > div > div.panel-body > div.login-form-action > input')
},

'Login To Dashboard':function(browser){
    browser
    .assert.visible('#app > div > div.app-body > div > h1','Search Co-operatives') 
    .setValue('#txtBusinessNumber', browser.globals.CP0002148.identifier)
    .click('#app > div > div.app-body > div > form > button')
},


'1.Verify initial state of dashboard, then start COD filing': function (browser) {
  dashboard = browser.page.dashboardPage();
  dashboard.verifyTombstone(browser.globals.CP0002148);
  dashboard.verifyAddresses(browser.globals.CP0002148);
 // dashboard.verifyDirectorCount(browser.globals.CP0002148.director_count)
  dashboard.startCodFiling()
},

'2.Confirm initial state of COD filing': function (browser) {
  CodPage = browser.page.CodPage();
  CodPage.verfifyInitialCodState(browser.globals.CP0002148);
  CodPage.checkTotalFees('$0.00');
},

'3.Appoint New Director': function (browser) {
  CodPage = browser.page.CodPage()
  CodPage.startAppointingNewDirector()
  CodPage.AddNewDirector(browser.globals.CP0002148.director4,4);
 // CodPage.validateDirectorByNumber(browser.globals.CP0002148.director2,2)
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
  CodPage.checkFeeCount
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
  CodPage.verfifyInitialCodState(browser.globals.CP0002148);
  CodPage.checkTotalFees('$0.00');
},

'12.Appoint New DIRECTOR - POST DRAFT': function (browser) {
  CodPage = browser.page.CodPage();
  CodPage.startAppointingNewDirector()
  CodPage.AddNewDirector(browser.globals.CP0002148.director4,4);
 // CodPage.validateDirectorByNumber(browser.globals.CP0002148.director3,3)
},

'13.Certify who filed - POST DRAFT': function (browser) {
  CodPage = browser.page.CodPage();
  CodPage.setValue('@certifyLegalName', 'Tester');
  CodPage.click('@certifyCheckBox');
  CodPage.click('@nextButton');
},

'14.Review Page':function(browser) {
  
},
'15.Verify Dashboard after filing': function (browser) {
  dashboard = browser.page.dashboardPage();
  dashboard.assert.containsText('@toDoListHeader', 'To Do (3)');
  dashboard.assert.containsText('@filingHistoryHeader', 'Recent Filing History (10)');
  dashboard.assert.containsText('@topFilingInHistoryName', 'Addresses Change');
 // dashboard.verifyDirectorCount(browser.globals.CP0002148.new_director_count);
 dashboard.assert.containsText('@deliveryAddressLabel', 'Delivery Address');
 dashboard.assert.containsText('@deliveryLine1', '123 test street');
 dashboard.assert.containsText('@deliveryLine2', 'Victoria BC V8V 4K9');
 dashboard.assert.containsText('@deliveryLine3', 'CA');
}

}