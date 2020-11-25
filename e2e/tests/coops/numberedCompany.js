require('dotenv').config();
module.exports = {

  '@tags': [''], 
  before:function(browser ){
   browser.setupData('CP0000019', function(busObject){
    console.log(busObject);
    });
  },
    'Verify initial login with bcsc': function (browser) {
        bcsc = browser.page.bcscPage();
        browser.url(browser.globals.launch_url)
        bcsc.verifyLandingPage()
        bcsc.moveToBCSC()
        bcsc.enterBCSCCardUser(process.env.user_bcsc)
        bcsc.enterBCSCPassword(process.env.user_pwd)
    },
    'Enter contact information': function (browser) {
        relationship = browser.page.relationshipPage();
        relationship.acceptTermsOfUse();
        relationship.createBcRegistriesAccount()
        relationship.createAccount('Virtual1')
        relationship.createAccountAddress()
        relationship.enterContactInformation();
        relationship.selectPaymentMethod()
        relationship.landOnRegistriesPage();
      },
    
    'Start incorporate a Numbered Company': function(browser) {
        numberedCompany=browser.page.incorporationStep1Page()
        numberedCompany.IncorporateNumberedCompany()
        numberedCompany.IADasboard()
        numberedCompany.FileIncorporationApplication()
        numberedCompany.EnterRegisteredOfficeAddresses(browser.globals.officeAddresses)
        numberedCompany.EnterRegisteredOfficemail(browser.globals.officeEmail)
    },
    'Enter peoples and roles':function(browser){
      numberedCompanystep2=browser.page.incorporationStep2Page()
      numberedCompanystep2.Addincorporator(browser.globals.incorporator)
      numberedCompanystep2.Adddirector(browser.globals.director)
      numberedCompanystep2.Addfirm(browser.globals.firm)

    },
    'Add share structure':function(browser){
      numberedCompanystep3=browser.page.incorporationStep3Page()
      numberedCompanystep3.AddShareStructure(browser.globals.shareStructure)
      numberedCompanystep3.AddShareSeries(browser.globals.shareSeries)
      numberedCompanystep3.IncorporationAgreement()
      numberedCompanystep3.postResumeFiling()
    },
    'Review and Pay':function(browser){
        reviewandpay=browser.page.reviewPage()
        reviewandpay.Review()
        reviewandpay.PayBc()
        reviewandpay.completedIA()
    },
}