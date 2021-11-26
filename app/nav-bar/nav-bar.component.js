'use strict';

// Register `navBar` component, along with its associated controller and template
angular.
  module('navBar').
  component('navBar', {
    templateUrl: 'nav-bar/nav-bar.template.html',
    controller: ['Music', 'MusicUserService', '$scope',
      function MusicListController(Music, MusicUserService, $scope) {
        this.musics = Music.query();
        this.orderProp = 'age';
      }
    ]
  });
