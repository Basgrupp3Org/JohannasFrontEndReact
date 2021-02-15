import React, { Component } from 'react'
import Navbar from '../Navbar'
import Button from '../Button'
import '../pages/Landing.css'

export default class Landing extends Component {
    
    onComponentDidMouint(){

    }
    
    render() {
        return (
            <>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
           
           
            <Button myVar="Login"/>
            <Button myVar="Register"/>
            
    
            </>
        )
    }
}