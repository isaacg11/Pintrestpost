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
		}).
		state('Register',{
			url:'/Register',
			templateUrl: 'views/register.html',
			controller:"navBarController"
		});
		$urlRouterProvider.otherwise('/');
	}
})();
