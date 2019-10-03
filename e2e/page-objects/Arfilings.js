var Arfiligscommands={
    Ardashboardassertions:function(Arfilings,browser){
        return this.waitForElementVisible('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button')
        .click('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button')
        .waitForElementVisible('#AR-header')
        .assert.containsText('#AR-header','File 2019 Annual Report')
        .assert.containsText('#AR-step-1-header','1. Annual General Meeting Date')
        .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > dl > dd.incorp-number','CP0000977')
        .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > div','WASHINGTON CO-OPERATIVE HOUSING ASSOCIATION')
        .assert.containsText('#annual-report-container > aside > div > div > ul > li > div.fee-list__item-name','Annual Report')
        .assert.containsText('#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__name','Total Fees')
        //.assert.containsText('#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__value > div','$30.00')
    },
        Datepickerassertions:function(Datepicker,browser){
        return this
        .waitForElementVisible('#agm-textfield')
        .click('#agm-textfield')
        .waitForElementVisible('#agm-datepicker > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(5) > td:nth-child(4) > button > div')
        .click('#agm-datepicker > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(5) > td:nth-child(4) > button > div')
        },
        ARPageAddress:function(ARAddress,browser){
            return this
        .assert.containsText('#AR-step-2-header','2. Registered Office Addresses (as of 2019 Annual General Meeting)')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > label','Delivery Address')
        .assert.visible('#reg-off-addr-change-btn > div > span')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)','502 - 373 BURNSIDE RD. E.')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(1)','VICTORIA')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)','V9A 1A7')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > label','Mailing Address')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(1)','502 - 373 BURNSIDE RD. E.')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(1)','VICTORIA')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)','V9A 1A7')
        .waitForElementVisible('#reg-off-addr-change-btn')
        .assert.cssClassNotPresent('#reg-off-addr-change-btn', 'v-btn--disabled');
}
};
module.exports={
    commands:[Arfiligscommands],
    elements:{}
};