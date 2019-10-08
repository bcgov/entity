var ArFilingsCommands = {
    verfifyInitialArState: function (coopObject) {
        return this
            .assert.containsText('#AR-header','File 2019 Annual Report')
            .assert.containsText('#AR-step-1-header','1. Annual General Meeting Date')
            .assert.containsText('#AR-step-2-header','2. Registered Office Addresses')
            .assert.containsText('#AR-step-3-header', '3. Directors')
            .assert.containsText('dd.incorp-number', coopObject.identifier)
            .assert.containsText('div.entity-name', coopObject.legal_name);
    },
    checkFee1: function (feeName, feeValue) {
        return this
            .assert.containsText('@fee1Name', feeName)
            .assert.containsText('@fee1Value', feeValue);
    },
    checkFee2: function (feeName, feeValue) {
        return this
            .assert.containsText('@fee2Name', feeName)
            .assert.containsText('@fee2Value', feeValue);
    },
    checkFeeCount: function (expectedCount) {
        return this.expect.elements('li.fee-list__item').count.to.equal(expectedCount);
    },
    checkTotalFees: function (expectedTotalString) {
        return this.assert.containsText('div.fee-total__value', expectedTotalString);
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
    verifyDirectorCount: function (expectedDirectorCount) {
        return this.expect.elements('div.director-info').count.to.equal(expectedDirectorCount);
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
    }
};
module.exports={
    commands:[ArFilingsCommands],
    elements:{
        fee1Name: "#annual-report-container > aside > div > div > ul > li > div.fee-list__item-name",
        fee1Value: "#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__value > div",
        fee2Name: "#annual-report-container > aside > div > div > ul > li:nth-child(2) > div.fee-list__item-name",
        fee2Value: "#annual-report-container > aside > div > div > ul > li:nth-child(2) > div.fee-list__item-value",
        officeDeliveryLine1: "#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(1)",
        officeDeliveryLine2: "#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(3)",
        officeDeliveryLine3: "#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > div > div > div:nth-child(4)",
        officeMailingLine1: "#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(1)",
        officeMailingLine2: "#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(3)",
        officeMailingLine3: "#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div.meta-container__inner > div > div > div:nth-child(4)",
        changeOfficeAddressButton: "#reg-off-addr-change-btn",
        sameAsDeliveryButton: "#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(2) > div > div > div:nth-child(1) > div > div > div.v-input__slot > div > div",
        updateAddressesButton: "#reg-off-update-addr-btn",
        resetOfficeAddressButton: "#reg-off-addr-reset-btn > div",
        officeDeliveryStreetAddress: "#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]",
        officeDeliveryAdditional: "#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(2) > div > div > div.v-input__slot > div > input[type=text]",
        officeDeliveryCity: "#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(1) > div > div.v-input__slot > div > input[type=text]",
        officeDeliveryPostalCode: "#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]",
        officeDeliveryCountry: "#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input",
        officeDeliveryDeliveryInstructions: "#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea"

    }
};