import { autorun,computed, observable } from 'mobx';
import player from "./playerStore"
class equipment{
  @observable hands;
  @observable chest;
}


class GameStore{
  @observable player
  constructor(player){
    this.player = player;  
  }
}; 
  
 

var store = window.store = new GameStore(player);  
  
  
autorun(()=> {
    console.log(`ten store `, store.player.health);
    console.log('dsad', store.player.position)
});

//store.player.health = 211;
export default store;