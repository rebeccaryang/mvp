var app = angular.module('abArchive.currentTests', ['abArchive.services']);

app.controller('CurrentTestsController', function(Tests){
	this.currentTests = [];
	this.showInput = false;
	this.updateTest = {}
	var that = this;
	Tests.getTests(function(data){
		_.each(data, function(elem){
			var test = elem;
			test.ctr_1 = elem.clicks_1/elem.impressions_1;
			test.ctr_2 = elem.clicks_2/elem.impressions_2;
			that.currentTests.push(test);
		});
		console.log(that.currentTests);
	});
	this.toggleInput = function(id){
		this.showInput = id;
	}
	this.updateTestData = function(id){
		Tests.updateTestData(id,this.updateTest.clicks_1, this.updateTest.impressions_1, this.updateTest.clicks_2, this.updateTest.impressions_2);	
	}
	 
});