import React, { Component } from 'react'
import Navbar from '../Navbar'
import GetBudget from '../GetBudgets'

export default class ObserveBudget extends Component {
    render() {
        return (
        <div>
                <Navbar />
                <p>hej från observe budget</p>

                <GetBudget />
        </div>
        )
    }
}