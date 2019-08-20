import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/gameStore";


@observer export default class Player extends React.Component{
    constructor(){
        super();          
    }  
    render(){        
    return(
        <div className="player" 
            style={{left:`${gameStore.player.position.x}px`,top:`${gameStore.player.position.y}px`}} 
            onClick = {this.hurt}>
            {gameStore.player.health} / {gameStore.player.maxHealth}
        </div>
    )
    }
}