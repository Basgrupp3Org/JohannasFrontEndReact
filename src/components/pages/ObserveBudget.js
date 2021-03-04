import React, { Component } from 'react'
import Navbar from '../Navbar'
import GetBudget from '../GetBudgets'

export default class ObserveBudget extends Component {
    render() {
        return (
            <div>
                <Navbar />


                <GetBudget />
            </div>
        )
    }
}