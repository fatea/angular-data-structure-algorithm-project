'use strict';
class Vertex{
  constructor(name,x,y){
    if(typeof name != 'undefined'){
      this.name = name;
    }
    this.d = null;
    this.pi = null;
    this.adj = [];
    this.x = x;
    this.y = y;
  }


}

module.exports = Vertex;