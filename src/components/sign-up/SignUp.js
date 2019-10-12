import React, { Component } from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
// import { auth } from 'firebase';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Passowrds do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log('Error creating user', error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            required
          />
          <FormInput
            onChange={this.handleChange}
            type="email"
            name="email"
            value={email}
            label="Email"
            required
          />
          <FormInput
            onChange={this.handleChange}
            type="password"
            name="password"
            label="Password"
            value={password}
            required
          />
          <FormInput
            onChange={this.handleChange}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
