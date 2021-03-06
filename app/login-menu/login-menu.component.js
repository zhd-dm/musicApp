'use strict';

angular.
  module('loginMenu').
  component('loginMenu', {
    templateUrl: 'login-menu/login-menu.template.html',
    controller: ['$scope', 'User',
      function MusicUserLogInComponent($scope, User) {
        $scope.logIn = function() {
          var currentUser = {
            login: '',
            password: ''
          }
          var loginInput = document.getElementById('login').value;
          var passwordInput = document.getElementById('password').value;
          currentUser.login = loginInput;
          currentUser.password = passwordInput;
          User.logIn(currentUser);
        }
      }
    ]
  });
