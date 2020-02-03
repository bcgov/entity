var util = require('util');
var events = require('events');
var request = require('request');
var fs = require('fs');

function setupData() {
    events.EventEmitter.call(this);
}

util.inherits(setupData, events.EventEmitter);

setupData.prototype.command = function (identifier, callback) {
    var filename = identifier + '.xls';
    var path = './lear-data/' + identifier + '.xls';
    var self = this;
    this.api.perform(function () {
        setTimeout(function () {
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
                            'filename': filename,
                            'contentType': null
                        }
                    }
                }
            };

            request(options, function (error, response) {
                if (error) {
                    console.error(error);
                    return;
                }
                if (callback){
                    var busObject = JSON.parse(response.body);
                    callback(busObject);
                }             
                
            });
                self.emit('complete');
        }, 10);
    });
    return this;
};

module.exports = setupData;