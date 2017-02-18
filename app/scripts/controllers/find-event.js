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
    //$scope.eventInfo = events.query().results;

    /*using .then -- promise, with asyncronous calls*/
    events.query().then(function(response){
        if(response && response.data && response.data.results) {
          $scope.eventInfo = response.data.results;
        }
        else{
          //there was an error do some error handling
        }
      });


    $scope.resultsView = 'list';

  });
