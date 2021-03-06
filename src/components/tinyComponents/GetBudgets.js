import { Grid } from '@material-ui/core';
import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import Budget from './Budget'



export default function GetBudgets(props) {

  const user = useContext(UserContext);
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {

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

  }, [])


  return (

    <div>

      <>
        <div className="budget-container">
          {budgets.map((data, key) => {
            return (
              <div key={key}>
                {
                  <Budget BudgetName={data.BudgetName} BudgetSum={data.BudgetSum} EndDate={data.EndDate} StartDate={data.StartDate}
                    Id={data.Id} cId={props.cId} />
                }
              </div>
            );
          })}
        </div>
      </>

    </div>
  )
}
