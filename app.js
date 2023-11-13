var soap = require('soap');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var postNotification = require('./controllers').post_notification;
var getNotification = require('./controllers').get_notification;

var service = {
    ws: {
        wsSoapPort: {
            post_notification: postNotification,
            get_notification: getNotification
            }
        }
};


var xml = require('fs').readFileSync('service.wsdl', 'utf8');

app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));
app.listen(3010, function(){
    soap.listen(app, '/wsdl', service, xml, function(){
        console.log('server initialized');
    });

});

