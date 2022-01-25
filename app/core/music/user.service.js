'use strict';

angular.
  module('core.music').
  factory('User', ['$http',
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
                validateLogin() {
                    // return $http
                    //         .get(`http://localhost:1111/api/auth/login/${id}`, )
                }
            }
            class UserRegistration extends User {
                constructor(name, login, password, password2) {
                    super(name, login) 
                    this.password = password
                    this.password2 = password2
                }
                validatePassword() {
                    // var validateResult = {
                    //     validate: Boolean,
                    //     msg: String
                    // }
                    if(this.login.length < 4) return false;
                    if(this.name.length < 3) return false;
                    if(this.password.length < 4) return false;                              // validateResult.msg = "Your password < 4 symbols"
                    if(this.password.length > 9) return  false;
                    if(this.password != this.password2) return false;
                    return true;
                }
            }
            function getAuthors() {
                return $http
                        .get("http://localhost:1111/api/auth");
            }

            function logIn(currentUser) {
                var person = new UserLogin(currentUser.login, currentUser.password);
                
                return $http
                        .post("http://localhost:1111/api/auth/login", currentUser)
                        .then(() => console.log("Success"), () => console.log(Decline))
            }

            function registration(currentUser) {
                var person = new UserRegistration(currentUser.name, currentUser.login, currentUser.password, currentUser.password2);
                if(person.validatePassword() === false) {
                    return console.log("You are not registered");
                } else {
                    return $http
                            .post("http://localhost:1111/api/auth/register", currentUser)
                            .then(() => console.log("Success"), () => console.log("Decline"))
                }
            }

            function setUser() {
                
            }

            function getUser() {
                
            }

            return {
                logIn: logIn,
                registration: registration,
                getAuthors: getAuthors
            }
    }
]);
