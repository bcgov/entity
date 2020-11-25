

require('dotenv').config();
module.exports = {

  '@tags': [''], 
   before:function(browser ){
   browser.setupData('CP0000019', function(busObject){
   console.log(busObject);
    });
},
    '1.Verify initial login with bcsc': function (browser) {
        bcsc = browser.page.bcscPage();
        browser.url(browser.globals.launch_url)
        bcsc.verifyLandingPage()
        bcsc.moveToBCSC()
        bcsc.enterBCSCCardUser(process.env.user_bcsc)
        bcsc.enterBCSCPassword(process.env.user_pwd)
    },
    '2.Enter contact information': function (browser) {
        relationship = browser.page.relationshipPage();
        relationship.acceptTermsOfUse();
        relationship.createBcRegistriesAccount()
        relationship.createAccount('zaxcy')
        relationship.enterContactInformation();
        relationship.saveProfileInformation();
        relationship.landOnRegistriesPage();
      },
      '3.start COD filing': function (browser) {
        dashboard = browser.page.dashboardPage();
        dashboard.click('@open')
        dashboard.startCodFiling(browser.globals.BC1218841);
    },
    '4.Confirm initial state of COD filing': function (browser) {
        Cod = browser.page.CodPage()
        Cod.verfifyInitialCodState(browser.globals.BC1218841)
        Cod.checkTotalFees('$0.00')
      },
      '5.Appoint New Director': function (browser) {
        Cod = browser.page.CodPage()
        Cod.startAppointingNewDirector()
        Cod.click('@mailingCheckbox')
        Cod.AddNewDirector(browser.globals.BC1218841.director2, 2);
      },
      '6.Certify who filed': function (browser) {
        Cod = browser.page.CodPage();
        Cod.setValue('@certifyLegalName', 'Tester');
        Cod.click('@certifyCheckBox')
      },
    
      '7.Save draft and resume later': function (browser) {
        Cod = browser.page.CodPage()
        Cod.click('@saveAndResumeLaterButton')
      },
    
      '8.Resume draft from Dashboard': function (browser) {
        dashboard = browser.page.dashboardPage()
        dashboard.waitForElementVisible('@resumeDraftButton')
        dashboard.click('@resumeDraftButton')
      },
    
      '9.Verify draft resumed correctly then return to dashoard': function (browser) {
        Cod = browser.page.CodPage()
        Cod.checkFeeCount(1)
        Cod.checkFeeByIndex('Change of Director', '$20.00', 0)
        Cod.checkTotalFees('$21.50')
      },
      '10.Assert the directors are present': function (browser) {
        Cod = browser.page.CodPage()
        Cod.moveToElement('@saveAndResumeLaterButton', 5, 5);
        Cod.click('@saveAndResumeLaterButton');
      },
    
      '11.Delete draft': function (browser) {
        dashboard = browser.page.dashboardPage();
        dashboard.waitForElementVisible('@resumeDraftButton');
        dashboard.click('@toDoButtonMoreActionsArrow');
        dashboard.click('@deleteDraftButton');
        dashboard.waitForElementVisible('@confirmDeleteDraftButton');
        dashboard.click('@confirmDeleteDraftButton');
      },
    
      '12.Start COD filing after deleting draft': function (browser) {
        dashboard = browser.page.dashboardPage();
        dashboard.startCodFiling(browser.globals.BC1218841);
      },
    
       '13.Confirm initial state of COD filing - POST DRAFT': function (browser) {
        Cod = browser.page.CodPage();
        Cod.verfifyInitialCodState(browser.globals.BC1218841);
        Cod.checkTotalFees('$0.00');
      },
    
      '14.Appoint New DIRECTOR - POST DRAFT': function (browser) {
        Cod = browser.page.CodPage();
        Cod.startAppointingNewDirector()
        Cod.click('@mailingCheckbox')
        Cod.AddNewDirector(browser.globals.BC1218841.director2, 2);
      },
    
      '15.Certify who filed - POST DRAFT': function (browser) {
        Cod = browser.page.CodPage();
        Cod.setValue('@certifyLegalName', 'Tester');
        Cod.click('@certifyCheckBox');
        Cod.click('@nextButton');
      },
    
      '16.Review Page': function (browser) {
        Cod = browser.page.CodPage();
        Cod.reviewPage()
          .click('@fileAndPayButton')
      },
      '17.PayBC': function (browser) {
        browser
        .waitForElementVisible('input[name=trnCardNumber]')
        .setValue('input[name=trnCardNumber]', process.env.credit_card)
        .setValue('input[name=trnCardCvd]', process.env.cvv_no)
        .moveToElement('input[name=submitButton]', 10, 10)
         .click('input[name=submitButton]');
      },
      '18.Verify Dashboard after filing': function (browser) {
        dashboard = browser.page.dashboardPage();
        dashboard.assert.containsText('@topFilingInHistoryName', 'Director Change');
        Cod = browser.page.CodPage();
        Cod.expect.element('@directorChange').to.be.enabled
        Cod.expect.element('@noticeOfArticles').to.be.enabled
        Cod.expect.element('@reciept').to.be.enabled
        Cod.except.element('@downloadAll').to.be.enabled
      },
}