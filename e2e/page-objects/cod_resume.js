var cod_resumecommands={
    certifypage: function (browser) {
      return this
            .setValue('#certified-by-textfield', 'test')
            .click('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div')
            .click('#cod-save-resume-btn > div')
    },
    checkdashboardassertions:function(browser){
        return this
            .assert.containsText('#dashboardArticle > div > div > section:nth-child(1) > header > h2','To Do (2)')
            .assert.visible('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li:nth-child(1) > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button > div')
            .assert.containsText('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li:nth-child(1) > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button > div','Resume')
            .assert.attributeEquals('#btn-standalone-addresses', 'disabled',"true")
            .assert.attributeEquals('#btn-standalone-directors','disabled',"true")
            .click('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li:nth-child(1) > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button > div')
        //Making sure all the changes are present 
            .assert.containsText('#director-6 > div > label > span:nth-child(1)','test')
            .assert.containsText('#director-6 > div > label > span:nth-child(3)','test3')
            .assert.containsText('#director-6 > div > div > div > div.address > div > div > div > div:nth-child(1)','123 test')
            .assert.containsText('#director-6 > div > label > div > span:nth-child(1)','NEW')
            .assert.visible('#director-6-change-btn')
            .click('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div')
            .click('#cod-file-pay-btn')
    },
    }
    module.exports={
        commands:[cod_resumecommands], 
        elements:{}
    };