'use strict';

// Register `authorDetail` component, along with its associated controller and template
angular.
  module('authorDetail').
  component('authorDetail', {
    templateUrl: 'author-detail/author-detail.template.html',
    controller: ['$routeParams', 'Track', '$scope', 
      function AuthorDetailController($routeParams, Track, $scope) {
        var authorName = $routeParams.authorName;
        _init();
        function _init() {
          Track.getTracksByAuthor(authorName)
            .then(function(response) {
              $scope.recievedTracksByAuthor = response.data;
              console.log($scope.recievedTracksByAuthor)
            })
        }
      }
    ]
  });
