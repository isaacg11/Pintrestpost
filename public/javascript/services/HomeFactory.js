(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];


	function HomeFactory($http, $q) {
		var o = {};
		// o.deletePhoto = deletePhoto; //--->>>MIXES VIEWS TOGETHER..??
		o.photos =[];
	//----------------------------------------------------------------------------------------------------------------------//	
	o.addNewPhoto = function(photo) {
		var deferred = $q.defer();
		$http.post("/api/addPhoto", { photoURL: photo }) //this line says to make a post request to /api/addPhoto with {photoURL: photo} as the parameter.
		.success(function(data){
			// photo.dateCreated = new Date();
			o.photos.push(photo);
			deferred.resolve(data);
		})
		.error(function(data){
			deferred.reject(data);
		});
		return deferred.promise;
	};
		//----------------------------------------------------------------------------------------------------------------------//
		o.deletePhoto = function(photo){
			var deferred = $q.defer();
			$http.post('/api/deletePhoto/'+ photo._id).success(function(res) {
				o.getPhotos().then(function(data) {
					deferred.resolve(data);
				});
				
			});
			return deferred.promise;
		};

		//----------------------------------------------------------------------------------------------------------------------//
		o.getPhotos = function(){
			var deferred = $q.defer();
			$http.get("/api").success(function(res){
				deferred.resolve(res);
			});
			return deferred.promise;
		};
		//----------------------------------------------------------------------------------------------------------------------//

		return o;
	}
})();