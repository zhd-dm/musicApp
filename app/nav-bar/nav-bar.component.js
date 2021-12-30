'use strict';

// Register `navBar` component, along with its associated controller and template
angular.
  module('navBar').
  component('navBar', {
    templateUrl: 'nav-bar/nav-bar.template.html',
    controller: ['$scope',
      function MusicListController($scope) {
        
      }
    ]
  });
