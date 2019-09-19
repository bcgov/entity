
module.exports={
    step1:function (browser){
        browser
        .url('https://coops-dev.pathfinder.gov.bc.ca/auth/signin/idir')
        .assert.visible('#login-to','Log in to sfstest7.gov.bc.ca')
        .setValue('#user','johnstaf')
        .setValue('#password','Automation4TheWin')
        .click('#login-form > section > div > div.col-sm-7.col-md-8 > div > div.panel-body > div.login-form-action > input')
    },
    step2:function(browser){
        browser
        .assert.visible('#app > div > div.app-body > div > div > article > h1','Search Co-operatives')
        .assert.visible('#app > div > div.app-body > div > div > article > h2','Incorporation Number')
        .setValue('#input-14','CP0001202')
        .click('#app > div > div.app-body > div > div > article > div > form > div.layout.align-end.justify-end > button > span')
        .pause(10000)
    },
    step3:function(browser){
        browser
                    .waitForElementVisible('div.entity-name')
                    .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > dl > dd.incorp-number','CP0000977')
                    .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > div','WASHINGTON CO-OPERATIVE HOUSING ASSOCIATION')
                    .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > header > h2','Recent Filing History (0)')
                    .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > div > div.no-results.v-card.v-card--flat.v-sheet.theme--light > div > div.no-results__title','You have no filing history')
                    //ASSERTING THE BASE ADDRESSES
                    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > header > h2','Office Addresses')
                    .assert.visible('#btn-standalone-addresses > div > span')
                    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__title','Mailing Address')
                    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__subtitle > ul > li:nth-child(1)','502 - 373 BURNSIDE RD. E.')
                    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__subtitle > ul > li:nth-child(2)','VICTORIA BC V9A 1A7')
                    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__subtitle > ul > li:nth-child(3)','CA')
                    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__title','Delivery Address')
                    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__subtitle > ul > li:nth-child(1)','502 - 373 BURNSIDE RD. E.')
                    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__subtitle > ul > li:nth-child(2)','VICTORIA BC V9A 1A7')
                    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__subtitle > ul > li:nth-child(3)','CA')
                    .assert.containsText('#dashboardArticle > div > aside > section:nth-child(2) > header > h2','Current Directors')
                    .assert.visible('#btn-standalone-directors > div > span')
                    .assert.visible('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button > div') 
    },
    step4:function(browser){
        browser
        .waitForElementVisible('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button')
        .click('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button')
        .waitForElementVisible('#AR-header')
        .assert.containsText('#AR-header','File 2019 Annual Report')
        .assert.containsText('#AR-step-1-header','1. Annual General Meeting Date')
        .assert.containsText('#app > div.application--wrap > div.app-body > main > div.entity-info.staff > div > div.business-info > div.info-left > dl > dd.incorp-number.ml-2','CP0001202')
        .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > div','COMMON GROUND HOUSING CO-OPERATIVE')
        .assert.containsText('#annual-report-container > aside > div > div > ul > li > div.fee-list__item-name','Annual Report')
        .assert.containsText('#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__name','Total Fees')
        .assert.containsText('#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__value > div','$30.00')
        .waitForElementVisible('#agm-textfield')
        .click('#agm-textfield')
        .waitForElementVisible('#agm-datepicker > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(5) > td:nth-child(4) > button > div')
        .click('#agm-datepicker > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(5) > td:nth-child(4) > button > div')
        .assert.containsText('#AR-step-2-header','2. Registered Office Addresses (as of 2019 Annual General Meeting)')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > label','Delivery Address')
        .assert.visible('#reg-off-addr-change-btn > div > span')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)','455 street')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(1)','SURREY')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)','V4A 4A2')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > label','Mailing Address')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(1)','1707 - 130TH ST.')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(1)','SURREY')
        .assert.containsText('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)','V4A 4A2')
        .waitForElementVisible('#reg-off-addr-change-btn');
    browser.assert.cssClassNotPresent('#reg-off-addr-change-btn', 'v-btn--disabled')
    },
    step5:function(browser){
        browser
        .waitForElementVisible('#reg-off-addr-change-btn')
        .click('#reg-off-addr-change-btn')
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]', function() {
            browser
                .execute(function() {
                    var event = new Event('input', {
                        'bubbles': true,
                        'cancelable': true
                    });

                    var element = document.querySelector('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]');                                
                    element.value = "123 test street";  
                    element.dispatchEvent(event);                 
                    return element;

                }, [], function(result) {
                    console.log(result);
                });
        });

    browser
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]', function() {
            browser
                .execute(function() {
                    var event = new Event('input', {
                        'bubbles': true,
                        'cancelable': true
                    });

                    var element = document.querySelector('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]');                                
                    element.value = "additional info";     
                    element.dispatchEvent(event);                
                    return element;

                }, [], function(result) {
                    console.log(result);
                });
        });

    browser
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(1) > div > div.v-input__slot > div > input[type=text]', function() {
            browser
                .execute(function() {
                    var event = new Event('input', {
                        'bubbles': true,
                        'cancelable': true
                    });

                    var element = document.querySelector('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(1) > div > div.v-input__slot > div > input[type=text]');                                
                    element.value = "Victoria"; 
                    element.dispatchEvent(event);                    
                    return element;

                }, [], function(result) {
                    console.log(result);
                });
        });

    browser
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]', function() {
            browser
                .execute(function() {
                    var event = new Event('input', {
                        'bubbles': true,
                        'cancelable': true
                    });

                    var element = document.querySelector('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]');                                
                    element.value = "V8V 4K9"; 
                    element.dispatchEvent(event);                    
                    return element;

                }, [], function(result) {
                    console.log(result);
                });
        });

    browser
        .waitForElementVisible('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input', function() {
            browser
                .execute(function() {
                    var event = new Event('input', {
                        'bubbles': true,
                        'cancelable': true
                    });

                    var element = document.querySelector('#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input');                                
                    element.value = "CANADA";  
                    element.dispatchEvent(event);                   
                    return element;

                }, [], function(result) {
                    console.log(result);
                });
        });
        browser
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
        // .assert.containsText('#annual-report-container > aside > div > div > ul > li:nth-child(2) > div.fee-list__item-value','$20.00')
        .assert.visible('#reg-off-addr-reset-btn > div');
  },   
  'Appoint Director':function(browser){
    browser
        .assert.containsText('#AR-step-3-header','3. Directors')
        .waitForElementVisible('#directors > div:nth-child(2) > button > div')
        .click('#directors > div:nth-child(2) > button > div')
        .waitForElementVisible('#new-director__first-name')
        .setValue('#new-director__first-name','first')
        .waitForElementVisible('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div.v-input.item.director-initial.v-text-field.v-text-field--box.v-text-field--enclosed.theme--light > div > div.v-input__slot > div > input[type=text]')
        .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div.v-input.item.director-initial.v-text-field.v-text-field--box.v-text-field--enclosed.theme--light > div > div.v-input__slot > div > input[type=text]','initial')
        .waitForElementVisible('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]')
        .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]','last')
        .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]','123 test st')
        .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]','321 test st');

    browser
        .useXpath()
        .setValue('//*[@id="directors"]/div[3]/ul[1]/li/div/div/form/div[2]/form/div[3]/div[1]/div/div[1]/div/input','victoria');

    browser
        .useCss()
        .click('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections')
        .click('#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div > div')
        .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]','v1v1v1')
        .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input[type=text]','canada')
        .setValue('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea','optional')
        .assert.visible('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button:nth-child(2) > div')
        .click('#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.theme--light.primary > div')
        .waitForElementVisible('#director-11 > div > label > div > span:nth-child(1) > span')
        .assert.containsText('#director-11 > div > label > div > span:nth-child(1)','NEW')
  },
  'Certify Page':function(browser){
    browser
        .assert.containsText('#AR-step-4-header','4. Certify Correct')
        .setValue('#certified-by-textfield','test')
        .click('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div')
        .assert.containsText('#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__name','Total Fees')
        .assert.visible('#ar-save-btn')
        .assert.visible('#ar-save-resume-btn')
        .assert.visible('#ar-cancel-btn')
        .assert.visible('#ar-file-pay-btn > div')

        if
         (browser.click('#ar-file-pay-btn > div')!=null)
         {
             console.log("this shouldnot be the case")
         }
         else{
             browser.click('#ar-cancel-btn > div')
         }
},
};