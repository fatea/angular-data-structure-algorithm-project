'use strict';
var _ = require('lodash');
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
    if(_.some(this.V[u.name].adj, 'name', v.name)){
      try{

        //var sth = this.E[u.name];
       result = this.E[u.name][v.name].w;
      }catch (error){
        result = this.E[v.name][u.name].w;
      }
    }

    return result;

  }
}

module.exports = Graph;