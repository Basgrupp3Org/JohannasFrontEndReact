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
                {"Budget name: " + data.BudgetName
                  +
                  " Max to spend: " +
                  data.BudgetSum +
                  " Start date: " +
                  data.StartDate +
                  " End date: " +
                  data.EndDate
                }
              </div>
            );
          })}
        </div>
      </>

    </div>
  )
        }
