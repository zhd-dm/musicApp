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
  })
  .component('uploadMenu', {
    templateUrl: 'upload-menu/upload-menu.template.html',
    controller: ['$scope', '$http',
    function UploadDetailComponent($scope, $http) {
      var self = this;
      $scope.upload = function() {
        var fileInput = document.getElementById('file').files[0];
        var fileReader = new FileReader();
        fileReader.readAsBinaryString(fileInput);
        
        fileReader.onloadstart = function(e) {
          console.log("File uploading started", e);
        };

        fileReader.onloadend = function(e) {
          console.log("File successfuly uploaded", e.target);
          $scope.recievedFile = e.target;
        };
      };
    }]
  });
