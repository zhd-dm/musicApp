'use strict';

// Register `musicList` component, along with its associated controller and template
angular.
  module('musicList').
  component('musicList', {
    templateUrl: 'music-list/music-list.template.html',
    controller: ['$scope', 'Track',
      function MusicListController($scope, Track) {
        _init();
        function _init() {
          Track.getTracks()
          .then(function(response) {
            $scope.recievedTracks = response.data;
            console.log($scope.recievedTracks);
          })
        };
      }
    ]
  });
