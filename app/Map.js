var Graph = require('./data_structures/Graph.js');
var Vertex = require('./data_structures/Vertex.js');
var Edge = require('./data_structures/Edge.js');
//var txt = require('./data_structures/Distance.txt');
//console.log(txt);
var Map = new Graph();
//Map.addVertex(new Vertex("A"));
for(var i=0;i<26;i++){
  Map.addVertex(new Vertex(String.fromCharCode(65+i)));
}

const auto = 1;
const walk = 2;


Map.addEdge(new Edge(Map, 'A', 'B', 1.70, auto, false));
Map.addEdge(new Edge(Map, 'A', 'D', 1.20));
Map.addEdge(new Edge(Map, 'B', 'C', 0.81, auto, false));
Map.addEdge(new Edge(Map, 'B', 'G', 1.12));
Map.addEdge(new Edge(Map, 'C', 'H', 1.03));
Map.addEdge(new Edge(Map, 'D', 'E', 0.51));
Map.addEdge(new Edge(Map, 'D', 'I', 1.32));
Map.addEdge(new Edge(Map, 'E', 'F', 0.68));
Map.addEdge(new Edge(Map, 'F', 'G', 0.74));
Map.addEdge(new Edge(Map, 'F', 'K', 1.14));
Map.addEdge(new Edge(Map, 'G', 'H', 0.97));
Map.addEdge(new Edge(Map, 'G', 'L', 1.01));
Map.addEdge(new Edge(Map, 'H', 'M', 0.94));
Map.addEdge(new Edge(Map, 'I', 'J', 0.95));
Map.addEdge(new Edge(Map, 'I', 'N', 0.90));
Map.addEdge(new Edge(Map, 'J', 'K', 0.62));
Map.addEdge(new Edge(Map, 'K', 'L', 0.66));
Map.addEdge(new Edge(Map, 'K', 'P', 1.33));
Map.addEdge(new Edge(Map, 'L', 'M', 0.92));
Map.addEdge(new Edge(Map, 'L', 'R', 1.10));
Map.addEdge(new Edge(Map, 'N', 'O', 0.83));
Map.addEdge(new Edge(Map, 'O', 'P', 0.55));
Map.addEdge(new Edge(Map, 'O', 'U', 1.30));
Map.addEdge(new Edge(Map, 'P', 'Q', 0.62, walk, false));
Map.addEdge(new Edge(Map, 'P', 'T', 0.62, walk, false));
Map.addEdge(new Edge(Map, 'Q', 'R', 0.73, walk, false));
Map.addEdge(new Edge(Map, 'Q', 'S', 0.51, walk, false));
Map.addEdge(new Edge(Map, 'Q', 'T', 0.93, walk, false));
Map.addEdge(new Edge(Map, 'R', 'S', 0.87));
Map.addEdge(new Edge(Map, 'S', 'Z', 0.38));
Map.addEdge(new Edge(Map, 'T', 'U', 1.12));
Map.addEdge(new Edge(Map, 'T', 'Z', 1.89));
Map.addEdge(new Edge(Map, 'U', 'V', 0.99, false, true));
Map.addEdge(new Edge(Map, 'X', 'U', 0.65, false, true));
Map.addEdge(new Edge(Map, 'U', 'Z', 1.70));
Map.addEdge(new Edge(Map, 'V', 'X', 0.58));
Map.addEdge(new Edge(Map, 'V', 'W', 1.10, false, true));
Map.addEdge(new Edge(Map, 'W', 'X', 0.57, false, true));
Map.addEdge(new Edge(Map, 'X', 'Y', 1.40));
Map.addEdge(new Edge(Map, 'Y', 'Z', 0.97));

module.exports = Map;

//console.log('test');
