var app = angular.module('abArchive.services', []);

app.factory('Tests', function($http){
	var submitTest = function(testObj){
		return $http({
			method: 'POST',
			url: '/tests',
			data: testObj
		})
		console.log("Attempting to submit test")
	};
	var getTests = function(callback){
		return $http({
			method:'GET',
			url: '/tests'
		}).then( function(resp) {
			callback(resp.data);
		})

	}
	var updateTestData = function(testID, clicks1,impressions1,clicks2,impressions2){
		return $http({
			method:'POST',
			url:'/tests/update',
			data: {testID: testID, clicks1:clicks1, impressions1:impressions1, clicks2:clicks2, impressions2:impressions2}
		}).then( function(resp){
			console.log("Successfully submitted post request to /tests/update");
		})
	}
	var deleteTest = function(testObj){

	}
	var statisticallySignificant = function(clicks1, impressions1, clicks2, impressions2){
		var divis = (impressions1 + impressions2)*(clicks1 + clicks2)
		var ev1 = impressions1/divis;
		var ev2 = impressions2/divis;
		var chisq = (Math.pow((ev1-clicks1),2)/ev1)+(Math.pow(ev2-clicks2,2)/ev2);
	}
	return {
		submitTest: submitTest,
		getTests: getTests,
		deleteTest: deleteTest,
		updateTestData:updateTestData,
		statisticallySignificant:statisticallySignificant
	};
});