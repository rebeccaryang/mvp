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
			url: '/tests',
		}).then( function(resp) {
			callback(resp.data);
		})

	}
	var deleteTest = function(testObj){
		
	}
	return {
		submitTest: submitTest,
		getTests: getTests,
		deleteTest: deleteTest
	};
});