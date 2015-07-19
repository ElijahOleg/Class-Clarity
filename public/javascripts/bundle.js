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

app
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/templates/home.html',
				controller: 'mainCtrl'
			})
			.state('session', {
				url: '/session/:id',
				templateUrl: '/templates/dashboard.html',
				controller: 'dashboardCtrl'
			})
			.state('login', {
				url: '/login',
				templateUrl: '/templates/login.html',
				controller: 'loginCtrl'
			})
			.state('signup', {
				url: '/signup',
				templateUrl: '/templates/signup.html',
				controller: 'signupCtrl'
			});
	});

app
	.constant('urls', {
		'apiUrl': ''
	});

app.controller('dashboardCtrl', function($scope, urls) {
	$scope.count = 0;
	$scope.Questions = [{
		author: "Elijah Olegnowicz",
		body: "what is the meaning of life?",
		upvotes: 2,
		dateCreated: new Date()
	}, {
		author: "Elijah Olegnowicz",
		body: "what is the meaning of life?",
		upvotes: 2,
		dateCreated: new Date()
	}, {
		author: "Elijah Olegnowicz",
		body: "what is the meaning of life?",
		upvotes: 2,
		dateCreated: new Date()
	}, {
		author: "Elijah Olegnowicz",
		body: "what is the meaning of life?",
		upvotes: 2,
		dateCreated: new Date()
	}];
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

app.controller('signupCtrl', function($scope, $rootScope, $http, urls) {
  $scope.working = "Hello World";
});
