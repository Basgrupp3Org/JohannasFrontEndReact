import React, { Component, useContext } from 'react'
import Navbar from '../Navbar'
import {UserContext} from '../UserContext'



function Home(){

     const user = useContext(UserContext)
     
   
        return (
            <>
            <Navbar />
           
        <div>
           
                <p>Tjo från home</p>
        </div>
        </>
        )
    }


export default Home;

