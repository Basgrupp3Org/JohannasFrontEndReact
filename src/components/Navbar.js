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
           <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/history">History</Link>
            </li>
            <li>
                <Link to="/createbudget">Create Budget</Link>
            </li>
            <li>
                <Link to="/observebudget">Observe Budget</Link>
            </li>
            <li>
                <Link to="/registerpurchase">Register Purchase</Link>
            </li>
            <li>
                
            </li>
            <li className="userTag">
                Signed in as: {user}!
            </li>
            
           </ul>
        </nav>
    )
}

export default Navbar;
