import { observable } from 'mobx';
import move from "../functions/move";
import AbstractCharacter from "./AbstractCharacter";

class position{
  @observable x;
  @observable y;
}

class movementVector{
  @observable x;
  @observable y;
}

class player extends AbstractCharacter{
    constructor(Settings){
      super(Settings);
    };  
}

var PlayerSettings = {
  health : 200,
  maxHealth : 300,
  renderPosition: {
    x:0,
    y:0,
  },
  movementVector:{
    x:0,
    y:0,
  },
  move : move,
}

player = new player(PlayerSettings);

export default player