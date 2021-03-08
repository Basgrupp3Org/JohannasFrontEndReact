import React, { Component } from 'react'
import Navbar from '../tinyComponents/Navbar'
import GetBudget from '../tinyComponents/GetBudgets'

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