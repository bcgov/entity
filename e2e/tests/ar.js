module.exports={
    '@tags': ['ar'],
    'signin':function (browser){
        browser
        .url('https://coops-test.pathfinder.gov.bc.ca/auth/')
        .waitForXHR('https://pay-api-test.pathfinder.gov.bc.ca/api/v1/status/PAYBC', 5000, function clickTrigger() {
            browser
          }, function testCallback(xhrs) {
              browser.assert.equal(xhrs[0].method, "GET");
              browser.assert.equal(xhrs[0].status, "success");
              browser.assert.equal(xhrs[0].httpResponseCode, 200);
          });
        
    browser
        .setValue('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]','CP0000977')
        .setValue('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div.v-text-field__slot > input[type=password]','448226753')
        browser.click('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div.passcode-form__row.passcode-form__form-btns > button.sign-in-btn.v-btn.v-btn--large.theme--light.primary > div')
        .pause(10000)
},
'DashBoard':function(browser){
   browser
    .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > dl > dd.incorp-number','CP0000977')
    .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > div','WASHINGTON CO-OPERATIVE HOUSING ASSOCIATION')
    .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > header > h2','Recent Filing History (0)')
    .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > div > div.no-results.v-card.v-card--flat.v-sheet.theme--light > div > div.no-results__title','You have no filing history')
    //ASSERTING THE BASE ADDRESSES
    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > header > h2','Office Addresses')
    .assert.visible('#btn-standalone-addresses > div > span')
    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__title','Mailing Address')
    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__subtitle > ul > li:nth-child(1)','1235')
    //.assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__subtitle > ul > li:nth-child(2)','Campbell River BC V9W 3M2')
    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__subtitle > ul > li:nth-child(3)','CA')
    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__title','Delivery Address')
    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__subtitle > ul > li:nth-child(1)','1235')
    //.assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__subtitle > ul > li:nth-child(2)','Campbell River BC V9W 3M2')
    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__subtitle > ul > li:nth-child(3)','CA')
    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(2) > header > h2','Current Directors')
    .assert.visible('#btn-standalone-directors > div > span')
    .assert.visible('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button > div')
   // browser.assert.visible('#dashboardArticle > div > aside > section:nth-child(2) > div*:nth-child(7)')
},
  'AR FILING PAGE':function(browser){
    browser
   .waitForElementVisible('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button')
   .waitForXHR('https://pay-api-test.pathfinder.gov.bc.ca/api/v1/fees/CP/OTANN', 5000, function clickTrigger() {
        browser.click('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button')
      }, function testCallback(xhrs) {
          browser.assert.equal(xhrs[0].method, "GET");
          browser.assert.equal(xhrs[0].status, "success");
          browser.assert.equal(xhrs[0].httpResponseCode, 200);
      });
browser
   .assert.containsText('#AR-header','File 2019 Annual Report')
    .assert.containsText('#AR-step-1-header','1. Annual General Meeting Date')
    .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > dl > dd.incorp-number','CP0000977')
    .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > div','WASHINGTON CO-OPERATIVE HOUSING ASSOCIATION')
    .assert.containsText('#annual-report-container > aside > div > div > ul > li > div.fee-list__item-name','Annual Report')
    .assert.containsText('#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__name','Total Fees')
   // .assert.containsText('#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__value > div','$30.00')
    .click('#agm-textfield')
    .clearValue('#agm-textfield')
    .setValue('#agm-textfield','2019/05/07')
    .assert.containsText('#AR-step-2-header','2. Registered Office Addresses (as of 2019 Annual General Meeting)')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > label','Delivery Address')
    .assert.visible('#reg-off-addr-change-btn > div > span')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)','1235')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(1)','Campbell River')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)','V9W 3M2')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > label','Mailing Address')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(1)','1235')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(1)','Campbell River')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)','V9W 3M2')
    .waitForElementVisible('#reg-off-addr-change-btn',1000)
    .click('#reg-off-addr-change-btn ')
    .click('input[name=street-address]')
    .clearValue('input[name=street-address]')
    .setValue('input[name=street-address]','123 test')
    .click('input[name=street-address-additional]')
    .clearValue('input[name=street-address-additional]')
    .setValue('input[name=street-address-additional]','321 test')
    .click('input[name=address-city]')
    .clearValue('input[name=address-city]')
    .setValue('input[name=address-city]','victoria')
    .click('input[name=postal-code]')
    .clearValue('input[name=postal-code]')
    .setValue('input[name=postal-code]','v1v1v1')
    .click('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea')
    .clearValue('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea')
    .setValue('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea','optional')
    .click('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div:nth-child(1) > div > div > div.v-input__slot > div > div')
    .assert.visible('#reg-off-update-addr-btn')
    .assert.visible('#reg-off-cancel-addr-btn > div')
    .click('#reg-off-update-addr-btn')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)','123 test')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(2)','321 test')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)','v1v1v1')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > label','Mailing Address')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(1)','123 test')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(2)','321 test')
    .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)','v1v1v1')
    .assert.containsText('#annual-report-container > aside > div > div > ul > li:nth-child(2) > div.fee-list__item-name','Change of Registered Office Address')
   // .assert.containsText('#annual-report-container > aside > div > div > ul > li:nth-child(2) > div.fee-list__item-value','$20.00')
    .assert.visible('#reg-off-addr-reset-btn > div')
},
'Appoint Director':function(browser){
    browser
    .assert.containsText('#AR-step-3-header','3. Directors')
    .waitForElementVisible('#directors > div:nth-child(2) > button > div','1000')
    .click('#directors > div:nth-child(2) > button > div')
    .setValue('#new-director__first-name','test')
    .setValue('input[aria-label="Initial"]','test2')
    .setValue('input[aria-label="Last Name"]','test3')
    .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]','123 test st')
    .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]','321 test st')
    browser
    .useXpath()
    .setValue('//*[@id="directors"]/div[3]/ul[1]/li/div/div/form/div[2]/form/div[3]/div[1]/div/div[1]/div/input','victoria')
    browser
    .useCss()
    .click('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections')
    .click('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div > div')
    .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]','v1v1v1')
    .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input[type=text]','canada')
    .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea','optional')
    .assert.visible('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button:nth-child(2) > div')
    .click('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.theme--light.primary > div')
    .assert.containsText('#director-9 > div > label > div > span:nth-child(1) > span','NEW')
    .assert.containsText('#director-9 > div > div > div > div.director_dates > div:nth-child(2)','2019-05-07')
    .assert.visible('#director-9-change-btn > div > span')
    .click('#director-7-cease-btn > div > span')
    .assert.visible('#director-7-cease-btn > div > span')
},
'Certify Page':function(browser){
    browser
    .assert.containsText('#AR-step-4-header','4. Certify Correct')
    .setValue('#certified-by-textfield','test')
    .click('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div')
    .assert.containsText('#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__name','Total Fees')
   // .assert.containsText('#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__value > div','$70.00')
    .assert.visible('#ar-save-btn')
    .assert.visible('#ar-save-resume-btn')
    .assert.visible('#ar-cancel-btn')
    .assert.visible('#ar-file-pay-btn > div')
    //.assert.visible('#app > div.application--wrap > header > div > div > span > button')
    .click('#ar-file-pay-btn > div') 
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
},
'Checking Dashboard':function(browser){
    browser
    .assert.containsText('#dashboardArticle > div > div > section:nth-child(1) > header > h2','To Do (0)')
    .assert.containsText('#dashboardArticle > div > div > section:nth-child(1) > div > div > div > div.no-results__subtitle','Filings that require your attention will appear here')
    .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > header > h2','Recent Filing History (1)')
    .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__body','Annual Report (2019)')
    .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__header > div.v-expansion-panel__header__status','FILED AND PAID')
    //New Director
    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(2) > div > ul > li:nth-child(7) > div.director-info > div.list-item__title','TEST TEST3')
    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(2) > div > ul > li:nth-child(7) > div.director-info > div.list-item__subtitle > ul > li:nth-child(1)','123 test st')
    .end();
}
};
