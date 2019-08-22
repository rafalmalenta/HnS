import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/gameStore";
import Player from "../Components/Player";
import PlayerHealthBar from "../Components/PlayerHealthBar";
//import creeps from 


@observer export default class GameView extends React.Component{
    constructor(){
        super();          
    }  
    render(){
        //var player =  gameStore.player;//DRYing      
    return(
        <div className = "camera" >  
                <PlayerHealthBar />                              
                <div className="scene" style={{left:`${gameStore.cameraPosition.x}px`, top:`${gameStore.cameraPosition.y}px`}} >                    
                    <Player />
                    { creeps }                       
                </div>
                        
            </div>       
    )
    }
}