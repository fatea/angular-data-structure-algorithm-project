"use strict";

var Map_for_walking = require('../maps/Map_for_walking.js');
var Map_for_driving = require('../maps/Map_for_driving.js');
var Map_for_bus = require('../maps/Map_for_bus.js');

const walking = 1;
const driving = 2;
const bus = 3;


function Map(way){
  var map;
    if(way == walking){
      map = Map_for_walking();
    } else if(way == driving){
      map = Map_for_driving();
    } else {
      map = Map_for_bus();
    }
  return map;
}

module.exports = Map;