var incorporationstep3command={
    AddShareStructure: function(shareStructure){
        return this
       // .assert.containsText('@step3Header','1. Create Your Authorized Share Structure')
        .waitForElementVisible('@shareClassButton')
        .click('@shareClassButton')
        .waitForElementVisible('@className')
        .setValue('@className',shareStructure.className)
        .waitForElementVisible('@maxNumberShares')
        .setValue('@maxNumberShares',shareStructure.numberShares)
        .waitForElementVisible('@parValue')
        .setValue('@parValue',shareStructure.parValue)
        .waitForElementVisible('@specialRights')
        .click('@specialRights')
        .click('@done')
    },
    AddShareSeries:function(shareSeries){
        return this
        .click('@chevron')
        .waitForElementVisible('@addSeries')
        .click('@addSeries')
        .waitForElementVisible('@addShareSeriesName')
        .setValue('@addShareSeriesName',shareSeries.seriesName)
        .waitForElementVisible('@addShareSeries')
        .setValue('@addShareSeries',shareSeries.shareSeriesNumber)
        .click('@done')
        .click('@incorporationAgreement')
    },
    IncorporationAgreement:function(browser){
        return this
        .assert.containsText('@step4Header1','1. Incorporation Agreement and Articles')
        .assert.containsText('@step4Header2','2. Sample Templates')
        .assert.containsText('@step4Header3','3. Confirm Incorporation Agreement and Article Completion')
        .waitForElementVisible('@agreementSample')
        .click('@agreementSample')
        .click('@incorporationAgreement')
        .waitForElementVisible('@save')
        .click('@saveandresume')
    },
    postResumeFiling:function(browser){
        return this
        .waitForElementVisible('@resume')
        .click('@resume')
        .waitForElementVisible('@reviewandconfirm')
        .moveToElement('@reviewandconfirm',10,10)
        .click('@reviewandconfirm')
    }
}
 module.exports={
        commands:[incorporationstep3command],
        elements: {
            step3Header:'#share-structure-header',
            shareClassButton:'#btn-start-add-cp',
            className:'#txt-name',
            maxNumberShares:'#txt-max-shares',
            parValue:'#class-par-value',
            specialRights:'#app div.add-share-structure-container.v-card.v-card--flat.v-sheet.theme--light  form > div:nth-child(8)  div.v-input__slot div div',
            done:'#btn-done',
            chevron:'#share-structure  td:nth-child(6) span:nth-child(2)  button',
            addSeries:{
                selector:'[role="menuitem"]',
                index:0
            },
            addShareSeriesName:'#txt-name',
            addShareSeries:'#txt-max-shares',
            donebtn:'#btn-done',
            incorporationAgreement:'#review-confirm-btn',
            step4Header1:{
               selector: '#share-structure-header>h2',
               index:1
            },
            step4Header2:{
              selector: '#share-structure-header > h2',
              index:2
            },
            step4Header3:{
                selector: '#share-structure-header > h2',
                index:3
            },
            agreementSample:'#app  div:nth-child(6)  section:nth-child(3)  div.v-input__slot > div > div:nth-child(1) > div',
            save:'#save-resume-btn',
            saveandresume:'#save-resume-btn',
            resume:'#todo-list > div.v-item-group.theme--light.v-expansion-panels.v-expansion-panels--accordion > div > button > div.list-item > div.list-item__actions > div > button.btn-draft-resume.v-btn.v-btn--contained.theme--light.v-size--default.primary',
            reviewandconfirm:'#step-5-btn > span > i'
        }
    }