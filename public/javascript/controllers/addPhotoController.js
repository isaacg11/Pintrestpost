(function() {
	'use strict';
	angular.module('app')
	.controller('addPhotoController', addPhotoController);

	addPhotoController.$inject = ['HomeFactory',"$state"];

	function addPhotoController(HomeFactory, $state) {
		var vm = this;
		var photo = {};

		vm.addPhoto = function () {
			HomeFactory.addNewPhoto(vm.photo).then(function(){
				console.log("success");
			});
		};	
	}

})();