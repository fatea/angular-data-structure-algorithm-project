var Graph = require('./lib/Graph.js');
var Vertex = require('./lib/Vertex.js');
var Edge = require('./lib/Edge.js');

function Map() {
  var map = new Graph();
//map.addVertex(new Vertex("A"));
  for (var i = 0; i < 26; i++) {
    map.addVertex(new Vertex(String.fromCharCode(65 + i)));
  }

  const auto = 1;
  const walk = 2;


  map.addEdge(new Edge(map, 'A', 'B', 1.70, auto, false));
  map.addEdge(new Edge(map, 'A', 'D', 1.20));
  map.addEdge(new Edge(map, 'B', 'C', 0.81, auto, false));
  map.addEdge(new Edge(map, 'B', 'G', 1.12));
  map.addEdge(new Edge(map, 'C', 'H', 1.03));
  map.addEdge(new Edge(map, 'D', 'E', 0.51));
  map.addEdge(new Edge(map, 'D', 'I', 1.32));
  map.addEdge(new Edge(map, 'E', 'F', 0.68));
  map.addEdge(new Edge(map, 'F', 'G', 0.74));
  map.addEdge(new Edge(map, 'F', 'K', 1.14));
  map.addEdge(new Edge(map, 'G', 'H', 0.97));
  map.addEdge(new Edge(map, 'G', 'L', 1.01));
  map.addEdge(new Edge(map, 'H', 'M', 0.94));
  map.addEdge(new Edge(map, 'I', 'J', 0.95));
  map.addEdge(new Edge(map, 'I', 'N', 0.90));
  map.addEdge(new Edge(map, 'J', 'K', 0.62));
  map.addEdge(new Edge(map, 'K', 'L', 0.66));
  map.addEdge(new Edge(map, 'K', 'P', 1.33));
  map.addEdge(new Edge(map, 'L', 'M', 0.92));
  map.addEdge(new Edge(map, 'L', 'R', 1.10));
  map.addEdge(new Edge(map, 'N', 'O', 0.83));
  map.addEdge(new Edge(map, 'O', 'P', 0.55));
  map.addEdge(new Edge(map, 'O', 'U', 1.30));
  map.addEdge(new Edge(map, 'P', 'Q', 0.62, walk, false));
  map.addEdge(new Edge(map, 'P', 'T', 0.62, walk, false));
  map.addEdge(new Edge(map, 'Q', 'R', 0.73, walk, false));
  map.addEdge(new Edge(map, 'Q', 'S', 0.51, walk, false));
  map.addEdge(new Edge(map, 'Q', 'T', 0.93, walk, false));
  map.addEdge(new Edge(map, 'R', 'S', 0.87));
  map.addEdge(new Edge(map, 'S', 'Z', 0.38));
  map.addEdge(new Edge(map, 'T', 'U', 1.12));
  map.addEdge(new Edge(map, 'T', 'Z', 1.89));
  map.addEdge(new Edge(map, 'U', 'V', 0.99, false, true));
  map.addEdge(new Edge(map, 'X', 'U', 0.65, false, true));
  map.addEdge(new Edge(map, 'U', 'Z', 1.70));
  map.addEdge(new Edge(map, 'V', 'X', 0.58));
  map.addEdge(new Edge(map, 'V', 'W', 1.10, false, true));
  map.addEdge(new Edge(map, 'W', 'X', 0.57, false, true));
  map.addEdge(new Edge(map, 'X', 'Y', 1.40));
  map.addEdge(new Edge(map, 'Y', 'Z', 0.97));

  return map;
}
module.exports = Map;

//console.log('test');
