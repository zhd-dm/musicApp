'use strict';

// Register `editPage` component, along with its associated controller and template
angular.
  module('editPage').
  component('editPage', {
    templateUrl: 'edit-page/edit-page.template.html',
    controller: ['$scope', '$http', 'Track',
    function UpdateDetailComponent($scope, $http, Track) {
      var self = this;

      $scope.updateTrackData = function() {
        var updatedTrack = {
          name: '',             // trackName
          // author: '',           // @login
          // size: Number,
          media: {
            //result: '',         // trackResult
            image: '',          // trackImage
            snippet: ''         // trackSnippet
          }
        };

        // var trackResult = document.getElementById('trackResult').files[0];
        var trackName = document.getElementById('trackName').value;
        // var trackAuthor = '@login';
        // var trackSize;
        var trackImage = document.getElementById('trackImage').files[0];
        var trackSnippet = document.getElementById('trackSnippet').value; 

        var fileReader = new FileReader();

        // function hz(trackImage, trackName, trackSnippet) {
        //   if (trackImage == null) return 
        //   if (trackName == null) return 
        //   if (trackSnippet == null) return 
        // }


        if(trackImage != null || trackName != null || trackSnippet != null) {
          fileReader.readAsDataURL(trackImage);
          // start read
          fileReader.onloadstart = function(e) {
            console.log("File uploading started", e);
          };
          // end read
          fileReader.onloadend = function(e) {
            console.log("File uploading success", e);
            // TODO: set track name and snippet
            updatedTrack.name = trackName;
            // updatedTrack.author = trackAuthor;
            // updatedTrack.size = trackSize = e.total;
            // updatedTrack.media.result = e.target.result;
            updatedTrack.media.image = e.target.result;
            updatedTrack.media.snippet = trackSnippet;
            console.log(updatedTrack);
            //Track.updateTrackData(updatedTrack); 
          }
        } else {
          console.log("Edit something");
        };
      };
    }
    ]
  });
