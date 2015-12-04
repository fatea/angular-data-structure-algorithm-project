
'use strict';


/* Controllers */
//var Map_for_walking = require('./maps/Map_for_walking.js');
var shortest_path_of_two_given_locations = require('./methods/shortest_path_of_two_given_locations.js');
var controllers = angular.module('controllers', []);
/*
var G = new Graph();
G.addVertex('hello');
G.addVertex('world');
G.V[1].pi = G.V[0];
var w = [][];*/
controllers.controller('mapControl', ['$scope', function($scope) {
  $scope.orderProp = 'age';
  $scope.edges = [];
  //$scope.path_str = 'nothing';
  $scope.showPath = function(){
    //$scope.path_str = 'test_str';
    console.log('test_debug');
    //console.log(shortest_path_of_two_given_locations('A', 'B'));
    //shortest_path_of_two_given_locations('A', 'B');
    $scope.path_str = shortest_path_of_two_given_locations($scope.startInput, $scope.endInput)[0];

  };

  /*
  Map.success(function(data){
    angular.forEach(data.split('\n'), function(line, index){
      $scope.edges.push(line);
    });
  });
  */

  //$scope.dk = dk(G,);
  //console.log(dk);
}]);
/*
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}]);
*/