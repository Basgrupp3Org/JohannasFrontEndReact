import React from 'react'
import { Link } from 'react-router-dom';
import CreateCategoryModal from '../modals/CreateCategoryModal';
import '../styling/Budget.css';
import { Grid, Paper } from '@material-ui/core';



export default function DetailedBudget(props) {


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



        <table className="detailedbudgetTable">
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
                    <th>
                        Categories:
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
                    <td>
                        {props.CategoryName}
                    </td>
                </tr>
            </tbody>
        </table>

    )
}
