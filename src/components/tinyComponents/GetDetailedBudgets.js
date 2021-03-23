import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import Budget from './Budget'
import Category from './Category';
import DetailedBudget from './DetailedBudget'
import '../styling/DetailedBudget.css'



export default function GetDetailedBudgets() {

  const user = useContext(UserContext);
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState([]);


  useEffect(() => {

    fetch('http://localhost:65424/api/Budget/GetDetailedBudgetList', {
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

  }, [])

  return (
    <div>


      <>
        <div className="detailedbudget-container">
          {budgets.map((data, key) => {
            return (
              <div key={key}>

                {
                  <DetailedBudget BudgetName={data.BudgetName} BudgetSum={data.BudgetSum} EndDate={data.EndDate} StartDate={data.StartDate}
                    pId={data.Id} />
                }
              </div>
            );
          })}
        </div>
      </>
    </div>
  )
}