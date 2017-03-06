'use strict';

/**
 * @ngdoc service
 * @name programmingsiteApp.news
 * @description
 * # news
 * Factory in the programmingsiteApp.
 */
angular.module('programmingsiteApp')
  .factory('news', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=4a0bf08350584a7ebe0fbb395c2548a0', {}, {
      find: {
        method:'GET',
        params:{},
        isArray:false
      }
    });
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
