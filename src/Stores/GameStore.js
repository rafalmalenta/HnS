import { autorun,computed, observable } from 'mobx';
import player from "./playerStore";
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
  @observable creeps=[];
  @observable cameraPosition;
  constructor(player){
    this.player = player;
    this.cameraPosition = {x:0, y:0}  
  };
  spawnCreep(creepSettings,creepOnly){ 
    this.creeps.push(new creep(creepSettings,creepOnly))
  };
  moveCamera = moveCamera;
}; 

var store = window.store = new GameStore(player);  
  
autorun(()=> {
  //odpala loga tylko jezeli wyswietlana zawartosc ulegnie zmianie!
    //console.log(`ten store `, store.creeps.forEach(creep=>console.log(creep.health)));
    //console.log('dsad', store.cameraPosition.y);
    //console.log('dsad', store.player.renderPosition.y);
});

//store.player.health = 211;
export default store;