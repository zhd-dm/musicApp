'use strict';

angular.
  module('registrationMenu').
  component('registrationMenu', {
    templateUrl: 'registration-menu/registration-menu.template.html',
    controller: ['$scope', 'User', 
    function MusicUserLogInComponent($scope, User) {
      $scope.registration = function() {
        var currentUser = {
          login: '',
          name: '',
          password: '',
          password2: ''
        }
        var loginInput = document.getElementById('login').value;
        var nameInput = document.getElementById('name').value;
        var passwordInput = document.getElementById('password').value;
        var password2Input = document.getElementById('password2').value;
        currentUser.login = loginInput;
        currentUser.name = nameInput;
        currentUser.password = passwordInput;
        currentUser.password2 = password2Input;
        User.registration(currentUser);
      }
    }
  ]
});
