"use strict";
var _ = require('lodash');

var Heap = require('./data_structures/Heap.js').Heap;

function dijkstra(G, w, s) {
  //Dijkstra's algorithm solves the single-source shortest-paths problem on a weighted,
  //directed graph G = (V, E) for the case in which all edge weights are non-negative
  initialize_single_source(G, s);
  var S = {};
  var Q = new Heap(function(a, b){
    return b.d - a.d;
  });

  initialize_heap(Q, G.V);



  while (!Q.isEmpty()){
    var u = extract_min(Q);
    //S = S U {u}
    S = _.union(S, [u]);
    u.adj.forEach(
      function(v){
        relax(u, v, w);
      }
    )
  }

}

function initialize_single_source(G, s){
  _.forOwn(G.V, function(v, key){
    console.log(key);
    v.d = Number.MAX_VALUE;
    v.pi = null;

  });
  /*
  G.V.forEach(function(v){
    v.d = Number.MAX_VALUE;
    v.pi = null;
  });
  */
  s.d = 0;
}

function relax(u, v, w){
  try{
  if (v.d > u.d + w(u, v)){
    v.d = u.d + w(u, v);
    v.pi = u;
  }}
  catch (error){
    console.log(error.message);
  }
}

function extract_min(Q) {
  return Q.extract();
}


function initialize_heap(heap, V){
  _.forOwn(V, function(v, key){
      heap.add(v);
  });
  
}



//var Graph = require('./data_structures/Graph.js');
var map = require('./Map.js');
dijkstra(map, map.w, map.V['A']);

console.log('finish');
module.exports = dijkstra;