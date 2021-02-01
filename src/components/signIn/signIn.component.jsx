import React, { Component } from "react";
import FormInput from "../formInput/formInput.component";
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils';

import "./signIn.styles.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>

        <form action="submit" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id="email"
            label="Email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            id="password"
            handleChange={this.handleChange}
          />
          <div className="buttons">
          <CustomButton type="submit" name="submit" value="Submit Form">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
          </div>
     
        </form>
      </div>
    );
  }
}

export default SignIn;
