import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import '../styling/Budget.css';
import Popup from 'reactjs-popup';
import GetBudgets from './GetBudgets'
import EditCategory from './EditCategory'
import { withRouter, useHistory } from 'react-router-dom'

function Category(props) {

    const user = useContext(UserContext);
    let history = useHistory();
    const [budget, setBudgets] = useState([]);

    useEffect(() => {

        fetch('http://localhost:65424/api/Budget/GetBudgetList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(data => data.json())
            .then(data => { setBudgets(data) })
            .catch((err) => {
                console.error(err);
            })






    }, [])


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

        // props.history.push('/edit/' + id);

        history.push('edit/' + id);


    }

    const handleChosen = (e, id) => {
        e.preventDefault()
        console.log(id)


        let object = {
            "Category": {
                Id: id
            },
            "Budget": {
                Id: e.target.value
            },
            "User": {
                "UserName": user
            }
        }

        fetch('http://localhost:65424/api/Budget/SetCategoryForBudget', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
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
                        <td>
                            <Popup trigger={<button>Add To Budget</button>} position="right center">
                                <div><select onChange={(e) => handleChosen(e, props.Id)}>
                                    <option selected disabled hidden>--Choose Budget--</option>
                                    {budget.length ? budget.map(x => <option key={x} value={x.Id}>{x.BudgetName}</option>) : undefined}
                                </select>
                                </div>
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

