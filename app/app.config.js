'use strict';

angular.
  module('musicApp').
  config(['$routeProvider', '$sceProvider', 
    function config($routeProvider) {
      $routeProvider.
        when('/home', {
          template: '<home-page></home-page>'
        }).
        when('/musics', {
          template: '<music-list></music-list>'
        }).
        when('/musics/:trackId', {
          template: '<music-detail></music-detail>'
        }).
        when('/user/registration', {
          template: '<registration-menu></registration-menu>'
        }).
        when('/user/login', {
          template: '<login-menu></login-menu>'
        }).
        when('/upload', {
          template: '<upload-menu></upload-menu>'
        }).
        when('/authors', {
          template: '<author-list></author-list>'
        }).
        when('/authors/:authorName', {
          template: '<author-detail></author-detail>'
        }).
        otherwise('/home');
    }
  ])
  .config(function($sceProvider) {
    // Completely disable SCE.  For demonstration purposes only!
    // Do not use in new projects or libraries.
    $sceProvider.enabled(false);
  })
