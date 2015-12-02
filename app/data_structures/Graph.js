'use strict';
class Graph{

   constructor(){
    this.V = {};
    this.E = {};
  }


addVertex( v){
  this.V[v.name] = v;
}

  addEdge(e){
    if (!( e.start in this.E)){
  this.E[e.start] = {};
    }
    this.E[e.start][e.end] = e;
}
}

module.exports = Graph;