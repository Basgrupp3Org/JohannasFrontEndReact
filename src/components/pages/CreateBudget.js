import React, { Component } from 'react'
import Navbar from '../Navbar'
import CateGoryModal from '../CreateCategoryModal'

export default class CreateBudget extends Component {
    render() {
        return (
        <div>   

                <CateGoryModal />
                <Navbar/>
                <p>hej från create budget</p>
        </div>
        )
    }
}