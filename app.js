var express = require('express');
var mongoose = require('mongoose');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./router.js')

var app = express();

//Parsing and Logging
app.use(morgan('dev'));
app.use(parser.json());

mongoose.connect('mongodb://localhost/abarchive');

app.set("port", 3000);
app.use('/tests', router);

// app.use(express.static("client")); // why doesn't the below code work?
app.use(express.static(__dirname + "client"));

if(!module.parent) {
	app.listen(app.get("port"));
	console.log("Listening on", app.get("port"));
}

module.exports.app = app;

