import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'



export default function GetBudgets() {

  const user = useContext(UserContext);
  const [budgets, setBudgets] = useState([]);

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
      .then(data => { setBudgets(data) })
      .catch((err) => {
        console.error(err);
      })


  }

  return (
    <div>
      <button className="Class" onClick={handleRefresh}>Get Budgets</button>

      <>
        <div className="budget-container">
          {budgets.map((data, key) => {
            return (
              <div key={key}>
                {"Budgetnamn: " + data.BudgetName
                  +
                  " Max att spendera: " +
                  data.BudgetSum +
                  " Startdatum: " +
                  data.EndDate +
                  " Slutdatum: " +
                  data.StartDate
                }
              </div>
            );
          })}
        </div>
      </>

    </div>
  )
}
