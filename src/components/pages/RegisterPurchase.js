import React, { Component } from 'react'
import Navbar from '../tinyComponents/Navbar'
import RegisterPurchaseModal from '../modals/RegisterPurchaseModal';

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