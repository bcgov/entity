var ArFilingsCommands = {
    verfifyInitialArState: function (coopObject) {
        return this
            .assert.containsText('#AR-header', 'File 2019 Annual Report')
            .assert.containsText('#AR-step-1-header', '1. Annual General Meeting Date')
            .assert.containsText('#AR-step-2-header', '2. Registered Office Addresses')
            .assert.containsText('#AR-step-3-header', '3. Directors')
            .assert.containsText('#AR-step-4-header', '4. Certify Correct')
            .assert.containsText('dd.incorp-number', coopObject.identifier)
            .assert.containsText('div.entity-name', coopObject.legal_name)
            .assert.visible('#ar-save-btn')
            .assert.visible('#ar-save-resume-btn')
            .assert.visible('#ar-cancel-btn')
            .assert.visible('#ar-file-pay-btn > div');
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
    checkFee3: function (feeName, feeValue) {
        return this
            .assert.containsText('@fee3Name', feeName)
            .assert.containsText('@fee3Value', feeValue);
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
            .moveToElement('@newDirectorCity', 5, 5)
            .setValue('@newDirectorCity', 'Victoria')
            .click('@newDirectorProvinceSelectBox')
            .click('@newDirectorProvinceBC')
            .setValue('@newDirectorPostalCode', 'V9A 1A7')
            .setValue('@newDirectorCountry', 'Canada')
            .click('@newDirectorDoneButton')
            .waitForElementVisible('@newDirectorChip');
    }
};
module.exports={
    commands:[ArFilingsCommands],
    elements:{
        fee1Name: "#annual-report-container > aside > div > div > ul > li > div.fee-list__item-name",
        fee1Value: "#annual-report-container > aside > div > div > div.container.fee-total > div.fee-total__value > div",
        fee2Name: "#annual-report-container > aside > div > div > ul > li:nth-child(2) > div.fee-list__item-name",
        fee2Value: "#annual-report-container > aside > div > div > ul > li:nth-child(2) > div.fee-list__item-value",
        fee3Name: "#annual-report-container > aside > div > div > ul > li:nth-child(3) > div.fee-list__item-name",
        fee3Value: "#annual-report-container > aside > div > div > ul > li:nth-child(3) > div.fee-list__item-value",
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
        officeDeliveryDeliveryInstructions: "#annual-report-article > div > section:nth-child(2) > div > ul > li:nth-child(1) > div > div > div.meta-container__inner > form > div:nth-child(5) > div > div > div.v-input__slot > div > textarea",
        appointDirectorButton: "#directors > div:nth-child(2) > button > div",
        newDirectorFirstName: "#new-director__first-name",
        newDirectorMiddleInitial: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div.v-input.item.director-initial.v-text-field.v-text-field--box.v-text-field--enclosed.theme--light > div > div.v-input__slot > div > input[type=text]",
        newDirectorLastName: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]",
        newDirectorStreetAddress: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(1) > div > div > div.v-input__slot > div > input[type=text]",
        newDirectorCity: {
            selector: '//*[@id="directors"]/div[3]/ul[1]/li/div/div/form/div[2]/form/div[3]/div[1]/div/div[1]/div/input',
            locateStrategy: "xpath"
        },
        newDirectorPostalCode: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div:nth-child(3) > div > div.v-input__slot > div > input[type=text]",
        newDirectorCountry: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div:nth-child(4) > div > div > div.v-input__slot > div > input[type=text]",
        newDirectorProvinceSelectBox: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.meta-container__inner > form > div.form__row.three-column > div.v-input.item.v-text-field.v-text-field--box.v-text-field--enclosed.v-select.theme--light > div > div.v-input__slot > div.v-select__slot > div.v-select__selections",
        newDirectorProvinceBC: "#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div:nth-child(1) > a > div > div",
        newDirectorDoneButton: "#directors > div.v-card.v-card--flat.v-sheet.theme--light > ul.list.new-director > li > div > div > form > div.form__row.form__btns > button.form-primary-btn.v-btn.theme--light.primary > div",
        newDirectorChip: "#director-9 > div > div > label > div > span:nth-child(1) > span",
        certifyLegalName: "#certified-by-textfield",
        certifyCheckBox: "#AR-step-4-container > div > div.v-input.v-input--selection-controls.v-input--checkbox.theme--light > div > div.v-input__slot > div > div"
    }
};