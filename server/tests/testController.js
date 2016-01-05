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
			console.log(req.body);
			var newTest = new Test(req.body);
			newTest.save(function(err,content){
				if(err){
					console.log('ERROR ADDING TO MONGO')
					console.log(err);
				} else {
					return content;
				}
			})
		},
		update: function(req, res){
			var id = req.body.testID
			Test.findById(id, function(err, docuThing){
				docuThing.clicks_1 = req.body.clicks1;
				docuThing.clicks_2 = req.body.clicks2;
				docuThing.impressions_1 = req.body.impressions1;
				docuThing.impressions_2 = req.body.impressions2;
				docuThing.save(function(err){
					if(err){
						console.log('Error with saving!');
						console.log(err);	
					} else {
						return docuThing;
					}
				})

			})
		},
		deleteTest: function(req,res){
			var id = req.body.testID;
			Test.findOneAndRemove({_id:id}, function(err,doc,res){
				if(err){
					console.log("ERROR")
				} else {
					return id;
				}
			})
		}
	}
}