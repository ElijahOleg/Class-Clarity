app
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {url: '/', templateUrl: '/templates/home.html', controller: 'mainCtrl'})
    .state('session', {url: '/session/:id', templateUrl: '/templates/dashboard.html', controller: 'profileCtrl'});
});

app
  .constant('urls',{
  'apiUrl': ''
});
