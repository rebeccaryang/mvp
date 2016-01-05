var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var bodyParser = require('body-parser');

var testController = require('./tests/testController.js')

var app = express();

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/abarchive');

app.set("port", 3000);
app.post('/tests', function(req,res){
	testController.tests.post(req,res);
})

app.get('/tests', function(req,res){
	testController.tests.get(req,res);
})

app.post('/tests/delete' function(req,res){
	// TO DO: FIGURE THIS OUT
})
// app.use(express.static("client")); // why doesn't the below code work?
app.use(express.static(path.join(__dirname ,'../client')));

if(!module.parent) {
	app.listen(app.get("port"));
	console.log("Listening on", app.get("port"));
}

module.exports = app;

