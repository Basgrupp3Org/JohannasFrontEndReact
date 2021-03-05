import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../Navbar'
import { UserContext } from '../UserContext'
import CreateBalanceModal from '../CreateBalanceModal'
import './Home.css';


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
                <p>Jävla Martin!</p>

            </div>


        </>
    )
}


export default Home;

