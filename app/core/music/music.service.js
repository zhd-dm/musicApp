'use strict';

angular.
  module('core.music').
  factory('Music', ['$resource',
    function($resource) {
      return $resource('http://localhost:1111/api/tracks/', {}, {
        query: {
          method: 'GET',
          params: {musicId: 'musics'},
          isArray: true
        }
      });
    }
  ]);
