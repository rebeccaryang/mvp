var app = angular.module('abArchive', ['abArchive.services']);

app.controller('testController', function(Tests){
	this.ad1 = {
		headline:"",
		descriptionLine1:"",
		descriptionLine2:"",
		displayURL:""
	};

	this.ad2 = {
		headline:"",
		descriptionLine1:"",
		descriptionLine2:"",
		displayURL:""
	};

	this.addNew = function(){
		var obj = {}
		obj.ad1 = this.ad1;
		obj.ad2 = this.ad2;
		console.log("Add new being called on app.js")
		Tests.submitTest(obj);
	}
})

