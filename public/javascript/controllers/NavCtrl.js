(function(){
	'use strict';
	angular.module('app')
	.controller('NavCtrl', NavCtrl);

	NavCtrl.$inject = ['UserFactory', '$state'];

	function NavCtrl(UserFactory, $state){
		var vm=this;
		vm.user={};
		vm.status = UserFactory.status;
		vm.logout = UserFactory.logout;

	}
})();