var setProfile={
    enterContactInformation:function(browser){
        return this
        .assert.urlEquals(this.api.globals.launch_url + '/userprofile')
        .assert.containsText('@completeProfile','Complete Profile')
        .waitForElementVisible('@email')
        .setValue('@email','test@gmail.com')
        .waitForElementVisible('@confirmEmail')
        .setValue('@confirmEmail','test@gmail.com')
        .waitForElementVisible('@phoneNumber')
        .setValue('@phoneNumber','6476476475')
        .waitForElementVisible('@extension')
        .setValue('@extension','1234')
        .click('@checkbox')
        .pause(10000)
    },
    scrollToTerms:function(browser ){
        browser.execute(function () {
            document.getElementById("scroll-target").scrollTo(0,5500);
        }, []);},
    clickOnAcceptButton:function(browser){
return this
        .waitForElementVisible('@accept')
        .click('@accept')
        .click('@save')
},
    createAccount:function(name){
        return this
        .assert.urlEquals(this.api.globals.launch_url + '/createaccount')
        .assert.containsText('@createAccountHeader','Create a New Account')
        .assert.cssClassPresent('@saveandcontinueButton', 'v-btn--disabled')
        .assert.elementPresent('@ownBusinesses:checked')
        .moveToElement('@manageMultipleBusinesses',10,10)
        .click('@manageMultipleBusinesses')
        .waitForElementVisible('@accountName')
        .setValue('@accountName',name)
        .click('@saveandcontinueButton')
    },
    createTeam:function(browser){
        return this
        .assert.urlEquals(this.api.globals.launch_url + 'auth/createteam')
        .assert.containsText('@createTeam','Create Team')
        .assert.containsText('@teamProfile','Your Team Profile')
        .waitForElementVisible('@manageBusinesses')
        .click('@manageBusinesses')
        .moveToElement('@businessesName',10,10)
        .setValue('@businessesName','testteam149')
        .setValue('@businessesName','testteam141')
        .click('@saveandcontinue')
    },

    manageTeamPage:function(browser){
        return this
        .assert.urlEquals(this.api.globals.launch_url + 'auth/main')
        .waitForElementVisible('@manageTeam')
        .click('@manageTeam')
        .click('@pendingApproval')
        .assert.containsText('@checkApproval','No Pending Approvals')
    },

    AddBusinesses:function(coopObject){
        return this
        .click('@manageBusinessesNav')
        .waitForElementVisible('@addBusinesses')
        .click('@addBusinesses')
        .setValue('@enterIncorporation',coopObject.identifier)
        .setValue('@enterPasscode',coopObject.passcode)
        .click('@forgotPassword')
        .assert.containsText('@forgotPageHeader','Need Assistance?')
        .click('@ok')
        .pause(10000)
        .waitForElementVisible('@affliateBusinesses')
        .click('@affliateBusinesses')
    },

    checkAddBusinessesSuccess:function(browser){
        return this
        .waitForElementVisible('@BusinessAdded')
        .assert.containsText('@BusinessAdded','Business Added')
        .click('@OK')
    },

    checkForAffliatedBusinesses:function(coopObject){
        return this
        .waitForElementVisible('@businessesDashboard')
        .assert.containsText('@businesses1', coopObject.legal_name)
        .assert.cssClassNotPresent('@dashboard1', 'v-btn--disabled')
        .assert.cssClassNotPresent('@edit1', 'v-btn--disabled')
        .assert.cssClassNotPresent('@remove1', 'v-btn--disabled')
        .waitForElementVisible('@dashboard1')
        .click('@dashboard1')
    }
}
module.exports={
    commands:[setProfile],
    elements:{
        completeProfile:"#app > div > div.app-body > div > div > div > div > div.view-header.user-profile-header > h1",
        email:'[data-test="email"]',
        confirmEmail:'[data-test="confirm-email"]',
        phoneNumber:'[data-test="phone"]',
        extension:'[data-test="phone-extension"]',
        checkbox:'[data-test="terms-of-use-checkbox"]',
        agreeToTerms:'[data-test="accept-button"]',
        accept:'[data-test="accept-button"]',
        createTeam:'#app > div > div.app-body > div > div > article > h1',
        manageBusinesses:'#app > div > div.app-body > div > div > article > div > div > div.v-card__text > div > div > form > div.v-input.mt-0.mb-4.pt-0.v-input--is-label-active.v-input--is-dirty.theme--light.v-input--selection-controls.v-input--radio-group.v-input--radio-group--column > div > div.v-input__slot > div > div:nth-child(2) > div',
        businessesName:{
        selector:'/html/body/div/div/div[2]/div/div/article/div/div/div[2]/div/div/form/div[2]/div/div[1]/div/input',
        locateStrategy:'xpath'
        },
        saveandcontinue:'[data-test="save-button"]',
        save:'[data-test="save-button"]',
        teamProfile:'#app > div > div.app-body > div > div > article > div > div > div.v-card__title > h2',
        manageTeam:'[ data-test="manage-teams-nav"]',
        pendingApproval:'[data-test="pending-approval-tab"]',
        checkApproval:'#app > div > div.app-body > div > article > div > div.v-card.v-card--flat.v-sheet.theme--light > div > div > div > div.v-window-item.v-window-item--active > div > div > table > tbody > tr > td',
        addBusinesses:'[ data-test="add-business-button"]',
        enterPasscode:'[data-test="business-passcode"]',
        enterIncorporation:'[data-test="business-identifier"]',
        forgotPassword:'#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__text > div > form > div.form__btns.mt-8 > button > span > span',
        forgotPageHeader:'#app > div:nth-child(4) > div > div > div.v-card__title',
        ok:'#app > div:nth-child(4) > div > div > div.v-card__actions > button > span',
        manageBusinessesNav:'[data-test="manage-business-nav"]',
        affliateBusinesses:{
            selector:'//*[@id="app"]/div[3]/div/div/div[2]/div/form/div[4]/div/button[1]/span',
            locateStrategy:'xpath'
        },
        businessesDashboard:'#app > div > div.app-body > div > article > div > div.container.view-container > div.view-header.align-center > h1',
        businesses1:{
           selector:'//*[@id="app"]/div[1]/div[2]/div/article/div/div[2]/div[2]/div/div/div/div/table/tbody/tr/td[1]/div/div[1]',
           locateStrategy:'xpath'
        },
        dashboard1:'[data-test="goto-dashboard-button"]',
        edit1:'[data-test="edit-contact-button"]',
        remove1:'[data-test="remove-button"]',
        BusinessAdded:'#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__title > span',
        OK:'#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button > span',
        createAccountHeader:'h1.mb-5',
        saveandcontinueButton:'[data-test="save-button"]',
        ownBusinesses:'[data-test="select-manage-own-business"]',
        manageMultipleBusinesses:{
           selector:'//*[@id="app"]/div/div[2]/div/div/article/div/div/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div',
           locateStrategy: 'xpath'
        },
        accountName:{
        selector:'//*[@id="app"]/div/div[2]/div/div/article/div/div/div[2]/div/div/form/div[3]/div/div[1]/div/input',
        locateStrategy:'xpath'
        },
        manageBusinessesHeader: 'h1.mb-6',
        manageBusinessesButton:'#app > div > div.app-body > div > article > header > div > div > div > a > span'

    }
}