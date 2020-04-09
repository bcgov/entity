var loginCommands = {
    verifyLandingPage: function (browser) {
        return this
            .waitForElementVisible('@createBCRegistriesAccount')
            .assert.urlEquals(this.api.globals.launch_url + "auth/")
            .assert.containsText('@mainHeader', 'Welcome to Cooperatives Online')
            .waitForElementVisible('@loginWithBCServiceCard')
            .click('@loginWithBCServiceCard')
    },

    moveToBCSC: function () {
        return this
            .waitForElementVisible('@virtualCardButton')
            .assert.urlEquals(this.api.globals.idtest_url + '/entry#start')
            .assert.containsText('@header', 'Log in with BC Services Card')
            .click('@virtualCardButton')
    },

    enterBCSCCardUser: function (username) {
        return this
            .waitForElementVisible('@bcscCardInput')
            .assert.urlEquals(this.api.globals.idtest_url + '/entry#')
            .assert.containsText('@serialCardHeader', 'Log in with BC Services Card')
            .assert.containsText('@virtualCardHeader', 'Virtual Card Testing')
            .setValue('@bcscCardInput', username)
            .waitForElementVisible('@continueButton')
            .click('@continueButton')
    },

    enterBCSCPassword: function (password) {
        return this
            .waitForElementVisible('@passCodeInput')
            .assert.urlEquals(this.api.globals.idtest_url + '/identify')
            .assert.containsText('@passCodeHeader', 'Enter Your Passcode')
            .setValue('@passCodeInput', password)
            .waitForElementVisible('@secondContinueButton')
            .click('@secondContinueButton')
    },

    proceedPastCardUseHistory: function () {
        return this
            .waitForElementVisible('@cardUseHistory')
            .waitForElementVisible('@finalContinueButton')
            .click('@finalContinueButton')
    }
}

module.exports = {
    commands: [loginCommands],
    elements: {
        mainHeader: "div.app-body h1",
        loginButton: "#app > div > div.app-body > article > div.how-to-container > div > section > section:nth-child(4) > div.cta-container > a > span",
        virtualCardButton: "#tile_virtual_device_div_id",
        header: "body > section > div.login-site",
        serialCardHeader: "body > section > div.login-site > h1",
        virtualCardHeader: "#divCSN > form > div > div.login-error-title > span > b",
        bcscCardInput: "#csn",
        continueButton: "#continue",
        secondContinueButton: "#btnSubmit",
        finalContinueButton: '[id="form_setConfirmation"] button',
        passCodeHeader: "#passcodeField > label",
        passCodeInput: "#passcode",
        cardUseHistory: '#card-use-history',
        loginWithBCServiceCard: 'div.app-header__actions button',
        createBCRegistriesAccount: 'div.hero-banner__cta-btns button'


    }
}