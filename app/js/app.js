'use strict';
angular.module('ofPG', ['ngRoute' ,'ofPG.services', 'ofPG.controllers', 'ofPG.directives'])

.config(function($routeProvider) {
    window.console.log('asdasd');
  $routeProvider
    .when('/main', {
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
    })
    .when('/settings', {
      templateUrl: 'templates/settings.html',
      controller: 'SettingsCtrl'
    })
    .otherwise({redirectTo : '/main'});
});
