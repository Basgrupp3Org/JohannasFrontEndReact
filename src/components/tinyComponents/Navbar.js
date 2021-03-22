import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
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
      <nav className="nav">

        <p> <Link to="/home">Home</Link></p>

        <p><Link to="/history">History</Link></p>

        <p><Link to="/createbudget">Create Budget</Link></p>

        <p><Link to="/observebudget">Observe Budget</Link></p>

        <p><Link to="/registerpurchase">Register Purchase</Link></p>
        <div className="DivForUserInfo">
          <p className="UserP">Signed in as: {user}!</p>

          {/* {value => <div>The answer is {value}.</div>} */}

          <p className="UserP">Balance: {balance}!</p>

          {/* <button className="UserA" onClick={handleRefresh}>Refresh</button> */}
        </div>




      </nav>

    </>
  )
}

export default Navbar;
