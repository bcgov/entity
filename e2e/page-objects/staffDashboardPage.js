var staffDashboardCommands = {
    signInWithIDIR: function (user, pass) {
        return this
            .waitForElementVisible('@siteTitle', 'Log in to sfstest7.gov.bc.ca')
            .waitForElementVisible('@IdirUsername')
            .waitForElementVisible('@IdirPassword')
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
        return this.api.globals.launch_idirurl;
    },
    elements: {
        siteTitle: '#login-to',
        IdirUsername: '#user',
        IdirPassword: '#password',
        ContinueButton: 'input[name="btnSubmit"]',
        StaffDashHeader: 'h1',
        IncorporationNumberTxtBox: '#txtBusinessNumber',
        SearchButton: 'button.search-btn'
    }
};