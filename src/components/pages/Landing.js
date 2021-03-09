import React, { Component } from 'react'
import Button from '../tinyComponents/Button'
import '../styling/Landing.css'

export default class Landing extends Component {


    render() {
        return (
            <>
                <video src='/videos/video-2.mp4' autoPlay loop muted />


                <Button myVar="Login" />
                <Button myVar="Register" />


            </>
        )
    }
}