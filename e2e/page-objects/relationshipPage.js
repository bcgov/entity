var setProfile={
    enterContactInformation:function(browser){
        return this
        .assert.urlEquals(this.api.globals.launch_url + 'auth/userprofile')
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
        .useCss()
        .moveToElement('#scroll-target > div > p > article > section:nth-child(12) > div > p:nth-child(7) > span',50,50)
        .waitForElementVisible('#scroll-target > div > p > article > section:nth-child(12) > div > p:nth-child(7) > span')
        .waitForElementVisible('@accept')
        .click('@accept')
        .click('@save')
    },
    createTeam:function(browser){
        return this
        .assert.urlEquals(this.api.globals.launch_url + 'auth/createteam')
        .assert.containsText('@createTeam','Create Team')
        .assert.containsText('@teamProfile','Your Team Profile')
        .waitForElementVisible('@manageBusinesses')
        .click('@manageBusinesses')
        .moveToElement('@businessesName',10,10)
        .setValue('@businessesName','testteam139')
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

    AddBusinesses:function(coops){
        return this
        .click('@manageBusinessesNav')
        .waitForElementVisible('@addBusinesses')
        .click('@addBusinesses')
        .setValue('@enterIncorporation','CP0000019')
        .setValue('@enterPasscode','111111111')
        .click('@forgotPassword')
        .assert.containsText('@forgotPageHeader','Need Assistance?')
        .click('@ok')
        .click('@affliateBusinesses')
    },

    checkAddBusinessesSuccess:function(browser){
        return this
        .waitForElementVisible('@BusinessAdded')
        .assert.containsText('@BusinessAdded','Business Added')
        .click('@OK')
    },

    checkForAffliatedBusinesses:function(browser){
        return this
        .waitForElementVisible('@businessesDashboard')
        .assert.containsText('@businesses1','THE SOINTULA CO-OPERATIVE STORE ASSOCIATION')
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
        completeProfile:"#app > div > div.app-body > div > div > article > div > div > div:nth-child(1) > h1",
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
        forgotPageHeader:'#app > div:nth-child(1) > div > div > div.v-card__title',
        ok:' #app > div:nth-child(1) > div > div > div.v-card__actions > button',
        manageBusinessesNav:'[data-test="manage-business-nav"]',
        affliateBusinesses:'[data-test="add-business-button"]',
        businessesDashboard:'#app > div > div.app-body > div > article > div > div.entity-list-component > div > div > div > div > table > tbody > tr',
        businesses1:'#app > div > div.app-body > div > article > div > div.entity-list-component > div > div > div > div > table > tbody > tr > td:nth-child(1) > div > div.v-list-item__title',
        dashboard1:'[data-test="goto-dashboard-button"]',
        edit1:'[data-test="edit-contact-button"]',
        remove1:'[data-test="remove-button"]',
        BusinessAdded:'#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__title > span',
        OK:'#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button > span'

    }
}
