"use strict";
var Dijkstra = require('./lib/Dijkstra.js');
var Map = require('../data_structures/Map.js');
function shortest_path_of_two_given_locations(start, end){
  var map = Map();


  Dijkstra(map, map.V[start]);

  function print_path(){
    var path_list = [];

    var end_point = map.V[end];
    path_list.unshift(end_point.name);

    while (end_point.pi != null){
      end_point = end_point.pi;
      path_list.unshift(end_point.name);
    }

    path_list.forEach(function(name){
      console.log(name);
    });
  }

  print_path();
}

shortest_path_of_two_given_locations('A', 'N');



module.exports = shortest_path_of_two_given_locations;