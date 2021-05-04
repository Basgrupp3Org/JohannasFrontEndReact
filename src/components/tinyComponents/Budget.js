import React, { useState, useContext } from 'react'
import '../styling/Budget.css';
import DetailedBudget from '../tinyComponents/DetailedBudget'
import GetDetailedBudgets from './GetDetailedBudgets';
import { UserContext } from '../contexts/UserContext'



export default function Budget(props) {
    const [budgets, setBudgets] = useState([])
    const user = useContext(UserContext);

    const handleDetailedBudget = (e) => {
        e.preventDefault()


        fetch('http://localhost:65424/api/Budget/' + props.Id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then(data => { setBudgets(data) })
            .catch((err) => {
                console.error(err);
            })



    }


    return (

        <table className="budgetTable">
            <thead>

                <tr>
                    <th>
                        Budget name:
                    </th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {props.BudgetName}
                    </td>

                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>
                        {budgets.length ? <button onClick={() => setBudgets([])}>Hide View</button> : <button onClick={handleDetailedBudget}>Detailed View</button>}
                    </td>
                </tr>
                <tr>
                    <td>
                        {budgets.length ? <DetailedBudget BudgetName={budgets[0].BudgetName} BudgetSum={budgets[0].BudgetSum} StartDate={budgets[0].StartDate} EndDate={budgets[0].EndDate} Categories={budgets[0].Categories} /> : undefined}
                    </td>
                </tr>
            </tbody>
        </table>

    )
}
