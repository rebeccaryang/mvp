var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var bodyParser = require('body-parser');

var testController = require('./tests/testController.js')

var app = express();

app.use(bodyParser.json());


mongoose.connect('mongodb://heroku_q7zlb01r:p8t2cmjbcptmd1l7fmonoa138u@ds039115.mongolab.com:39115/heroku_q7zlb01r');
var port = process.env.PORT || 3000
app.set("port", port);
app.post('/tests', function(req,res){
	testController.tests.post(req,res);
})

app.get('/tests', function(req,res){
	testController.tests.get(req,res);
})

app.post('/tests/update', function(req,res){
	testController.tests.update(req,res);
})

app.post('/tests/delete', function(req,res){
	testController.tests.deleteTest(req,res)
})
// app.use(express.static("client")); // why doesn't the below code work?
app.use(express.static(path.join(__dirname ,'../client')));

if(!module.parent) {
	app.listen(app.get("port"));
	console.log("Listening on", app.get("port"));
}

module.exports = app;

