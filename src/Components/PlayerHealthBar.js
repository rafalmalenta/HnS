import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/GameStore";


@observer export default class PlayerHealthBar extends React.Component{
    constructor(){
        super();          
    }  
    render(){
        var player =  gameStore.player;//DRYing
        var healthpercentage = (player.health/player.maxHealth) * 100;
        
    return(
        <div className="healthBar" 
            style={{width:"500px",height:"30px", backgroundColor:"white",textAlign: "center"}} >
                <div style={{width:`${healthpercentage}%`,height:"100%", backgroundColor:"red",position:"absolute",zIndex:"-3"}} >                    
                </div>
            {`${Math.floor(healthpercentage)}%`}
            
        </div>
    )
    }
}