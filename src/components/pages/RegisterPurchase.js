import React, { Component } from 'react'
import Navbar from '../Navbar'
import RegisterPurchaseModal from '../RegisterPurchaseModal';

export default class RegisterPurchase extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <RegisterPurchaseModal />
            </div>
        )
    }
}