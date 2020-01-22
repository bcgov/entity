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

}
module.exports={
    commands:[CodFilingsCommands],
    elements:{
        AppointNewDirectorButton: "#directors > div:nth-child(2) > button > span > span",
        streetaddress:"#input-165",
        additionalstreet:"#input-168",
        city:"#input-171",
        postalcode:"#input-181",
        country:"#input-184",
        completeAppointingDirector:"#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.v-btn--contained.theme--light.v-size--default.primary > span"

    }}