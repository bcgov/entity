var loginCommands = {
    verifyLandingPage: function (browser) {
        return this
        .waitForElementVisible('@HeaderLogin')
        .assert.containsText('@mainHeader','Start a Benefit Company and')
        .waitForElementVisible('@loginButton')
        .click('@loginButton')
        .waitForElementVisible('@BcServiceCard')
        .click('@BcServiceCard')
    },

    moveToBCSC: function () {
        return this
        .assert.urlEquals(this.api.globals.idtest_url + '/entry#start')
        .assert.containsText('@header','Log in with BC Services Card')
        .waitForElementVisible('@virtualCardButton')
        .click('@virtualCardButton')
    },

    enterBCSCCardUser: function (username) {
        return this
        .assert.urlEquals(this.api.globals.idtest_url + '/entry#')
        .assert.containsText('@virtualCardHeader','Virtual Card Testing')
        .waitForElementVisible('@bcscCardInput')
        .setValue('@bcscCardInput',username)
        .waitForElementVisible('@continueButton')
        .click('@continueButton')
    },

    enterBCSCPassword: function (password) {
        return this
        .assert.urlEquals(this.api.globals.idtest_url+'/identify')
        .assert.containsText('@passCodeHeader','Enter Your Passcode')
        .waitForElementVisible('@passCodeInput') 
        .setValue('@passCodeInput',password)
        .useXpath()
        .waitForElementVisible('//*[@id="btnSubmit"]')
        .click('//*[@id="btnSubmit"]')
        .click('//*[@id="btnSubmit"]')
    },

    proceedPastCardUseHistory: function () {
        return this
            .waitForElementVisible('@cardUseHistory')
            .waitForElementVisible('@finalContinueButton')
            .click('@finalContinueButton')
    }
}
 module.exports={
            commands:[loginCommands],
            elements: {
                HeaderLogin: "#app > div > div.header-group > header > div > a > span",
                mainHeader: "#app  h1",
                loginButton: "#loginBtn",
                BcServiceCard: {
                selector: "#app   div:nth-child(2)  div.v-list-item__title",
                index: 0
                },
                virtualCardButton: "#tile_virtual_device_div_id",
                header: "body > section > div.login-site > h1",
                serialCardHeader: "#loginTitleBar > div",
                virtualCardHeader: "#divCSN > form > div > div.login-error-title > span > b",
                bcscCardInput: "#csn",
                continueButton: "#continue",
                passCodeHeader: "#passcodeField > label",
                passCodeInput: "#passcode"
            }
            }
    
