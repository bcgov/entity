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
    verifyDirectorCount: function (director_count) {
        return this.assert.containsText('@currentDirectorsHeader','Current Directors')
               .expect.elements('.v-expansion-panel-header.panel-header-btn').count.to.equal(director_count);
    },
    startArFiling: function () {
        return this.assert.containsText('@toDoListHeader', 'To Do (1)')
                .click('@fileNowButton')
                .assert.urlEquals(this.api.globals.launch_url + 'annual-report')
                .waitForElementVisible('#AR-header', 'Annual Report Page Loaded');
    },
    startCoaFiling: function () {
        return this.waitForElementVisible('@launchCOAButton')
                .assert.cssClassNotPresent('@launchCOAButton', 'v-btn--disabled')
                .click('@launchCOAButton')
                .assert.urlEquals(this.api.globals.launch_url + 'standalone-addresses')
                .waitForElementVisible('#filing-header', 'COA Page Loaded');
    },
    startCodFiling: function() {
        return this.waitForElementVisible('@launchCODButton')
                   .assert.cssClassNotPresent('@launchCODButton','v-btn--disabled')
                   .click('@launchCODButton')
                   .assert.urlEquals(this.api.globals.launch_url + 'standalone-directors')
                   .waitForElementVisible('#filing-header','COD Page Loaded')
    }           
    
};
module.exports={
    commands:[dashboardCommands],
    url: function() {
        return this.api.globals.launch_url + '/dashboard';
    },
    elements:{
        entityName: "div.entity-name",
        identifier: "dd.incorp-number",
        filingHistoryHeader: "#dashboardArticle > div > div > section:nth-child(2) > header > h2",
        noFilingsMessage: "#dashboardArticle > div > div > section:nth-child(2) > div > div.no-results.v-card.v-card--flat.v-sheet.theme--light > div > div.no-results__title",
        topFilingInHistoryName: "#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__title",
        topFilingInHistoryStatus: "div.v-expansion-panel__header__status",
        officeAddressHeader: "#dashboardArticle > div > aside > section:nth-child(1) > header > h2",
        launchCOAButton: "#btn-standalone-addresses",
        mailingAddressLabel: "#dashboardArticle > div > aside > section:nth-child(1) > div > div > div:nth-child(1) > div.v-list-item__content > div.v-list-item__title.mb-2",
        deliveryAddressLabel: "#dashboardArticle > div > aside > section:nth-child(1) > div > div > div:nth-child(3) > div.v-list-item__content > div.v-list-item__title.mb-2",
        mailingLine1: "#dashboardArticle > div > aside > section:nth-child(1) > div > div > div:nth-child(1) > div.v-list-item__content > div.v-list-item__subtitle > ul > li:nth-child(1)",
        mailingLine2: "#dashboardArticle > div > aside > section:nth-child(1) > div > div > div:nth-child(1) > div.v-list-item__content > div.v-list-item__subtitle > ul > li:nth-child(2)",
        mailingLine3: "#dashboardArticle > div > aside > section:nth-child(1) > div > div > div:nth-child(1) > div.v-list-item__content > div.v-list-item__subtitle > ul > li:nth-child(3)",
        deliveryLine1: "#dashboardArticle > div > aside > section:nth-child(1) > div > div > div:nth-child(3) > div.v-list-item__content > div.v-list-item__subtitle > ul > li:nth-child(1)",
        deliveryLine2: "#dashboardArticle > div > aside > section:nth-child(1) > div > div > div:nth-child(3) > div.v-list-item__content > div.v-list-item__subtitle > ul > li:nth-child(2)",
        deliveryLine3: "#dashboardArticle > div > aside > section:nth-child(1) > div > div > div:nth-child(3) > div.v-list-item__content > div.v-list-item__subtitle > ul > li:nth-child(3)",
        currentDirectorsHeader: "#dashboardArticle > div > aside > section:nth-child(2) > header > h2",
        launchCODButton: "#btn-standalone-directors > span > span",
        toDoListHeader: "#dashboardArticle > div > div > section:nth-child(1) > header > h2",
        fileNowButton: "#dashboardArticle > div > div > section:nth-child(1) > div > div.v-item-group.theme--light.v-expansion-panels.v-expansion-panels--accordion > div > button > div.list-item > div.list-item__actions > button > span",
        resumeDraftButton: "#btn-draft-resume",
        toDoButtonMoreActionsArrow: "#menu-activator > span > i",
        deleteDraftButton: "#btn-delete-draft > div",
        confirmDeleteDraftButton: {
         selector: "#app > div.v-dialog__content.v-dialog__content--active > div > div > div.v-card__actions > button:nth-child(2) > span",
        // locateStrategy: "xpath"
        }
    }
};
