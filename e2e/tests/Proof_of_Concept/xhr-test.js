const fs = require('fs');
const request = require('request');

module.exports = {
    '@tags': [''],

    'POST data to the reset tool from NightWatch': function (browser) {
       browser.setupData('CP0000019', function(busObject){
            console.log(busObject);
       });

    }
};