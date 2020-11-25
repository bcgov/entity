var setProfile = {
    enterContactInformation: function (browser) {
        return this
            .assert.containsText('@profileHeader', 'User Profile')
            .waitForElementVisible('@email')
            .setValue('@email', 'test@gmail.com')
            .waitForElementVisible('@confirmEmail')
            .setValue('@confirmEmail', 'test@gmail.com')
            .waitForElementVisible('@phoneNumber')
            .setValue('@phoneNumber', '6476476475')
            .waitForElementVisible('@extension')
            .setValue('@extension', '1234')
            .click('@createButton')
            
    },
    acceptTermsOfUse: function () {
        this
            .waitForElementVisible('@termsTextHeader')
        this.api.execute(function () {
            document.getElementById("scroll-target").scrollTo(0,5500);
            }, []); 

        return this
            //.waitForElementVisible('@agreeToTerms')
            .assert.not.cssClassPresent('@agreeToTerms', 'v-btn--disabled')     
            .click('@agreeToTerms');
    },

    saveProfileInformation: function () {
        return this
            .waitForElementVisible('@save')
            .assert.not.cssClassPresent('@save', 'v-btn--disabled')
            .click('@save') 

    },

    createAccount: function (name) {
        return this
            .waitForElementVisible('@createAccountHeader')
            .assert.containsText('@createAccountHeader', 'Account Information')
            .waitForElementVisible('@accountName')
            .setValue('@accountName',name)
    },
    createAccountAddress:function(){
        return this 
        .assert.containsText('@mailingAddressHeader','Mailing Address')
        .waitForElementVisible('@streetAddress')
        .setValue('@streetAddress','1 setters street')
        .setValue('@city','Victoria')
        .setValue('@postalCode','M1S1N1')
        .click('@country')
        .click('@selectCountry')
        .waitForElementVisible('@next2')
        .click('@next2')

    },
    createBcRegistriesAccount:function(){
        return this
        .assert.containsText('@accountHeader','Create a BC Registries and Online Services Account')
        .assert.containsText('@accountType','Select Account Type')
        .click('@basicAccountButton')
        .click('@next')
    },
    landOnRegistriesPage:function(){
        return this
        .waitForElementVisible('@registriesHeader')
        .assert.containsText('@registriesHeader','Your BC Registries account has successfully been created.')
        .click('@homeButton')
        .waitForElementVisible('@manageExistingBusinesses')
        .click('@manageExistingBusinesses')
    },
    AddBusinesses: function (coopObject) {
        return this
            .waitForElementVisible('@addAnExistingBusinessesButton', 60000)
            .click('@addAnExistingBusinessesButton')
            .waitForElementVisible('@addBusinesses')
            .click('@addBusinesses')
            .setValue('@enterIncorporation', coopObject.identifier)
            .setValue('@enterPasscode', coopObject.passcode)
            .waitForElementVisible('@addButton')
            .click('@addButton')
    },

    checkAddBusinessesSuccess: function (browser) {
        return this
            .waitForElementVisible('@BusinessAdded')
            .assert.containsText('@BusinessAdded', 'Business Added')
            .click('@OK')
    },

    checkForAffliatedBusinesses: function (coopObject) {
        return this
            .waitForElementVisible('@businessesDashboard')
            .assert.containsText('@businesses1', coopObject.legal_name)
            .assert.not.cssClassPresent('@dashboard1', 'v-btn--disabled')
            .assert.not.cssClassPresent('@remove1', 'v-btn--disabled')
            .waitForElementVisible('@dashboard1')
            .click('@dashboard1')
    },
    selectPaymentMethod:function(){
        return this
        .waitForElementVisible('@paymentType')
        .waitForElementVisible('@creditPayment')
        .click('@creditPayment')
        .waitForElementVisible('@createAccount')
        .click('@createAccount')
    },
}
module.exports = {
    commands: [setProfile],
    elements: {
        completeProfile: "#app > div > div.app-body > div > div > div > div > div.view-header.user-profile-header > h1",
        email: '[data-test="email"]',
        confirmEmail: '[data-test="confirm-email"]',
        phoneNumber: '[data-test="phone"]',
        extension: '[data-test="phone-extension"]',
        checkbox: '[data-test="terms-of-use-checkbox"]',
        termsTextHeader: "h1",
        agreeToTerms: '[data-test="accept-button"]',
        createTeam: '#app > div > div.app-body > div > div > article > h1',
        manageBusinesses: '#app > div > div.app-body > div > div > article > div > div > div.v-card__text > div > div > form > div.v-input.mt-0.mb-4.pt-0.v-input--is-label-active.v-input--is-dirty.theme--light.v-input--selection-controls.v-input--radio-group.v-input--radio-group--column > div > div.v-input__slot > div > div:nth-child(2) > div',
        businessesName: {
            selector: '/html/body/div/div/div[2]/div/div/article/div/div/div[2]/div/div/form/div[2]/div/div[1]/div/input',
            locateStrategy: 'xpath'
        },
        saveandcontinue: '[data-test="save-button"]',
        save: '[data-test="save-button"]',
        teamProfile: '#app > div > div.app-body > div > div > article > div > div > div.v-card__title > h2',
        manageTeam: '[data-test="manage-teams-nav"]',
        pendingApproval: '[data-test="pending-approval-tab"]',
        checkApproval: '#app > div > div.app-body > div > article > div > div.v-card.v-card--flat.v-sheet.theme--light > div > div > div > div.v-window-item.v-window-item--active > div > div > table > tbody > tr > td',
        addBusinesses: '[ data-test="add-business-button"]',
        enterPasscode: '[data-test="business-passcode"]',
        enterIncorporation: '[data-test="business-identifier"]',
        addButton: 'div.v-card [data-test="add-business-button"]',
        businessesDashboard: '#app > div > div.app-body > div > article > div > div.container.view-container > div.view-header.align-center > h1',
        businesses1: {
            selector: '//*[@id="app"]/div[1]/div[2]/div/article/div/div[2]/div[2]/div/div/div/div/table/tbody/tr/td[1]/div/div[1]',
            locateStrategy: 'xpath'
        },
        dashboard1: '[data-test="goto-dashboard-button"]',
        edit1: '[data-test="edit-contact-button"]',
        remove1: '[data-test="remove-button"]',
        BusinessAdded: '#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__title > span',
        OK: '#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button > span',
        createAccountHeader: 'h2',
        saveandcontinueButton: '[data-test="save-button"]',
        ownBusinesses: '[data-test="select-manage-own-business"]',
        accountName:{
            selector:'input[type="text"]',
            index:0
        },
        basicAccountButton:{
            selector:'div:nth-child(1)  button',
            index:2
        },
        accountType:'h2',
        accountHeader:'h1',
        next:{
            selector:' div:nth-child(1)   div:nth-child(3) span',
            index:5
        },
        next1:'[data-test="save-button"]',
        profileHeader:'h2',
        createButton:'[data-test="next-button"]',
        registriesHeader:'h1',
        homeButton:'button:nth-child(1)',
        manageExistingBusinesses:{
        selector: 'button:nth-child(4)',
        index:1
        },
        addAnExistingBusinessesButton:'#app > div > div.app-body > div > article > div > div.container.view-container > div.view-header.align-center > div > button',
        addBusinesses:'#app > div.v-menu__content.theme--light.menuable__content__active > div > div:nth-child(3)',
        mailingAddressHeader:'fieldset:nth-child(2)  legend',
        streetAddress:{
            selector:'/html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div[2]/form/fieldset[2]/div/form/div[1]/div/div/div[1]/div/input',
            locateStrategy:'xpath',
        },
        city:{
            selector:'/html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div[2]/form/fieldset[2]/div/form/div[3]/div[1]/div/div[1]/div/input',
            locateStrategy:'xpath',
        },
        postalCode:{
            selector:'/html/body/div[1]/div/div[2]/div/div[2]/div/div[2]/div[2]/form/fieldset[2]/div/form/div[3]/div[3]/div/div[1]/div/input',
            locateStrategy:'xpath',
        },
        country:' div.v-select__slot > div.v-select__selections',
        selectCountry:{
            selector:'.v-menu__content .v-list-item ',
            index:3
        },
        next2:'#app > div > div.app-body > div > div.v-card.v-card--flat.v-sheet.theme--light > div > div.container.stepper-content.pa-12 > div:nth-child(2) > form > div > div > button.mr-3.save-btn.v-btn.v-btn--contained.theme--light.v-size--large.primary',
        paymentType:'h2',
        creditPayment:'#app > div > div.app-body > div > div.v-card.v-card--flat.v-sheet.theme--light > div > div.container.stepper-content.pa-12 > div:nth-child(4) > div.pa-0 > div:nth-child(2) > div:nth-child(1) > div > div.ml-auto.pl-8 > button > span',
        createAccount:'[data-test="save-button"]'

     


    }
}