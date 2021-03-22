import React, { Component } from 'react'
import '../styling/CreateBudget.css'
import Navbar from '../tinyComponents/Navbar'
import CreateCategoryModal from '../modals/CreateCategoryModal'
import CreateBudgetModal from '../modals/CreateBudgetModal'
import HeaderText from '../tinyComponents/HeaderText'




export default function CreateBudget() {
    return (
        <div className="mainPage">
            <div className="header">
                <HeaderText />
            </div>
            <div className="navBar">

                <Navbar />
            </div>
            <div className="createCategory">
                <h3>To add a budgetcategory press the button below!</h3>
                <CreateCategoryModal />
            </div>
            <div className="createBudget">
                <h3>To create a budget press the button below!</h3>
                <CreateBudgetModal />
            </div>
        </div>
    )
}
