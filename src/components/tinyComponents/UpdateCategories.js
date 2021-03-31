import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import Category from './Category'

export default function UpdateCategories() {

    const user = useContext(UserContext);
    const [categories, UpdateCategories] = useState([]);

    const handleUpdate = (id) => {
        console.log(id);
    }

    useEffect(() => {
        fetch('http://localhost:65424/api/Category/GetCategoryList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(data => data.json())
            .then(data => { UpdateCategories(data) })
            .catch((err) => {
                console.error(err);
            })
    }, [])

    return (
        <div>
            <>
                <div className="category-container">
                    {categories.map((data, key) => {
                        return (
                            <div key={key}>
                                {
                                    <Category Name={data.Name} MaxSpent={data.MaxSpent} ><button onClick={() => handleUpdate(data.Id)}>UpdateCategories</button></Category>
                                }
                            </div>
                        );
                    })}
                </div>
            </>
        </div>
    )
}