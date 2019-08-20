import React from 'react'
import { observer } from 'mobx-react'
import Player from './Player';
import gameStore from "../Stores/gameStore";
import Creep from "./Creep";
import {handleKeyPress,handleKeyUp} from "../functions/handleKeybord";
import {addVector, removeVector,computeMovementVector,calculateVector} from "../functions/handleVectors";
import move from "../functions/move";
import chasePlayer from "../functions/chasePlayer";

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
    attackRange: 10,
    }

    vectorsArray = [];   
    removeVector = removeVector.bind(this);
    addVector = addVector.bind(this);
    computeMovementVector = computeMovementVector.bind(this)   
    handleKeyPress = handleKeyPress.bind(this);
    handleKeyUp = handleKeyUp.bind(this);
    creepOnly = {chasePlayer : chasePlayer,   }

componentDidMount(){
    //var innerDom = document.querySelectorAll(".terrain")[0].offsetWidth;
    //var outerDom = document.querySelectorAll(".visiblePart")[0].offsetWidth;

    //console.log(innerDom," ",outerDom)
    window.addEventListener("keydown",(event)=>{            
        this.handleKeyPress( event);
    });
    window.addEventListener("keyup",(event)=>{
        this.handleKeyUp( event);            
    });        
    setInterval(()=>{     
        gameStore.player.move();        
        gameStore.creeps.forEach((creep)=>{
            calculateVector(creep,gameStore.player);
            creep.chasePlayer(creep,gameStore.player);
            console.log(creep.attackRange)
        });
        },30);
    setInterval(()=>{
        var spawn = {
            x: Math.floor(Math.random()*1000),
            y: Math.floor(Math.random()*1000),            
        }; 
        gameStore.spawnCreep({ ...this.CreepSettings, position : spawn }, {chasePlayer : chasePlayer,   });         
    },1000)    
    }
    render(){
        var creeps = gameStore.creeps.map((creep, index)=>
        <Creep key={index} id={index}/>)
        return(            
            <div className="visiblePart" >
                {gameStore.player.health > 0 ? (
                <div className="terrain">
                    <Player />
                    { creeps }   
                    
                </div> ) :(<div><div>YOU DIED</div>GAME OVER</div>) 
            }            
            </div>            
        )
    }

}
