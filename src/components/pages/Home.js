import React, { Component, useContext, useEffect } from 'react'
import Navbar from '../Navbar'
import {UserContext} from '../UserContext'



function Home(){

     const user = useContext(UserContext);
     
     useEffect(() => {
        console.log("mouinted with hook")
     }) 
   
        return (
            <>
            <Navbar />
           
        <div>
           
                <p>Tjo från home </p>
        </div>
        </>
        )
    }


export default Home;

