import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import '../styling/Budget.css';
import Popup from 'reactjs-popup';
import GetBudget from './GetBudgets'
import EditCategory from './EditCategory'
import { withRouter } from 'react-router-dom'

function Category(props) {

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

    const handleEdit = (id) => {

        props.history.push('/edit/' + id);


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
                        <td>
                            <Popup trigger={<button>Add To Budget</button>} position="right center">
                                <div><GetBudget cId={props.Id} /></div>
                            </Popup>
                        </td>
                        <td>
                            <button onClick={() => handleEdit(props.Id)}>Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>


        </>

    )
}

export default withRouter(Category)

