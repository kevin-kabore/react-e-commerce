import React, { Component } from 'react';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({[name] : value}); // dynamically sets 'email' or 'password' state
  }
  render() {
    console.log(this.state)
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input 
            name="email" 
            type="email" 
            value={this.state.email} 
            required 
            onChange={this.handleChange}  
          />
          <label>Email</label>
          <input 
            name="password" 
            type="password" 
            value={this.state.password} 
            required 
            onChange={this.handleChange}  
          />
          <label>Password</label>

          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default SignIn;