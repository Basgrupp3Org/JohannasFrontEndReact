
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/pages/Home'
import History from './components/pages/History'
import CreateBudget from './components/pages/CreateBudget'
import ObserveBudget from './components/pages/ObserveBudget'
import RegisterPurchase from './components/pages/RegisterPurchase'
import Landing from './components/pages/Landing'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import { UserContext } from './components/contexts/UserContext'
import DetailedViewBudgets from './components/pages/DetailedViewBudgets'




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { Username: '' }



  }

  addUser = (childData) => {


    this.setState({ Username: childData })
  }


  render() {

    return (
      <>
        <UserContext.Provider value={this.state.Username}>
          <Router>
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/login'><Login addUser={this.addUser} /></Route>
              <Route path='/home' render={() => this.state.Username === '' ? <Redirect to="/" /> : <Home />} />
              <Route path='/history' render={() => this.state.Username === '' ? <Redirect to="/" /> : <History />} />
              <Route path='/createbudget' render={() => this.state.Username === '' ? <Redirect to="/" /> : <CreateBudget />} />
              <Route path='/observebudget' render={() => this.state.Username === '' ? <Redirect to="/" /> : <ObserveBudget />} />
              <Route path='/registerpurchase' render={() => this.state.Username === '' ? <Redirect to="/" /> : <RegisterPurchase />} />
              <Route path='/detailedviewbudgets' render={() => this.state.Username === '' ? <Redirect to="/" /> : <DetailedViewBudgets />} />
              <Route path='/' component={Landing} />
            </Switch>
          </Router>
        </UserContext.Provider>
      </>
    );
  }

}

export default App;


