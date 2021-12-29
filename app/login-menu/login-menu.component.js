'use strict';

angular.
  module('loginMenu').
  component('loginMenu', {
    templateUrl: 'login-menu/login-menu.template.html',
    controller: ['$scope', '$http', 'MusicUserService', 
      function MusicUserComponent($scope, $http, MusicUserService) {
        // console.log("from function hello")
        $scope.logIn = function() {
          this.user = MusicUserService.logIn();
        };
    }]
  });
