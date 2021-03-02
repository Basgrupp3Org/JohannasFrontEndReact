import React, { Component } from 'react'
import Navbar from '../Navbar'
import CreateCategoryModal from '../CreateCategoryModal'
import CreateBudgetModal from '../CreateBudgetModal'




export default function CreateBudget() {
    return (
        <div>
           
                
                <Navbar/>
           
                <CreateCategoryModal />

                <CreateBudgetModal />



        </div>
    )
}
