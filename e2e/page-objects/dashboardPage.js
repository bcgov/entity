require('dotenv').config();
var dashboardCommands = {  
    verifyTombstone: function (coopObject) {
        return this.waitForElementVisible('@entityName')
               .assert.containsText('@identifier', coopObject.identifier)
               .assert.containsText('@entityName', coopObject.legal_name);
    },
    verifyAddresses: function (coopObject) {
        return this.assert.containsText('@officeAddressHeader','Office Addresses')
               .assert.visible('@launchCOAButton')
               .assert.containsText('@mailingAddressLabel','Mailing Address')
               .assert.containsText('@mailingLine1', coopObject.mailing.line1)
               .assert.containsText('@mailingLine2', coopObject.mailing.line2)
               .assert.containsText('@mailingLine3', coopObject.mailing.line3)
               .assert.containsText('@deliveryAddressLabel','Delivery Address')
               .assert.containsText('@deliveryLine1', coopObject.delivery.line1)
               .assert.containsText('@deliveryLine2', coopObject.delivery.line2)
               .assert.containsText('@deliveryLine3', coopObject.delivery.line3);
    },

    selectAGMDate: function(annualReportYear){
        return this.
         assert.containsText('@arHeader',annualReportYear)
        .assert.containsText('@AGMDate','1. Annual General Meeting Date')
        .waitForElementVisible('@datePicker')
        .assert.cssClassNotPresent('@noAGMButton', 'v-btn--disabled')
        .click('@datePicker')
        .waitForElementVisible('@choosenDate')
        .click('@choosenDate')
    },
    verifyDirectorCount: function (director_count) {
        return this
        .useCss()
               .assert.containsText('@currentDirectorsHeader','Current Directors')
               .expect.elements('v-expansion-panel-header address-panel-toggle').count.to.equal(director_count);
    },
    verifyTodolistandRecentFilings:function(noOfFilings){
        return this
        .assert.containsText('@toDoListHeader',noOfFilings )
        .assert.cssClassNotPresent('@fileNowButton1', 'v-btn--disabled')
        .expect.element('@fileNowButton2').to.not.be.enabled
    },
    startArFiling: function () {
        return this
                .useCss()
                .waitForElementVisible('@fileNowButton1')
                .click('@fileNowButton1')
                .assert.urlEquals(this.api.globals.launch_url1 + 'annual-report')
                .waitForElementVisible('#AR-header', 'Annual Report Page Loaded');
    },
    startCoaFiling: function () {
        return this.waitForElementVisible('@launchCOAButton')
                .assert.cssClassNotPresent('@launchCOAButton', 'v-btn--disabled')
                .click('@launchCOAButton')
                .pause(10000)
                .assert.urlEquals(this.api.globals.launch_url1 + 'standalone-addresses')
                .useCss()
                .waitForElementVisible('#filing-header', 'COA Page Loaded');
    },
    startCodFiling: function() {
        return this.waitForElementVisible('@launchCODButton')
                   .assert.cssClassNotPresent('@launchCODButton','v-btn--disabled')
                   .click('@launchCODButton')
                   .pause(10000)
                   .assert.urlEquals(this.api.globals.launch_url1 + 'standalone-directors')
                   .useCss()
                   .waitForElementVisible('#filing-header','COD Page Loaded')
    },

    enterRoutingSlipNumber:function(){
        return this.waitForElementVisible('@paymentHeader')
                   .assert.containsText('@paymentHeader','Staff Payment')
    },

    deactivateProfile: function(){
        return this 
        .waitForElementVisible('@navBar')
        .click('@navBar')
        .waitForElementVisible('@editProfile')
        .click('@editProfile')
        .assert.containsText('@editPage','Edit Profile')
        .waitForElementVisible('@deactivateProfile')
        .click('@deactivateProfile')
        .waitForElementVisible('@confirmDeactivate')
        .assert.containsText('@confirmDeactivate','Deactivate your Profile')
        .click('@deactivateConfirmButton')
    }

    
};
module.exports={
    commands:[dashboardCommands],
    url: function() {
        return this.api.globals.launch_url + '/dashboard';
    },
    elements:{
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
        fileNowButton1: "#todo-list > div.v-item-group.theme--light.v-expansion-panels.v-expansion-panels--accordion > div:nth-child(1) > button > div.list-item > div.list-item__actions > div > button",
        resumeDraftButton: "#todo-list > div.v-item-group.theme--light.v-expansion-panels.v-expansion-panels--accordion > div.v-expansion-panel.align-items-top.todo-item.draft > button > div.list-item > div.list-item__actions > div > button.btn-draft-resume.v-btn.v-btn--contained.theme--light.v-size--default.primary > span",
        toDoButtonMoreActionsArrow: "#menu-activator > span > i",
        deleteDraftButton: "#btn-delete-draft > div",
        confirmDeleteDraftButton: {
         selector: "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button:nth-child(2) > span",
        },
        fileNowButton2:'[ type="button"] [disabled="disabled"]',
        recentHistory:'#dashboardArticle > div > div > section:nth-child(2) > header > h2',
        paymentHeader:'#AR-step-5-header',
        arHeader:'#AR-header',
        AGMDate:'#AR-step-1-header',
        datePicker: '[data-test-id="agm-date-text"]',
        choosenDate: '#app > div.v-menu__content.theme--light.menuable__content__active > div > div > div > div.v-date-picker-table.v-date-picker-table--date.theme--light > table > tbody > tr:nth-child(1) > td:nth-child(7) > button > div',
        noAGMButton: '#agm-checkbox',
        navBar:'#app > div > div.header-group > header > div > div > button.user-account-btn.v-btn.v-btn--flat.v-btn--text.theme--light.v-size--large > span',
        editProfile:'#app > div.v-menu__content.theme--light.menuable__content__active.account-menu > div:nth-child(1) > div:nth-child(2)',
        deactivateProfile:'#app > div.v-application--wrap > div.app-body > div > div > div > div > div.profile-card.v-card.v-sheet.theme--light > div > div.v-card__text > form > div:nth-child(7) > div > button',
        editPage: '#app > div.v-application--wrap > div.app-body > div > div > div > div > div.view-header > div > h1',
        confirmDeactivate: '#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__title > span',
        deactivateConfirmButton: '[data-test="deactivate-confirm-button"]'

    }
};
