import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/gameStore";
import {handleKeyPress,handleKeyUp} from "../functions/handleKeybord";
import {addVector, removeVector,computeMovementVector} from "../functions/handleVectors"


@observer export default class Player extends React.Component{
    constructor(){
        super();          
    }    
    vectorsArray = [];
   
    removeVector = removeVector.bind(this);
    addVector = addVector.bind(this);
    computeMovementVector = computeMovementVector.bind(this)   
    handleKeyPress = handleKeyPress.bind(this);
    handleKeyUp = handleKeyUp.bind(this);
    componentDidMount(){
        window.addEventListener("keydown",(event)=>{            
           this.handleKeyPress( event)
        });
        window.addEventListener("keyup",(event)=>{
            this.handleKeyUp( event);
            
        });
        this.movement=setInterval(()=>{
            gameStore.player.move();            
        },11)
    }
    componentWillUnmount(){
        window.removeEventListener("keydown");
        window.removeEventListener("keyup");
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