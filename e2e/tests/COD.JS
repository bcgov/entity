module.exports = {
    '@tags': ['rcod'],
    'Coops Login': function (browser) {
        browser
            .url('https://coops-test.pathfinder.gov.bc.ca/auth/')
            .waitForElementVisible('input[aria-label="Enter your Incorporation Number"]')
            .setValue('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]', 'CP0002141')
            .setValue('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div.v-text-field__slot > input[type=password]', '415563022')
            .click('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div.passcode-form__row.passcode-form__form-btns > button.sign-in-btn.v-btn.v-btn--large.theme--light.primary > div');
                          
    },
    'Coops Dasboard to COD': function (browser) {
        browser
            .waitForElementVisible('#btn-standalone-directors')
            .waitForElementNotVisible('div.loading-container')
            .waitForXHR('https://legal-api-test.pathfinder.gov.bc.ca/api/v1/businesses/CP0002141/directors', 5000)
                function testCallback(xhrs) {
                browser.assert.equal(xhrs[0].method, "GET");
                browser.assert.equal(xhrs[0].status, "success");
                browser.assert.equal(xhrs[0].httpResponseCode, 200);
            }; 
        browser
            .assert.containsText('#app > div.application--wrap > div.app-body > main > div.entity-info > div > dl > dd.incorp-number','CP0002141')
            .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > div','DADS AUTO DELIVERIES CO-OP')
            .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > header > h2','Recent Filing History (0)')
            .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > div > div.no-results.v-card.v-card--flat.v-sheet.theme--light > div > div.no-results__title','You have no filing history')
            .assert.visible('#btn-standalone-addresses > div > span')
            .waitForXHR('', 5000, function clickTrigger() {
        browser.click('#btn-standalone-directors > div > span')
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
            .click('#cod-save-resume-btn > div')
            .waitForXHR('https://legal-api-test.pathfinder.gov.bc.ca/api/v1/businesses/CP0002141/directors', 5000) 
               function testCallback(xhrs) {
                  browser.assert.equal(xhrs[0].method, "GET");
                  browser.assert.equal(xhrs[0].status, "success");
                  browser.assert.equal(xhrs[0].httpResponseCode, 200);
              };
            browser
            .assert.containsText('#dashboardArticle > div > div > section:nth-child(1) > header > h2','To Do (2)')
            .assert.visible('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li:nth-child(1) > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button > div')
            .assert.containsText('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li:nth-child(1) > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button > div','Resume')
            .assert.attributeEquals('#btn-standalone-addresses', 'disabled',"true")
            .assert.attributeEquals('#btn-standalone-directors','disabled',"true")
            .click('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li:nth-child(1) > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button > div')
        //Making sure all the changes are present 
            .assert.containsText('#director-5 > div > label > span:nth-child(1)','test')
            .assert.containsText('#director-5 > div > label > span:nth-child(3)','test3')
            .assert.containsText('#director-5 > div > div > div > div.address > div > div > div > div:nth-child(1)','123 test')
            .assert.containsText('#director-5 > div > label > div > span:nth-child(1)','NEW')
            .assert.visible('#director-5-change-btn > div')
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
            .assert.visible('#dashboardArticle > div > div > section:nth-child(1) > header','To Do (1)')
            .assert.visible('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button > div','disabled',"false")
            .assert.attributeEquals('#btn-standalone-addresses', 'disabled',"false")
            .assert.attributeEquals('#btn-standalone-directors','disabled',"false")
            .assert.visible('#dashboardArticle > div > div > section:nth-child(2) > header > h2','Recent Filing History (1)')
            .assert.visible('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__body','Director Change')
            .assert.visible('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__header > div.v-expansion-panel__header__status','FILED AND PAID')
            .assert.visible('#dashboardArticle > div > aside > section:nth-child(2) > div > ul > li:nth-child(5) > div.director-info > div.list-item__title','TEST TEST3')
            .assert.visible('#dashboardArticle > div > aside > section:nth-child(2) > div > ul > li:nth-child(5) > div.director-info > div.list-item__subtitle > ul > li:nth-child(1)','123 test st')
            .end();
    }
};
