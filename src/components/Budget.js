import React from 'react'
import './Budget.css';

export default function Budget(props) {
    return (
        // <div className="budget">
        //     <h2>
        //         Name: {props.BudgetName}
        //     </h2>
        //     <h2>
        //         Max to spend: {props.BudgetSum}
        //     </h2>
        //     <h2>
        //         End date: {props.EndDate}
        //     </h2>
        //     <h2>
        //         Start date: {props.StartDate}
        //     </h2>

        // </div>

        <table className="budgetTable">
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
                </tr>
            </tbody>
        </table>
    )
}
