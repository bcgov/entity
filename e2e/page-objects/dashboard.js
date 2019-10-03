
var dashboardcommands={
    dashboardassertions:function(dashboard,browser){
               return this.waitForElementVisible('div.entity-name')
               .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > dl > dd.incorp-number','CP0000977')
               .assert.containsText('#app > div.application--wrap > div > main > div.entity-info > div > div','WASHINGTON CO-OPERATIVE HOUSING ASSOCIATION')
               .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > header > h2','Recent Filing History (0)')
               .assert.containsText('#dashboardArticle > div > div > section:nth-child(2) > div > div.no-results.v-card.v-card--flat.v-sheet.theme--light > div > div.no-results__title','You have no filing history')
    },
    baseaddressassertions:function(address,browser){
              return this.assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > header > h2','Office Addresses')
               .assert.visible('#btn-standalone-addresses > div > span')
               .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__title','Mailing Address')
               .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__subtitle > ul > li:nth-child(1)','502 - 373 BURNSIDE RD. E.')
               .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__subtitle > ul > li:nth-child(2)','VICTORIA BC V9A 1A7')
               .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(1) > div.address > div.list-item__subtitle > ul > li:nth-child(3)','CA')
               .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__title','Delivery Address')
               .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__subtitle > ul > li:nth-child(1)','502 - 373 BURNSIDE RD. E.')
               .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__subtitle > ul > li:nth-child(2)','VICTORIA BC V9A 1A7')
               .assert.containsText('#dashboardArticle > div > aside > section:nth-child(1) > div > ul > li:nth-child(2) > div.address > div.list-item__subtitle > ul > li:nth-child(3)','CA')
    },
    basedirectorsassertions:function(directors,browser){
           return this.assert.containsText('#dashboardArticle > div > aside > section:nth-child(2) > header > h2','Current Directors')
               .assert.visible('#btn-standalone-directors > div > span')
               .assert.visible('#dashboardArticle > div > div > section:nth-child(1) > div > ul > li > div.v-expansion-panel__header > div.list-item > div.list-item__actions > button > div')
    },              
    
};
module.exports={
    commands:[dashboardcommands],
    elements:{}
};
