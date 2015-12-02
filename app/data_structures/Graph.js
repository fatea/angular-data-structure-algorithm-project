'use strict';
class Graph{

   constructor(){
    this.V = [];
    this.E = [];
  }


addVertex( v){
  this.V.add(v);
}

  addEdge(e){
  this.E.add(e);
}
}

module.exports = Graph;