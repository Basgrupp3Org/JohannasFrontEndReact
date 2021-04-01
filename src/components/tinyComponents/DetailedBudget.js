import React from 'react'
import { Link } from 'react-router-dom';
import CreateCategoryModal from '../modals/CreateCategoryModal';
import '../styling/Budget.css';
import { Grid, Paper } from '@material-ui/core';
import CategoryTable from './CategoryTable'



export default function DetailedBudget(props) {


    return (

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
                        <CategoryTable Categories={props.Categories} />
                    </td>


                </tr>
            </tbody>
        </table>

    )
}
