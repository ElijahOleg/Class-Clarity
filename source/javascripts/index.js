var app = angular.module('clarityApp', ['ui.router']);

app.run(function($rootScope) {
  console.log('clarity app');
});
app.controller('loginCtrl', function($scope, $rootScope, $http, urls) {
	var ref = new Firebase("https://class-clarity.firebaseio.com");
	$scope.login = function() {
		ref.authWithOAuthRedirect("google", function(error) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				// We'll never get here, as the page will redirect on success.
			}
		});
	};
});
