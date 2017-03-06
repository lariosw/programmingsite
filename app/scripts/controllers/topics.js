'use strict';

/**
 * @ngdoc function
 * @name programmingsiteApp.controller:TopicsCtrl
 * @description
 * # TopicsCtrl
 * Controller of the programmingsiteApp
 */
angular.module('programmingsiteApp')
  .controller('TopicsCtrl', function($scope, news) {
    //set defaults
  $scope.newsArticles=[];
    $scope.filteredArticles = [];
    $scope.articlesKeyword = "";

    //make call to api to get articles and by default set filtered articles to all articles
    $scope.newsArticles = news.find();
    $scope.newsArticles.$promise.then(function(data){
      $scope.filteredArticles = data.articles;
    });

    //method to handle search
    $scope.search = function(){
      var results=[];
      if(!$scope.articlesKeyword){
        if($scope.filteredArticles.length === $scope.newsArticles.articles.length) {
          window.alert('Please add keyword is required');
        }
        else {
          $scope.filteredArticles = $scope.newsArticles.articles;
        }

        return;
      }

      for(var i=0; i< $scope.newsArticles.articles.length; i++) {
        var currentArticle = $scope.newsArticles.articles[i];
        var keywordArticleMatches = doesArticlesMatchKeywords(currentArticle, $scope.articlesKeyword);

        if(keywordArticleMatches){
          results.push(currentArticle);
        }
      }
      $scope.filteredArticles = results;
    };

    function doesArticlesMatchKeywords(article, keyword){
      if(keyword){
        keyword = keyword.toLowerCase();
        if ((article.title && article.title.toLowerCase().indexOf(keyword) > -1) ||
          (article.author && article.author.toLowerCase().indexOf(keyword) > -1) ||
          (article.description && article.description.toLowerCase().indexOf(keyword) > -1) ||
          (article.url && article.url.toLowerCase().indexOf(keyword) > -1)) {
          return true;
        }
        else {
          return false;
        }
      }
      return true;
    }

/*function doesArticlesMatchKeywords(news, articles){
      var x = event;
     x+='';
      /*if(date){

       }
      return true;
    }*/


  });


