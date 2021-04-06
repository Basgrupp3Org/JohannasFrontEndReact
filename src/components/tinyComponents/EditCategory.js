import React, { useContext, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';


function EditCategory(props) {

    const [category, setCategory] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const [categoryMaxSpent, setCategorySpent] = useState('');
    const Id = props.match.params.id;
    useEffect(() => {


        fetch('http://localhost:65424/api/Category/' + Id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(data => data.json())
            .then(data => { setCategory(data) })
            .catch((err) => {
                console.error(err);
            })



    }, []);

    const handleEdit = () => {

        let requestObject = {


            Id: Id,
            Name: categoryName,
            MaxSpent: categoryMaxSpent


        }


        fetch('http://localhost:65424/api/EditCategory/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(requestObject)

        })
            .then(data => data.json())
            .then(data => { setCategory(data) })
            .catch((err) => {
                console.error(err);
            })
    }

    const goBack = () => {

    }





    return (
        <div>
            <table className="EditCategory">
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

                            <input placeholder={category.Name} onChange={(e) => setCategoryName(e.target.value)} />
                        </td>
                        <td>
                            <input placeholder={category.MaxSpent} onChange={(e) => setCategorySpent(e.target.value)} />
                        </td><td>
                            <button onClick={handleEdit}>Edit</button>
                        </td>


                    </tr>
                </tbody>
            </table>
            <p><Link to="/createbudget">Go back!</Link></p>

        </div>
    )
}

export default withRouter(EditCategory)