'use strict';
var app = angular.module('musicApp', ['ngMockE2E']);

// Register `phoneDetail` component, along with its associated controller and template
app
  // .controller('musicListCtrl', function($http, $scope) {
  //   console.log('musicListCtrl is ON');
  //   $http.get('http://localhost:1111/#!/music-list')
  //     .success(function(result) {
  //       console.log('success', result);
  //       $scope.song = result;
  //     })
  //     .error(function(result) {
  //       console.log('error');
  //     })
  // });
  .run(function($httpBackend) {
    console.log("MOCK ACTIVATED");
    var songs = [
      {
        name: "Hello123",
        size: 124142,
        type: ".mp3"
      },
      {
        name: "Hello123",
        size: 124142,
        type: ".mp3"
      },
      {
        name: "Hello123",
        size: 124142,
        type: ".mp3"
      }
    ];

    $httpBackend.whenGET('http://localhost:1111/songs').respond(200, songs);
  });

app.controller('musicListCtrl', function($http, $scope) {
  $http.get('http://localhost:1111/#!/songs')
  .success(function(result) {
    console.log('success', result);
  })
  .error(function(result) {
    console.log('error');
  });
  
})