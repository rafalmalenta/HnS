import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/GameStore";


@observer export default class Player extends React.Component{
    constructor(){
        super();          
    }  
    render(){
        //var player =  gameStore.player;//DRYing      
    return(
        <div className="paused" 
            style={{
                position:"absolute",
                zIndex: "22",
            }} 

            >
                Paused          
        </div>
    )
    }
}