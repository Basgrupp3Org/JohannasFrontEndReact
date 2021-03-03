import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../Navbar'
import { UserContext } from '../UserContext'
import CreateBalanceModal from '../CreateBalanceModal'



function Home() {

    const user = useContext(UserContext);


    useEffect(() => {

    })



    return (
        <>
            <Navbar />

            <div>

                <p>Tjo från home </p>
                <CreateBalanceModal />

            </div>

        </>
    )
}


export default Home;

