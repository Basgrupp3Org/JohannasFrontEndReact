import React from 'react'

export default class Button extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
     
      this.state = {Username: '', Password: ''};
      
    }
  
    handleChange(e) {
      this.setState({Username: e.target.value});
    }

    handleChange2(e){
        this.setState({Password: e.target.value})
    }

    HandleRegisterFailOrSuccess = (data) => {
        if(data === false){
            alert("Account alredy exists,\ntry again with different credentials");
            
    
        } else if (data === true){
            alert("Account register success!\nLogin to Access Johannas Bank App")
            
        }
    }

    handleRegister = (e) => {
        e.preventDefault()
   

        let requestObject = {
            Username: this.state.Username,
            Password: this.state.Password,
            
        }
    
        fetch('http://localhost:65424/api/User/Register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestObject)
        })
        .then(data => data.json())
        .then(data =>  { this.HandleRegisterFailOrSuccess(data) }) 
        .catch((err) => {
            console.error(err);
        })
    
        console.log(requestObject)
    }
  
    render() {
      const username = this.state.Username;
      const password = this.state.Password;
      return (
        <form onSubmit={this.handleRegister}>
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
        // <fieldset>
        //   <legend>Enter Username:</legend>
        //   <input type="text" value={username}
        //          onChange={this.handleChange} />
        //          <legend>Enter Password:</legend>
        //          <input type="password" value={password} onChange={this.handleChange2} />
        //          <input type="submit" onSubmit={this.handleRegister}/>
        // </fieldset>
      );
    }
  }