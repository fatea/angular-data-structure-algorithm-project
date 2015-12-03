
'use strict';

//var dk = require('./methods');

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);
/*
var G = new Graph();
G.addVertex('hello');
G.addVertex('world');
G.V[1].pi = G.V[0];
var w = [][];*/
phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone, Map) {
  $scope.phones = Phone.query();
  $scope.orderProp = 'age';
  $scope.edges = [];

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

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}]);