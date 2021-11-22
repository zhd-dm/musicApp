'use strict';

angular.
  module('musicApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<user-detail></user-detail>',
        })
        // .otherwise('/users');
    }
  ]);
