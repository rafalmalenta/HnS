import React from 'react'
import { observer } from 'mobx-react'
import Player from './Player';
import gameStore from "../Stores/gameStore";
import Creep from "./Creep";
import {handleKeyPress,handleKeyUp} from "../functions/handleKeybord";
import {addVector, removeVector,computeMovementVector,calculateVector} from "../functions/handleVectors";
import move from "../functions/move";
import chasePlayer from "../functions/chasePlayer";
import PlayerHealthBar from "./PlayerHealthBar";
import MoveHandler from "../functions/MoveHandler";

var CreepSettings = {
    health : 200,
    maxHealth : 300,
    renderPosition: {
        x:0,
        y:0,
    },
    movementVector:{
        x:0,
        y:0,
    },    
    move : move,
    attackRange: 20,
    }

@observer export default class Game extends React.Component{
    constructor(){
        super();   
    }   
    vectorsArray = [];   
    removeVector = removeVector.bind(this);
    addVector = addVector.bind(this);
    computeMovementVector = computeMovementVector.bind(this)   
    handleKeyPress = handleKeyPress.bind(this);
    handleKeyUp = handleKeyUp.bind(this);
    handleMove = handleMove.bind(this);
    creepOnly = {chasePlayer : chasePlayer,   };
    movement;
    
    calculatePlayerStartingPosition(player){
        var camera = document.querySelectorAll(".camera")[0].getBoundingClientRect();
        var scene = document.querySelectorAll(".scene")[0].getBoundingClientRect();
        var centeredX = (camera.width/2) - 20;
        var centeredY = (camera.height/2) - 20;
        
        player.renderPosition.x = centeredX - scene.x;
        player.renderPosition.y = centeredY - scene.y;       
    }
    

componentDidMount(){
    var zoveHandler = new MoveHandler(gameStore);
    this.calculatePlayerStartingPosition(gameStore.player);
    function clear(){
        clearInterval(movement);
        clearInterval(spawning);
    };
    //gameStore.spawnCreep({ ...CreepSettings }, {chasePlayer : chasePlayer,   });
    window.addEventListener("keydown",(event)=>{            
        this.handleKeyPress( event);
    });
    window.addEventListener("keyup",(event)=>{ 
        this.handleKeyUp( event);            
    });        
    var movement = setInterval(()=>{     
        zoveHandler.hadleMove();        
        gameStore.creeps.forEach((creep)=>{
            calculateVector(creep, gameStore.player);
            creep.chasePlayer(creep, gameStore.player);
            if(gameStore.player.health <= 0){
                clear()
            }
        });
        },30);
    var spawning = setInterval(()=>{
        var spawn = {
            x: Math.floor(Math.random() * 1000),
            y: Math.floor(Math.random() * 1000),           
        };         
        //gameStore.spawnCreep({ ...CreepSettings, renderPosition : spawn }, {chasePlayer : chasePlayer,   });         
    },1000)    
    }
    render(){
        if(gameStore.player.health <= 0){
            clearInterval(this.movement)
        }
        var creeps = gameStore.creeps.map((creep, index)=>
        <Creep key={index} id={index}/>)
        return(            
            <div className = "camera" >  
                <PlayerHealthBar />          
                {gameStore.player.health > 0 ? (                    
                <div className="scene" style={{left:`${gameStore.cameraPosition.x}px`, top:`${gameStore.cameraPosition.y}px`}} >                    
                    <Player />
                    { creeps }                       
                </div> ) :(<div><div>YOU DIED</div>GAME OVER</div>) 
            }            
            </div>            
        )
    }

}
