import React, { Component } from "react";
import LoginForm from './loginForm';
import './login.scss';

class Login extends Component {
  render() {
    return(
      <div className="login">
        <LoginForm />
      </div>
    );
  }
}

export default Login;
