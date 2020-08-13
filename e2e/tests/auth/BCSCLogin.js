module.exports = {
  '@tags': ['regression'],
  before: function (browser) {
    browser.maximizeWindow()
    browser.setupData('CP1002111', function (busObject) {
      console.log(busObject);
    });
  },

  after: function (browser) {
    browser.authReset();
  },

  '1.Verify initial login with bcsc': function (browser) {
    bcsc = browser.page.bcscPage();
    browser.url(browser.globals.launch_url)
    bcsc.verifyLandingPage()
    bcsc.moveToBCSC()
    bcsc.enterBCSCCardUser(process.env.BCServiceCardUsername)
    bcsc.enterBCSCPassword(process.env.BCServiceCardPasscode)
    bcsc.proceedPastCardUseHistory()
  }
};