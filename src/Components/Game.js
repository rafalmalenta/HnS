import React from 'react'
import { observer } from 'mobx-react'
import Player from './Player';

@observer export default class Game extends React.Component{
    constructor(){
        super();   
    }
    
    render(){
        
        return(            
            <div height="100%">
               <Player />
            </div>            
        )
    }

}
