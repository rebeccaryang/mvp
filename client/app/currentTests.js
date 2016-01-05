var app = angular.module('abArchive.currentTests', ['abArchive.services']);

app.controller('CurrentTestsController', function(Tests){
	this.currentTests = [];
	var that = this;
	Tests.getTests(function(data){
		_.each(data, function(elem){
			that.currentTests.push(elem);
			console.log(that.currentTests);
		})
	})
	  
});