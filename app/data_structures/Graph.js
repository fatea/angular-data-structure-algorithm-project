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

  w(u, v){
    var result = null;
    if(v in u.adj){
      try{
       result = this.E[u.name][v.name].w;
      }catch (error){
        result = this.E[v.name][u.name].w;
      }
    }

    return result;

  }
}

module.exports = Graph;