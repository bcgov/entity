
var Addresscompletecommands={
    Completedassertions:function(Addresscomplete,browser){
        return this
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div:nth-child(1) > div > div > div.v-input__slot > div > div')
        .click('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div:nth-child(1) > div > div > div.v-input__slot > div > div')
        .assert.visible('#reg-off-update-addr-btn')
        .assert.visible('#reg-off-cancel-addr-btn > div')
        .click('#reg-off-update-addr-btn')
        .waitForElementNotVisible('#reg-off-update-addr-btn')
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)','123 test street')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(2)','additional info')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(1)', 'Victoria')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)','V8V 4K9')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > label','Mailing Address')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(1)','123 test')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(2)','additional info')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(1)', 'Victoria')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)','V8V 4K9')
        .assert.containsText('#annual-report-container > aside > div > div > ul > li:nth-child(2) > div.fee-list__item-name','Change of Registered Office Address')
        .assert.visible('#reg-off-addr-reset-btn > div');
    }
};
    
module.exports={
    commands:[Addresscompletecommands],
    elements:{}
};