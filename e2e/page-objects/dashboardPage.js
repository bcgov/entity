var dashboardCommands = {
    verifyTombstone: function (coopObject) {
        return this.waitForElementVisible('@entityName')
            .assert.containsText('@identifier', coopObject.identifier)
            .assert.containsText('@entityName', coopObject.legal_name);
    },
    verifyAddresses: function (coopObject) {
        return this.assert.containsText('@officeAddressHeader', 'Office Addresses')
            .assert.visible('@launchCOAButton')
            .assert.containsText('@mailingAddressLabel', 'Mailing Address')
            .assert.containsText('@mailingLine1', coopObject.mailing.line1)
            .assert.containsText('@mailingLine2', coopObject.mailing.line2)
            .assert.containsText('@mailingLine3', coopObject.mailing.line3)
            .assert.containsText('@deliveryAddressLabel', 'Delivery Address')
            .assert.containsText('@deliveryLine1', coopObject.delivery.line1)
            .assert.containsText('@deliveryLine2', coopObject.delivery.line2)
            .assert.containsText('@deliveryLine3', coopObject.delivery.line3);
    },

    selectAGMDate: function (annualReportYear) {
        return this.
        assert.containsText('@arHeader', annualReportYear)
            .assert.containsText('@AGMDate', '1. Annual General Meeting Date')
            .waitForElementVisible('@datePicker')
            .assert.not.cssClassPresent('@noAGMButton', 'v-btn--disabled')
            .click('@datePicker')
            .waitForElementVisible('@choosenDate')
            .click('@choosenDate')
    },
    verifyDirectorCount: function (director_count) {
        return this
            .useCss()
            .assert.containsText('@currentDirectorsHeader', 'Current Directors')
            .expect.elements('v-expansion-panel-header address-panel-toggle').count.to.equal(director_count);
    },
    verifyTodolistandRecentFilings: function (noOfFilings) {
        return this
            .assert.containsText('@toDoListHeader', noOfFilings)
            .assert.not.cssClassPresent('@fileNowButton', 'v-btn--disabled')
            .expect.element('@fileNowButton2').to.not.be.enabled
    },
    startArFiling: function (coopObject) {
        return this
            .useCss()
            .waitForElementVisible('@fileNowButton')
            .click('@fileNowButton')
            .assert.urlEquals(this.api.globals.launch_url + coopObject.identifier + '/annual-report')
            .waitForElementVisible('#AR-header', 'Annual Report Page Loaded');
    },
    startCoaFiling: function (coopObject) {
        return this.waitForElementVisible('@launchCOAButton')
            .assert.not.cssClassPresent('@launchCOAButton', 'v-btn--disabled')
            .click('@launchCOAButton')
            .assert.urlEquals(this.api.globals.launch_url + coopObject.identifier + '/standalone-addresses')
            .useCss()
            .waitForElementVisible('#filing-header', 'COA Page Loaded');
    },
    startCodFiling: function (coopObject) {
        return this.waitForElementVisible('@launchCODButton')
            .assert.not.cssClassPresent('@launchCODButton', 'v-btn--disabled')
            .click('@launchCODButton')
            .assert.urlEquals(this.api.globals.launch_url + coopObject.identifier + '/standalone-directors')
            .useCss()
            .waitForElementVisible('#filing-header', 'COD Page Loaded')
    },

    enterRoutingSlipNumber: function () {
        return this.waitForElementVisible('@paymentHeader')
            .assert.containsText('@paymentHeader', 'Staff Payment')
    }


};
module.exports = {
    commands: [dashboardCommands],
    url: function () {
        return this.api.globals.launch_url + '/dashboard';
    },
    elements: {
        entityName: "#entity-legal-name",
        identifier: "#entity-incorporation-number",
        filingHistoryHeader: '[data-test-id="dashboard-filing-history-subtitle"]',
        noFilingsMessage: "#dashboardArticle > div > div > section:nth-child(2) > div > div.no-results.v-card.v-card--flat.v-sheet.theme--light > div > div.no-results__title",
        topFilingInHistoryName: {
            selector: "div.filing-label h3",
            index: 0
        },
        topFilingInHistoryStatus: "div.v-expansion-panel__header__status",
        officeAddressHeader: '[data-test-id="dashboard-addresses-subtitle"]',
        launchCOAButton: "#standalone-addresses-button > span > span",
        mailingAddressLabel: "#registered-office-panel > div > div > div > div.mailing-address-list-item.v-list-item.theme--light > div.v-list-item__content > div.v-list-item__title.mb-2.address-title",
        deliveryAddressLabel: "#registered-office-panel > div > div > div > div.delivery-address-list-item.v-list-item.theme--light > div.v-list-item__content > div.v-list-item__title.mb-2.address-title",
        mailingLine1: "#registered-office-panel > div > div > div > div.mailing-address-list-item.v-list-item.theme--light > div.v-list-item__content > div.v-list-item__subtitle > ul > li.address-line1",
        mailingLine2: "#registered-office-panel > div > div > div > div.mailing-address-list-item.v-list-item.theme--light > div.v-list-item__content > div.v-list-item__subtitle > ul > li.address-line3",
        mailingLine3: "#registered-office-panel > div > div > div > div.mailing-address-list-item.v-list-item.theme--light > div.v-list-item__content > div.v-list-item__subtitle > ul > li.address-line4 > span",
        deliveryLine1: "#registered-office-panel > div > div > div > div.delivery-address-list-item.v-list-item.theme--light > div.v-list-item__content > div.v-list-item__subtitle > ul > li.address-line1",
        deliveryLine2: "#registered-office-panel > div > div > div > div.delivery-address-list-item.v-list-item.theme--light > div.v-list-item__content > div.v-list-item__subtitle > ul > li.address-line3",
        deliveryLine3: "#registered-office-panel > div > div > div > div.delivery-address-list-item.v-list-item.theme--light > div.v-list-item__content > div.v-list-item__subtitle > ul > li.address-line4 > span",
        currentDirectorsHeader: '[data-test-id="dashboard-directors-subtitle"]',
        launchCODButton: "#standalone-directors-button > span > span",
        toDoListHeader: '[data-test-id="dashboard-todo-subtitle"]',
        fileNowButton: "button.btn-file-now",
        resumeDraftButton: "button.btn-draft-resume",
        toDoButtonMoreActionsArrow: "#menu-activator > span > i",
        deleteDraftButton: "#btn-delete-draft > div",
        confirmDeleteDraftButton: {
            selector: "#dialog-yes-button",
        },
        fileNowButton2: '[ type="button"] [disabled="disabled"]',
        recentHistory: '#dashboardArticle > div > div > section:nth-child(2) > header > h2',
        paymentHeader: '#AR-step-5-header',
        arHeader: '#AR-header',
        AGMDate: '#AR-step-1-header',
        datePicker: '[data-test-id="agm-date-text"]',
        choosenDate: '#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(1) > td:nth-child(7) > button > div',
        noAGMButton: '#agm-checkbox'

    }
};