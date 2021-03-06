var app = angular.module('abArchive.currentTests', ['abArchive.services']);

app.controller('CurrentTestsController', function(Tests, $timeout){
	this.currentTests = [];
	this.showInput = false;
	this.updateTest = {}
	this.spinner = {};
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
		var spinnerTemp = this.spinner;
		this.spinner[index] = true;
		var that = this
		var endSpinner = function(){
			$timeout(function(){
				that.spinner[index] = false;
			}, 1000)

		}
		that.showInput = false;
		Tests.updateTestData(id,this.updateTest.clicks_1, this.updateTest.impressions_1, this.updateTest.clicks_2, this.updateTest.impressions_2,endSpinner);
		this.currentTests[index].clicks_1 = this.updateTest.clicks_1;
		this.currentTests[index].clicks_2 = this.updateTest.clicks_2;
		this.currentTests[index].impressions_1 = this.updateTest.impressions_1;
		this.currentTests[index].impressions_2 = this.updateTest.impressions_2;
		this.currentTests[index].ctr_1 = this.updateTest.clicks_1/this.updateTest.impressions_1;
		this.currentTests[index].ctr_2 = this.updateTest.clicks_2/this.updateTest.impressions_2;
		this.currentTests[index].winner = Tests.statisticallySignificant(this.updateTest.clicks_1,this.updateTest.impressions_1,this.updateTest.clicks_2,this.updateTest.impressions_2)
	}
	this.delete = function(id,index){
		Tests.deleteTest(id);
		this.currentTests.splice(index,1);
	}
	 
});