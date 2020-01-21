var CoaFilingsCommands = {
    verfifyInitialCoaState: function (coopObject) {
      return this
        .assert.containsText('#filing-header', 'Address Change')
        .assert.containsText('#AR-step-4-header', 'Certify Correct')
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
};
module.exports={
    commands:[CoaFilingsCommands],
    elements:{
        feeName: "div.fee-list__item-name",
        feeValue: "div.fee-list__item-value",
        feeListItem: "li.fee-list__item",
        feeTotal: "div.fee-total__value",
        officeDeliveryLine1: {
            selector: "div.address-block__info-row",
            index: 0
        },
        officeDeliveryAdditional: {
            selector: "div.address-block__info-row",
            index: 1
        },
        officeDeliveryLine2: {
            selector: "div.address-block__info-row",
            index: 2
        },
        officeDeliveryLine3: {
            selector: "div.address-block__info-row",
            index: 3
        },        
        officeMailingLine1: {
            selector: "div.address-block__info-row",
            index: 5
        },
        officeMailingAdditional: {
            selector: "div.address-block__info-row",
            index: 6
        },
        officeMailingLine2: {
            selector: "div.address-block__info-row",
            index: 7
        },
        officeMailingLine3: {
            selector: "div.address-block__info-row",
            index: 8
        },
        changeOfficeAddressButton: "#reg-off-addr-change-btn",
        officeDeliveryStreetAddress: {
            selector: 'input[name="street-address"]',
            index: 0
        },
        officeDeliveryCity: {
            selector: '#office-addresses > div > ul > li:nth-child(2) > div > div > div.address-wrapper > div > form > div.form__row.three-column > div.v-input.item.address-city.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--filled.v-text-field--is-booted.v-text-field--enclosed > div > div.v-input__slot > div >input[type=text]',
            locateStrategy: "css selector"
        },
        officeDeliveryPostalCode: {
            selector: '#office-addresses > div > ul > li:nth-child(2) > div > div > div.address-wrapper > div > form > div.form__row.three-column > div.v-input.item.postal-code.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--filled.v-text-field--is-booted.v-text-field--enclosed > div > div.v-input__slot > div >input[type=text]',
            locateStrategy: "css selector" 
        },
        sameAsDeliveryButton: '#office-addresses > div > ul > li:nth-child(3) > div > div > div.form__row > div > div > div.v-input__slot > div > div',
        updateAddressesButton: "#reg-off-update-addr-btn",
        resetOfficeAddressButton: "#reg-off-addr-reset-btn",
        certifyLegalName: "#certified-by-textfield",
        certifyCheckBox: "#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div",
        saveAndResumeLaterButton: "#coa-save-resume-btn",
        saveDraftButton: "#coa-save-btn",
        fileAndPayButton: "#coa-file-pay-btn",
        cancelFilingButton: "#coa-cancel-btn"
    }
};