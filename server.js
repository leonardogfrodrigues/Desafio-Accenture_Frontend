var express = require('express');
var app = express();
app.use(express.static(__dirname));


var server = app.listen(4005, () => { 
    console.log('server is running on port', server.address().port); 
    });

