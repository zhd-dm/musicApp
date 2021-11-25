'use strict';

// Register `musicList` component, along with its associated controller and template
angular.
  module('musicList').
  component('musicList', {
    templateUrl: 'music-list/music-list.template.html',
    controller: ['Music',
      function MusicListController(Music) {
        this.musics = Music.query();
        this.orderProp = 'age';
      }
    ]
  });
