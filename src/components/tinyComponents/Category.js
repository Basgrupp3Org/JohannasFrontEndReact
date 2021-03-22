import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import '../styling/Budget.css';

export default function Category(props) {

    const user = useContext(UserContext);


    const handleDelete = (id) => {
        let requestObject = {
            "User": {
                "UserName": user
            },
            "Id": id
        }
        fetch('http://localhost:65424/api/Category/Delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObject)
        })
            .then(data => data.json())
            .then(data => { console.log(data) })
            .catch((err) => {
                console.error(err);
            })

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

