var mongoose = require('mongoose');
var Test = require('./testModel.js');

// var Promise = require('bluebird');

// var createTest = Promise.promisify(Test.create);
// Mongoose Functions: Test.findOne, Test.create, Test.find

module.exports = {
	tests: {
		get: function(req, res){
			Test.find({}, function(err, content){
				if (err) {
					console.log('ERROR GETTING FROM MONGO')
					console.log(err);
				} else {
					res.json(content);
				}
			})
		},
		post: function(req, res){
			console.log(req.body)
			var newTest = new Test(req.body);
			newTest.save(function(err,content){
				if(err){
					console.log('ERROR ADDING TO MONGO')
					console.log(err);
				} else {
					return content;
				}
			})
		}
	}
}