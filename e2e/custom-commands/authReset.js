var util = require('util');
var events = require('events');
var request = require('request');

function authReset() {
    events.EventEmitter.call(this);
}

util.inherits(authReset, events.EventEmitter);

authReset.prototype.command = function () {

    var self = this;

    this.api.execute(function(){
        var token = window.sessionStorage.getItem('KEYCLOAK_TOKEN'); 
        return token;
    }, function(result){
        var auth = 'Bearer ' + result.value;
        var options = {
            'method': 'POST',
            'url': 'https://auth-api-test.pathfinder.gov.bc.ca/test/reset',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': auth 
                }
        };
        
        request(options, function (error, response) { 
            if (error) {
                console.log("Auth reset failed: " + error);
            }
            console.log("Auth reset complete: " + response.statusCode);
            self.emit('complete');
        });

    }); 

    return this;
};

module.exports = authReset;