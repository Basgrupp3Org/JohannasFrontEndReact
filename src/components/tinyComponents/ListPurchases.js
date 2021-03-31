import React, { useContext, useState, useEffect } from 'react'
import Navbar from './Navbar'
import { UserContext } from '../contexts/UserContext'
import Purchase from './Purchase'
import { List } from '@material-ui/core';
import '../styling/Purchase.css'

export default function ListPurchases() {

  const user = useContext(UserContext);
  const [purchases, setPurchases] = useState([]);
  const [dateFrom, setFromDate] = useState();
  const [dateTo, setToDate] = useState();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {

    fetch('http://localhost:65424/api/Purchase/GetPurchaseList', {
      method: 'POST',
      headers:
      {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(data => data.json())
      .then(data => { setPurchases(data) })
      .catch((err) => {
        console.error(err);
      })



  }, []);

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

  const filterPurchases = (e) => {

    e.preventDefault()


    let requestObject = {

      "FromDate": dateFrom,
      "ToDate": dateTo,
      "User": {
        "Username": user

      }

    }



    fetch('http://localhost:65424/api/Purchase/GetPurchaseListByDate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestObject)
    })
      .then(data => data.json())
      .then(data => { setPurchases(data) })
      .catch((err) => {
        console.error(err);
      })

    console.log(requestObject)


  }


  const filterCategories = (e) => {

    e.preventDefault()


    let requestObject = {

      "User": {
        "Username": user

      },
      "Category": {
        "Id": selectedCategory
      }

    }



    fetch('http://localhost:65424/api/Purchase/GetPurchaseListByCategory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestObject)
    })
      .then(data => data.json())
      .then(data => { setPurchases(data) })
      .catch((err) => {
        console.error(err);
      })

    console.log(requestObject)


  }

  return (
    <div>

      <>
        <div className="Filtering">
          <label className="fromDateLabel">From Date</label>
          <input className="fromDate"

            placeholder="From Date"
            type="date"
            value={dateFrom}
            onChange={(e) => setFromDate(e.target.value)} />
          <label className="toDateLabel">To Date</label>
          <input
            className="toDate"
            placeholder="From Date"
            type="date"
            value={dateTo}
            onChange={(e) => setToDate(e.target.value)} />

          <button className="button" onClick={filterPurchases}>Filter</button>
        </div>
        <div className="CategoryFiltering">
          <label>Choose Category</label>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}>
            <option></option>
            {categories.length ? categories.map(x => <option value={x.Id}>{x.Name}</option>) : undefined}
          </select>
          <button onClick={filterCategories}>Filter Category</button>

        </div>
        <div className="purchase-container">


          {purchases.map((data, key) => {
            return (
              <div key={key}>

                {
                  <Purchase PurchaseName={data.PurchaseName} Price={data.Price} Date={data.Date} Category={data.Category} />

                }
              </div>
            );
          })}
        </div>



      </>
    </div >
  )
}


