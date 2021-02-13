import React, { Component } from 'react'
import '../components/Button.css';
import Login from './pages/Login'
import {Link} from 'react-router-dom';

export default class Button extends Component {
    constructor(props){
        super(props)
        this.state = {myVar: props.myVar, myLink: ''}
            
    }


    render() {
        if(this.state.myVar === 'Login'){
           return <button><Link to='/login' className="btn btn-primary">{this.state.myVar}</Link></button>
        } else if(this.state.myVar === 'Register') {
           return <button><Link to='/register' className="btn btn-primary">{this.state.myVar}</Link></button>
        } else if (this.state.myVar === 'GoHome') {
            return <button><Link to='/' className="btn btn-primary">{this.state.myVar}</Link></button>
        }

       
    }
}
