var app = angular.module('abArchive.services', []);

app.factory('Tests', function($http,$location){
	var submitTest = function(testObj,callback){
		return $http({
			method: 'POST',
			url: '/tests',
			data: testObj
		}).then(function(resp){
			$location.path('/currenttests')
		})
	};
	var getTests = function(callback){
		return $http({
			method:'GET',
			url: '/tests'
		}).then( function(resp) {
			callback(resp.data);
		})

	}
	var updateTestData = function(testID, clicks1,impressions1,clicks2,impressions2,callback){
		return $http({
			method:'POST',
			url:'/tests/update',
			data: {testID: testID, clicks1:clicks1, impressions1:impressions1, clicks2:clicks2, impressions2:impressions2}
		}).then( function(resp){
			callback();
		})
	}
	var deleteTest = function(testID){
		return $http({
			method:'POST',
			url:'/tests/delete',
			data:{testID:testID}
		}).then(function(resp){
			console.log(res);
			$route.reload()
		}, function(err){
			console.log(err);
		})
	}
	var statisticallySignificant = function(clicks1, impressions1, clicks2, impressions2){
		clicks1 = parseInt(clicks1)
		impressions1 = parseInt(impressions1)
		clicks2 = parseInt(clicks2)
		impressions2 = parseInt(impressions2)
		var divis = (impressions1+impressions2)
		var ev1 = impressions1*(clicks1+clicks2)/divis;
		var ev2 = impressions2*(clicks1+clicks2)/divis;
		var chisq = (Math.pow((ev1-clicks1),2)/ev1)+(Math.pow(ev2-clicks2,2)/ev2);
		var desiredchisq = 3.84
		if(chisq > desiredchisq){
			return true;
		} else {
			return false;

		}
	}
	return {
		submitTest: submitTest,
		getTests: getTests,
		deleteTest: deleteTest,
		updateTestData:updateTestData,
		statisticallySignificant:statisticallySignificant
	};
});