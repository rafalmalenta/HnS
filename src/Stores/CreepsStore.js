import { observable } from 'mobx';
import move from "../functions/move";
import AbstractCharacter from "./AbstractCharacter";


class creep extends AbstractCharacter{ 
    chasePlayer;  
    constructor(settings, crepOnly){
      super(settings);
      this.chasePlayer = crepOnly.chasePlayer;         
    };  
    
}

export default creep;