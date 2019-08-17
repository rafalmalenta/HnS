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
      this.position.x = (this.position.x + this.movementVector.x); //Upgrade this when i provide movementSpeed
      this.position.y = (this.position.y + this.movementVector.y);
      
    };
    
}

player = new player(222,444,{x: 0,y: 0},{x:0,y:0});

export default player