import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
import {UserContext} from './UserContext'

function Navbar() {
 
    const user = useContext(UserContext)

    useEffect(() => {
        console.log("mouinted with hook in navbar")
     }) 

    return (
       
       <nav className="nav">
           
               <p> <Link to="/home">Home</Link></p>
           
                <p><Link to="/history">History</Link></p>
           
                <p><Link to="/createbudget">Create Budget</Link></p>
           
                <p><Link to="/observebudget">Observe Budget</Link></p>
           
                <p><Link to="/registerpurchase">Register Purchase</Link></p>
          
                <p className="UserP">Signed in as: {user}!</p>
            
        </nav>
    )
}

export default Navbar;
