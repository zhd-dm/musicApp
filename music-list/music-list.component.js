'use strict';
var app = angular.module('musicApp');

app.run(function($httpBackend) {
    console.log("MOCK ACTIVATED");
    var songs = [
      {
        name: "Hello123",
        //size: 124142,
        //type: ".mp3"
      },
      {
        name: "Hello123",
        //size: 124142,
        //type: ".mp3"
      },
      {
        name: "Hello123",
        //size: 124142,
        //type: ".mp3"
      }
    ];

    $httpBackend.whenGET('http://localhost:1111/songs').respond(200, songs);
  });

app.controller('musicListCtrl', function($http, $scope) {
  $http.get('http://localhost:1111/songs').then(success, error);
    
  function success(response) {
    $scope.song = response;
    console.log("From music-list: ", $scope.song);
  };

  function error(error) {
    console.log('error');
  };
  
})