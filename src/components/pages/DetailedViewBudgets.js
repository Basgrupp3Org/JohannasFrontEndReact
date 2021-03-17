import React, { Component } from 'react'
import '../styling/CreateBudget.css'
import Navbar from '../tinyComponents/Navbar'
import CreateCategoryModal from '../modals/CreateCategoryModal'
import CreateBudgetModal from '../modals/CreateBudgetModal'
import HeaderText from '../tinyComponents/HeaderText'

export default function DetailedViewBudgets() {
    return (
         <div>
         <div className="navBar">
        <Navbar />
           </div>

        <div className="createCategory">
        <h3>To add a budgetcategory press the button below!</h3>
        <CreateCategoryModal />
        </div>
        </div>
        
    )
}