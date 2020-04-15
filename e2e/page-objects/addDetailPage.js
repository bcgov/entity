var addDetailsCommands={
    addComment:function(detail){
        return this.waitForElementVisible('@chevron')
        .click('@chevron')
        .waitForElementVisible('@addDetailButton')
        .click('@addDetailButton')
        .waitForElementVisible('@addDetailDialogBox')
        .waitForElementVisible('@addDetailArea')
        .setValue('@addDetailArea',detail)
        .waitForElementVisible('@saveButton')
        .click('@saveButton')
    },
    assertAddDetail:function(detail){
        return this .waitForElementVisible('@addedDetailButton')
        .click('@addedDetailButton')
        .waitForElementVisible('@assertDetail')
        .assert.containsText('@assertDetail', 'Detail (1)')
        .assert.containsText('@assertComment','Add Comment')
    },
    addCorrection:function(browser){
        return this.waitForElementVisible('@chevronForCorrection')
        .click('@chevronForCorrection')
        .waitForElementVisible('@fileCorrection')
        .click('@fileCorrection')
    },
    correctionFiling:function(browser){
        return this
        .assert.containsText('@correctionHeader','Correction — Annual Report (2019)')
        .assert.containsText('@dateAssertion','Original Filing Date: 2019-03-05')
        .assert.containsText('#correction-step-1-header','1. Detail')
        .setValue('#detail-comment-textarea','Filed Correction')
        .assert.containsText('#correction-step-2-header','2. Certify')
        .setValue('#certified-by-textfield','Test')
        .click('@certifyCheckbox')
    },

    completePyament:function(routingslip){
        return this
        .assert.containsText('#correction-step-3-header','3. Staff Payment')
        .setValue('#routing-slip-number-textfield',routingslip)
        .click('@prioritycheckbox')
    },
    checkFeeByIndex: function (feeName, feeValue, desiredIndex) {
        return this
            .assert.containsText({selector: '@feeName', index: desiredIndex}, feeName)
            .assert.containsText({selector: '@feeValue', index: desiredIndex}, feeValue);
    },
    checkFeeCount: function (expectedCount) {
        return this.expect.elements('@feeListItem').count.to.equal(expectedCount);
    },
    checkTotalFees: function (expectedTotalString) {
        return this.assert.containsText('@feeTotal', expectedTotalString);
    },
    dashboardAssertion: function(browser){
        return this
        .assert.containsText('@todoTitle','To Do (2)')
        .assert.attributeEquals('@addressChangeButton','disabled', 'true')
        .assert.attributeEquals('#standalone-directors-button','disabled', 'true')
    }

};
module.exports = {
    commands: [addDetailsCommands],
    elements:{
    chevron:{
        selector:"div:nth-child(1)  button i",
        index:5
    },
    addDetailButton:{
    selector:' div.v-menu__content.theme--light.menuable__content__active  div:nth-child(2)',
    index:1
    },
    addDetailDialogBox:"#dialog-title",
    addDetailArea:"#detail-comment-textarea",
    saveButton:"#dialog-save-button",
    addedDetailButton:{
            selector:" div:nth-child(1) > button > div.list-item",
            index:1
    },
    assertDetail:"#details-list  h4",
    assertComment:'div:nth-child(3)  div.v-list-item__subtitle.body-2  div',
    fileCorrection:{
        selector:" div.v-menu__content.theme--light.menuable__content__active  div:nth-child(1)",
        index:2
    },
    chevronForCorrection:{
        selector:"div:nth-child(1)  button i",
        index:6
    },
    correctionHeader:"#correction-header",
    dateAssertion:"#correction-article > header > p",
    certifyCheckbox:"#AR-step-4-container   div.v-input.theme--light.v-input--selection-controls.v-input--checkbox  div.v-input__slot  div  div",    
    feeName: "div.fee-list__item-name",
    feeValue: "div.fee-list__item-value",
    feeListItem: "li.fee-list__item",
    feeTotal: "div.fee-total__value",
    prioritycheckbox:"#AR-step-5-container  div.v-input__slot   div.v-input__slot div  div",
    fileandpay:"#correction-file-pay-btn ",
    todoTitle:'[data-test-id="dashboard-todo-subtitle"]',
    addressChangeButton:'#standalone-addresses-button'
}
};