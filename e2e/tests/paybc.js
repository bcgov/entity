module.exports={
    '@tags': ['cod'],
    step1:function (browser){
        browser
        .url('https://coops-test.pathfinder.gov.bc.ca/auth/')
        .waitForElementVisible('body',1000)
        .setValue('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]','CP0001229')
        .setValue('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div.v-text-field__slot > input[type=password]','391046331')
        .click('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div.passcode-form__row.passcode-form__form-btns > button.sign-in-btn.v-btn.v-btn--large.theme--light.primary > div')
        .pause(10000)
    },
    step2:function(browser){
        browser
        .click('#btn-standalone-directors').pause(10000)
        .click('#directors > div:nth-child(2) > button > div')
        .setValue('#new-director__first-name','test')
        .setValue('input[aria-label="Initial"]','test2')
        .setValue('input[aria-label="Last Name"]','test3')
        .setValue('[name=street-address]','123 test st')
        .setValue('[name=street-address-additional]','321 test st')
        .setValue('[name=address-city]','victoria')
        .click('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections')
        .click('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div > div')
        .setValue('[name=postal-code]','v1v1v1')
        .setValue('[name=address-country]','canada')
        .setValue('[name=delivery-instructions]','optional')
        .click('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.theme--light.primary > div')
    },
    step3:function(browser){
        browser
        .click('#director-1-cease-btn > div > span')
        .setValue('#certified-by-textfield','test')
        .click('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div')
        .click('#cod-file-pay-btn').pause(10000)
    },
    step4:function(browser){
        browser
        .click('#paylistbutton > span.hidden-xs')
        .click('#credit_payBtn')
        .setValue('[name=trnCardNumber]','4030000010001234')
        .setValue('[name=trnCardCvd]','123')
        .click('[name=submitButton]')
    }
};