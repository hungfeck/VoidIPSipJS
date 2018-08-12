const express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);
var port = process.env.PORT || 3333;

app.get('/',function(req, res){
    res.sendFile( __dirname + '/index.html');
});
app.use(express.static('public'));

httpServer.listen(port, function(){
    console.log('SipJS running in port', port);
})