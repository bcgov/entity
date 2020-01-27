const fs = require('fs');
const request = require('request');

module.exports = {
    '@tags': ['single'],

    'call POST from NightWatch': function (browser) {
        var path = './lear-data/CP0000019.xls';

        var options = {
            'method': 'POST',
            'url': 'https://data-reset-tool-dev.pathfinder.gov.bc.ca/api/fixture/import',
            'headers': {
                'Content-Type': 'multipart/form-data'
            },
            'formData': {
                'file': {
                    'value': fs.createReadStream(path),
                    'options': {
                        'filename': 'CP0000019.xls',
                        'contentType': null
                    }
                }
            }
        };

        request.post(options, function (error,response){
            if(error){
                console.log(error);
            }
            console.log(response.body);
        });

    }
};