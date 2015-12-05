'use strict';
class Edge{


  constructor(G, start, end, w, vehicle_limit, oneway_limit){
    const auto = 1;
    const walk = 2;
    const both = 3;

    const one_way = 1;
    const two_way = 2;

    this.start = start;
    this.end = end;

    this.w = w;
    this.vehicle_limit = vehicle_limit;
    this.oneway_limit = oneway_limit;


/*

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
*/






    /*这边有问题!
    if(this.oneway_limit == false){
      G.V[start].adj.push(G.V[end]);
      G.V[end].adj.push(G.V[start]);
    } else {
      G.V[start].adj.push(G.V[end]);
    }*/

    if(this.oneway_limit == one_way){
      G.V[start].adj.push(G.V[end]);
    }else{
    G.V[start].adj.push(G.V[end]);
    G.V[end].adj.push(G.V[start]);
    }







  }


}

module.exports = Edge;