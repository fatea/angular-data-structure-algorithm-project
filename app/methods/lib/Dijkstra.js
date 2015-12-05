"use strict";
var _ = require('lodash');

var Heap = require('../../maps/lib/Heap.js').Heap;

function dijkstra(G, s) {
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
        relax(Q, u, v, G);
      }
    )
  }

}

function initialize_single_source(G, s){
  _.forOwn(G.V, function(v, key){
    //console.log(key);
    v.d = Infinity;
    //v.d = Number.MAX_VALUE;
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

//function relax(u, v, G){
//  try{
//  if (v.d > u.d + G.w(u, v)){
//    var sth = G.w(u, v);
//    v.d = u.d + G.w(u, v);
//    v.pi = u;
//  }
//
//  }
//  catch (error){
//    console.log(error.message);
//  }
//}


function relax(heap, u, v, G){
  if (v.d > u.d + G.w(u, v)){
    var sth = G.w(u, v);
    v.d = u.d + G.w(u, v);
    v.pi = u;
    heap.update(v);
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





//console.log('finish');
module.exports = dijkstra;