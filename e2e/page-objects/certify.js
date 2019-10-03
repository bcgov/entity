var certifycommands={
    Certifypage:function(certify,browser){
        return this.assert.containsText('#AR-step-4-header','4. Certify Correct')
        .setValue('#certified-by-textfield','test')
        .click('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div')
        .assert.containsText('#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__name','Total Fees')
        .assert.visible('#ar-save-btn')
        .assert.visible('#ar-save-resume-btn')
        .assert.visible('#ar-cancel-btn')
        .assert.visible('#ar-file-pay-btn > div')
        .click('#ar-file-pay-btn > div')
    }
};
module.exports={
    commands:[certifycommands],
    elements:{}
};