import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
import {UserContext} from './UserContext'

function Navbar(props) {
 
    const user = useContext(UserContext);
    const context = useContext(UserContext);
    const [balance, setBalance] = useState();
    

    useEffect(() => {
        
     }) 
     // string, FormData, Blob, BufferSource, or URLSearchParams
        //referrer: "about:client", // or "" to send no Referer header,
        // or an url from the current origin
        //referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
        //mode: "cors", // same-origin, no-cors
       // credentials: "same-origin", // omit, include
        //cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
        //redirect: "follow", // manual, error
        //integrity: "", // a hash, like "sha256-abcdef1234567890"
        //keepalive: false, // true
        //signal: undefined, // AbortController to abort request
        //window: window // null

     
    

    //  async function handleThisRefresh()  {
    //    const response = await fetch('http://localhost:65424/api/Balance/GetBalanceByUser', [{
    //     method: "POST", // POST, PUT, DELETE, etc.
    //     headers: {
    //       // the content type header value is usually auto-set
    //       // depending on the request body
    //       "Access-Control-Allow-Origin" : 'http://localhost:3000/home',
    //       "Content-Type": 'application/json'
          
    //     },
    //     body: JSON.stringify(user)
    //   }]);

    //    const gottedBalance = await response.json();

    //    console.log(gottedBalance);

      


    //  }

    const handleRespone = (data) => {
      if(data != balance)
      setBalance(data)

      
    }




     const handleRefresh = (event) => {
        event.preventDefault();


      
   
   
   
       fetch('http://localhost:65424/api/Balance/GetBalanceByUser', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(user)
       })
         .then(data => data.json())
         .then(data => { handleRespone(data) })
         .catch((err) => {
           console.error(err);
         })
   
      
    }

    return (
       <>
       <nav className="nav">
           
               <p> <Link to="/home">Home</Link></p>
           
                <p><Link to="/history">History</Link></p>
           
                <p><Link to="/createbudget">Create Budget</Link></p>
           
                <p><Link to="/observebudget">Observe Budget</Link></p>
           
                <p><Link to="/registerpurchase">Register Purchase</Link></p>
          
                <p className="UserP">Signed in as: {user}!</p>
              
                {value => <div>The answer is {value}.</div>}
                
                <p className="UserP">Balance: {balance}!</p>

                <button className="UserA" onClick={handleRefresh}>Refresh</button>
                 
                
                
            
        </nav>
        
        </>
    )
}

export default Navbar;
