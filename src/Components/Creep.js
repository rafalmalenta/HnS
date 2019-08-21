import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/gameStore";

@observer export default class Creep extends React.Component{
    constructor(){
        super();          
    }       
    render(){
       var thisCreep = gameStore.creeps[this.props.id];       
    return(
        <div className="creep" 
            style={{left:`${thisCreep.renderPosition.x}px`,top:`${thisCreep.renderPosition.y}px`}} 
            onClick = {this.hurt}>
            {thisCreep.health} / {thisCreep.maxHealth}
        </div>
    )
    }
}