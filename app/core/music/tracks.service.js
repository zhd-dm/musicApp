'use strict';   

angular.
    module('core.music').
    factory('Track', ['$http',
        function ($http) {
            var options = {
                id: ''
            };

            function getTracks() {  
                return $http
                    .get("http://localhost:1111/api/tracks");
            };

            function getTrackById(id) {
                return $http
                    .get(`http://localhost:1111/api/tracks/${id}`);
            };

            function getTracksByAuthor(author) {
                return $http
                    .get(`http://localhost:1111/api/tracks/users/${author}`);
            };

            function saveTrack(uploadTrack) {
                // uploadedTracks[track.id] = {
                //     name: track.name,
                //     src: track.src
                // };
                $http
                    .post('http://localhost:1111/api/tracks', uploadTrack)
                    .then(() => console.log("Success"), () => console.log("Decline"));
            };

            return {
                saveTrack: saveTrack,
                getTracks: getTracks,
                getTrackById: getTrackById,
                // updateTrackData: updateTrackData,
                getTracksByAuthor: getTracksByAuthor
            };
        }
    ]);
