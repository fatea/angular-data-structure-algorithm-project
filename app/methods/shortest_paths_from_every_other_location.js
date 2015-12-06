"use strict";
var Dijkstra = require('./lib/Dijkstra.js');
var Map = require('../maps/Map.js');

var _ = require('lodash');

function shortest_paths_from_every_other_location(way, end){


  //TODO: 对所有点做Dijkstra
  var maps = {};

  _.times(26, function(n){
    var current_letter = String.fromCharCode(65+n);
    if(current_letter != end){
      var map = Map(way);
      Dijkstra(map,  map.V[current_letter]);
      maps[current_letter] = map;
    }
  });

  var path_lists = [];
  var length_list = [];
  const length_of_line = 40;

  function get_paths(){
    _.forOwn(maps, function(map, name){
      //console.log(name);
      var path_list = [];
      var end_point = map.V[end];
      var length = new Number(map.V[end].d).toFixed(2);//把路径长度先记下来

      path_list.unshift(end_point.name);

      while (end_point.pi != null){
        end_point = end_point.pi;
        path_list.unshift(end_point.name);
      }
      //自己到自己的不计入路径
      if(path_list.length >= 2){
      path_lists.push(path_list);
        var blanks = '';
        var measurement = (way==3)?' min':' km';

        _.times((length_of_line-(path_list.toString().length)-measurement.length), function(n){
          blanks += ' ';
        });

        length_list.push(path_list.toString()+ ':'+blanks + length+ measurement + '\r\n\r\n');
      }
    });
  }
  get_paths();

  return {path_lists: path_lists, length_list: length_list};
}

//var lists = shortest_paths_from_every_other_location(2,'N');
//console.log('finish');

module.exports = shortest_paths_from_every_other_location;