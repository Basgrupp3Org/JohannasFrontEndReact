import React, { Component } from 'react'
import Navbar from '../tinyComponents/Navbar'
import GetBudget from '../tinyComponents/GetBudgets'
import HeaderText from '../tinyComponents/HeaderText'

export default class ObserveBudget extends Component {
    render() {
        return (
            <div className="mainPage">
                <div className="header">
                    <HeaderText />
                </div>
                <div className="navBar">
                    <Navbar />
                </div>


                <GetBudget />
            </div>
        )
    }
}