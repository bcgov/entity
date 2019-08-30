module.exports = {
    '@tags': ['cod'],
    'Coops Login': function (browser) {
        browser
            .url('https://coops-test.pathfinder.gov.bc.ca/auth/')
            .waitForElementVisible('input[aria-label="Enter your Incorporation Number"]')
            .setValue('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]', 'CP0001229')
            .setValue('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div.v-text-field__slot > input[type=password]', '391046331')
            .click('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div.passcode-form__row.passcode-form__form-btns > button.sign-in-btn.v-btn.v-btn--large.theme--light.primary > div');
                          
    },
    'Coops Dasboard to COD': function (browser) {
        browser
            .waitForElementVisible('#btn-standalone-directors')
            .waitForElementNotVisible('div.loading-container')
            .waitForXHR('', 5000, function clickTrigger() {
                browser.click('#btn-standalone-directors');
            }, function testCallback(xhrs) {
                browser.assert.equal(xhrs[0].method, "GET");
                browser.assert.equal(xhrs[0].status, "success");
                browser.assert.equal(xhrs[0].httpResponseCode, 200);
            });
            
        browser
            .waitForElementVisible('button.new-director-btn')
            .click('button.new-director-btn')
            .waitForElementVisible('#new-director__first-name')
            .waitForElementNotVisible('button.new-director-btn')
            .setValue('#new-director__first-name', 'test')
            .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div.v-input.item.director-initial.v-text-field.v-text-field--box.v-text-field--enclosed.theme--light > div > div.v-input__slot > div > input[type=text]', 'test2')
            .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]', 'test3')
            .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]', '123 test')
            .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]', '321 test')
            .setValue('input[name=address-city]', 'victoria')
            .click('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections')
            .click('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div > div')
            .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]', 'V2X3C4')
            .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input[type=text]', 'canada')
            .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea', 'optional')
            .click('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.theme--light.primary > div')
    },
    'File and Pay': function (browser) {
        browser
            .click('#director-1-cease-btn > div > span')
            .setValue('#certified-by-textfield', 'test')
            .click('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div')
            .click('#cod-file-pay-btn')
    },
    'PayBC': function (browser) {
        browser
            .waitForElementVisible('#paylistbutton', 20000)
            .click('#paylistbutton')
            .waitForElementVisible('#credit_payBtn')
            .click('#credit_payBtn')
            .waitForElementVisible('input[name=trnCardNumber]')
            .setValue('input[name=trnCardNumber]', '4030000010001234')
            .setValue('input[name=trnCardCvd]', '123')
            .moveToElement('input[name=submitButton]', 10, 10)
            .click('input[name=submitButton]')
    },
    'Confirm Filing Completes': function (browser) {
        browser
            .waitForElementVisible('#dashboard', 20000)
            .waitForElementVisible('html body div#app.application.app-container.theme--light div.application--wrap div.app-body main div#dashboard div#dashboardContainer.container.view-container article#dashboardArticle div.dashboard-content div.dashboard-content__main section div ul.v-expansion-panel.theme--light li.v-expansion-panel__container.filing-history-list div.v-expansion-panel__header div.v-expansion-panel__header__status')
            .end();
    }
};