import React, { useContext, useState, useEffect } from 'react'
import Navbar from './Navbar'
import { UserContext } from '../contexts/UserContext'
import Purchase from './Purchase'
import { List } from '@material-ui/core';
import '../styling/Purchase.css'

export default function ListPurchases() {

  const user = useContext(UserContext);
  const [purchases, listPurchases] = useState([]);

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
      .then(data => { listPurchases(data) })
      .catch((err) => {
        console.error(err);
      })

  })

  return (
    <div>

      <>
        <div className="purchase-container">
          {purchases.map((data, key) => {
            return (
              <Purchase PurchaseName={data.PurchaseName} Price={data.Price} Date={data.Date} />
            );
          })}
        </div>
      </>
    </div>
  )
}


