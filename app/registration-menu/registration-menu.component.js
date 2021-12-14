'use strict';

angular.
  module('registrationMenu').
  component('registrationMenu', {
    templateUrl: 'registration-menu/registration-menu.template.html',
    controller: ['$scope', '$http', 'MusicUserService', 
      function MusicUserComponent($scope, $http, MusicUserService) {
        $scope.registration = function() {
          this.user = MusicUserService.registration();
          console.log(this.user)
        }
    }]
  });
