'use strict';
class Edge{
  constructor(G, start, end, w, vehicle_limit, oneway_limit){
    this.start = start;
    this.end = end;

    if(typeof w == 'undefined'){
    this.w = 0;
    }else {
      this.w = w;
    }
    if(typeof vehicle_limit == 'undefined'){
      this.vehicle_limit = false;
    }else {
      this.vehicle_limit = vehicle_limit;
    }

    if(typeof oneway_limit == 'undefined'){
      this.oneway_limit = false;
    }else {
      this.oneway_limit = oneway_limit;
    }
    //this.pi = null;
    //this.adj = [];

    if(this.oneway_limit == false){
      G.V[start].adj.push(G.V[end]);
      G.V[end].adj.push(G.V[start]);
    } else {
      G.V[start].adj.push(G.V[end]);
    }


  }


}

module.exports = Edge;