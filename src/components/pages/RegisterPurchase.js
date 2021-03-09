import React, { Component } from 'react'
import Navbar from '../tinyComponents/Navbar'
import RegisterPurchaseModal from '../modals/RegisterPurchaseModal';
import HeaderText from '../tinyComponents/HeaderText'
import '../styling/RegisterPurchase.css'

export default class RegisterPurchase extends Component {
    render() {
        return (
            <div className="mainPage">
                <div className="header">
                    <HeaderText />
                </div>
                <div className="navBar">
                    <Navbar />
                </div>
                <div className="registerPurchase">
                    <h3>To add a purchase, click the button below!</h3>
                    <RegisterPurchaseModal />
                </div>
            </div>
        )
    }
}