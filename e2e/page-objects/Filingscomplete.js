var Filingcompletecommands={
    Filingcompleteassertions:function(Filingcomplete,browser){
        return this.waitForElementVisible('#dashboard')
        .waitForElementVisible('html body div#app.application.app-container.theme--light div.application--wrap div.app-body main div#dashboard div#dashboardContainer.container.view-container article#dashboardArticle div.dashboard-content div.dashboard-content__main section div ul.v-expansion-panel.theme--light li.v-expansion-panel__container.filing-history-list div.v-expansion-panel__header div.v-expansion-panel__header__status')
        .assert.containsText('#dashboardArticle > div > div > section:nth-child(1) > header > h2','To Do (0)')
        .assert.containsText('#dashboardArticle > div > div > section:nth-child(1) > div > div > div > div.no-results__subtitle','Filings that require your attention will appear here')
        .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > header > h2','Recent Filing History (1)')
        .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__body','Annual Report')
        .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__header > div.v-expansion-panel__header__status','FILED AND PAID')
    }
}; 
module.exports={
    commands:[Filingcompletecommands],
    elements:{}
};   