import React from 'react'
import '../styling/Purchase.css';

export default function Purchase(props) {
  return (
    <div className="purchase">
      <h2 className="purchaseName">
        Purchase Name: {props.PurchaseName}
      </h2>
      <h2>
        Price: {props.Price}
      </h2>
      <h2>
        Date: {props.Date}
      </h2>
    </div>
  )
}
