'use strict';

/**
 * @ngdoc function
 * @name programmingsiteApp.controller:FindEventCtrl
 * @description
 * # FindEventCtrl
 * Controller of the programmingsiteApp
 */
angular.module('programmingsiteApp')
  .controller('FindEventCtrl', function($scope, events) {

    $scope.eventInfo = events.query().results;
    $scope.resultsView = 'list';

  });
