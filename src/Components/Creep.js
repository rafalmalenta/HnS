import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/GameStore";

@observer export default class Creep extends React.Component{
    constructor(){
        super();          
    }
    hurt(){ 
        if(gameStore.paused==false){       
            gameStore.creeps[this.props.id].health = gameStore.creeps[this.props.id].health - 125;        
            if(gameStore.creeps[this.props.id].health <= 0){
                gameStore.removeCreep(this.props.id)       
            }       
        }
    }
        
    render(){
       var thisCreep = gameStore.creeps[this.props.id];//DRYing       

    return(
        <div className="creep" 
            style={{left:`${thisCreep.renderPosition.x}px`,top:`${thisCreep.renderPosition.y}px`}}            
            onClick = {(e)=>this.hurt()}>
                <div className="HPBar">
                    <div style={{height:"100%", width:`${(thisCreep.health/thisCreep.maxHealth)*100}%`,backgroundColor:"green"}}>

                    </div>
                </div>
            
        </div>
    )
    }
}