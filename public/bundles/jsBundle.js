(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html',
			controller: "HomeController"
		});
		$urlRouterProvider.otherwise('/');
	}
})();

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
(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];


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
		return o;
	}
})();