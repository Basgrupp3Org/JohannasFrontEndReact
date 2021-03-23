import React, { Component } from 'react'
import Navbar from '../tinyComponents/Navbar'
import GetBudget from '../tinyComponents/GetBudgets'
import HeaderText from '../tinyComponents/HeaderText'
import { Grid } from '@material-ui/core';
import GetDetailedBudgets from '../tinyComponents/GetDetailedBudgets'
import DetailedBudget from '../tinyComponents/DetailedBudget'


export default class ObserveBudget extends Component {
    //   state = {budgets: []}

    render() {
        //         const addInfo = () => {
        //             console.log('works')
        //             this.setState({
        //             budgets: [...this.state.budgets, <GetDetailedBudgets/>]})
        //    }

        return (

            <div className="mainPage">

                <div className="header">
                    <HeaderText />
                </div>
                <div className="navBar">
                    <Navbar />
                </div>
                <div>
                    <GetBudget />
                </div>
                <div>

                </div>
            </div>
        )
    }
}