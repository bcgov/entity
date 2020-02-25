var loginCommands={
    verifyLandingPage : function(browser){
        return this
       .assert.urlEquals(this.api.globals.launch_url)
       .assert.containsText('@mainHeader','Welcome to Cooperatives Online')
       .waitForElementVisible('@createBCRegistriesAccount')
       .waitForElementVisible('@loginWithBCServiceCard')
       .click('@loginWithBCServiceCard')
    },
    
      moveToBCSC: function(){
       return this.
        assert.urlEquals(this.api.globals.idtest_url + '/entry#start')
       .assert.containsText('@header','Log in with BC Services Card')
       .waitForElementVisible('@virtualCardButton')
       .click('@virtualCardButton')
      },

      enterBCSCCardUser: function(username){
          return this
       .assert.urlEquals(this.api.globals.idtest_url + '/entry#')
       .assert.containsText('@serialCardHeader','Log in with BC Services Card')
       .assert.containsText('@virtualCardHeader','Virtual Card Testing')
       .waitForElementVisible('@bcscCardInput')
       .setValue('@bcscCardInput',username)
       .waitForElementVisible('@continueButton')
       .click('@continueButton')
      },

      enterBCSCPassword:function(password){
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
   }

   module.exports={
       commands:[loginCommands],
       elements: {
           mainHeader: " #app > div > div.app-body > div > article > header > div > div > div > h1",
           loginButton: "#app > div > div.app-body > article > div.how-to-container > div > section > section:nth-child(4) > div.cta-container > a > span",
           virtualCardButton: "#tile_virtual_device_div_id",
           header: "body > section > div.login-site",
           serialCardHeader: "body > section > div.login-site > h1",
           virtualCardHeader: "#divCSN > form > div > div.login-error-title > span > b",
           bcscCardInput: "#csn",
           continueButton: "#continue",
           passCodeHeader: "#passcodeField > label",
           passCodeInput: "#passcode",
           loginWithBCServiceCard: '#app > div > div.header-group > header > div > div > button > span',
           createBCRegistriesAccount: '#app > div > div.app-body > div > article > header > div > div > div > div.hero-banner__cta-btns > button > span'


       }
       }
