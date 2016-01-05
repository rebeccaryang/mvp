var app = angular.module('abArchive.services', []);

app.factory('Tests', function($http){
	var submitTest = function(testObj){
		return $http({
			method: 'POST',
			url: '/tests',
			data: testObj
		})
	};
	var getTests = function(callback){
		return $http({
			method:'GET',
			url: '/tests',
		}).then( function(resp) {
			callback(resp.data);
		})

	}
	return {
		submitTest: submitTest,
		getTests: getTests
	};
});