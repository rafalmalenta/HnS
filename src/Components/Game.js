import React from 'react'
import { observer } from 'mobx-react'

@observer export default class Game extends React.Component{
    constructor(){
        super();   
    }

    hurt(){
        this.props.store.player.health = this.props.store.player.health -3;
    }
    render(){
        console.log(this.props)
        return(
            <div onClick={this.hurt.bind(this)}>
                {this.props.store.player.health}
            </div>
        )
    }

}
