import React, { Component } from 'react'
import Navbar from '../Navbar'
import Button from '../Button'
import ListPurchases from '../ListPurchases'
import RegisterPurchaseModal from '../RegisterPurchaseModal';

export default class History extends Component {
    render() {
        return (
            <div>
                <Navbar />


                <ListPurchases />

                <RegisterPurchaseModal />
            </div>

        )
    }
}