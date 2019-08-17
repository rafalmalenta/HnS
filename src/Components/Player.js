import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/gameStore";

@observer export default class Player extends React.Component{
    constructor(){
        super();          
    }    
    vectorArray = [];
    computeMovementVector(vectorArray){
        gameStore.player.movementVector = vectorArray.reduce((result, vector)=>{
            return {
                x : result.x + vector.x,
                y : result.y + vector.y,
            }
        },{x:0,y:0});       
    };
    addVector(vectorToAdd){     
        var existInArray = this.vectorArray.some((vector)=>{            
            return ((vector.x === vectorToAdd.x)&&(vector.y === vectorToAdd.y))    
        })
        if(!existInArray)
            this.vectorArray.push(vectorToAdd);
        this.computeMovementVector(this.vectorArray)  
    };
    removeVector(vectorToRemove){    
        this.vectorArray = this.vectorArray.filter((vector)=>{
            return ((vector.x !== vectorToRemove.x)||(vector.y !== vectorToRemove.y))              
        })         
        this.computeMovementVector(this.vectorArray)      
    };
    handleKeyPress(event){   
        switch (event.code) {
            case 'KeyW':
                this.addVector({x:0,y:-1});
                break;
            case 'KeyS':
                this.addVector({x:0,y:1});
                break;
            case 'KeyA':
                this.addVector({x:-1,y:0});              
                break;
            case 'KeyD':
                this.addVector({x:1,y:0});              
                break;             
          }
    };
    handleKeyUp(event){   
        switch (event.code) {
            case 'KeyW':
                this.removeVector({x:0,y:-1});
                break;
            case 'KeyS':
                this.removeVector({x:0,y:1});
                break;
            case 'KeyA':
                this.removeVector({x:-1,y:0});              
                break;
            case 'KeyD':
                this.removeVector({x:1,y:0});              
                break;             
          }
    };
    componentDidMount(){
        this.keyHandler = window.addEventListener("keydown",(event)=>{            
            this.handleKeyPress(event)
        });
        this.keyUpHandler = window.addEventListener("keyup",(event)=>{
            this.handleKeyUp(event);
        });
        this.movement=setInterval(()=>{
            gameStore.player.move();            
        },300)
    }
    componentWillUnmount(){
        window.removeEventListener("keydown");
        window.removeEventListener("keyup")
    }
   
    render(){        
    return(
        <div className="player" 
            style={{left:`${gameStore.player.position.x}px`,top:`${gameStore.player.position.y}px`}} 
            onClick = {this.hurt}>
            {gameStore.player.health} / {gameStore.player.maxHealth}
        </div>
    )
    }
}