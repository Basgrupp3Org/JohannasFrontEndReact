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
  
    render() {
      const username = this.state.Username;
      const password = this.state.Password;
      return (
        <fieldset>
          <legend>Enter Username:</legend>
          <input type="text" value={username}
                 onChange={this.handleChange} />
                 <legend>Enter Password:</legend>
                 <input type="password" value={password} onChange={this.handleChange2} />
        </fieldset>
      );
    }
  }