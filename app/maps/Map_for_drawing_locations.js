var Graph = require('./lib/Graph.js');
var Vertex = require('./lib/Vertex.js');
//var Edge = require('./lib/Edge.js');

function Map_for_drawing_locations() {
  var map = new Graph();
  map.addVertex(new Vertex('A', 71, 233));
  map.addVertex(new Vertex('B',125, 472));
  map.addVertex(new Vertex('C',146, 593));
  map.addVertex(new Vertex('D',240, 164));
  map.addVertex(new Vertex('E',272, 237));
  map.addVertex(new Vertex('F',272, 323));
  map.addVertex(new Vertex('G',284, 421));
  map.addVertex(new Vertex('H',294, 563));
  map.addVertex(new Vertex('I',407, 76));
  map.addVertex(new Vertex('J',422, 212));
  map.addVertex(new Vertex('K',429, 296));
  map.addVertex(new Vertex('L',437, 397));
  map.addVertex(new Vertex('M',442, 463));
  map.addVertex(new Vertex('N',542, 44));
  map.addVertex(new Vertex('O',577, 148));
  map.addVertex(new Vertex('P',599, 243));
  map.addVertex(new Vertex('Q',657, 312));
  map.addVertex(new Vertex('R',595, 396));
  map.addVertex(new Vertex('S',720, 376));
  map.addVertex(new Vertex('T',671, 192));
  map.addVertex(new Vertex('U',768, 109));
  map.addVertex(new Vertex('V',875, 24));
  map.addVertex(new Vertex('W',952, 101));
  map.addVertex(new Vertex('X',878, 109));
  map.addVertex(new Vertex('Y',900, 313));
  map.addVertex(new Vertex('Z',776, 354));

  return map;
}
module.exports = Map_for_drawing_locations;

//console.log('test');
