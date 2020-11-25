var staffDashboardCommands = {
    signInWithIDIR: function (user, pass) {
        return this
            .waitForElementVisible('@HeaderLogin')
            .assert.containsText('@mainHeader','Start a Benefit Company and')
            .waitForElementVisible('@loginButton')
            .click('@loginButton')
            .waitForElementVisible('@IdirLogin')
            .click('@IdirLogin')
            .setValue('@IdirUsername', user)
            .setValue('@IdirPassword', pass)
            .click('@ContinueButton');
    },

    searchForBusiness: function (identifier) {
        return this
            .waitForElementVisible('@StaffDashHeader')
            .assert.visible('@StaffDashHeader','Staff Dashboard')
            .setValue('@IncorporationNumberTxtBox', identifier)
            .assert.not.cssClassPresent('@SearchButton', 'v-btn--disabled')
            .click('@SearchButton');
    }
};

module.exports = {
    commands: [staffDashboardCommands],
    url: function () {
        return this.api.globals.launch_url;
    },
    elements: {
        siteTitle: '#login-to',
        IdirUsername: '#user',
        IdirPassword: '#password',
        ContinueButton: 'input[name="btnSubmit"]',
        StaffDashHeader: 'h1',
        IncorporationNumberTxtBox: '#txtBusinessNumber',
        SearchButton: 'button.search-btn',
        HeaderLogin: "#app > div > div.header-group > header > div > a > span",
        mainHeader: "#app  h1",
        IdirLogin:{
        selector:'#app   div:nth-child(2)  div.v-list-item__title',
        index:2
        },
        loginButton:'#loginBtn'
    }
};