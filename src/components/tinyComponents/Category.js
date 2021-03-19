import React from 'react'
import '../styling/Budget.css';

export default function Category(props) {


    return (
        <>

            <button>Edit Category</button>

            <table className="budgetTable">
                <thead>
                    <tr>
                        <th>
                            Category name:
                        </th>
                        <th>
                            Max spent:
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {props.Name}
                        </td>
                        <td>
                            {props.MaxSpent}
                        </td>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </table>


        </>

    )
}
