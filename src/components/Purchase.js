import React from 'react'
import './Purchase.css';

export default function Purchase(props) {
  return (
    // <div className="purchase">
    //    <h2 className="purchaseName">
    //      Purchase Name: {props.PurchaseName}
    //    </h2>
    //    <h2>
    //    Price: {props.Price}
    //    </h2>
    //    <h2>
    //    Date: {props.Date}
    //    </h2>
    // </div>
    <table className="purchaseTable">

      <thead>
        <tr>
          <th>
            Purchase Name:
          </th>
          <th>
            Price:
          </th>
          <th>
            Date:
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {props.PurchaseName}
          </td>
          <td>
            {props.Price}
          </td>
          <td>
            {props.Date}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
