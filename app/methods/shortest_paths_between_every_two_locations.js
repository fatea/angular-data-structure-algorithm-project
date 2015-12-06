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
  var length_list = [];

  const length_of_line = 40;

  function get_paths(){
    _.forOwn(maps, function(map, name){
      _.times(26, function(n){

        var current_letter = String.fromCharCode(65+n);

        if(current_letter != name){
          //自己到自己的就不连线
          var path_list = [];
          var end_point = map.V[current_letter];
          var length = new Number(map.V[current_letter].d).toFixed(2);//把路径长度先记下来

          path_list.unshift(end_point.name);

          while (end_point.pi != null){
            end_point = end_point.pi;
            path_list.unshift(end_point.name);
          }
          if(path_list.length >= 2){
            path_lists.push(path_list);


            var blanks = '';
            var measurement = (way==3)?' min':' km';

            _.times((length_of_line-(path_list.toString().length)-measurement.length), function(n){
              blanks += ' ';
            });

            length_list.push(path_list.toString()+ ':'+blanks + length+ measurement + '\r\n\r\n');
          }
        }

      });

      //console.log(name);

    });




  }
  get_paths();

  return {path_lists: path_lists, length_list: length_list};
}

//var lists = shortest_paths_between_every_two_locations(2);
//console.log('finish');

module.exports = shortest_paths_between_every_two_locations;