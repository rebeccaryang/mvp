var app = angular.module('abArchive.newTest', ['abArchive.services','abArchive.currentTests']);

app.controller('testController', function($location,Tests){
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

	this.obj = {

	}

	this.addNew = function(){
		var obj = {}
		obj.headline_1 = this.ad1.headline;
		obj.headline_2 = this.ad2.headline;
		obj.desc1_1 = this.ad1.descriptionLine1;
		obj.desc1_2 = this.ad2.descriptionLine1;
		obj.desc2_1 = this.ad1.descriptionLine2;
		obj.desc2_2 = this.ad2.descriptionLine2;
		obj.display_1 = this.ad1.displayURL;
		obj.display_2 = this.ad2.displayURL;
		Tests.submitTest(obj);
	}
})

