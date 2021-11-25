'use strict';

angular.
  module('core.music').
  factory('Music', ['$resource',
    function($resource) {
      return $resource('musics/:musicId.json', {}, {
        query: {
          method: 'GET',
          params: {musicId: 'musics'},
          isArray: true
        }
      });
    }
  ]);
