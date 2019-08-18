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

class AbstractCharacter {
    @observable health;
    @observable maxHealth;
    @observable position;
    @observable movementVector; 
    move;  
    constructor(health,maxHealth,position,movementVector,move){
      this.health = health;
      this.maxHealth = maxHealth;
      this.position = position;
      this.movementVector= movementVector;
      this.move = move;         
    };     
}



export default AbstractCharacter;