var app = angular.module('abArchive.services', []);

app.factory('Tests', function($http){
	var submitTest = function(testObj){
		return $http({
			method: 'POST',
			url: '/tests',
			data: testObj,
			'content-type':'application/json'
		}).then( function(resp){
			return resp;
		} )
	};
	return {
		submitTest: submitTest
	};
});