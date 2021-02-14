import React from 'react'

import Button from '../Button'



 class Login extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.state = {Username: '', Password: ''};

      
      
      
    }

    componentWillUnmount(){
      this.addUserForME();
    
    }

    addUserForME = () => {
      this.props.addUser('hello')
    }
  
  
    handleChange(e) {
      this.setState({Username: e.target.value});
    }

    handleChange2(e){
        this.setState({Password: e.target.value})
    }

    HandleLoginFailOrSuccess = (data) => {
     
      if(data === false){
          alert("Account does not exist,\ntry again with valid credentials");
      } else if (data === true){
          // insert code för hantering av lyckad inloggning
      
        window.location = './home'
 
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
    .then(data =>  { this.HandleLoginFailOrSuccess(data)}) 
    .catch((err) => {
        console.error(err);
    })

    console.log(requestObject)
    
    }
  
    render() {
      const username = this.state.Username;
      const password = this.state.Password;
      return (
          <>
        <form onSubmit={this.handleLogin}>
          <p>{}</p>
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
      <Button myVar='GoHome'/>
     
      </>
      );
    }
  }

  export default Login;