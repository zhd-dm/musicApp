'use strict';

angular.
  module('core.music').
  factory('MusicUserService', ['$http',
        function($http) {
        var self = this;
        self.User = {
            isloggedIn: false,
            ssoToken: 'Beare 123456'
        }

        function logIn(params) {
            var loginInput = document.getElementById('login').value;
            var passwordInput = document.getElementById('password').value;
            self.User.userData = {
                login: loginInput,
                password: passwordInput
            }

            if(self.User.userData === db.login) {
                
            }

            return self.User; // -> DB 
        }

        function setUser() {
            
        }

        function getUser() {
            return self.User;
        }

        return {
            getUser: getUser,
            logIn: logIn
        }
    }
]);
