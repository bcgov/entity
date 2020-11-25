require('dotenv').config();
var reviewpage={
    Review:function(browser){
        return this
        .assert.containsText('@pageHeader','Review')
        .assert.visible('@step1Complete')
        .assert.visible('@step2Complete')
        .assert.visible('@step3Complete')
        .assert.visible('@step4Complete') 
        .setValue('@legalName','Test') 
        .click('@checkBox')
        .click('@fileandpay') 
    },
    PayBc:function(browser){
        return this
        .waitForElementVisible('@cardNumber')
        .setValue('@cardNumber', process.env.credit_card)
        .setValue('@cvv', process.env.cvv_no)
        .moveToElement('@submitButton', 10, 10)
        .click('@submitButton')
    },
    completedIA:function(browser){
        return this
        .waitForElementVisible('@toDoTask')
        .assert.containsText('@toDoTask','To Do (0)')
        .assert.containsText('@filingHistory','Recent Filing History (1)')
        .click('@viewDocuments')
        .expect.element('@incorporationApplication').to.be.enabled
        //.expect.element('@noticeOfArticles').to.be.enabled
        //.expect.element('@certificate').to.be.enabled
        .expect.element('@receipt').to.be.enabled
        .except.element('@downloadAll').to.be.enabled
        .click('viewDashboard')
    }
}    

    module.exports={
        commands:[reviewpage],
        elements: {
            pageHeader:'#app    div:nth-child(7)  section:nth-child(2)  header h2',
            step1Header:'div:nth-child(1)  div.define-company-header strong',
            step1Complete:'#step-buttons-container > div:nth-child(1) > div > i',
            step2Complete:'#step-buttons-container > div:nth-child(2) > div > i',
            step3Complete:'#step-buttons-container > div:nth-child(3) > div > i',
            step4Complete:'#step-buttons-container > div:nth-child(4) > div > i',
            legalName:"#certified-by-textfield",
            checkBox:"#step-5-container  .v-input--checkbox",
            fileandpay:'#file-pay-btn',
            cardNumber:{
                selector:'#frmPayment  input[type=text]',
                index:0
            },
            cvv:{
                selector:'#frmPayment  input[type=text]',
                index:1
            },
            submitButton:'#frmPayment  tr:nth-child(13)  td:nth-child(3) input[type=button]',
            toDoTask:'[data-test-id="dashboard-todo-subtitle" ]',
            filingHistory:'[ data-test-id="dashboard-filing-history-subtitle" ]',
            viewDocuments:{
                selector:"#filing-history-list  button",
                index:2
            },
            incorporationApplication:{
                selector:'[ role="listitem" ]',
                index:0
            },
            noticeOfArticles:{
                selector:'[ role="listitem" ]',
                index:1
            },
            certificate:{
                selector:'[ role="listitem" ]',
                index:2
            },
            receipt:{
                selector:'[ role="listitem" ]',
                index:1
            },
            downloadAll:{
                selector:'[ role="listitem" ]',
                index:2
            },
            viewDashboard:{
                selector:"#filing-history-list  button",
                index:1
            },
        }
    }

 