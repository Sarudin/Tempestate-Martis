angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../templates/homeTmpl.html'
    })
    .state('getAll', {
      url: '/getAll',
      templateUrl: '../templates/getAllTmpl.html'
    })
    .state('showAll', {
      url: '/showAll',
      templateUrl: '../templates/showAllTmpl.html'
    })
    .state('getByDate', {
      url: '/getByDate',
      templateUrl: '../templates/getByDateTmpl.html'
    })
    .state('showByDate', {
      url: '/showByDate',
      templateUrl: '../templates/showByDateTmpl.html'
    })
    .state('getLatest', {
      url: '/getLatest',
      templateUrl: '../templates/getLatestTmpl.html'
    })
    .state('showLatest', {
      url: '/showLatest',
      templateUrl: '../templates/showLatestTmpl.html'
    })

  $urlRouterProvider.otherwise('/');
})
