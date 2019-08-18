import { observable } from 'mobx';
import move from "../functions/move";


class creep {
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