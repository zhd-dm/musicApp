'use strict';

// Register `musicList` component, along with its associated controller and template
angular.
  module('musicList').
  component('musicList', {
    templateUrl: 'music-list/music-list.template.html',
    controller: ['Music', '$scope', 'Track', '$location',
      function MusicListController(Music, $scope, Track, $location) {
        this.musics = Music.query();
        this.orderProp = 'age';
        _init();
        function _init() {
          Track.getTracks()
          .then(function(response) {
            $scope.recievedTracks = response.data;
            console.log($scope.recievedTracks)
          })
        };

        // $scope.getTrackId = function(id) {
        //   console.log(id);
        //   $location.url(`/musics/${id}`)
        // }
      }
    ]
  });
