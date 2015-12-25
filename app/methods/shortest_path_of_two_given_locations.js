"use strict";
var Dijkstra = require('./lib/Dijkstra.js');
var Map = require('../maps/Map.js');
//var test_map = require('../maps/test_map.js');
function shortest_path_of_two_given_locations(way, start, end){
  var map = Map(way);


  Dijkstra(map, map.V[start]);
  var path_list = [];
  var length = 0;
  var measurement = (way==3)?' min':' km';

  function print_path(){


    var end_point = map.V[end];
    path_list.unshift(end_point.name);

    while (end_point.pi != null){
      end_point = end_point.pi;
      path_list.unshift(end_point.name);
    }

    /*
    path_list.forEach(function(name){
      console.log(name);
    });
    */

    length = new Number(map.V[end].d).toFixed(2);
  }


  print_path();
  return {list:path_list, length: length+' '+measurement};

}

//var sth = shortest_path_of_two_given_locations(2, 'X', 'N');
//console.log(sth.toString());
//console.log('end');


module.exports = shortest_path_of_two_given_locations;