import { autorun,computed, observable } from 'mobx';
import player from "./PlayerStore";
import creep from './CreepsStore';
import moveCamera from '../functions/moveCamera'
import move from "../functions/move"

class equipment{
  @observable hands;
  @observable chest;
}
class cameraPosition{
  @observable x;
  @observable y;
}

class GameStore{
  @observable player;
  @observable creeps = [];
  @observable cameraPosition;
  @observable paused;
  constructor(player){
    this.player = player;
    this.cameraPosition = {x:0, y:0} 
    this.paused = true; 
  };
  spawnCreep(creepSettings,creepOnly){ 
    this.creeps.push(new creep(creepSettings,creepOnly))
  };
  removeCreep(index){
    this.creeps.splice(index,1)
  }
  moveCamera = moveCamera;
}; 

var store = window.store = new GameStore(player);  
  
autorun(()=> {
  //odpala loga tylko jezeli wyswietlana zawartosc ulegnie zmianie!
    //console.log(`ten store `, store.creeps.forEach(creep=>console.log(creep.health)));
    //console.log('dsad', store.cameraPosition.y);
    //console.log('dsad', store.player.renderPosition.y);
});


export default store;
