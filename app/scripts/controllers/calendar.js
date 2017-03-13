'use strict';

/**
 * @ngdoc function
 * @name programmingsiteApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the programmingsiteApp
 */
angular.module('programmingsiteApp')
  .controller('CalendarCtrl', function ($scope, events) {
    //calendar config defaults
    $scope.calendarState = {
      calendarView : "month",
      viewDate : new Date(),
      cellIsOpen: true,
      events: []
    };

    //request events
    //call meetup api and get events
    events.query().then(function(response){
      //using .then -- promise, with asyncronous calls
      if(response && response.data && response.data.results) {
        var meetupEvents = response.data.results;
        var mappedEvents = translateEvents(meetupEvents);
        $scope.calendarState.events = mappedEvents;
      }
      else{
        window.alert('there was an error');
        //todo: there was an error do some error handling
      }
    }, function(err){
      window.alert('there was an error: ' + err);
      //todo: there was an error do some error handling
    });


    //takes meetup events and restructures them to match structure required by calendar
    function translateEvents(muEvents){
      var formattedEvents = [];
      var i;
      for (i=0; i < muEvents.length; i++) {
        //repeat this for each event in muEvents
        var newEvent = {
          title: muEvents[i].name,
          startsAt: new Date(muEvents[i].time),
          endsAt: new Date(muEvents[i].time),
          url: muEvents[i].event_url
        };
        formattedEvents.push(newEvent);
        //end repeat
      }
      return formattedEvents;
    }

    //handle event click on calendar
    $scope.eventClicked = function(event) {
      window.open(event.url);
    };
  });




/*
    $scope.events = [
      {
        title: 'My event title', // The title of the event
        startsAt: new Date(2013,5,1,1), // A javascript date object for when the event starts
        endsAt: new Date(2014,8,26,15), // Optional - a javascript date object for when the event ends
        color: { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
          primary: '#e3bc08', // the primary event color (should be darker than secondary)
          secondary: '#fdf1ba' // the secondary event color (should be lighter than primary)
        },
        actions: [{ // an array of actions that will be displayed next to the event title
          label: '<i class=\'glyphicon glyphicon-pencil\'></i>', // the label of the action
          cssClass: 'edit-action', // a CSS class that will be added to the action element so you can implement custom styling
          onClick: function(args) { // the action that occurs when it is clicked. The first argument will be an object containing the parent event
            console.log('Edit event', args.calendarEvent);
          }
        }],
        draggable: true, //Allow an event to be dragged and dropped
        resizable: true, //Allow an event to be resizable
        incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
        recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
        cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
        allDay: false // set to true to display the event as an all day event on the day view
      }
    ];

    angular.module('programmingsiteApp')
      .config(['calendarConfig', function(calendarConfig) {

        // View all available config
        console.log(calendarConfig);

        // Change the month view template globally to a custom template
        calendarConfig.templates.calendarMonthView = 'path/to/custom/template.html';

        // Use either moment or angular to format dates on the calendar. Default angular. Setting this will override any date formats you have already set.
        calendarConfig.dateFormatter = 'moment';

        // This will configure times on the day view to display in 24 hour format rather than the default of 12 hour
        calendarConfig.allDateFormats.moment.date.hour = 'HH:mm';

        // This will configure the day view title to be shorter
        calendarConfig.allDateFormats.moment.title.day = 'ddd D MMM';

        // This will set the week number hover label on the month view
        calendarConfig.i18nStrings.weekNumber = 'Week {week}';

        // This will display all events on a month view even if they're not in the current month. Default false.
        calendarConfig.displayAllMonthEvents = true;

        // Make the week view more like the day view, ***with the caveat that event end times are ignored***.
        calendarConfig.showTimesOnWeekView = true;

      }]);
  });

*/
