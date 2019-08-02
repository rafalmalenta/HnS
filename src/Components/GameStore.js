import { autorun,computed, observable } from 'mobx';

class player {
  @observable health;
  @observable maxHealh;
};

class GameStore{
  @observable player
  constructor(player){
    this.player = player;
   
  }
}; 

// class Todo {
//     @observable value ;
//     @observable id
//     @observable complete
  
//     constructor(value) {
//       this.value = value
//       this.id = Date.now()
//       this.complete = false
//     }
//   }
  
 

var store = window.store = new GameStore({health:444,maxHealth:2333});  
  
  
autorun(()=> {
    console.log(`ten store `, store.player.health);
    //console.log('dsad', store.value)
});

//store.player.health = 211;
export default store;