'use strict';

angular.
  module('musicApp').
  config(['$routeProvider', '$sceProvider',
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
  ])
  .config(function($sceProvider) {
    // Completely disable SCE.  For demonstration purposes only!
    // Do not use in new projects or libraries.
    $sceProvider.enabled(false);
  });
