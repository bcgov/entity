var COAcertifycommands={
    COAcertifypage:function(COAcertify,browser){
       return this
        .useCss()
        .assert.containsText('#AR-step-4-header','Certify Correct')
        .setValue('#certified-by-textfield','test')
        .click('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div')
        .click('#coa-file-pay-btn')
        .assert.visible('#coa-save-btn')
        .assert.visible('#coa-save-resume-btn')
        .assert.visible('#coa-cancel-btn')
        .assert.visible('#coa-file-pay-btn')
        .click('#coa-file-pay-btn > div',)
    }
}
    module.exports={
        commands:[COAcertifycommands],
        elements:{}
    };