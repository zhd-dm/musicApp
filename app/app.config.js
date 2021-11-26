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
        // when('/upload', {
        //   template: '<upload-menu></upload-menu>'
        // }).
        otherwise('/musics');
    }
  ])
  // .config(function($stateProvider, $urlRouterProvider) {
  //   $stateProvider
  //     .state('state1', {
  //       url: '/state1',
  //       templateUrl: '1.template.html',
  //       controller: '1.controller.js'
  //     })

  //     .state('state2', {
  //       url: '/state2',
  //       templateUrl: '2.template.html',
  //       controller: '2.controller.js'
  //     });

  //     $urlRouterProvider.otherwise('/home');
  // })
  ;
