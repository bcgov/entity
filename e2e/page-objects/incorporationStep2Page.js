var incorporationstep2command={
    Addincorporator:function(incorporator){
        return this
        .assert.containsText('@IA2Header','1. Add People or Corporations/Firms to your Application')
        .waitForElementVisible('@completingpartybutton')
        .click('@completingpartybutton')
        .setValue('@firstname',incorporator.firstname)
        .setValue('@lastname',incorporator.lastname)
        .setValue('@streetname',incorporator.streetname)
        .setValue('@city',incorporator.city)
        .setValue('@postalcode',incorporator.postalcode)
        .setValue('@provience',incorporator.provience)
        .click('@country')
        .click('@selectCountry')
        .click('@done')

    },
    Adddirector:function(director){
        return this
        .waitForElementVisible('@addperson')
        .click('@addperson')
        .setValue('@firstname',director.firstname)
        .setValue('@lastname',director.lastname)
        .click('@directorcheckbox')
        .setValue('@streetname',director.streetname)
        .setValue('@city',director.city)
        .setValue('@postalcode',director.postalcode)
        .setValue('@provience',director.provience)
        .click('@country')
        .click('@selectCountry')
        .click('@done')
    },
    'Addfirm':function(firm){
        return this
        .waitForElementVisible('@incorpbutton')
        .click('@incorpbutton')
        .setValue('@corpName',firm.corpName)
        .setValue('@streetname',firm.streetname)
        .setValue('@city',firm.city)
        .setValue('@postalcode',firm.postalcode)
        .setValue('@provience',firm.provience)
        .click('@country')
        .click('@selectCountry')
        .click('@done')
        .click('@nextButton')
    },

}

module.exports={
    commands:[incorporationstep2command],
    elements: {
        IA2Header:'#people-role-header h2',
        firstname:'#person__first-name',
        lastname:'#person__last-name',
        streetname:{
            selector:'/html/body/div/div/div[11]/main/div[2]/div/div[1]/div[3]/section/div/div[2]/div/ul/li/div/div/form/div[3]/div/form/div[1]/div/div/div[1]/div/input',
            locateStrategy:'xpath'
        },
        city:{
            selector:'/html/body/div/div/div[11]/main/div[2]/div/div[1]/div[3]/section/div/div[2]/div/ul/li/div/div/form/div[3]/div/form/div[3]/div[1]/div/div[1]/div/input',
            locateStrategy:'xpath'
        },
        postalcode:{
            selector:'/html/body/div/div/div[11]/main/div[2]/div/div[1]/div[3]/section/div/div[2]/div/ul/li/div/div/form/div[3]/div/form/div[3]/div[3]/div/div[1]/div/input',
            locateStrategy:'xpath'
        },
        provience:'#app  div:nth-child(4)  div.people-roles-container.v-card.v-card--flat.v-sheet.theme--light div.address-wrapper  div.form__row.three-column  div.v-input.item.address-region.theme--light.v-text-field.v-text-field--filled.v-text-field--is-booted.v-text-field--enclosed div.v-input__slot input',
        country:'#app  div:nth-child(4)  div.address-wrapper  div.v-select__selections',
        selectcountry:'/html/body/div/div[2]/div/div[4]',
        completingpartybutton:{
            selector:'#btn-start-add-cp > span',
            index:0
        },
        addperson:'#btn-add-person',
        directorcheckbox: '#app > div.v-application--wrap > div.app-body > main > div.container.view-container.pt-4 > div > div.col-lg-9.col-12 > div:nth-child(4) > section > div > div.people-roles-container.v-card.v-card--flat.v-sheet.theme--light > div > ul > li > div > div > form > div.row > div:nth-child(3) > div > div > div.v-input__slot > div > div',
        selectCountry:{
            selector:'.v-menu__content .v-list-item  ',
            index:52
        },
        done:'#btn-done',
        incorpbutton:'#btn-add-corp',
        corpName:'#firm-name',
        nextButton:'#review-confirm-btn'
    },
}