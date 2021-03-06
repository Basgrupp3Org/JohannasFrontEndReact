import React from 'react'
import { Redirect } from 'react-router'
import Button from '../tinyComponents/Button'





class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.state = { Username: '', Password: '', redirect: null };

  }







  handleChange(e) {
    this.setState({ Username: e.target.value });
  }

  handleChange2(e) {
    this.setState({ Password: e.target.value })
  }

  HandleLoginFailOrSuccess = (data) => {


    if (data === false) {
      alert("Account does not exist,\ntry again with valid credentials");
    } else if (data === true) {
      // insert code för hantering av lyckad inloggning

      this.props.addUser(this.state.Username)
      this.setState({ redirect: './home' })

    }
  }
  handleLogin = (e) => {
    e.preventDefault()


    let requestObject = {
      Username: this.state.Username,
      Password: this.state.Password,

    }



    fetch('http://localhost:65424/api/User/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestObject)
    })
      .then(data => data.json())
      .then(data => { this.HandleLoginFailOrSuccess(data) })
      .catch((err) => {
        console.error(err);
      })



  }

  render() {
    const username = this.state.Username;
    const password = this.state.Password;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <>

        <form className="login__form" onSubmit={this.handleLogin}>
          <p>{ }</p>
          <label>
            Username:
          <input type="text" value={username} onChange={this.handleChange} />
          </label>
          <label>
            Password:
        <input type="password" value={password} onChange={this.handleChange2} />
          </label>
          <input type="submit" value="Submit" />



        </form>
        <Button myVar='GoHome' />

      </>
    );
  }
}

export default Login;