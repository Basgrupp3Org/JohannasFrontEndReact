import React, { useState, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../styling/Navbar.css'
import { UserContext } from '../contexts/UserContext'

function Navbar(props) {

  const user = useContext(UserContext);


  const [balance, setBalance] = useState();


  useEffect(() => {



    fetch('http://localhost:65424/api/Balance/GetBalanceByUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(data => data.json())
      .then(data => { handleRespone(data) })
      .catch((err) => {
        console.error(err);
      })


  }, [])


  const handleRespone = (data) => {
    if (data != balance)
      setBalance(data)


  }




  // const handleRefresh = (event) => {
  //   event.preventDefault();







  // }

  return (
    <>
      <div>
        <nav className="nav">

          <ul>
            <li>
              <NavLink to="/home" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/history" >History</NavLink>
            </li>
            <li>
              <NavLink to="/createbudget">Create Budget</NavLink>
            </li>
            <li>
              <NavLink to="/observebudget">Observe Budget</NavLink>
            </li>
            <li>
              <NavLink to="/registerpurchase" >Register Purchase</NavLink>
            </li>
          </ul>








          <div className="DivForUserInfo">
            <p className="UserP">Signed in as: {user}!</p>

            {/* {value => <div>The answer is {value}.</div>} */}

            <p className="UserP">Balance: {balance}!</p>

            {/* <button className="UserA" onClick={handleRefresh}>Refresh</button> */}
          </div>




        </nav>
      </div>
    </>
  )
}

export default Navbar;
