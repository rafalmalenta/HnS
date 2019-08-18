import { observable } from 'mobx';
import move from "../functions/move";
import AbstractCharacter from "./AbstractCharacter";

class position{
  @observable x;
  @observable y;
}
class movementVector{
  @observable x;
  @observable y;
}

class player extends AbstractCharacter{
    //@observable health;
    //@observable maxHealth;
    //@observable position;
    //@observable movementVector; 
    //move;  
    constructor(health,maxHealth,position,movementVector,move){
      super(health,maxHealth,position,movementVector,move);
      //this.health = health;
      //this.maxHealth = maxHealth;
      //this.position = position;
      //this.movementVector= movementVector;
      //this.move = move;         
    };  
    //move = move;   
}


player = new player(222,444,{x: 0,y: 0},{x:0,y:0},move);

export default player