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

            function getId() {
                var a = document.getElementById('trackId');

                return a;
            };

            function getTrackById(recievedTrackById) {
                //return uploadedTracks[id];
                var id = '';
                var req = {
                    method: 'GET',
                    url: `http://localhost:1111/api/tracks/${id}`,
                    params: {musicId: 'musics'},
                   };

                return $http(req, recievedTrackById);
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
                getId: getId,
                getTrackById: getTrackById
            };
        }
    ]);
