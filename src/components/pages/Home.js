import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../Navbar'
import {UserContext} from '../UserContext'



function Home(){

     const user = useContext(UserContext);
     const [balance, setBalance] = useState();
     
     useEffect(() => {
        
     }) 

     const handleRefresh = (event) => {
        event.preventDefault();
       let requestObject = {
       
           
            
           Username: user
       
         
   
   
   
   
       }
   
   
   
       fetch('http://localhost:65424/api/Balance/GetBalanceByUser', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(requestObject)
       })
         .then(data => data.json())
         .then(data => { setBalance(data) })
         .catch((err) => {
           console.error(err);
         })
   
      
    }
   
        return (
            <>
            <Navbar balance={balance}/>
           
        <div>
        <button className="UserA" onClick={handleRefresh}>Refresh</button>
                <p>Tjo från home </p>
        </div>
        </>
        )
    }


export default Home;

