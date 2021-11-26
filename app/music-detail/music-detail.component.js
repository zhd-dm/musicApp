'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('musicDetail').
  component('musicDetail', {
    templateUrl: 'music-detail/music-detail.template.html',
    controller: ['$routeParams', 'Music', 
      function MusicDetailController($routeParams, Music) {
        var self = this;
        self.music = Music.get({musicId: $routeParams.musicId}, function(music) {
          self.setImage(music.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
