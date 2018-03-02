const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.get('/', function(request, response) {
    response.send('Hello World!');
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Listening on " + port);
});


module.exports = app;

