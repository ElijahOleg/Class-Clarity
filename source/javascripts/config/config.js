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
