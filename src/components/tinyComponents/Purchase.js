import React from 'react'
import '../styling/Purchase.css';

export default function Purchase(props) {
  return (


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
          <th>
            Category
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
          <td>
            {props.Category}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
