'use strict';

angular.
  module('core.music').
  factory('MusicUserService', ['$http',
        function($http) {
            class User {
                constructor(login, name) {
                    this.login = login
                    this.name = name
                }
            }
            class UserLogin extends User {
                constructor(login, password) {
                    super(login) 
                    this.password = password
                }
                checkUserData() {
                    var msg = '';
                    var validate = false;
                    
                }
            }
            class UserRegistration extends User {
                constructor(login, password, repeatPassword) {
                    super(login) 
                    this.password = password
                    this.repeatPassword = repeatPassword
                }
                validatePassword() {
                    var msg = '';
                    var validate = false;
                    if(this.password.length < 4) return msg = "Your password < 4 symbols";
                    if(this.password.length > 9) return  msg = "Your password > 9 symbols";
                    if(this.password != this.repeatPassword) return msg = "Check repeat password";
                    msg = "Success";
                    validate = true;
                    return (msg, validate);
                }
            }
            var self = this;
            self.User = {
                isloggedIn: false,
                ssoToken: 'Beare 123456'
            }

            function getUsers() {
                return $http
                        .get("http://localhost:1111/api/users");
            }

            function logIn(params) {

                var loginInput = document.getElementById('login').value;
                var passwordInput = document.getElementById('password').value;
                self.User.userData = {
                    login: loginInput,
                    password: passwordInput
                }
                return self.User; // -> DB 
            }

            function registration() {
                var loginInput = document.getElementById('login').value;
                var passwordInput = document.getElementById('password').value;
                var repeatPasswordInput = document.getElementById('repeatPassword').value;
                // var checkNewUser = new UserRegistration(loginInput, passwordInput, repeatPasswordInput);
                var checkNewUser = new UserRegistration(loginInput, passwordInput, repeatPasswordInput);
                console.log(checkNewUser.validatePassword());
                //return self.User; // -> DB
            }

            function setUser() {
                
            }

            function getUser() {
                return self.User;
            }

            return {
                getUser: getUser,
                logIn: logIn,
                registration: registration,
                setUser: setUser,
                getUsers: getUsers
            }
    }
]);



// class User {
//     constructor(login, password) {
//         this.name = name
//         this.login = login
//         this.password = password
//     }
//     logIn(login, password) {
//         function getUsersLogin() {  
//             return $http
//                 .get("http://localhost:1111/api/users");
//         };
//     }
//     registration(login, password, repeatPassword) {

//     }
// }

// _init();
//         function _init() {
//           Track.getTracks()
//           .then(function(response) {
//             $scope.recievedTracks = response.data;
//           })
//         };