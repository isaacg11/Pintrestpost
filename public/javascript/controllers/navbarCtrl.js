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