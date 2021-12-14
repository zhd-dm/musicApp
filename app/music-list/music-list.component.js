'use strict';

// Register `musicList` component, along with its associated controller and template
angular.
  module('musicList').
  component('musicList', {
    templateUrl: 'music-list/music-list.template.html',
    controller: ['Music', '$scope', 'Track',
      function MusicListController(Music, $scope, Track) {
        this.musics = Music.query();
        this.orderProp = 'age';
        _init();
        function _init() {
          Track.getTracks()
          .then(function(response) {
            $scope.recievedTracks = response.data;
          })
        };

        $scope.recieveId = function() {
          var track = Track.getId();
          console.log(track)
        }
      }
    ]
  });
