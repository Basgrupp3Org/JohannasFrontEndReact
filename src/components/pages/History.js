import React, { Component } from 'react'
import Navbar from '../tinyComponents/Navbar'
import ListPurchases from '../tinyComponents/ListPurchases'
import RegisterPurchaseModal from '../modals/RegisterPurchaseModal';
import HeaderText from '../tinyComponents/HeaderText'
import '../styling/History.css'

export default class History extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <HeaderText />
                </div>
                <div className="navBar">
                    <Navbar />
                </div>
                <div className="mainPage">


                    <div className="listOfPurchases">

                        <ListPurchases />
                    </div>
                    <div className="registerPurchaseButton">
                        <RegisterPurchaseModal />
                    </div>

                </div>
            </>
        )
    }
}