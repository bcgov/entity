nightwatch_config = {
  src_folders : [ "tests" ],


  selenium : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },

  common_capabilities: {
    'build': 'nightwatch-browserstack',
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    'browserstack.debug': true
  },

  test_settings: {
    default: {			
      "globals": {
        "waitForConditionTimeout": 10000,	
        "throwOnMultipleElementsReturned": true,
      }
    },
    chrome: {
      desiredCapabilities: {
        'os': 'Windows',
        'os_version': '10',
        'browser': 'Chrome',
        'browser_version': '76.0',
        'resolution': '1920x1080'
      }
    },
    firefox: {
      desiredCapabilities: {
        'os': 'Windows',
        'os_version': '10',
        'browser': 'Firefox',
        'browser_version': '69.0 beta',
        'resolution': '1920x1080'
      }
    },
    safari: {
      desiredCapabilities: {
        'os': 'OS X',
        'os_version': 'Mojave',
        'browser': 'Safari',
        'browser_version': '12.1',
        'resolution': '1920x1080'
      }
    },
    ie: {
      desiredCapabilities: {
        'os': 'Windows',
        'os_version': '10',
        'browser': 'IE',
        'browser_version': '11.0',
        'resolution': '1920x1080'
      }
    }
  }
};

// Code to support common capabilites
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
  config['desiredCapabilities'] = config['desiredCapabilities'] || {};
  for(var j in nightwatch_config.common_capabilities){
    config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
  }
}

module.exports = nightwatch_config;
