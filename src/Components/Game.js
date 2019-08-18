import React from 'react'
import { observer } from 'mobx-react'
import Player from './Player';
import gameStore from "../Stores/gameStore";
import move from "../functions/move";
import Creep from "./Creep"
@observer export default class Game extends React.Component{
    constructor(){
        super();   
    }

    CreepSettings = {
    health : 200,
    maxHealth : 300,
    position: {
        x:0,
        y:0,
    },
    movementVector:{
        x:0,
        y:0,
    },
    move : move,
    }
componentDidMount(){
        setInterval(()=>{
            gameStore.spawnCreep(this.CreepSettings);
            console.log("eg")
        },3000)
    }
    render(){
        var creeps = gameStore.creeps.map((creep, index)=>
        <Creep key={index} id={index}/>)
        return(            
            <div height="100%">
               <Player />
               { creeps }
            </div>            
        )
    }

}
