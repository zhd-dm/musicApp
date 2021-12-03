'use strict';

angular.
  module('musicApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/musics', {
          template: '<music-list></music-list>'
        }).
        when('/musics/:musicId', {
          template: '<music-detail></music-detail>'
        }).
        otherwise('/musics');
    }
  ]);
