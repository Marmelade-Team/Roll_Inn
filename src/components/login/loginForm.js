import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return(
      <div className="loginForm">
        <form className="form">
          <div className="onglets"></div>
          <div className="register"></div>
          <div className="signin"></div>
          <div className="register"></div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
