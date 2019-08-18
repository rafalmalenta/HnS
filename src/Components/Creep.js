import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/gameStore";
import {addVector, removeVector,computeMovementVector,calculateVector} from "../functions/handleVectors"
import move from "../functions/move";


@observer export default class Creep extends React.Component{
    constructor(){
        super();          
    }    
    vectorsArray = [];
    
    removeVector = removeVector.bind(this);
    addVector = addVector.bind(this);
    calculateVector = calculateVector.bind(this);       
    componentDidMount(){
        setInterval(()=>{
            calculateVector(gameStore.creeps[this.props.id],gameStore.player);
            gameStore.creeps[this.props.id].move()
        },211)       
    }
    componentWillUnmount(){        
    }
    render(){
       var thisCreep = gameStore.creeps[this.props.id];       
    return(
        <div className="creep" 
            style={{left:`${thisCreep.position.x}px`,top:`${thisCreep.position.y}px`}} 
            onClick = {this.hurt}>
            {thisCreep.health} / {thisCreep.maxHealth}
        </div>
    )
    }
}