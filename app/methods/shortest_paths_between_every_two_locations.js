"use strict";



var _ = require('lodash');

var Map = require('../maps/Map.js');
var Dijkstra = require('./lib/Dijkstra.js');

function shortest_paths_between_every_two_locations(way){






  //TODO: 对所有点做Dijkstra
  var maps = {};

  _.times(26, function(n){
    var current_letter = String.fromCharCode(65+n);
      var map = Map(way);
      Dijkstra(map,  map.V[current_letter]);
      maps[current_letter] = map;
  });

  //现在有了26张地图,每张地图的起点都是当前的字母
  //接下来,对每张地图,计算当前起点到所有其他顶点的路径

  var path_lists = [];
  function get_paths(){
    _.forOwn(maps, function(map, name){
      _.times(26, function(n){

        var current_letter = String.fromCharCode(65+n);

        if(current_letter != name){
          //自己到自己的就不连线
          var path_list = [];
          var end_point = map.V[current_letter];
          path_list.unshift(end_point.name);

          while (end_point.pi != null){
            end_point = end_point.pi;
            path_list.unshift(end_point.name);
          }
          if(path_list.length >= 2){
            path_lists.push(path_list);
          }
        }

      });

      //console.log(name);

    });




  }
  get_paths();

  return path_lists;
}

//var lists = shortest_paths_between_every_two_locations(2);
//console.log('finish');

module.exports = shortest_paths_between_every_two_locations;