import React from 'react'
import '../styling/Button.css';

export default function Budget(props) {
    return (
        <div className="budget">
            <h2>
                Name: {props.BudgetName}
            </h2>
            <h2>
                Max att spendera: {props.BudgetSum}
            </h2>
            <h2>
                EndDate: {props.EndDate}
            </h2>
            <h2>
                StartDate: {props.StartDate}
            </h2>

        </div>
    )
}
