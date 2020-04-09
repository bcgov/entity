var setProfile = {
    enterContactInformation: function (browser) {
        return this
            .assert.containsText('@completeProfile', 'Complete Profile')
            .waitForElementVisible('@email')
            .setValue('@email', 'test@gmail.com')
            .waitForElementVisible('@confirmEmail')
            .setValue('@confirmEmail', 'test@gmail.com')
            .waitForElementVisible('@phoneNumber')
            .setValue('@phoneNumber', '6476476475')
            .waitForElementVisible('@extension')
            .setValue('@extension', '1234')
            
    },
    acceptTermsOfUse: function () {
        this
            .click('@checkbox')
            .waitForElementVisible('@termsText')
            .click('@termsText');
        
        this.api.execute(function () {
            document.getElementById("scroll-target").scrollTo(0,5500);
            }, []); 

        return this
            .waitForElementVisible('@agreeToTerms')
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
            .assert.containsText('@createAccountHeader', 'Create a New Account')
            .assert.cssClassPresent('@saveandcontinueButton', 'v-btn--disabled')
            .assert.elementPresent('@ownBusinesses:checked')
            .waitForElementVisible('@accountName')
            .setValue('@accountName', name)
            .click('@saveandcontinueButton')
    },

    manageTeamPage: function (browser) {
        return this
            .waitForElementVisible('@manageTeam')
            .click('@manageTeam')
            .click('@pendingApproval')
            .assert.containsText('@checkApproval', 'No Pending Approvals')
    },

    AddBusinesses: function (coopObject) {
        return this
            .waitForElementVisible('@addBusinesses', 60000)
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
            .assert.not.cssClassPresent('@edit1', 'v-btn--disabled')
            .assert.not.cssClassPresent('@remove1', 'v-btn--disabled')
            .waitForElementVisible('@dashboard1')
            .click('@dashboard1')
    }
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
        termsText: "div.v-dialog--scrollable",
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
        createAccountHeader: 'h1.mb-5',
        saveandcontinueButton: '[data-test="save-button"]',
        ownBusinesses: '[data-test="select-manage-own-business"]',
        accountName:'input[type="text"]'

    }
}