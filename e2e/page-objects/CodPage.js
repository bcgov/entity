var util = require('util');
var CodFilingsCommands = {
    verfifyInitialCodState: function (coopObject) {
      return this
        .assert.containsText('#filing-header', 'Change of Directors')
        .assert.containsText('#AR-step-4-header', 'Certify Correct')
        .assert.containsText('dd.incorp-number', coopObject.identifier)
        .assert.containsText('div.entity-name', coopObject.legal_name)
        .assert.visible('@saveDraftButton')
        .assert.visible('@saveAndResumeLaterButton')
        .assert.visible('@cancelFilingButton')
        .assert.visible('@fileAndPayButton');
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
        return this.waitForElementVisible('@firstname')
        .waitForElementNotVisible('button.new-director-btn')
        .setValue('@firstname',directorObject.firstname)
       // .waitForElementVisible('@initial')
        //.setValue('@initial',directorObject.lastname)
        .waitForElementVisible('@lastname')
        .setValue('@lastname',directorObject.lastname)
        .waitForElementVisible('@streetaddress')
        .setValue('@streetaddress',directorObject.steet)
        .waitForElementVisible('@additionalstreet')
        .setValue('@additionalstreet',directorObject.optionalfield)
        .useXpath()
        .waitForElementVisible('@City')
        .setValue('@City',directorObject.City)
        .useCss()
        .waitForElementVisible('@province')
        .click('@province')
        .click('@BC')
        .waitForElementVisible('@postalcode')
        .setValue('@postalcode',directorObject.postalcode)
        .waitForElementVisible('@country')
        .setValue('@country',directorObject.country)
        .waitForElementVisible('@deliveryinstructions')
        .setValue('@deliveryinstructions',directorObject.deliveryinstructions)
        .waitForElementVisible('@completeAppointingDirector')
        .click('@completeAppointingDirector')
        //.assert.visible('@edit')
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
    
       }
};
module.exports={
    commands:[CodFilingsCommands],
    elements:{
        feeName: "div.fee-list__item-name",
        feeValue: "div.fee-list__item-value",
        feeListItem: "li.fee-list__item",
        feeTotal: "div.fee-total__value",
        AppointNewDirectorButton: "#directors > div:nth-child(2) > button > div",
        firstname: "#new-director__first-name",
        initial: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div.v-input.item.director-initial.v-text-field.v-text-field--box.v-text-field--enclosed.theme--light > div > div.v-input__slot > div > input[type=text]",
        lastname: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]",
        streetaddress: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]",
        additionalstreet: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]",
        postalcode: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]",
        deliveryinstructions: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea",
        City: {
            selector: '//*[@id="directors"]/div[3]/ul[1]/li/div/div/form/div[2]/form/div[3]/div[1]/div/div[1]/div/input',
            locateStrategy: "xpath"
        },
        province: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections",
        BC: "#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div > div",
        country: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input[type=text]",
        certifyLegalName: "#certified-by-textfield",
        certifyCheckBox: "#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div",
        saveAndResumeLaterButton: "#cod-save-resume-btn",
        saveDraftButton: "#cod-save-btn",
        fileAndPayButton: "#cod-file-pay-btn",
        cancelFilingButton: "#cod-cancel-btn",
        edit:"#director-9-change-btn > div > span",
        completeAppointingDirector: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.theme--light.primary > div",
        dynamicFirstName: "#director-%s > div > div > label > span:nth-child(1)",
        dynamicLastName: "#director-%s > div > div > label > span:nth-child(3)",
        dynamicStreet: "#director-%s> div > div > div > div > div.address > div > div > div > div:nth-child(1)",
        dynamicCity: "#director-%s > div > div > div > div > div.address > div > div > div > div:nth-child(3) > span:nth-child(1)",
        dynamicProvince: "#director-%s > div > div > div > div > div.address > div > div > div > div:nth-child(3) > span:nth-child(2)",
        dynamicPostalCode:"#director-%s > div > div > div > div > div.address > div > div > div > div:nth-child(3) > span:nth-child(3)",
        dynamicCountry: "#director-%s > div > div > div > div > div.address > div > div > div > div:nth-child(4)",
        dynamicAppointedDate: "#director-%s > div > div > div > div > div.director_dates > div:nth-child(2)",
        dynamicCessationDate: "#director-%s > div > div > div > div > div.director_dates > div:nth-child(4)",
        dynamicEditButton: "#director-%s-change-btn"
    },
}
