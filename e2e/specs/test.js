module.exports = {
    'Quick Test': function (browser) {
        browser
            .url('https://www.google.ca', function (result) {
                console.log('Test ran!!! :)');
            }).waitForElementVisible('#tsf');
    }
};