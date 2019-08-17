import { observable } from 'mobx';
import move from "../functions/move";

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
    @observable maxHealth;
    @observable position;
    @observable movementVector;
    constructor(health,maxHealth,position,movementVector){
      this.health = health;
      this.maxHealth = maxHealth;
      this.position = position;
      this.movementVector= movementVector;         
    };  
    move = move;   
}

//player.prototype.move = movs

player = new player(222,444,{x: 0,y: 0},{x:0,y:0});

export default player