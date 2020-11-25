var incorporationstepcommand={
    IncorporateNumberedCompany: function(browser){
        return this
        //check if the Coperatives Online button is redirecting to the page where the user can Incoporate a named/numbered company
       // .waitForElementVisible('@CoperativesOnline')
        //.click('@CoperativesOnline')
       // .assert.urlEquals(this.api.globals.launch_url + 'auth/home/decide-business')
       .click('@businessRegistry')
        .waitForElementVisible('@NumberedCompanyButton')
        .assert.containsText('@NumberedCompanyButton','Incorporate a Numbered Benefit Company')
        .click('@NumberedCompanyButton')
        .click('@NumberedCompanyButton')
        
    },
    IADasboard: function(browser){
        return this
        //Check if the breadcrum and the Incorporation Application dashboard is as per the requirements
        .waitForElementVisible('@MBbreadcrumb')
        .assert.containsText('@IAHeader1','NUMBERED BENEFIT COMPANY')
        .assert.containsText('@IAHeader2','Dashboard')
        .assert.containsText('@IAHeader3','To Do (1)')
        .assert.containsText('@IAHeader4','Recent Filing History (0)')
        .expect.element('@MBbreadcrumb').to.be.enabled
    },
    FileIncorporationApplication: function(browser){
        return this
        .waitForElementVisible('@IncorporateCompanyButton')
        .click('@IncorporateCompanyButton')
        .assert.containsText('@numCompanyHeader','Numbered Benefit Company')
        .assert.containsText('@incorpHeader', 'Incorporation Application')
        .assert.containsText('@cNameHaeder','1. Company Name')
        .assert.containsText('@entityType','Entity Type: BC Benefit Company')
        .assert.containsText('@requestType','Request Type: New Business')
    },
    EnterRegisteredOfficeAddresses:function(officeAddresses){
        return this
        .assert.containsText('@officeHearder', '2. Registered and Records Office Addresses')
        .setValue('@streetaddresses',officeAddresses.streetaddresses)
        .setValue('@city',officeAddresses.city)
        .setValue('@postalcode',officeAddresses.postalcode)
    },
    EnterRecordsOffice:function(browser){
        return this
        .click('@recordsOfficeCheckbox')
        .setValue('@streetaddresses1','2 test street')
        .setValue('@city1','victoria')
        .setValue('@postalcode1','V8S6H4')
    },
    EnterRegisteredOfficemail:function(officeEmail){
        return this
        .assert.containsText('@emailHeader','3. Registered Office Information')
        .setValue('@email',officeEmail.email)
        .setValue('@retypeemail',officeEmail.retypeemail)
        .setValue('@phone',officeEmail.phone)
        .click('@Addpeoplebutton')
    },  
}

module.exports={
    commands:[incorporationstepcommand],
    elements: {
        CoperativesOnline:'#app  div.v-toolbar__title',
        NumberedCompanyButton:'button:nth-child(3)',
        MBbreadcrumb:'#entity-info > div > ul > li:nth-child(1) > a',
        IAHeader1:'#incorp-app-title',
        IAHeader2:'[data-test-id="dashboard-title"]',
        IAHeader3:'[data-test-id="dashboard-todo-subtitle"]',
        IAHeader4:'[data-test-id="dashboard-filing-history-subtitle"]',
        IncorporateCompanyButton:{
            selector:'#todo-list  span',
            index:0
        },
        IADropdown:{
            selector:'#todo-list  span',
            index:2
        },
        numCompanyHeader:'#entity-legal-name',
        incorpHeader:'#app  h1',
        cNameHaeder:{
            selector:'#app  h2',
            index:0
        },
        entityType:'#numbered-company-info  li:nth-child(2)',
        requestType:'#numbered-company-info  li:nth-child(3)',
        officeHearder:'#office-address-header  h2',
        streetaddresses:'[name="street-address"]',
        city:{
            selector:'#address-registered-mailing  div.v-input__slot input',
            index:1
        },
        postalcode:{
            selector:'#address-registered-mailing  div.v-input__slot input',
            index:4
        },
        recordsOfficeCheckbox:'#registered-mailing-same-chkbx',
        streetaddresses1:{
            selector: '#address-records-mailing  div.v-input__slot input',
            index:0
        },
        city1:{
            selector:'#address-records-mailing  div.v-input__slot input',
            index:1
        },
        postalcode1:{
            selector:'#address-records-mailing  div.v-input__slot input',
            index:4
        },
        emailHeader:{
            selector:'#app  h2',
            index:2
        },
        email:'#txt-email',
        retypeemail:'#txt-confirm-email',
        phone:'#txt-phone',
        Addpeoplebutton:'#review-confirm-btn > span',
        businessRegistry:'[data-test="title-link"]'


    }
}