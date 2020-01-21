var loginCommands={
    verifyCoperativesPage : function(browser){
        return this
       .waitForElementVisible('@HeaderLogin')
       .assert.containsText('@mainHeader','Welcome to Cooperatives Online')
       .waitForElementVisible('@loginButton')
       .click('@loginButton')
    },
      verifyBcscLogin: function(){
       return this.
        assert.urlEquals(this.api.globals.idtest_url + '/entry#start')
       .assert.containsText('@header','Choose how to log in with your card')
       .waitForElementVisible('@virtualCardButton')
       .click('@virtualCardButton')
       .assert.urlEquals(this.api.globals.idtest_url + '/entry#')
       .assert.containsText('@serialCardHeader','Log in with BC Services Card')
       .assert.containsText('@virtualCardHeader','Virtual Card Testing')
       .waitForElementVisible('@bcscCardInput')
       .setValue('@bcscCardInput','BCREG0006)
       .waitForElementVisible('@continueButton')
       .click('@continueButton')
       .assert.urlEquals(this.api.globals.idtest_url+'/identify')
       .assert.containsText('@passCodeHeader','Enter Your Passcode:')
       .waitForElementVisible('@passCodeInput') 
       .setValue('@passCodeInput','98906')
       .useXpath()
       .waitForElementVisible('//*[@id="btnSubmit"]')
       .click('//*[@id="btnSubmit"]')
       .click('//*[@id="btnSubmit"]')
   }}

   module.exports={
       commands:[loginCommands],
       elements: {
           HeaderLogin: "#app > div > div.header-group > header > div > div > button > span",
           mainHeader: "#app > div > div.app-body > article > header > div > div > div > h1",
           loginButton: "#app > div > div.app-body > article > div.how-to-container > div > section > section:nth-child(4) > div.cta-container > a > span",
           virtualCardButton: "#tile_virtual_device_div_id",
           header: "#device-selection-div > h2",
           serialCardHeader: "#loginTitleBar > div",
           virtualCardHeader: "#divCSN > form > div > div.login-error-title > span > b",
           bcscCardInput: "#csn",
           continueButton: "#continue",
           passCodeHeader: "#passcodeField > label",
           passCodeInput: "#passcode"
       }
       }
