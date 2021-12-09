'use strict';   

angular.
    module('core.music').
    factory('Track', ['$http',
        function ($http) {
            var options = {
                type: 'mp3'
            };

            // Как подождать ответ от сервера с выводом аудио в файле music-list.component.js
            function getTracks() {
                var track;
                return $http
                    .get("http://localhost:1111/api/tracks")
            }

            function getTrackById(id) {
                return uploadedTracks[id];
            }

            function saveTrack(track) {
                // uploadedTracks[track.id] = {
                //     name: track.name,
                //     src: track.src
                // };
                $http
                    .post('http://localhost:1111/api/tracks', track)
                    .then(() => console.log("Success"), () => console.log("Decline"));
            }

            return {
                saveTrack: saveTrack,
                getTracks: getTracks,
                getTrackById: getTrackById
            }
        }
    ]);
