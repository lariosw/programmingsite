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
    'ngTouch',
    '720kb.datepicker',
    'mwl.calendar',
    'ui.bootstrap',
    'ngAnimate'
  ])

  .config(function ($routeProvider, $sceDelegateProvider) {
    /* configure routes */
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

    /* configure url whitelist */
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Using **  to allow anything from the api route.
      'https://api.meetup.com/**'
    ]);


  });
