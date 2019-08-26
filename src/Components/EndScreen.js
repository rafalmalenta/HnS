import React from "react";
import { observer } from "mobx-react";
import gameStore from "../Stores/GameStore";


@observer export default class EndScreen extends React.Component{
    constructor(){
        super();          
    }  
    render(){        
    return(
        <div className="endscreen">  
            u died
        </div>
    )
    }
}