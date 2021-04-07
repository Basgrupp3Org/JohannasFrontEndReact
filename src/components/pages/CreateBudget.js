import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import '../styling/CreateBudget.css'
import Navbar from '../tinyComponents/Navbar'
import CreateCategoryModal from '../modals/CreateCategoryModal'
import CreateBudgetModal from '../modals/CreateBudgetModal'
import HeaderText from '../tinyComponents/HeaderText'
import ListCategories from '../tinyComponents/ListCategories'


export default function CreateBudget() {
    const user = useContext(UserContext);
    const [categories, setCategories] = useState([]);

    const fetchCategories = () => {
        fetch('http://localhost:65424/api/Category/GetCategoryList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(data => data.json())
            .then(data => { setCategories(data) })
            .catch((err) => {
                console.error(err);
            })
    }

    const handleCategoryComplete = () => {
        fetchCategories()
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div className="mainPage">
            <div className="header">
                <HeaderText />
            </div>
            <div className="navBar">

                <Navbar />
            </div>
            <div className="createCategory">
                <h3>To add a budget category press the button below!</h3>
                <CreateCategoryModal onComplete={handleCategoryComplete} />
            </div>
            <div className="createBudget">
                <h3>To create a budget press the button below!</h3>
                <CreateBudgetModal />
            </div>

            <div>
                <ListCategories categories={categories} />
            </div>

        </div>
    )
}
