var express = require('express');
var app = express();
app.use(express.static(__dirname));


var server = app.listen(4004, () => { 
    console.log('server is running on port', server.address().port); 
    });

