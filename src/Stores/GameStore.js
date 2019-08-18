import { autorun,computed, observable } from 'mobx';
import player from "./playerStore";
import creep from './CreepsStore';
import move from "../functions/move"

class equipment{
  @observable hands;
  @observable chest;
}


class GameStore{
  @observable player;
  @observable creeps=[];
  constructor(player){
    this.player = player;  
  };
  spawnCreep(creepSettings){ 
    this.creeps.push(new creep(creepSettings))
   }
}; 

var creepSettings = {
  health : 200,
  maxHealth : 300,
  position: {
    x:0,
    y:0,
  },
  movementVector:{
    x:0,
    y:0,
  },
  move : move,
}
 

var store = window.store = new GameStore(player);  
  
autorun(()=> {
  //odpala loga tylko jezeli wyswietlana zawartosc ulegnie zmianie!
    //console.log(`ten store `, store.creeps.forEach(creep=>console.log(creep.health)));
    console.log('dsad', store.player.position)
});

//store.player.health = 211;
export default store;