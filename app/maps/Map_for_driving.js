var Graph = require('./lib/Graph.js');
var Vertex = require('./lib/Vertex.js');
var Edge = require('./lib/Edge.js');

function Map() {
  var map = new Graph();
//map.addVertex(new Vertex("A"));
  /*
   for (var i = 0; i < 26; i++) {
   map.addVertex(new Vertex(String.fromCharCode(65 + i)));
   }
   */

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






  const auto = 1;
  const walk = 2;
  const both = 3;

  const one_way = 1;
  const two_way = 2;
  /*
   map.addEdge(new Edge(map, 'A', 'B', 1.70, auto, false));
   map.addEdge(new Edge(map, 'A', 'D', 1.20));
   map.addEdge(new Edge(map, 'B', 'C', 0.81, auto, false));
   */

  map.addEdge(new Edge(map, 'A', 'B', 1.70, auto, two_way));
  map.addEdge(new Edge(map, 'A', 'D', 1.20));
  map.addEdge(new Edge(map, 'B', 'C', 0.81, auto, two_way));

  map.addEdge(new Edge(map, 'B', 'G', 1.12, both, two_way));
  map.addEdge(new Edge(map, 'C', 'H', 1.03, both, two_way));
  map.addEdge(new Edge(map, 'D', 'E', 0.51, both, two_way));
  map.addEdge(new Edge(map, 'D', 'I', 1.32, both, two_way));
  map.addEdge(new Edge(map, 'E', 'F', 0.68, both, two_way));
  map.addEdge(new Edge(map, 'F', 'G', 0.74, both, two_way));
  map.addEdge(new Edge(map, 'F', 'K', 1.14, both, two_way));
  map.addEdge(new Edge(map, 'G', 'H', 0.97, both, two_way));
  map.addEdge(new Edge(map, 'G', 'L', 1.01, both, two_way));
  map.addEdge(new Edge(map, 'H', 'M', 0.94, both, two_way));
  map.addEdge(new Edge(map, 'I', 'J', 0.95, both, two_way));
  map.addEdge(new Edge(map, 'I', 'N', 0.90, both, two_way));
  map.addEdge(new Edge(map, 'J', 'K', 0.62, both, two_way));
  map.addEdge(new Edge(map, 'K', 'L', 0.66, both, two_way));
  map.addEdge(new Edge(map, 'K', 'P', 1.33, both, two_way));
  map.addEdge(new Edge(map, 'L', 'M', 0.92, both, two_way));
  map.addEdge(new Edge(map, 'L', 'R', 1.10, both, two_way));
  map.addEdge(new Edge(map, 'N', 'O', 0.83, both, two_way));
  map.addEdge(new Edge(map, 'O', 'P', 0.55, both, two_way));
  map.addEdge(new Edge(map, 'O', 'U', 1.30, both, two_way));
  //map.addEdge(new Edge(map, 'P', 'Q', 0.62, both, two_way));
  //map.addEdge(new Edge(map, 'P', 'T', 0.62, both, two_way));
  //map.addEdge(new Edge(map, 'Q', 'R', 0.73, both, two_way));
  //map.addEdge(new Edge(map, 'Q', 'S', 0.51, both, two_way));
  //map.addEdge(new Edge(map, 'Q', 'T', 0.93, both, two_way));
  map.addEdge(new Edge(map, 'R', 'S', 0.87, both, two_way));
  map.addEdge(new Edge(map, 'S', 'Z', 0.38, both, two_way));
  map.addEdge(new Edge(map, 'T', 'U', 1.12, both, two_way));
  map.addEdge(new Edge(map, 'T', 'Z', 1.89, both, two_way));

  map.addEdge(new Edge(map, 'U', 'V', 0.99, both, one_way));

  map.addEdge(new Edge(map, 'X', 'U', 0.65, both, one_way));

  map.addEdge(new Edge(map, 'U', 'Z', 1.70, both, two_way));
  map.addEdge(new Edge(map, 'V', 'X', 0.58, both, two_way));

  map.addEdge(new Edge(map, 'V', 'W', 1.10, both, one_way));

  map.addEdge(new Edge(map, 'W', 'X', 0.57, both, one_way));

  map.addEdge(new Edge(map, 'X', 'Y', 1.40, both, two_way));
  map.addEdge(new Edge(map, 'Y', 'Z', 0.97, both, two_way));



  return map;
}
module.exports = Map;

//console.log('test');
