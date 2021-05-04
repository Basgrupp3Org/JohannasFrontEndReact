import React, { useContext, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';


function EditCategory(props) {

    const [category, setCategory] = useState([]);
    const [categoryName, setCategoryName] = useState('');
    const [categoryMaxSpent, setCategorySpent] = useState('');
    const [summary, setSummary] = useState("");
    
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
            // .then(data => data.json())
            .then(data => { setCategory(data) })
            .catch((err) => {
                console.error(err);
            })
    }

    const EditCategoryRegex1 = (e) => {
        if (EditCategoryRegex.exec(e.target.value)) {
          setSummary("")
          setCategoryName(e.target.value);
        } else {
          setSummary("no numbers allowed");
        }
      };



    const EditCategoryRegex = new RegExp("^[A-ZÅÄÖÈa-zåäöé ]{0,29}$");


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
                         {summary}
                            <input placeholder={category.Name} 
                            type="text"
                            value={categoryName} 
                            onChange={EditCategoryRegex1}
                            required
                             />
                            
                             
                        </td>
                        <td>
                            <input placeholder={category.MaxSpent}
                            type="number"
                            value={categoryMaxSpent}
                            onChange={(e) => setCategorySpent(e.target.value)}
                            onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                            
                             />

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