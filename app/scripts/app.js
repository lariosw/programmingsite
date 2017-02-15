'use strict';

/**
 * @ngdoc overview
 * @name programmingsiteApp
 * @description
 * # programmingsiteApp
 *
 * Main module of the applicatio n.
 */
angular
  .module('programmingsiteApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/topics', {
        templateUrl: 'views/topics.html',
        controller: 'TopicsCtrl',
        controllerAs: 'Topics'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl',
        controllerAs: 'Calendar'
      })
      .when('/add-event', {
        templateUrl: 'views/add-event.html',
        controller: 'AddEventCtrl',
        controllerAs: 'AddEvent'
      })
      .when('/find-event', {
        templateUrl: 'views/find-event.html',
        controller: 'FindEventCtrl',
        controllerAs: 'FindEvent'
      })
      .otherwise({
        redirectTo: '/'
      });
  });