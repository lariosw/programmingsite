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
    //scope defaults
    $scope.searchKeyword ="";
    $scope.eventResults =[];
    $scope.filteredEvents =[];
    $scope.searchEventDate = "";
    $scope.activeSearchKeyword = "";
    $scope.activeSearchEventDate = "";

    //call meetup api and get events
    events.query().then(function(response){
      //using .then -- promise, with asyncronous calls
      if(response && response.data && response.data.results) {
        $scope.eventResults = response.data.results;
        $scope.filteredEvents = $scope.eventResults;
      }
      else{
        window.alert('there was an error');
        //todo: there was an error do some error handling
      }
    }, function(err){
      window.alert('there was an error: ' + err);
      //todo: there was an error do some error handling
    });

    //handle search
    $scope.search = function(){
      var results=[];
      if(!$scope.searchKeyword && !$scope.searchEventDate){
        window.alert('Please add keyword or date one is required');
        //todo: replace this with modal
        return;
      }

      for(var i=0; i< $scope.eventResults.length; i++) {
        var currentEvent = $scope.eventResults[i];
        var dateMatches = !$scope.searchEventDate || doesEventMatchDate(currentEvent, $scope.searchEventDate);
        var keywordMatches = !$scope.searchKeyword || doesEventMatchKeywords(currentEvent, $scope.searchKeyword);

        if(dateMatches && keywordMatches){
          results.push(currentEvent);
        }
      }
      $scope.filteredEvents = results;
      $scope.activeSearchKeyword = $scope.searchKeyword;
      $scope.activeSearchEventDate = $scope.searchEventDate;
    };

    $scope.clearSearch = function(){
      $scope.filteredEvents = $scope.eventResults;
      $scope.searchKeyword = "";
      $scope.activeSearchKeyword = "";
      $scope.searchEventDate = "";
      $scope.activeSearchEventDate = "";
    };

    function doesEventMatchKeywords(event, keyword){
        if(keyword){
          keyword = keyword.toLowerCase();
          if ((event.name && event.name.toLowerCase().indexOf(keyword) > -1) ||
            (event.description && event.description.toLowerCase().indexOf(keyword) > -1) ||
            (event.group && event.group.name && event.group.name.toLowerCase().indexOf(keyword) > -1) ||
            (event.venue && event.venue.name && event.venue.name.toLowerCase().indexOf(keyword) > -1) ||
            (event.venue && event.venue.city && event.venue.city.toLowerCase().indexOf(keyword) > -1)) {
            return true;
          }
          else {
            return false;
          }
        }
        return true;
    }

    function doesEventMatchDate(event, date){
      //convert dates to date objects and set hour to 0 so that only date part is compared
      var searchDate = new Date(date);
      searchDate.setHours(0, 0, 0, 0);
      var eventDate = new Date(event.time);
      eventDate.setHours(0, 0, 0, 0);

      //compare the string of representation of each date
      if(searchDate.toString() === eventDate.toString()) {
        return true;
      }
      else {
        return false;
      }
    }


    //make HTML render from Json
    /*var app = angular.module ("myApp", ['ngSanitize']);
    app.controller("find-events", function ($scope, events){
      $scope.myHTML =
        events.description;
    });*/


  });
