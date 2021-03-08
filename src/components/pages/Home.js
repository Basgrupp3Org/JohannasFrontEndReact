import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../tinyComponents/Navbar'
import { UserContext } from '../contexts/UserContext'
import CreateBalanceModal from '../modals/CreateBalanceModal'



function Home() {

    const user = useContext(UserContext);


    useEffect(() => {

    })



    return (
        <>
            <Navbar />

            <div>


                <CreateBalanceModal />

            </div>

        </>
    )
}


export default Home;

