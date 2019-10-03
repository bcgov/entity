var paybccommands={
    paybcassertions:function(paybc,browser){
       return this.waitForElementVisible('#paylistbutton')
        .click('#paylistbutton')
        .waitForElementVisible('#credit_payBtn')
        .click('#credit_payBtn')
        .waitForElementVisible('input[name=trnCardNumber]')
        .setValue('input[name=trnCardNumber]', '4030000010001234')
        .setValue('input[name=trnCardCvd]', '123')
        .moveToElement('input[name=submitButton]', 10, 10)
        .click('input[name=submitButton]')
}
};
module.exports={
    commands:[paybccommands],
    elements:{}
};