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
		$http.post("/api/addPhoto", { photoURL: photo }) //this line says to make a post request to /api/addPhoto with {photoURL: photo} as the parameter.
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