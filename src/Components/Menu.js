import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/GameStore";


@observer export default class Player extends React.Component{
    constructor(){
        super();          
    }    
    render(){             
    return(
        <div className="menu">
            <p>
                Hey, welcome on my game website.
                At this point of development i implemented movemeny by a,s,w,d keys.
                Space to pause game.
                New enemy appears every 3seconds can be killed by clicking him
                
            </p>
            <button onClick={this.props.play}>Play</button>  
            <button>About</button>         
        </div>
    )
    }
}