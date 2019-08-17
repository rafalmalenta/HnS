import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/gameStore";

@observer export default class Player extends React.Component{
    constructor(){
        super();  
        this.state={            
            left: `${gameStore.player.position.x}px`,
            top: `${gameStore.player.position.y}px`,            
            }      
    }
    
    hurt(){       
        gameStore.player.health = gameStore.player.health-2
    }
    move(vector){
        gameStore.player.position.x = gameStore.player.position.x + vector.x;
        gameStore.player.position.y = gameStore.player.position.y + vector.y;        
        this.setState({ left : gameStore.player.position.x , top:gameStore.player.position.y});        
        console.log( gameStore.player.position.y)
    };
    handleKeyPress(event){   
        switch (event.code) {
            case 'KeyW':
                this.move({x:0,y:-2});
                break;
            case 'KeyS':
                this.move({x:0,y:2});
                break;
            case 'KeyA':
                this.move({x:-2,y:0});              
                break;
            case 'KeyD':
                this.move({x:2,y:0});              
                break;             
          }
        
    };
    componentDidMount(){
        document.addEventListener("keydown",(event)=>{            
            this.handleKeyPress(event)
        })
    }
   
    render(){        
    return(
        <div class="player"style={this.state} onClick={this.hurt}>
            {gameStore.player.health}
        </div>
    )
    }
}