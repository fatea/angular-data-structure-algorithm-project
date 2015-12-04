
'use strict';


/* Controllers */
var Map_for_walking = require('./maps/Map_for_walking.js');
var _ = require('lodash');
var Snap = require('./bower_components/snap.svg/dist/snap.svg.js');
var shortest_path_of_two_given_locations = require('./methods/shortest_path_of_two_given_locations.js');
var controllers = angular.module('controllers', []);

function is_letter(str)
{
  if(/^[A-Z]+$/.test( str)) {
    return true;
  }
else{
  return false;}
}
/*
var G = new Graph();
G.addVertex('hello');
G.addVertex('world');
G.V[1].pi = G.V[0];
var w = [][];*/
controllers.controller('mapControl', ['$scope', function($scope) {
  $scope.constMap = new Map_for_walking();
  $scope.orderProp = 'age';
  $scope.edges = [];
  //$scope.path_str = 'nothing';
  $scope.showPath = function(){
    if(typeof $scope.startInput == 'undefined'){
      alert('请输入起点');
      return;
    }else if(typeof $scope.endInput == 'undefined'){
      alert('请输入终点');
      return;
    } else {
      if(is_letter($scope.startInput) || is_letter($scope.endInput)) {
        //$scope.path_str = 'test_str';
        //console.log('test_debug');
        //console.log(shortest_path_of_two_given_locations('A', 'B'));
        //shortest_path_of_two_given_locations('A', 'B');
        var list = shortest_path_of_two_given_locations($scope.startInput, $scope.endInput);
        $scope.path_str = list.toString();
        $scope.$broadcast('showPath',{list: list});
      }else {
        return;
      }
      }
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
}]).
directive('snapMap', function(){
  return {
    link: function(scope, element, attrs){
      var s = Snap(element[0]);
      /*
      var bigCircle = s.circle(71, 233, 20);

      bigCircle.attr({
        fill: "transparent"
      });*/
      var circles = {};
      _.forOwn(scope.constMap.V, function(v){
        circles[v.name] = s.circle(v.x, v.y, 20);
        circles[v.name].attr({fill: "transparent"});
        circles[v.name].dblclick(function(){
          //scope.startInput = v.name;
          scope.$apply(function(){
            scope.startInput = v.name;
          });
          //scope.path_str = v.name;
          //alert(v.name);
        });
      });

      scope.$on('showPath', function(event, data){


        var point_arr = [];
        data.list.forEach(function(element){
          point_arr.push(scope.constMap.V[element].x);
          point_arr.push(scope.constMap.V[element].y);
        });

        var p1 = s.polyline(point_arr);
        p1.attr({
          fill: "none",
          stroke: "#00FF00",
          strokeWidth: 10
        });

      });






    }
}

});
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