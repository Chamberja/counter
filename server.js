var express = require('express');
var app = express();

app.use(express.static('dist')).listen(process.env.PORT || 8080);