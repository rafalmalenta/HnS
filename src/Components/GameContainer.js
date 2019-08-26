import React from "react";
import Game from "./Game"
import gameStore from "../Stores/GameStore";
import Menu from "./Menu";
import EndScreen from "./EndScreen";
import { observer } from 'mobx-react'

@observer export default class Webpage extends React.Component{
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
    var ComponentToRender;
    if(this.state.play === true ){
        if(gameStore.player.health > 0)
            ComponentToRender = <Game />
        else
            ComponentToRender = <EndScreen />
    }
    else ComponentToRender =<Menu play={this.play.bind(this)}/>

    return(
    <div className="gameContainer">
       { ComponentToRender }     
    </div>)
}
}