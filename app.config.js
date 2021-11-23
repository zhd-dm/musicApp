'use strict';

angular.
  module('musicApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<upload-detail></upload-detail>',
        });
        // .otherwise('/users');
    }
  ]);
