import React from 'react'
import { observer } from 'mobx-react'
import Player from './Player';
import gameStore from "../Stores/GameStore";
import Creep from "./Creep";
import {handleKeyPress,handleKeyUp} from "../functions/handleKeybord";
import {addVector, removeVector,computeMovementVector,calculateVector} from "../functions/handleVectors";
import chasePlayer from "../functions/chasePlayer";
import PlayerHealthBar from "./PlayerHealthBar";
import MoveHandler from "../functions/MoveHandler";
import Paused from "./Paused"
 
var CreepSettings = {
    health : 300,
    maxHealth : 300,
    renderPosition: {
        x:0,
        y:0,
    },
    movementVector:{
        x:0,
        y:0,
    },        
    attackRange: 20,
    }

@observer export default class Game extends React.Component{
    constructor(){
        super();
        this.state=
            {
                paused:false
            }
           
    }   
    vectorsArray = [];   
    removeVector = removeVector.bind(this);
    addVector = addVector.bind(this);
    computeMovementVector = computeMovementVector.bind(this)   
    handleKeyPress = handleKeyPress.bind(this);
    handleKeyUp = handleKeyUp.bind(this);   
    creepOnly = {chasePlayer : chasePlayer,   };
    movement;
    spawning;
    paused ="true";
    
    calculatePlayerStartingPosition(player){
        var camera = document.querySelectorAll(".camera")[0].getBoundingClientRect();
        var scene = document.querySelectorAll(".scene")[0].getBoundingClientRect();
        var centeredX = (camera.width/2) - 20;
        var centeredY = (camera.height/2) - 20;        
        player.renderPosition.x = centeredX - scene.x;
        player.renderPosition.y = centeredY - scene.y;       
    }
    clear = () =>{
        console.log(this.paused)        
        clearInterval(this.movement);
        clearInterval(this.spawning);
        gameStore.paused = true; 
        //console.log(this.spawning)
    };    
    play

componentDidMount(){
    var moveHandler = new MoveHandler(gameStore);
    this.calculatePlayerStartingPosition(gameStore.player);    
    this.play= ()=>{
        this.movement = setInterval(()=>{     
            moveHandler.hadleMove();        
            gameStore.creeps.forEach((creep)=>{
                calculateVector(creep, gameStore.player);
                creep.chasePlayer(creep, gameStore.player);
                
            });
            },50);
        this.spawning = setInterval(()=>{
            var spawn = {
                x: Math.floor(Math.random() * 1000),
                y: Math.floor(Math.random() * 1000),           
            };         
            gameStore.spawnCreep({ ...CreepSettings, renderPosition : spawn }, {chasePlayer : chasePlayer,   });         
        },1000)
        gameStore.paused = false;   
    }
    
    window.addEventListener("keydown",(event)=>{            
        this.handleKeyPress( event);
    });
    window.addEventListener("keyup",(event)=>{ 
        this.handleKeyUp( event);            
    });
    this.play();   
    }
    render(){
        if(gameStore.player.health <= 0){
            this.clear()
        }
        var creeps = gameStore.creeps.map((creep, index)=>
        <Creep key={index} id={index}/>)
        return(
            <div className="gameContainer">
                {gameStore.paused? (<Paused />):("")}            
                <div className = "camera" >  
                    <PlayerHealthBar />          
                    {gameStore.player.health > 0 ? (                    
                    <div className="scene" style={{left:`${gameStore.cameraPosition.x}px`, top:`${gameStore.cameraPosition.y}px`}} >                    
                        <Player />
                        { creeps }                       
                    </div> ) :(<div><div>YOU DIED</div>GAME OVER</div>) 
                }            
                </div> 
            </div>           
        )
    }

}
