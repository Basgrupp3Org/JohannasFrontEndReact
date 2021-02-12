import React, { Component } from 'react'
import LoginFields from '../LoginFields'
import Button from '../Button'

export default class Login extends Component {
    render() {
        return (
            <div>
                <LoginFields />
                <Button myVar='GoHome'/>
            </div>
        )
    }
}
