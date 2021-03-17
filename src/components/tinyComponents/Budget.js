import React from 'react'
import { Link } from 'react-router-dom';
import '../styling/Budget.css';


export default function Budget(props) {
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
                       <Link to="/detailedviewbudgets">{props.BudgetName}</Link>
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
