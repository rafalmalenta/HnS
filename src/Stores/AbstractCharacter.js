import { observable } from 'mobx';

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
    @observable attackRange = 10;
    @observable damage;
    move;  
    constructor(SettingsJSOL){
      this.health = SettingsJSOL.health;
      this.maxHealth = SettingsJSOL.maxHealth;
      this.position = SettingsJSOL.position;
      this.movementVector= SettingsJSOL.movementVector;
      this.move = SettingsJSOL.move;
      this.attackRange = SettingsJSOL.attackRange
      this.damage = SettingsJSOL.damage         
    };     
}



export default AbstractCharacter;