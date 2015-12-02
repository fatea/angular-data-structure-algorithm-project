"use strict";
var _ = require('lodash');

var Heap = require('./data_structures/Heap.js');

function dijkstra(G, w, s) {
  //Dijkstra's algorithm solves the single-source shortest-paths problem on a weighted,
  //directed graph G = (V, E) for the case in which all edge weights are non-negative
  initialize_single_source(G, s);
  var S = {};
  var Q = new Heap(function(a, b){
    return b.d - a.d;
  });

  initialize_heap(Q, G.V);



  while (Q){
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
  G.V.forEach(function(v){
    v.d = Number.MAX_VALUE;
    v.pi = null;
  });
  s.d = 0;
}

function relax(u, v, w){
  if (v.d > u.d + w(u, v)){
    v.d = u.d + w(u, v);
    v.pi = u;
  }
}

function extract_min(Q) {
  return Q.extract();
}


function initialize_heap(heap, arr){
  arr.forEach(function(element){
    heap.add(element);
  });
}

module.exports = dijkstra;