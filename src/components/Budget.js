import React from 'react'
import './Budget.css';

export default function Budget(props) {
    return (
        <div className="budget">
            <h2>
                Name: {props.BudgetName}
            </h2>
            <h2>
                Max to spend: {props.BudgetSum}
            </h2>
            <h2>
                End date: {props.EndDate}
            </h2>
            <h2>
                Start date: {props.StartDate}
            </h2>

        </div>
    )
}
