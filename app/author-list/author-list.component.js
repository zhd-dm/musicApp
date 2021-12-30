'use strict';

// Register `authorList` component, along with its associated controller and template
angular.
  module('authorList').
  component('authorList', {
    templateUrl: 'author-list/author-list.template.html',
    controller: ['$scope', 'User', 'Track',
      function AuthorListController($scope, User, Track) {
        _init();
        function _init() {
          User.getAuthors()
          .then(function(response) {
            $scope.recievedAuthors = response.data;
            console.log($scope.recievedAuthors)
          });
          Track.getTracks()
          .then(function(response) {
            $scope.recievedTracks = response.data;
            console.log($scope.recievedTracks);
          })
        };
      }
    ]
  });
