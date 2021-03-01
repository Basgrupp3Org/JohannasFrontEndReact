import React, { Component } from 'react'
import '../components/Button.css';
import Login from './pages/Login'
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router'

export default class Button extends Component {
    constructor(props){
        super(props)
        this.state = {myVar: props.myVar, myLink: '', redirect: null};
            
    }

    setStateForRedirectToPurchase = () => {
        this.setState({redirect: '/registerpurchase'})
    }
    setStateForRedirect = () => {
        this.setState({redirect: './login'})
    }

    setStateForRedirectRegister = () => {
        this.setState({redirect: './register'})
    }

    setStateForRedirectHome = () => {
        this.setState({redirect: './'})
    }
    render() {

        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
          }
        if(this.state.myVar === 'Login' ){
           return <button onClick={this.setStateForRedirect}>Log In</button>
        
        } else if(this.state.myVar === 'Register') {
            return <button onClick={this.setStateForRedirectRegister}>Register</button>
        } else if (this.state.myVar === 'RegisterPurchase') {
            return <button onClick={this.setStateForRedirectToPurchase}>Register Purchase</button>
            
        } else if (this.state.myVar === 'GoHome') {
            return <button onClick={this.setStateForRedirectHome}>Go Home</button>
            
        }

       
    }
}
