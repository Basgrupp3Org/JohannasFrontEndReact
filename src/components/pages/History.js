import React, { Component } from 'react'
import Navbar from '../Navbar'
import Button from '../Button'

export default class History extends Component {
    render() {
        return (
        <div>
        <Navbar/>
        <p>hej från history page</p>
        <Button myVar="RegisterPurchase" />
        </div>

        )
    }
}