var ArFilingsCommands = {
    verfifyInitialArState: function (coopObject) {
        return this
            .assert.containsText('#AR-header', 'File 2018 Annual Report')
            .assert.containsText('#AR-step-1-header', '1. Annual General Meeting Date')
            .assert.containsText('#AR-step-2-header', '2. Registered Office Addresses')
            .assert.containsText('#AR-step-3-header', '3. Directors')
            .assert.containsText('#AR-step-4-header', '4. Certify Correct')
            .assert.containsText('#entity-incorporation-number', coopObject.identifier)
            .assert.containsText('#entity-legal-name', coopObject.legal_name)
            .assert.visible('@saveDraftButton')
            .assert.visible('@saveAndResumeLaterButton')
            .assert.visible('@cancelFilingButton')
            .assert.visible('@fileAndPayButton');
    },
    checkFeeByIndex: function (feeName, feeValue, desiredIndex) {
        return this
            .assert.containsText({selector: '@feeName', index: desiredIndex}, feeName)
            .assert.containsText({selector: '@feeValue', index: desiredIndex}, feeValue);
    },
    checkFeeCount: function (expectedCount) {
        return this.expect.elements('@feeListItem').count.to.equal(expectedCount);
    },
    checkTotalFees: function (expectedTotalString) {
        return this.assert.containsText('@feeTotal', expectedTotalString);
    },    
    verifyOfficeAddresses: function (coopObject) {
        return this
            .assert.containsText('@officeDeliveryLine1', coopObject.delivery.line1)
            .assert.containsText('@officeDeliveryLine2', coopObject.delivery.line2)
            .assert.containsText('@officeDeliveryLine3', coopObject.delivery.line3)
            .assert.containsText('@officeMailingLine1', coopObject.mailing.line1)
            .assert.containsText('@officeMailingLine2', coopObject.mailing.line2)
            .assert.containsText('@officeMailingLine3', coopObject.mailing.line3);
    },

 startEditingOfficeAddresses: function () {
        return this
            .waitForElementVisible('@changeOfficeAddressButton')
            .click('@changeOfficeAddressButton');
    },
    fillInAddressField: function (fieldSelector, fieldValue, browser) {
        return this.waitForElementVisible(fieldSelector, function() {
            browser.execute(function(fieldValue, fieldSelector) {
                    var event = new Event('input', {
                        'bubbles': true,
                        'cancelable': true
                    });

                    var element = document.querySelector(fieldSelector);                                
                    element.value = fieldValue;  
                    element.dispatchEvent(event);                 
                    return element;

                }, [fieldValue, fieldSelector], function(result) {
                    console.log('fillInAddressField: ' + result.state);
                });
        });
    },
    appointDirector: function () {
        return this
            .waitForElementVisible('@appointDirectorButton')
            .click('@appointDirectorButton')
            .waitForElementVisible('@newDirectorFirstName')
            .setValue('@newDirectorFirstName', 'First')
            .waitForElementVisible('@newDirectorMiddleInitial')
            .setValue('@newDirectorMiddleInitial', 'Initial')
            .waitForElementVisible('@newDirectorLastName')
            .setValue('@newDirectorLastName', 'Last')
            .setValue('@newDirectorStreetAddress', '123 test st')
            .waitForElementVisible('@newDirectorCity')
            .setValue('@newDirectorCity', 'Victoria')
            .setValue('@newDirectorProvinceBox','BC')
            .setValue('@newDirectorPostalCode', 'V9A 1A7')
            .useCss()
            .click('@newDirectorCountry')
            .click('@NewDirectorCountrySelect')
            .click('@newDirectorDoneButton')
    }
};
module.exports={
    commands:[ArFilingsCommands],
    elements:{
        feeName: "div.fee-list__item-name",
        feeValue: "div.fee-list__item-value",
        feeListItem: "li.fee-list__item",
        feeTotal: "div.fee-total__value",
        officeDeliveryLine1: "#office-addresses > div > ul > li:nth-child(1) > div > div > div.address-wrapper > div > div > div > div:nth-child(1)",
        officeDeliveryLine2: "#office-addresses > div > ul > li:nth-child(1) > div > div > div.address-wrapper > div > div > div > div:nth-child(3)",
        officeDeliveryLine3: "#office-addresses > div > ul > li:nth-child(1) > div > div > div.address-wrapper > div > div > div > div:nth-child(4)",
        officeMailingLine1: "#office-addresses > div > ul > li:nth-child(2) > div > div > div.address-wrapper > div > div > div > div:nth-child(1)",
        officeMailingLine2: "#office-addresses > div > ul > li:nth-child(2) > div > div > div.address-wrapper > div > div > div > div:nth-child(3)",
        officeMailingLine3: "#office-addresses > div > ul > li:nth-child(2) > div > div > div.address-wrapper > div > div > div > div:nth-child(4)",
        changeOfficeAddressButton: "#reg-off-addr-change-btn",
        sameAsDeliveryButton: "#office-addresses > div > ul > li:nth-child(3) > div > div > div.form__row > div > div > div.v-input__slot > div > div",
        updateAddressesButton: "#reg-off-update-addr-btn",
        resetOfficeAddressButton: "#reg-off-addr-reset-btn > span",
        officeDeliveryStreetAddress: "#office-addresses > div > ul > li:nth-child(2) > div > div > div.address-wrapper > div > form > div:nth-child(1) > div > div > div.v-input__slot > div> input[type=text]",
        officeDeliveryAdditional: "#office-addresses > div > ul > li:nth-child(2) > div > div > div.address-wrapper > div > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]",
        officeDeliveryCity: "#office-addresses > div > ul > li:nth-child(2) > div > div > div.address-wrapper > div > form > div.form__row.three-column > div.v-input.item.address-city.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--filled.v-text-field--is-booted.v-text-field--enclosed > div > div.v-input__slot > div > input[type=text]",
        officeDeliveryPostalCode: "#office-addresses > div > ul > li:nth-child(2) > div > div > div.address-wrapper > div > form > div.form__row.three-column > div.v-input.item.postal-code.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--filled.v-text-field--is-booted.v-text-field--enclosed > div > div.v-input__slot > div > input[type=text]",
        officeDeliveryDeliveryInstructions: "#office-addresses > div > ul > li:nth-child(2) > div > div > div.address-wrapper > div > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea",
        appointDirectorButton: "#wrapper-add-director > div > div > div.col.col-3 > button > span > span",
        newDirectorFirstName: "#new-director__first-name",
        newDirectorMiddleInitial: "#new-director__middle-initial",
        newDirectorLastName:"#new-director__last-name",    
        newDirectorStreetAddress:"#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.address-wrapper > div > form > div:nth-child(1) > div > div > div.v-input__slot > div>input[type=text]",
        newDirectorCity:".address-city input",    
        newDirectorPostalCode: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.address-wrapper > div > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div>input[type=text]",
        newDirectorCountry: {
            selector: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.address-wrapper > div > form > div:nth-child(4) > div > div > div.v-input__slot > div.v-select__slot > div.v-select__selections",
            locateStrategy: "css selector"
        },
        NewDirectorCountrySelect:{
            selector:"/html/body/div/div[2]/div/div/div[4]/div",
            locateStrategy: "xpath"
        },
        newDirectorProvinceBox:"#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.address-wrapper > div > form > div.form__row.three-column > div.v-input.item.address-region.theme--light.v-text-field.v-text-field--filled.v-text-field--is-booted.v-text-field--enclosed > div > div.v-input__slot > div>input[type=text]",
        newDirectorDoneButton: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.v-btn--contained.theme--light.v-size--default.primary > span",
        newDirectorChip: "#director-9 > div > label > div > span:nth-child(1)",
        certifyLegalName: "#certified-by-textfield",
        certifyCheckBox: "#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div",
        saveAndResumeLaterButton: "#ar-save-resume-btn",
        saveDraftButton: "#ar-save-btn",
        fileAndPayButton: "#ar-file-pay-btn",
        cancelFilingButton: "#ar-cancel-btn",
        certifyBlock: "#AR-step-4-container > div > div.certifiedby-container"
    }};
