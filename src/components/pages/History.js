import React, { Component } from 'react'
import Navbar from '../tinyComponents/Navbar'
import ListPurchases from '../tinyComponents/ListPurchases'
import RegisterPurchaseModal from '../modals/RegisterPurchaseModal';

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