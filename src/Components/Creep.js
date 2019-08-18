import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/gameStore";
import {addVector, removeVector,computeMovementVector} from "../functions/handleVectors"


@observer export default class Creep extends React.Component{
    constructor(){
        super();          
    }    
    vectorsArray = [];
   
    removeVector = removeVector.bind(this);
    addVector = addVector.bind(this);
    computeMovementVector = computeMovementVector.bind(this);       
    componentDidMount(){
       
    }
    componentWillUnmount(){
        window.removeEventListener("keydown");
        window.removeEventListener("keyup");
    }
    render(){        
    return(
        <div className="creep" 
            style={{left:`${gameStore.creeps[this.props.id].position.x}px`,top:`${gameStore.creeps[this.props.id].position.y}px`}} 
            onClick = {this.hurt}>
            {gameStore.player.health} / {gameStore.player.maxHealth}
        </div>
    )
    }
}