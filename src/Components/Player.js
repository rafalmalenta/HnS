import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/gameStore";


@observer export default class Player extends React.Component{
    constructor(){
        super();          
    }  
    render(){
        var player =  gameStore.player;//DRYing      
    return(
        <div className="player" 
            style={{left:`${player.renderPosition.x}px`,top:`${player.renderPosition.y}px`}} 
            >           
        </div>
    )
    }
}