var app = angular.module('abArchive', ['ngRoute','abArchive.services','abArchive.currentTests','abArchive.newTest']);

app.config(function($routeProvider){
	$routeProvider
		.when('/newtest', {
			templateUrl: 'app/newTest.html',
			controller: 'testController'
		})
		.when('/currenttests', {
			templateUrl: 'app/currentTests.html',
			controller:'CurrentTestsController'
		})
		.otherwise({
			redirectTo: '/currenttests'
		});
})