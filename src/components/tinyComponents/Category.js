import React from 'react'
import '../styling/Budget.css';

export default function Category(props) {

    const handleDelete = (id) => {
        console.log(id);
    }
    return (
        <>



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
                            <button onClick={() => handleDelete(props.Id)}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>


        </>

    )
}
