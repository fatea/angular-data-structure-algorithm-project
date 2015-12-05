"use strict";
var Dijkstra = require('./lib/Dijkstra.js');
var Map = require('../maps/Map_for_walking.js');

var _ = require('lodash');

function shortest_paths_from_every_other_location(way, end){
  var map = Map();

  //TODO: 对所有点做Dijkstra
  var maps = {};

  _.times(26, function(n){
    var current_letter = String.fromCharCode(65+n);
    if(current_letter != end){
      var map = Map();
      Dijkstra(map,  map.V[current_letter]);
      maps[current_letter] = map;
    }
  });

  var path_lists = [];
  function get_paths(){
    _.forOwn(maps, function(map, name){
      //console.log(name);
      var path_list = [];
      var end_point = map.V[end];
      path_list.unshift(end_point.name);

      while (end_point.pi != null){
        end_point = end_point.pi;
        path_list.unshift(end_point.name);
      }

      path_lists.push(path_list);
    });
  }
  get_paths();

  return path_lists;
}

var lists = shortest_paths_from_every_other_location(2,'N');
console.log('finish');

module.exports = shortest_paths_from_every_other_location;