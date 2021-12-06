'use strict';

angular.
    module('core.music').
    factory('Track', ['$http',
        function ($http) {
            var options = {
                type: 'mp3'
            };
            var uploadedTracks = {};

            function getTracks() {
                var track = [
                    JSON.parse(localStorage.getItem('name')),
                    JSON.parse(localStorage.getItem('name2')),
                    JSON.parse(localStorage.getItem('name3'))
                ];
                return track;
            }

            function getTrackById(id) {
                return uploadedTracks[id];
            }

            function saveTrack(track) {
                uploadedTracks[track.id] = {
                    name: track.name,
                    src: track.src
                };
            }

            return {
                saveTrack: saveTrack,
                getTracks: getTracks,
                getTrackById: getTrackById
            }
        }
    ]);
