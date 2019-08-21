import { observable } from 'mobx';

class renderPosition{
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
    @observable renderPosition;
    @observable movementVector; 
    @observable attackRange = 10;
    @observable damage;
    move;  
    constructor(SettingsJSOL){
      this.health = SettingsJSOL.health;
      this.maxHealth = SettingsJSOL.maxHealth;
      this.renderPosition = SettingsJSOL.renderPosition;
      this.movementVector= SettingsJSOL.movementVector;
      this.move = SettingsJSOL.move;
      this.attackRange = SettingsJSOL.attackRange
      this.damage = SettingsJSOL.damage         
    };     
}



export default AbstractCharacter;