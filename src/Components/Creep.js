import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/gameStore";

@observer export default class Creep extends React.Component{
    constructor(){
        super();          
    }
    hurt(index){
        gameStore.creeps[this.props.id].health = gameStore.creeps[this.props.id].health - 125;
        //gameStore.creeps[this.props.id].health;
        if(gameStore.creeps[this.props.id].health <= 0){
            gameStore.removeCreep(this.props.id)
           
        //console.log(gameStore.creeps[this.props.id].health);
       
        }
       //e.target 
    }       
    render(){
       var thisCreep = gameStore.creeps[this.props.id];//DRYing       
    return(
        <div className="creep" 
            style={{left:`${thisCreep.renderPosition.x}px`,top:`${thisCreep.renderPosition.y}px`}} 
            onClick = {(e)=>this.hurt(this.props.id,e)}>
            {thisCreep.health} / {thisCreep.maxHealth}
        </div>
    )
    }
}