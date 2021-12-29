'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('musicDetail').
  component('musicDetail', {
    templateUrl: 'music-detail/music-detail.template.html',
    controller: ['$routeParams', 'Music', 'Track', '$scope', 
      function MusicDetailController($routeParams, Music, Track, $scope) {
        var self = this;
        var trackId = $routeParams.trackId;
        _init();
        function _init() {
          Track.getTrackById(trackId)
            .then(function(response) {
              $scope.recievedTrackById = response.data;
            })
        }

        // self.music = Music.get({musicId: $routeParams.musicId}, function(music) {
        //   self.setImage(music.images[0]);
        // });

        // self.setImage = function setImage(imageUrl) {
        //   self.mainImageUrl = imageUrl;
        // };

        
      }
    ]
  });
