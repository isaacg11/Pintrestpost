(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ["HomeFactory","userFactory", "$state"];

	function HomeController(HomeFactory, userFactory, $state) {
		var vm = this;
		vm.photo = [];
		vm.status = userFactory.status;
		vm.user = {};
		vm.login = login;//this line is declaring a variable 'vm.login' equal to 'login'.
		vm.deletePhoto = function(photo) {
			HomeFactory.deletePhoto(photo).then(function(data){
				vm.photo = data;
			});
		};
		//------------------------------------------------------------------------------------------------------------------------//
		vm.addPhoto = function () {
			HomeFactory.addNewPhoto(vm.photoinfo).then(function(data){ //this line says to activate the func. addNewPhoto in the HomeFactory.
				console.log("posted photo"); //this line says to reload the page once the function is complete.
				vm.photo.push(data);
			});
		};
		//------------------------------------------------------------------------------------------------------------------------//		
		HomeFactory.getPhotos().then(function(data){
			vm.photo = data;
		});
		//------------------------------------------------------------------------------------------------------------------------//
		
		function login() {
			userFactory.login(vm.user).then(function(){
				$state.go('Home');
			});
		}

	}


})();