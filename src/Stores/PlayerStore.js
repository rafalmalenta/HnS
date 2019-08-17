import { observable } from 'mobx';

class position{
  @observable x;
  @observable y;
}
class movementVector{
  @observable x;
  @observable y;
}

class player {
    @observable health;
    @observable maxHealh;
    @observable position;
    @observable movementVector;
    constructor(health,maxHealh,position,movementVector){
      this.health = health;
      this.maxHealh = maxHealh;
      this.position = position;
      this.movementVector= movementVector
    };
    move(){
      this.position.x = this.position.x + movementVector.x;
      this.position.y = this.position.y + movementVector.y;
    };
    addVector(vector){
      this.movementVector.x = this.movementVector.x + vector.x;
      this.movementVector.y = this.movementVector.y + vector.y;
      console.log( this.movementVector.y +" "+ this.movementVector.x)
    }   
}

player = new player(222,444,{x: 0,y: 0},{x:0,y:0});

export default player