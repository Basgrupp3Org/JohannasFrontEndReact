import React, { Component } from 'react'
import '../components/Button.css';

export default class Button extends Component {
    constructor(props){
        super(props)
        this.state = {myVar: props.myVar}
    }

    // handleClick = (e) => {
      
    // }
    render() {

        return (
            <button >{this.state.myVar}</button>
        )
    }
}
