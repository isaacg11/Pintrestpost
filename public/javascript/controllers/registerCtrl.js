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