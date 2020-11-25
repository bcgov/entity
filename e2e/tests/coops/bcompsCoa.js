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
      '3.Verify initial state of dashboard, then start COA filing': function (browser) {
        dashboard = browser.page.dashboardPage();
        dashboard.click('@open')
        dashboard.verifyTombstone(browser.globals.BC1218890);
        dashboard.waitForElementVisible('@launchCOAButton')
        dashboard.click('@launchCOAButton')
        Coa=browser.page.CoaPage()
        Coa.assert.containsText('@addressChangeDialouge','Address Change Effective 12:01 AM')
        Coa.expect.element('@returnToDashboardButton').to.be.enabled
        Coa.waitForElementVisible('@continueChangeOfAddress')
        Coa.click('@continueChangeOfAddress')
      },
      '4.Confirm initial state of COA filing': function (browser) {
        Coa = browser.page.CoaPage();
        browser.useCss()
        Coa.assert.containsText('@effectiveDate','Any address update will be effective tomorrow.')
        Coa.verfifyInitialCoaState(browser.globals.BC1218890);
        Coa.checkTotalFees('$0.00');
        Coa.assert.containsText('@effectiveDate','Any address update will be effective tomorrow.')
      },
      '5.Edit the Office Addresses': function (browser) {
        Coa = browser.page.CoaPage();
        Coa.startEditingOfficeAddresses();
        Coa.fillInAddressField(Coa.elements.officeDeliveryStreetAddress.selector, '123 setters street', browser);
        Coa.fillInAddressField(Coa.elements.officeDeliveryCity.selector, 'Victoria', browser);
        Coa.fillInAddressField(Coa.elements.officeDeliveryPostalCode.selector, 'V8V 4K9', browser);
        Coa.click('@recordsOfficeButton')
        Coa.moveToElement('@updateAddressesButton', 5, 5);
        Coa.click('@updateAddressesButton');
        Coa.checkFeeCount(2);
        Coa.checkFeeByIndex('Change of Registered Office Address', '$20.00', 0);
        Coa.checkTotalFees('$21.50');
        Coa.assert.visible('@resetOfficeAddressButton');
        Coa.assert.containsText('@officeDeliveryLine1', '123 setters street');
        Coa.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
        Coa.assert.containsText('@officeDeliveryLine3', 'Canada');
        Coa.assert.containsText('@officeMailingLine1', "4-1900 Av De l'Église");
        Coa.assert.containsText('@officeMailingLine2', "Montréal BC H4E 1G8");
        Coa.assert.containsText('@officeMailingLine3', 'Canada');
      },
      '6.Certify who filed': function (browser) {
        Coa = browser.page.CoaPage();
        Coa.setValue('@certifyLegalName', 'Tester');
        Coa.click('@certifyCheckBox');
      },
    
      '7.Save draft and resume later': function (browser) {
        Coa = browser.page.CoaPage();
        Coa.click('@saveAndResumeLaterButton');
      },
      '8.Resume draft from Dashboard': function (browser) {
        dashboard = browser.page.dashboardPage();
        dashboard.waitForElementVisible('@resumeDraftButton');
        dashboard.click('@resumeDraftButton');
      },
    
      '9.Verify draft resumed correctly then return to dashoard': function (browser) {
        Coa = browser.page.CoaPage();
        Coa.checkFeeCount(2);
        Coa.checkFeeByIndex('Change of Registered Office Address', '$20.00', 0);
        Coa.checkTotalFees('$21.50');
        Coa.assert.visible('@resetOfficeAddressButton');
        Coa.assert.containsText('@officeDeliveryLine1', '123 setters street');
        Coa.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
        Coa.assert.containsText('@officeDeliveryLine3', 'Canada');
        Coa.assert.containsText('@officeMailingLine1', "4-1900 Av De l'Église");
        Coa.assert.containsText('@officeMailingLine2', "Montréal BC H4E 1G8");
        Coa.assert.containsText('@officeMailingLine3', 'Canada');
        Coa.waitForElementVisible('@certifyBlock')
        Coa.waitForElementVisible('@certifyLegalName')
        Coa.moveToElement('@certifyLegalName', 5, 5)
        Coa.moveToElement('@saveAndResumeLaterButton', 5, 5);
        Coa.click('@saveAndResumeLaterButton');
      },
      '10.Delete draft': function (browser) {
        dashboard = browser.page.dashboardPage();
        dashboard.waitForElementVisible('@resumeDraftButton');
        dashboard.click('@toDoButtonMoreActionsArrow');
        dashboard.click('@deleteDraftButton');
        dashboard.waitForElementVisible('@confirmDeleteDraftButton');
        dashboard.click('@confirmDeleteDraftButton');
      },
      '11.Start COA filing after deleting draft': function (browser) {
        dashboard = browser.page.dashboardPage();
        dashboard.verifyTombstone(browser.globals.BC1218890);
        dashboard.waitForElementVisible('@launchCOAButton')
        dashboard.click('@launchCOAButton')
        Coa=browser.page.CoaPage()
        Coa.assert.containsText('@addressChangeDialouge','Address Change Effective 12:01 AM')
        Coa.expect.element('@returnToDashboardButton').to.be.enabled
        Coa.waitForElementVisible('@continueChangeOfAddress')
        Coa.click('@continueChangeOfAddress')
      },
      '12.Confirm initial state of COA filing - POST DRAFT': function (browser) {
        CoaPage = browser.page.CoaPage();
        CoaPage.verfifyInitialCoaState(browser.globals.BC1218890);
        CoaPage.checkTotalFees('$0.00');
      },
      '13.Edit the Office Addresses Post Draft': function (browser) {
        Coa = browser.page.CoaPage();
        Coa.startEditingOfficeAddresses();
        Coa.fillInAddressField(Coa.elements.officeDeliveryStreetAddress.selector, '123 setters street', browser);
        Coa.fillInAddressField(Coa.elements.officeDeliveryCity.selector, 'Victoria', browser);
        Coa.fillInAddressField(Coa.elements.officeDeliveryPostalCode.selector, 'V8V 4K9', browser);
        Coa.click('@recordsOfficeButton')
        Coa.moveToElement('@updateAddressesButton', 5, 5);
        Coa.click('@updateAddressesButton');
        Coa.checkFeeCount(2);
        Coa.checkFeeByIndex('Change of Registered Office Address', '$20.00', 0);
        Coa.checkTotalFees('$21.50');
        Coa.assert.visible('@resetOfficeAddressButton');
        Coa.assert.containsText('@officeDeliveryLine1', '123 setters street');
        Coa.assert.containsText('@officeDeliveryLine2', 'Victoria BC V8V 4K9');
        Coa.assert.containsText('@officeDeliveryLine3', 'Canada');
        Coa.assert.containsText('@officeMailingLine1', "4-1900 Av De l'Église");
        Coa.assert.containsText('@officeMailingLine2', "Montréal BC H4E 1G8");
        Coa.assert.containsText('@officeMailingLine3', 'Canada');
      },
      '14.Certify who filed - POST DRAFT': function (browser) {
        Coa = browser.page.CoaPage();
        Coa.waitForElementVisible('@certifyBlock')
        Coa.waitForElementVisible('@certifyLegalName')
        Coa.moveToElement('@certifyLegalName', 5, 5)
        Coa.setValue('@certifyLegalName', 'Tester');
        Coa.click('@certifyCheckBox');
        Coa.click('@fileAndPayButton')
      },
      '15.PayBC': function (browser) {
        browser
        .waitForElementVisible('input[name=trnCardNumber]')
        .setValue('input[name=trnCardNumber]', process.env.credit_card)
        .setValue('input[name=trnCardCvd]', process.env.cvv_no)
        .moveToElement('input[name=submitButton]', 10, 10)
        .click('input[name=submitButton]');
    },
    
    }