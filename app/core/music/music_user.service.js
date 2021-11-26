'use strict';

angular.
  module('core.music').
  factory('MusicUserService', ['$http',
        function($http) {
        var self = this;
        self.User = {
            isloggedIn: false,
            ssoToken: 'Beare 123456',
        }

        function logIn(params) {
            console.log("hello")
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
