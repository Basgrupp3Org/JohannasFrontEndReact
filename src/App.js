
import './App.css';
import Navbar from './components/Navbar'
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import History from './components/pages/History'
import CreateBudget from './components/pages/CreateBudget'
import ObserveBudget from './components/pages/ObserveBudget'
import RegisterPurchase from './components/pages/RegisterPurchase'
import Landing from './components/pages/Landing'
import Login from './components/pages/Login'
import Register from './components/pages/Register'



function App() {
  return (
    <>
    <Router>
    <Switch>      
      <Route path='/home' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/history' component={History} />
      <Route path='/createbudget' component={CreateBudget} />
      <Route path='/observebudget' component={ObserveBudget} />
      <Route path='/registerpurchase' component={RegisterPurchase} />
      <Route path='/' component={Landing}/>
    </Switch>
    </Router>
      
    </>
  );
}

export default App;
