(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ["HomeFactory","$state"];

	function HomeController(HomeFactory,$route) {
		var vm = this;
		var photo = {};

		vm.addPhoto = function () {
			HomeFactory.addNewPhoto(vm.photoinfo).then(function(){
				$route.reload();
			});
		};
//------------------------------------------------------------------------------------------------------------------------//		
HomeFactory.getPhotos().then(function(data){
	vm.photo = data;

});
//------------------------------------------------------------------------------------------------------------------------//


}


})();