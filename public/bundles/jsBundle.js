(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/Home.html',
			controller: "HomeController"
		})
		.state('Register',{
			url:'/Register',
			templateUrl: 'views/register.html',
			controller:"registerCtrl"
		});
		$urlRouterProvider.otherwise('/');
	}
})();

(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ["HomeFactory","userFactory", "$route", "$state"];

<<<<<<< HEAD
	function HomeController(HomeFactory, userFactory, $route, $state) {
=======
	function HomeController(HomeFactory, userFactory, $state) {
>>>>>>> 1c0731bad6b39d4efcc2197cdd450cd872073e8b
		var vm = this;
		vm.status = userFactory.status;
		vm.user = {};
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

<<<<<<< HEAD
function login() {
	
	userFactory.login(vm.user).then(function(){
		$state.go('Home');
	});

}
=======
		function login() {
			userFactory.login(vm.user).then(function(){
				$state.go('Home');
			});
		}
>>>>>>> 1c0731bad6b39d4efcc2197cdd450cd872073e8b

	}


})();
(function() {
	'use strict';
	angular.module('app')
	.controller('navbarCtrl', navbarCtrl);

	navbarCtrl.$inject = ['userFactory', '$state'];

	function navbarCtrl(userFactory, $state) {
		var vm = this;
		vm.user = {};
		vm.status = userFactory.status;
		vm.logout = userFactory.logout;
	}
})();
(function() {
	'use strict';
	angular.module('app')
	.controller('registerCtrl', registerCtrl);

	registerCtrl.$inject = ["userFactory","$state"];

	function registerCtrl(userFactory,$state) {
		var vm = this; 
		vm.user = {}; //this line is declaring a variable 'nav.user' equal to an empty obj.
		vm.status = userFactory.status; //this line is declaring a variable 'vm.status' equal to 'userFactory.status'
		vm.register = register; //this line is declaring a variable 'nav.register' equal to 'register'.
//------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function register() {
	var u = vm.user; //this line is declaring a variable 'user' equal to 'register'.
	if(!u.username || !u.email || !u.password || !u.cpassword || !(u.password === u.cpassword )) { //this line is saying if none of the expressions are
		return false; //true, then to return false to THE CLIENT.
	}
	userFactory.register(u).then(function(){ //this line says to go to the HF and activate the function 'register' by passing the data obj.'user' in the parameter.
		$state.go('Home');//this line says that once the function is complete, go back and render the 'Home' state.
	});
}



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
(function() {
	'use strict';
	angular.module('app')
	.factory('userFactory', userFactory);

	userFactory.$inject = ['$http', '$q', '$state'];

	function userFactory($http, $q, $state) {
		var o = {};
		o.status = {};
		if(getToken()) {
			o.status.isLoggedIn = true;
			o.status.username = getUsername();
		}
		o.setToken = setToken;
		o.getToken = getToken;
		o.removeToken = removeToken;
		o.register = register;
		o.login = login;
		o.logout = logout;
		return o;
		//------------------------------------------------------------------------------------------------------------------------------------------------------------------//
		function register(user) {
			var q = $q.defer();
			$http.post('/api/Users/Register', user).success(function(res){ //this line says to send a post request to '/api/Users/Register' with the data obj. 'user' to THE SERVER.
				setToken(res.token); // this line says to set the authentication token on the response obj. and assign it the property name of 'token'.
				o.status.isLoggedIn = true; //this line says to make the status of the user to 'isLoggedIn' equal to true.
				q.resolve(); //this line says to go back to the navBarController and activate the first property '.then'.
			}).error(function(res) {
				console.error(res);
			});
			return q.promise; //this line turns the function call in the navBarController into an object and to activate when the q.whatever method is used.
		}
		//------------------------------------------------------------------------------------------------------------------------------------------------------------------//
		function login(user) {
			var u = { username: user.username.toLowerCase(), password: user.password};
			var q = $q.defer();
			$http.post('/api/Users/Login', u).success(function(res) {
				setToken(res.token);
				o.status.isLoggedIn = true;
				q.resolve();
			});
			return q.promise;
		}
		//------------------------------------------------------------------------------------------------------------------------------------------------------------------//
		function logout() {
			o.status.isLoggedIn = false;
			removeToken();
		}
		//------------------------------------------------------------------------------------------------------------------------------------------------------------------//
		function setToken(token){
			localStorage.setItem('token', token);
			o.status.username = getUsername();
		}
		//------------------------------------------------------------------------------------------------------------------------------------------------------------------//
		function getToken() {
			return localStorage['token'];
		}
		//------------------------------------------------------------------------------------------------------------------------------------------------------------------//function getUsername() {
			function removeToken() {
				localStorage.removeItem('token');
				o.status.username = null;
			}
		//------------------------------------------------------------------------------------------------------------------------------------------------------------------//
		function getUsername() {
			return JSON.parse(atob(getToken().split('.')[1])).username;
		}
	}
})();