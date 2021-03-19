import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import Category from './Category'

export default function ListCategories() {

  const user = useContext(UserContext);
  const [categories, setCategories] = useState([]);



  useEffect(() => {

    fetch('http://localhost:65424/api/Category/GetCategoryList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(data => data.json())
      .then(data => { setCategories(data) })
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
                  <Category Name={data.Name} MaxSpent={data.MaxSpent} Id={data.Id} />
                }
              </div>
            );
          })}
        </div>
      </>
    </div>
  )
}