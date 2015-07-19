app.controller('mainCtrl', function($scope) {
	var ref = new Firebase("https://clarity-control.firebaseio.com");
	$scope.login = function() {
		ref.authWithOAuthPopup("google", function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				console.log("Authenticated successfully with payload:", authData);
			}
		});
	};
});
