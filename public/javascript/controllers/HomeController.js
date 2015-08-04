(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ["HomeFactory","userFactory", "$state"];

	function HomeController(HomeFactory, userFactory, $state, $route) {
		var vm = this;
		vm.isLoggedIn = userFactory.status.isLoggedIn;
		
		vm.login = login;//this line is declaring a variable 'vm.login' equal to 'login'.

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

function login() {
	
	userFactory.login(vm.user).then(function(){
		$state.go('Home');
	});
}

}


})();