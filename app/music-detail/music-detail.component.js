'use strict';

// Register `musicDetail` component, along with its associated controller and template
angular.
  module('musicDetail').
  component('musicDetail', {
    templateUrl: 'music-detail/music-detail.template.html',
    controller: ['$routeParams', 'Track', '$scope', 
      function MusicDetailController($routeParams, Track, $scope) {
        var trackId = $routeParams.trackId;
        _init();
        function _init() {
          Track.getTrackById(trackId)
            .then(function(response) {
              $scope.recievedTrackById = response.data;
            })
        }
      }
    ]
  });
