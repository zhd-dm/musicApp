'use strict';

// Register `homePage` component, along with its associated controller and template
angular.
  module('homePage').
  component('homePage', {
    templateUrl: 'home-page/home-page.template.html',
    controller: ['$scope',
      function HomePageController() {
       
      }
    ]
  });
