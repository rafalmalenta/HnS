import React from "react";
import Game from "./Game"
import gameStore from "../Stores/gameStore"

export default class Webpage extends React.Component{
constructor(){
    super();
    this.state={
        play : null,        
    }
}
play(){
    this.setState({play : true})
};
render(){
    return(
    <div>
       {this.state.play != null? (  <Game store = {gameStore}/>) : (<button onClick={this.play.bind(this)}>Let me play</button>) }     
    </div>)
}
}