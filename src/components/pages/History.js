import React, { Component } from 'react'
import Navbar from '../Navbar'
import Button from '../Button'
import ListPurchases from '../ListPurchases'

export default class History extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <Button myVar="RegisterPurchase" />
                <ListPurchases />
            </div>

        )
    }
}