import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../tinyComponents/Navbar'
import { UserContext } from '../contexts/UserContext'
import CreateBalanceModal from '../modals/CreateBalanceModal'
import '../styling/Home.css'
import HeaderText from '../tinyComponents/HeaderText'


function Home() {

    const user = useContext(UserContext);


    useEffect(() => {

    })



    return (
        <>
            <div className="mainPage">
                <div>
                    <HeaderText />
                </div>
                <div className="navBar">
                    <Navbar />
                </div>



                <div className="balanceModal">
                    <h3>To add some income press this button below!</h3>
                    <CreateBalanceModal />
                </div>

            </div>

        </>
    )
}


export default Home;

