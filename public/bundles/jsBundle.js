(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
<<<<<<< HEAD
			templateUrl: 'views/home.html',
			controller: "HomeController"
=======
			templateUrl: 'views/home.html'
>>>>>>> 30abec162c7195232c983e9b174f5f8c16dbd5f9
		});
		$urlRouterProvider.otherwise('/');
	}
})();

(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

<<<<<<< HEAD
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

=======
	HomeController.$inject = [];

	function HomeController() {
		var vm = this;
		vm.title = 'Welcome to our Ap!';
	}
>>>>>>> 30abec162c7195232c983e9b174f5f8c16dbd5f9
})();
(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

<<<<<<< HEAD

	function HomeFactory($http, $q) {
		var o = {};
	//----------------------------------------------------------------------------------------------------------------------//	
	o.addNewPhoto = function(photo) {
		var deferred = $q.defer();
		$http.post("/api/addPhoto", { photoURL: photo })
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function(data){
			deferred.reject(data);
		});
		return deferred.promise;
	};
		//----------------------------------------------------------------------------------------------------------------------//
		o.getPhotos = function(){
			var deferred = $q.defer();
			$http.get("/api")
			.success(function(data){
				console.log(data);
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
				console.log("bad");
			});
			return deferred.promise;
		};
		//----------------------------------------------------------------------------------------------------------------------//
=======
	function HomeFactory($http, $q) {
		var o = {};
		
>>>>>>> 30abec162c7195232c983e9b174f5f8c16dbd5f9
		return o;
	}
})();