import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/gameStore";


@observer export default class PlayerHealthBar extends React.Component{
    constructor(){
        super();          
    }  
    render(){
        var player =  gameStore.player;//DRYing
        var healthpercentage = (player.health/player.maxHealth) * 100;
        
    return(
        <div className="healthBar" 
            style={{width:"500px",height:"30px", backgroundColor:"white"}} >
                <div style={{width:`${healthpercentage}%`,height:"100%", backgroundColor:"red"}} >

                </div>
            
            
        </div>
    )
    }
}