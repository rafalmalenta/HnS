import { autorun,computed, observable } from 'mobx';

class player {
    @observable health;
    @observable maxHealh;
    @observable position;
    constructor(health,maxHealh,position){
      this.health = health;
      this.maxHealh = maxHealh;
      this.position = position;
    }
};

class position{
    @observable x;
    @observable y;
}
player = new player(222,444,{x:42,y:54})
export default player