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

          <div className="purchase-container">


            {purchases.map((data, key) => {
              return (
                <div key={key}>

                  {
                    <Purchase PurchaseName={data.PurchaseName} Price={data.Price} Date={data.Date} />

                  }
                </div>
              );
            })}
          </div>

        </div>

      </>
    </div>
  )
}


