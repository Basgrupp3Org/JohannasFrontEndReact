import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
import {UserContext} from './UserContext'

function Navbar(props) {
 
    const user = useContext(UserContext)
    

    useEffect(() => {
        
     }) 

    return (
       <>
       <nav className="nav">
           
               <p> <Link to="/home">Home</Link></p>
           
                <p><Link to="/history">History</Link></p>
           
                <p><Link to="/createbudget">Create Budget</Link></p>
           
                <p><Link to="/observebudget">Observe Budget</Link></p>
           
                <p><Link to="/registerpurchase">Register Purchase</Link></p>
          
                <p className="UserP">Signed in as: {user}!</p>
                
                <p className="UserP">Balance: {props.balance}!</p>
                 
                
                
            
        </nav>
        
        </>
    )
}

export default Navbar;
