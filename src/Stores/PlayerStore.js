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
    @observable maxHealth;
    @observable position;
    @observable movementVector;
    constructor(health,maxHealth,position,movementVector){
      this.health = health;
      this.maxHealth = maxHealth;
      this.position = position;
      this.movementVector= movementVector
    };
    move(){      
      this.position.x = (this.position.x + this.movementVector.x); //* MovementSpeed ;//Upgrade this when i provide movementSpeed
      this.position.y = (this.position.y + this.movementVector.y); //* movementSpeed ;//
      
    };
    
}

player = new player(222,444,{x: 0,y: 0},{x:0,y:0});

export default player