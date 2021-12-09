'use strict';

angular.
  module('uploadMenu').
  component('uploadMenu', {
    templateUrl: 'upload-menu/upload-menu.template.html',
    controller: ['$scope', '$http', 'Track',
    function UploadDetailComponent($scope, $http, Track) {
      var self = this;
      $scope.upload = function() {
        var track = {
          name: "Demyan",
          track: {
            result: '',
            name: '',
            size: Number 
          }
        };
        var fileInput = document.getElementById('file').files[0];
        var fileReader = new FileReader();
        if(fileInput != null) {
          fileReader.readAsDataURL(fileInput);
          
          // start read
          fileReader.onloadstart = function(e) {
            console.log("File uploading started", e);
          };

          // end read
          fileReader.onloadend = function(e) {
            // TODO: set track name and id
            track.track.result = e.target.result; 
            track.track.name = track.name; 
            track.track.size = e.total;
            Track.saveTrack(track);   
          };

        } else {
          console.log("Choose file!");
        };
      };
    }]
  });
