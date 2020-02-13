var util = require('util');


var CodFilingsCommands = {
    verfifyInitialCodState: function (coopObject) {
      return this
        .assert.containsText('#filing-header', 'Director Change')
        .assert.containsText('#AR-step-4-header', 'Certify Correct')
        .assert.containsText('#entity-incorporation-number', coopObject.identifier)
        .assert.containsText('#entity-legal-name', coopObject.legal_name)
        .assert.visible('@saveDraftButton')
        .assert.visible('@saveAndResumeLaterButton')
        .assert.visible('@cancelFilingButton')
    },
    checkFeeByIndex: function (feeName, feeValue, desiredIndex) {
        return this
            .assert.containsText({selector: '@feeName', index: desiredIndex}, feeName)
            .assert.containsText({selector: '@feeValue', index: desiredIndex}, feeValue)
    },
    checkFeeCount: function (expectedCount) {
        return this.expect.elements('@feeListItem').count.to.equal(expectedCount);
    },
    checkTotalFees: function (expectedTotalString) {
        return this.assert.containsText('@feeTotal', expectedTotalString)
    },
    startAppointingNewDirector: function () {
        return this 
        .waitForElementVisible('@AppointNewDirectorButton')
        .click('@AppointNewDirectorButton')
    },
    AddNewDirector: function (directorObject,number) {
        var _this = this;
        return this
        .waitForElementVisible('@firstname')
        .waitForElementNotVisible('button.new-director-btn')
        .setValue('@firstname',directorObject.firstname)
        .waitForElementVisible('@lastname')
        .setValue('@lastname',directorObject.lastname)
        .waitForElementVisible('@streetaddress')
        .setValue('@streetaddress',directorObject.street)
        .waitForElementVisible('@City')
        .setValue('@City',directorObject.city)
        .waitForElementVisible('@Province')
        .setValue('@Province',directorObject.province)
        .waitForElementVisible('@postalcode')
        .setValue('@postalcode',directorObject.postalcode)
        .waitForElementVisible('@country')
        .click('@country')
        .click('@NewDirectorCountry')
        .waitForElementVisible('@completeAppointingDirector')
        .click('@completeAppointingDirector')
    },
    getDynamicElement: function (elementName, number) {
        var element = this.elements[elementName];
        return util.format(element.__selector, number);
       }, 

    validateDirectorByNumber: function (directorObject, number) {
           return this
                    .assert.containsText(this.getDynamicElement('dynamicFirstName', number), directorObject.firstName)
                    .assert.containsText(this.getDynamicElement('dynamicLastName', number), directorObject.lastName)
                    .assert.containsText(this.getDynamicElement('dynamicStreet', number), directorObject.street)
                    .assert.containsText(this.getDynamicElement('dynamicCity', number), directorObject.city)
                    .assert.containsText(this.getDynamicElement('dynamicProvince', number), directorObject.province)
                    .assert.containsText(this.getDynamicElement('dynamicPostalCode', number), directorObject.postalCode)
                    .assert.containsText(this.getDynamicElement('dynamicCountry', number), directorObject.country)
                    .assert.containsText(this.getDynamicElement('dynamicAppointedDate', number), directorObject.appointedDate);                
       },

       reviewPage:function(browser){
           return this
           .waitForElementVisible('@header')
           .assert.containsText('@header','Review: Director Change')

       },
    editChangeOfAddress: function(directorObject,number) {

        return this 
                   .assert.containsText(this.getDynamicElement('dynamicFirstName',number),directorObject.firstName)
                   .assert.containsText(this.getDynamicElement('dynamicLastName',number),directorObject.lastName)
                   .assert.containsText(this.getDynamicElement('dynamicStreet',number),directorObject.street)
                   .assert.containsText(this.getDynamicElement('dynamicPostalCode', number), directorObject.postalCode)
                   .assert.containsText(this.getDynamicElement('dynamicCountry', number), directorObject.country)
                   .waitForElementVisible('@chevron')
                   .click('@chevron')
                   .waitForElementVisible('@changeofaddress')
                   .click('@changeofaddress')

    },
     
};
module.exports={
    commands:[CodFilingsCommands],
    elements:{
        feeName: "div.fee-list__item-name",
        feeValue: "div.fee-list__item-value",
        feeListItem: "li.fee-list__item",
        feeTotal: "#standalone-directors-container > div > div.col-lg-3.col-12 > aside > div > div > div.container.fee-total > div.fee-total__value",
        AppointNewDirectorButton: "#wrapper-add-director > div > div > div.col.col-3 > button > span > span",
        firstname: "#new-director__first-name",
        initial:"#new-director__middle-initial",
        lastname: "#new-director__last-name",
        streetaddress: '[name="address-form"] .street-address input',
        postalcode: '[name="address-form"] .postal-code input',
        City: ".address-city input",
        Province:'[name="address-form"] .address-region input',
        country:'[name="address-form"] .address-country',
        NewDirectorCountry:{
            selector:"//html/body/div/div[2]/div/div[4]",
            locateStrategy: "xpath"
        },    
        chevron: "#director-%s > div > div > div > div.actions > span:nth-child(2) > span > button > span > i",
        changeofaddress: "#app > div.v-menu__content.theme--light.menuable__content__active > div > div:nth-child(1) > div",
        certifyLegalName: "#certified-by-textfield",
        certifyCheckBox: '#AR-step-4-container > div > div.v-input.theme--light.v-input--selection-controls.v-input--checkbox > div > div.v-input__slot > div',
        saveAndResumeLaterButton: "#cod-save-resume-btn",
        saveDraftButton: "#cod-save-btn",
        fileAndPayButton: "#cod-file-pay-btn",
        cancelFilingButton: "#cod-cancel-btn",
        edit:"#director-%s-change-btn > div > span",
        completeAppointingDirector: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.v-btn--contained.theme--light.v-size--default.primary > span",
        dynamicFirstName: {
        selector:"#director-%s> div > label > span:nth-child(1)",
         index: 1
        },
        dynamicLastName: "#director-%s > div > label > span:nth-child(3)",
        dynamicStreet: "#director-%s > div > div > div > div.address > div > div > div > div:nth-child(1)",
        dynamicCity: "#director-%s > div > div > div > div.address > div > div > div > div:nth-child(3) > span:nth-child(1)",
        dynamicProvince: "#director-%s > div > div > div > div.address > div > div > div > div:nth-child(3) > span:nth-child(2)",
        dynamicPostalCode:"#director-%s > div > div > div > div.address > div > div > div > div:nth-child(3) > span:nth-child(3)",
        dynamicCountry: "#director-%s > div > div > div > div.address > div > div > div > div:nth-child(4)",
        dynamicAppointedDate: "#director-%s > div > div > div > div.director_dates > div:nth-child(1)",
        dynamicCessationDate: "#director-%s > div > div > div > div > div.director_dates > div:nth-child(4)",
        dynamicEditButton: "#director-%s-change-btn",
        nextButton:"#cod-next-btn > span",
        header:"#filing-header-review"
    },
}


