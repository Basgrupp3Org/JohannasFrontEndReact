import React, { Component } from 'react'
import RegisterFields from '../tinyComponents/RegisterFields'

export default class Register extends Component {
    render() {
        return (
            <div>
                <video src='/videos/video-1.mp4' autoPlay loop muted />
                <RegisterFields />
            </div>
        )
    }
}
