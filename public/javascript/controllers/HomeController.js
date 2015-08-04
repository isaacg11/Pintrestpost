(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ["HomeFactory","$state"];

	function HomeController(HomeFactory,$route) {
		var vm = this;

		vm.addPhoto = function () {
			HomeFactory.addNewPhoto(vm.photoinfo).then(function(){ //this line says to activate the func. addNewPhoto in the HomeFactory.
				$route.reload(); //this line says to reload the page once the function is complete.
			});
		};
//------------------------------------------------------------------------------------------------------------------------//		
HomeFactory.getPhotos().then(function(data){
	vm.photo = data;

});
//------------------------------------------------------------------------------------------------------------------------//


}


})();