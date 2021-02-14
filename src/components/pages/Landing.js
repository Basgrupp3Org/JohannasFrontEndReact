import React, { Component } from 'react'
import Navbar from '../Navbar'
import Button from '../Button'

export default class Landing extends Component {
    
    onComponentDidMouint(){

    }
    
    render() {
        return (
            <>
           
           
            <Button myVar="Login"/>
            <Button myVar="Register"/>
    
            </>
        )
    }
}