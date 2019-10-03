var cod_filingcompletescommands={
    FilingsCompletedDashboard:function(browser){
        return this.waitForElementVisible('#dashboard', 20000)
        .waitForElementVisible('html body div#app.application.app-container.theme--light div.application--wrap div.app-body main div#dashboard div#dashboardContainer.container.view-container article#dashboardArticle div.dashboard-content div.dashboard-content__main section div ul.v-expansion-panel.theme--light li.v-expansion-panel__container.filing-history-list div.v-expansion-panel__header div.v-expansion-panel__header__status')
        .assert.visible('#dashboardArticle > div > div > section:nth-child(1) > header','To Do (1)')
        .assert.visible('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button > div','disabled',"false")
        .assert.visible('#btn-standalone-addresses')
        .assert.visible('#btn-standalone-directors')
        .assert.visible('#dashboardArticle > div > div > section:nth-child(2) > header > h2','Recent Filing History (1)')
        .assert.visible('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__body','Director Change')
        .assert.visible('#dashboardArticle > div > div > section:nth-child(2) > div > ul > li > div.v-expansion-panel__header > div.v-expansion-panel__header__status','FILED AND PAID')
        .assert.visible('#dashboardArticle > div > aside > section:nth-child(2) > div > ul > li:nth-child(5) > div.director-info > div.list-item__title','test TEST3')
        .assert.visible('#dashboardArticle > div > aside > section:nth-child(2) > div > ul > li:nth-child(5) > div.director-info > div.list-item__subtitle > ul > li:nth-child(1)','123 test st')
    }
};
module.exports={
    commands:[cod_filingcompletescommands], 
    elements:{}
};