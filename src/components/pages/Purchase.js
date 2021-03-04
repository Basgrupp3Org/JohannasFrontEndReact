import React from 'react'

export default function Purchase(props) {
    return (
        <div className="purchase">
           <h2 className="purchaseName">
             {props.PurchaseName}Name
           </h2>
           <h2>
               {props.Price}Price
           </h2>
           <h2>
               {props.Date}Date
           </h2>
           <h2>
               {props.Store}Store
           </h2>
           <h2>
               {props.Category}
           </h2>
        </div>
    )
}
