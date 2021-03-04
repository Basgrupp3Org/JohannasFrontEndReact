import React, { Component } from 'react'
import Navbar from '../Navbar'
import {UserContext} from '../UserContext'
import Purchase from './Purchase'

export default class ListPurchases extends Component{
    static contextType = UserContext
   constructor(){
       super()
        this.state = {
        purchases: []
    };
   }
     handlePurchases = (data) => {
         this.setState(data [0])
    }

     componentDidMount () {
        fetch('http://localhost:65424/api/Purchase/GetPurchaseList', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.context)
          })
            .then(data => data.json())
            .then(data => { console.log(data) })
            .catch((err) => {
              console.error(err);
            })
      
         
       }
      
    

    render(){
        return(<div>
            <ul>
                {this.state.purchases.map(purchases => {
                    return <li>{purchases.Price}</li>
                })}
            </ul>
            <Purchase props={this.purchases}/>
        </div>)
    }
}
