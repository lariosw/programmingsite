'use strict';

/**
 * @ngdoc function
 * @name programmingsiteApp.controller:TopicsCtrl
 * @description
 * # TopicsCtrl
 * Controller of the programmingsiteApp
 */
angular.module('programmingsiteApp')
  .controller('TopicsCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

/*angular.module('programmingsiteApp')
  .factory('topics', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=4a0bf08350584a7ebe0fbb395c2548a0', {}, {
      find: {
        method:'GET',
        params:{
          query:
        },
        isArray:false

      }
    });
  });*/
