import React, { useState } from 'react'
import '../styling/Budget.css';
import DetailedBudget from '../tinyComponents/DetailedBudget'
import GetDetailedBudgets from './GetDetailedBudgets';




export default function Budget(props) {
  const [detailedBudget, setBudgets] = useState([])
  const handleClick = (Component) => {
    setBudgets(Component)
  }
    return (
        // <div className="budget">
        //     <h2>
        //         Name: {props.BudgetName}
        //     </h2>
        //     <h2>
        //         Max att spendera: {props.BudgetSum}
        //     </h2>
        //     <h2>
        //         EndDate: {props.EndDate}
        //     </h2>
        //     <h2>
        //         StartDate: {props.StartDate}
        //     </h2>

        // </div>

          
        
        <table className="budgetTable" onClick={() => handleClick(<GetDetailedBudgets />)}>
            <thead>
               
                <tr>
                    <th>
                        Budget name:
                    </th>
                    <th>
                        Max to spend:
                    </th>
                    <th>
                        Start date:
                    </th>
                    <th>
                        End date:
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                       {props.BudgetName}
                    </td>
                    <td>
                        {props.BudgetSum}
                    </td>
                    <td>
                        {props.StartDate}
                    </td>
                    <td>
                        {props.EndDate}
                    </td>
                    <td>
                        {props.CategoryName}
                    </td>
                </tr>
                <div>
                </div>
            </tbody>
            <thead>
                <tr>
                {detailedBudget}
                </tr>
            </thead>
        </table>
        
    )
}
