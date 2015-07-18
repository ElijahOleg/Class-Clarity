var app = angular.module('clarityApp', ['ui.router']);

app.run(function($rootScope) {
  console.log('clarity app');
});

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

app.controller('mainCtrl', function($scope, $rootScope, $http, urls) {
  $scope.working = "Hello World";
});
