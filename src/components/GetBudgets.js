import React, {useContext}from 'react'
import {UserContext} from './UserContext'



export default function GetBudgets() {

    const user = useContext(UserContext);

    const handleRefresh = (event) => {
        event.preventDefault();
    
       fetch('http://localhost:65424/api/Budget/GetBudgetList', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(user)
       })
         .then(data => data.json())
         .then(data => { console.log(data) })
         .catch((err) => {
           console.error(err);
         })
    
      
    }

    return (
        <div>
            <button className="Class" onClick={handleRefresh}>Get Budgets</button>
        </div>
    )
}
