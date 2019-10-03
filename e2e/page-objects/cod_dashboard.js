var cod_dashboardcommands={
    CoopsDasboardtoCOD: function (browser) {
        return this 
            .waitForElementVisible('div.entity-name')
            .waitForElementVisible('#btn-standalone-directors')
            .waitForElementNotVisible('div.loading-container')
            .assert.containsText('#app > div.application--wrap > div.app-body > main > div.entity-info > div > dl > dd.incorp-number','CP0002141')
            .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > div','DADS AUTO DELIVERIES CO-OP')
            .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > header > h2','Recent Filing History (0)')
            .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > div > div.no-results.v-card.v-card--flat.v-sheet.theme--light > div > div.no-results__title','You have no filing history')
    },
    Appointnewdirector:function(browser){
        return this
            .assert.visible('#btn-standalone-addresses > div > span')
            .click('#btn-standalone-directors > div > span')
            .waitForElementVisible('#directors > div:nth-child(2) > button > div')
            .pause(10000)
            .click('#directors > div:nth-child(2) > button > div')
            .waitForElementVisible('#new-director__first-name')
            .waitForElementNotVisible('button.new-director-btn')
            .setValue('#new-director__first-name', 'test')
            .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div.v-input.item.director-initial.v-text-field.v-text-field--box.v-text-field--enclosed.theme--light > div > div.v-input__slot > div > input[type=text]', 'test2')
            .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]', 'test3')
            .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]', '123 test')
            .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]', '321 test')
            .useXpath()
            .setValue('//*[@id="directors"]/div[3]/ul[1]/li/div/div/form/div[2]/form/div[3]/div[1]/div/div[1]/div/input', 'victoria')
            .useCss()
            .click('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections')
            .click('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div > div')
            .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]', 'V2X3C4')
            .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input[type=text]', 'canada')
            .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea', 'optional')
            .click('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.theme--light.primary > div')
            //.click('#director-1-cease-btn > div > span')(ceasing the directors)
    },
    Assertionsfornewdirector:function(browser){
        return this
        .assert.containsText('#director-6 > div > label > span:nth-child(1)','test')
        .assert.containsText('#director-6 > div > label > span:nth-child(3)','test3')
        .assert.containsText('#director-6 > div > label > div > span:nth-child(1) > span','NEW')
        .assert.containsText('#director-6 > div > div > div > div.address > div > div > div > div:nth-child(1)','123 test')
        .assert.containsText('#director-6 > div > div > div > div.address > div > div > div > div:nth-child(3) > span:nth-child(1)','victoria')
        .assert.containsText('#director-6 > div > div > div > div.address > div > div > div > div:nth-child(3) > span:nth-child(3)','V2X3C4')
        .assert.visible('#director-6-change-btn > div > span')
    }
    };
    module.exports={
        commands:[cod_dashboardcommands],
        elements:{}
    };