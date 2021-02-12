import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
 

   
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
                <Link to="/registerpurchase">Register Purchare</Link>
            </li>
            
           </ul>
        </nav>
    )
}

export default Navbar;
