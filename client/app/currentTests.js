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
			test.winner = Tests.statisticallySignificant(elem.clicks_1,elem.impressions_1,elem.clicks_2,elem.impressions_2);
			that.currentTests.push(test);

		});
		
	});
	this.toggleInput = function(id){
		if(this.showInput === id){
			this.showInput = false;
		} else {
			this.showInput = id;
		}
		
	}
	this.updateTestData = function(id,index){
		Tests.updateTestData(id,this.updateTest.clicks_1, this.updateTest.impressions_1, this.updateTest.clicks_2, this.updateTest.impressions_2);
		this.currentTests[index].clicks_1 = this.updateTest.clicks_1;
		this.currentTests[index].clicks_2 = this.updateTest.clicks_2;
		this.currentTests[index].impressions_1 = this.updateTest.impressions_1;
		this.currentTests[index].impressions_2 = this.updateTest.impressions_2;
		this.currentTests[index].ctr_1 = this.updateTest.clicks_1/this.updateTest.impressions_1;
		this.currentTests[index].ctr_2 = this.updateTest.clicks_2/this.updateTest.impressions_2;
		this.currentTests[index].winner = Tests.statisticallySignificant(this.updateTest.clicks_1,this.updateTest.impressions_1,this.updateTest.clicks_2,this.updateTest.impressions_2)
		console.log(this.currentTests[index].winner)
	}
	this.delete = function(id,index){
		Tests.deleteTest(id);
		this.currentTests.splice(index,1);
	}
	 
});