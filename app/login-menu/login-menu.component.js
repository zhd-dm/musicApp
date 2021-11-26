'use strict';

angular.
  module('loginMenu').
  component('loginMenu', {
    templateUrl: 'login-menu/login-menu.template.html',
    controller: ['$scope', '$http', 'MusicUserService', 
      function(MusicUserService) {
        console.log("from function hello")
      }]
  });
