angular.module('readingApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    templateUrl: './js/homeView/homeTmpl.html',
    controller: 'homeCtrl',
    url: '/'
  })

  .state('readingLog', {
    templateUrl: './js/readingLogView/readingLogTmpl.html',
    controller: 'readingLogCtrl',
    url: '/log'
  })

  .state('recommendation', {
    templateUrl: './js/recommendationView/recommendationTmpl.html',
    controller: 'recommendationCtrl',
    url: '/recommendation'
  })

  .state('becoming', {
    templateUrl: './js/becomeNinjaView/becomeNinjaTmpl.html',
    controller: 'becomeNinjaCtrl',
    url: '/login'
  })
});
