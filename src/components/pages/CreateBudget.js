import React, { Component } from 'react'
import Navbar from '../tinyComponents/Navbar'
import CreateCategoryModal from '../modals/CreateCategoryModal'
import CreateBudgetModal from '../modals/CreateBudgetModal'




export default function CreateBudget() {
    return (
        <div>


            <Navbar />

            <CreateCategoryModal />

            <CreateBudgetModal />



        </div>
    )
}
