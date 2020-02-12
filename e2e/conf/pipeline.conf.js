var browserstack = require('browserstack-local');
require('dotenv').config();

nightwatch_config = {
  "src_folders": ["./tests"],
  "custom_commands_path": ["./node_modules/nightwatch-xhr/es5/commands", "./custom-commands"],
  "page_objects_path": ["./page-objects"],
   "test_workers":{
     "enabled":true,
     "workers":4
   },
  selenium : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },

  common_capabilities: {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
    'browserstack.debug': true,
    'browserstack.local': true,
    'os': 'Windows',
    'os_version': '10'
  },


  test_settings: {
    default: {
      globals_path: "globals.js",
    },

    chrome: {
        desiredCapabilities: {
        'browserName': 'Chrome',
        'browser_version': '76.0',
        'resolution': '1920x1080',
        'chromeOptions':{
          'args':['start-fullscreen']
        }
     },
    },
       
    edge: {
        desiredCapabilities: {
        "browserName" : "Edge",
        "browser_version" : "18",
        "browserstack.local" : "true",
        "browserstack.selenium_version" : "3.5.2",
        "resolution":"1920x1080"

      },
    },
    firefox: {
      desiredCapabilities: {
       "browserName" : "Firefox",
       "browser_version" : "72.0",
       'acceptSslCerts' : true,
       'acceptInsecureCerts':true,
       "resolution":"1920x1080"
       },
      },
    ie: {
        desiredCapabilities: {
        "browserName" : "IE",
        "browser_version" : "11.0",
        "resolution":"1920x1080"
      }
   },
    test: {
      globals_path: "test-globals.js"
    },
    dev:{
      globals_path: "dev-globals.js"
    },
  
  },
}
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
