'use strict';

angular.
  module('uploadMenu').
  component('uploadMenu', {
    templateUrl: 'upload-menu/upload-menu.template.html',
    controller: ['$scope', 'Track',
    function UploadDetailComponent($scope, Track) {
      $scope.upload = function() {
        var uploadTrack = {
          name: '',             // trackName
          author: '',           // @login
          size: Number,
          media: {
            result: '',         // trackResult
            image: '',          // trackImage
            snippet: ''         // trackSnippet
          }
        };

        var trackResult = document.getElementById('trackResult').files[0];
        var trackName = document.getElementById('trackName').value;
        var trackAuthor = 'Demyan Zhdanov';
        var trackSize;
        var trackImage = '@defaultAvatar';
        var trackSnippet = document.getElementById('trackSnippet').value; 

        var fileReader = new FileReader();
        if(trackResult != null && trackName != null) {
          fileReader.readAsDataURL(trackResult);
          // start read
          fileReader.onloadstart = function(e) {
            console.log("File uploading started", e);
          };
          // end read
          fileReader.onloadend = function(e) {
            // TODO: set track name and id
            uploadTrack.name = trackName;
            uploadTrack.author = trackAuthor;
            uploadTrack.size = trackSize = e.total;
            uploadTrack.media.result = e.target.result;
            uploadTrack.media.image = trackImage;
            uploadTrack.media.snippet = trackSnippet;
            Track.saveTrack(uploadTrack); 
          };

        } else {
          console.log("Choose file!");
        };
      };
    }
  ]
  });
