'use strict';   

angular.
    module('core.music').
    factory('Track', ['$http',
        function ($http) {
            var options = {
                type: 'mp3'
            };

            function getTracks() {  
                return $http
                    .get("http://localhost:1111/api/tracks")
            }

            function getTrackById(id) {
                return uploadedTracks[id];
            }

            function saveTrack(uploadTrack) {
                // uploadedTracks[track.id] = {
                //     name: track.name,
                //     src: track.src
                // };
                $http
                    .post('http://localhost:1111/api/tracks', uploadTrack)
                    .then(() => console.log("Success"), () => console.log("Decline"));
            }

            return {
                saveTrack: saveTrack,
                getTracks: getTracks,
                getTrackById: getTrackById
            }
        }
    ]);
