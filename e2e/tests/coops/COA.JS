
module.exports={
    '@tags': ['COA', 'single'],
    step1:function (browser){
        browser
        .url('https://coops-test.pathfinder.gov.bc.ca/auth/')
        .waitForElementVisible('body',1000)
        .setValue('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]','CP0001024')
        .setValue('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div:nth-child(3) > div > div > div.v-input__slot > div.v-text-field__slot > input[type=password]','115692683')
        .click('#app > div.application--wrap > div.app-body > div > div > article > div > div > div > form > div.passcode-form__row.passcode-form__form-btns > button.sign-in-btn.v-btn.v-btn--large.theme--light.primary > div')
    },
    'Change of Address':function(browser){
        browser
        .waitForElementVisible('div.entity-name')
        .waitForElementVisible('#btn-standalone-addresses',2000)
       .click('#btn-standalone-addresses')
       .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > div > div','MISSION COOPERATIVE HOUSING ASSOCIATION')
       .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > dl > dd.incorp-number','CP0001024')
       .assert.containsText('#filing-header','Change of Office Addresses')
       .assert.visible('#reg-off-addr-change-btn','Change of Office Addresses')
       .waitForElementVisible('#reg-off-addr-change-btn > div',1000)
       .click('#reg-off-addr-change-btn > div')
       browser
       .waitForElementVisible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]')
       .execute(function() {
           var event = new Event('input', {
               'bubbles': true,
               'cancelable': true
           });
           var element = document.querySelector('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]');                                
           element.value = "123 test street";  
           element.dispatchEvent(event);                 
           return element;

       }, [], function(result) {
           console.log(result);
       });
browser
.waitForElementVisible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]', function() {
   browser
       .execute(function() {
           var event = new Event('input', {
               'bubbles': true,
               'cancelable': true
           });

           var element = document.querySelector('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]');                                
           element.value = "additional info";     
           element.dispatchEvent(event);                
           return element;

       }, [], function(result) {
           console.log(result);
       });
});

browser
.waitForElementVisible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(1) > div > div.v-input__slot > div > input[type=text]', function() {
   browser
       .execute(function() {
           var event = new Event('input', {
               'bubbles': true,
               'cancelable': true
           });

           var element = document.querySelector('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(1) > div > div.v-input__slot > div > input[type=text]');                                
           element.value = "Victoria"; 
           element.dispatchEvent(event);                    
           return element;

       }, [], function(result) {
           console.log(result);
       });
});

browser
.waitForElementVisible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]', function() {
   browser
       .execute(function() {
           var event = new Event('input', {
               'bubbles': true,
               'cancelable': true
           });

           var element = document.querySelector('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]');                                
           element.value = "V1V1V1"; 
           element.dispatchEvent(event);                    
           return element;

       }, [], function(result) {
           console.log(result);
       });
});

browser
.waitForElementVisible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input[type=text]', function() {
   browser
       .execute(function() {
           var event = new Event('input', {
               'bubbles': true,
               'cancelable': true
           });

           var element = document.querySelector('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input[type=text]');                                
           element.value = "CANADA";  
           element.dispatchEvent(event);                   
           return element;

       }, [], function(result) {
           console.log(result);
       });
});
    browser
        .click('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div:nth-child(1) > div > div > div.v-input__slot > div > div')
        .click('#reg-off-update-addr-btn > div')
    },
    'Assertions for change in address':function(browser){
        browser
        .assert.visible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > label','Delivery Address')
        .assert.visible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)','123test')
        .assert.visible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3) > span:nth-child(3)','V1V1V1')
        .assert.visible('#standalone-office-address-article > section:nth-child(2) > div > ul > li:nth-child(2) > div > label','Mailing Address')
        .assert.visible('#reg-off-addr-reset-btn')
        .assert.visible('#standalone-office-address-container > aside > div > div > div.container.fee-total > div.fee-total__name','Total Fees')
        //.assert.visible('#standalone-office-address-container > aside > div > div > div.container.fee-total > div.fee-total__value > div','$20.00')
    },
  'Steps For Certify Page':function(browser){
      browser
        .setValue('#certified-by-textfield','test')
        .click('#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div')
        .click('#coa-file-pay-btn')
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
'Assertions on DashBoard after filing completes': function (browser) {
    browser
        .waitForElementVisible('#dashboard', 20000)
        .waitForElementVisible('html body div#app.application.app-container.theme--light div.application--wrap div.app-body main div#dashboard div#dashboardContainer.container.view-container article#dashboardArticle div.dashboard-content div.dashboard-content__main section div ul.v-expansion-panel.theme--light li.v-expansion-panel__container.filing-history-list div.v-expansion-panel__header div.v-expansion-panel__header__status')
        .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > dl > dd.incorp-number','CP0001024')
        .assert.visible('#btn-standalone-addresses')
        .assert.visible('#btn-standalone-directors')
        .assert.visible('#dashboardArticle > div > div > section:nth-child(2) > header > h2','Recent Filing History (1)')
        .assert.visible('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__title','Address Change')
        .assert.visible('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__header > div.v-expansion-panel__header__status','FILED AND PAID')
        .assert.visible('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__body > ul > li:nth-child(1) > button > div > div')
        .assert.visible('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__body > ul > li:nth-child(2) > button > div > div')
        .end();     
}
};
