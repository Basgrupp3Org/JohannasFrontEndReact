import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../tinyComponents/Navbar'
import { UserContext } from '../contexts/UserContext'
import CreateBalanceModal from '../modals/CreateBalanceModal'
import '../styling/Home.css'


function Home() {

    const user = useContext(UserContext);


    useEffect(() => {

    })



    return (
        <>
            <Navbar />

            <div className="WelcomeText">
                <h2>Welcome to J.J.B.A Budgets!</h2>


                <CreateBalanceModal />

            </div>

        </>
    )
}


export default Home;

