
'use strict';
var _ = require('lodash');
var Snap = require('./bower_components/snap.svg/dist/snap.svg.js');


/* Controllers */
var Map_for_drawing_locations = require('./maps/Map_for_drawing_locations.js');

/*
var Map_for_walking = require('./maps/Map_for_walking.js');
var Map_for_driving = require('./maps/Map_for_driving.js');
var Map_for_bus     = require('./maps/Map_for_bus.js');
*/

var shortest_path_of_two_given_locations = require('./methods/shortest_path_of_two_given_locations.js');
var shortest_paths_from_every_other_location = require('./methods/shortest_paths_from_every_other_location.js');
var shortest_paths_between_every_two_locations = require('./methods/shortest_paths_between_every_two_locations.js');


var controllers = angular.module('controllers', []);

function is_letter(str){
  if(/^[A-Z]+$/.test(str) && str.length == 1) {
    return true;
  }
else{
  return false;}
}


function are_legal(start, end){
  if (typeof start == 'undefined'){
    alert('请输入起点');
    return false;
  }else if (typeof end == 'undefined') {
    alert('请输入终点');
    return false;
  } else if (_.isEmpty(_.trim(start))){
    alert('请输入起点');
  } else if (_.isEmpty(_.trim(end))) {
    alert('请输入终点');
    return false;
  } else if(!is_letter(_.trim(start)) || !is_letter(_.trim(end))){
    alert('起点和终点只能为大写字母');
    return false;
  } else {
    return true;
  }
}

function is_legal(end) {
  if (typeof end == 'undefined') {
    alert('请输入终点');
    return false;
  } else if (_.isEmpty(_.trim(end))) {
    alert('请输入终点');
    return false;
  } else if(!is_letter(_.trim(end))){
    alert('终点只能为大写字母');
    return false;
  } else {
    return true;
  }
}


/*
var G = new Graph();
G.addVertex('hello');
G.addVertex('world');
G.V[1].pi = G.V[0];
var w = [][];*/
controllers.controller('mapControl', ['$scope', function($scope) {
  //初始化地图
  $scope.constMap = new Map_for_drawing_locations();
  $scope.orderProp = 'age';
  $scope.edges = [];

  //初始化各位置点
  $scope.s = Snap('#map');
  $scope.circles = {};
  _.forOwn($scope.constMap.V, function(v){
    $scope.circles[v.name] = $scope.s.circle(v.x, v.y, 20);
    $scope.circles[v.name].attr({fill: "transparent"});
    $scope.circles[v.name].dblclick(function(){
      $scope.$apply(function(){
        $scope.startInput = v.name;
      });
    });
  });

  $scope.show_shortest_path_of_two_locations = function(){
    if (are_legal($scope.startInput, $scope.endInput)){
      var list = shortest_path_of_two_given_locations(3, $scope.startInput, $scope.endInput);
      $scope.path_str = list.toString();
      $scope.$broadcast('showPath',{list: list});
    }
  };


  $scope.show_shortest_path_from_every_other_location = function(){
    if(is_legal($scope.endInput)){
      $scope.startInput = '';
      var lists = shortest_paths_from_every_other_location(3, $scope.endInput);
      $scope.path_str = lists.toString();
      $scope.$broadcast('showPaths',{lists: lists});
    }
  };

  $scope.show_shortest_paths_between_eery_two_locations = function(){
    var lists = shortest_paths_between_every_two_locations(3);
    $scope.path_str = lists.toString();
    $scope.$broadcast('showPaths', {list: lists});
  };

}]).
directive('snapMap', function(){
  return {
    link: function(scope, element, attrs){
/*
      var s = Snap(element[0]);
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
      */

      scope.$on('showPath', function(event, data){
        var point_arr = [];
        data.list.forEach(function(element){
          point_arr.push(scope.constMap.V[element].x, scope.constMap.V[element].y);
        });

        var p1 = scope.s.polyline(point_arr);
        p1.attr({
          fill: "none",
          stroke: "#00FF00",
          strokeWidth: 10
        });

      });

      scope.$on('showPaths', function(event, data){
        data.lists.forEach(function(list){
          console.log(list.toString());
        });

        var point_arrs = [];
        data.lists.forEach(function(list){
          var point_arr = [];
          list.forEach(function(element){
            point_arr.push(scope.constMap.V[element].x, scope.constMap.V[element].y);
          });
          point_arrs.push(point_arr);
        });

        point_arrs.forEach(function(point_arr){
          var polyline = scope.s.polyline(point_arr);
          polyline.attr({
            fill: "none",
            stroke: "#00FF00",
            strokeWidth: 10
          });

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