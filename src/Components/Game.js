import React from 'react'
import { observer } from 'mobx-react'
import Player from './Player';
import gameStore from "../Stores/gameStore";
import move from "../functions/move";
import Creep from "./Creep"
import player from '../Stores/playerStore';
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
            var spawn = {
                x: Math.floor(Math.random()*1000),
                y: Math.floor(Math.random()*1000),
            };            
            var CreepSettings = { ...this.CreepSettings, position : spawn };
            console.log(CreepSettings)
            gameStore.spawnCreep({ ...CreepSettings });           
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
