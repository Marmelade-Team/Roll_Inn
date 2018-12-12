import React, { Component } from "react";
import './loginForm.scss';

class LoginForm extends Component {
  render() {
    return(
        <div className="loginForm">
          <div className="onglets">
            <div className="onglet" id="signin">Sign in<div className="visibilityBar"></div></div>
            <div className="onglet" id="register">Register<div className="visibilityBar"></div></div>
          </div>
          <div className="forms">
          <form className="form" id="forgotForm">
            <div className="input">
              <label>Email</label>
              <input type="text" id="email_forgot" />
            </div>
            <div className="validation">
              <button type="button" id="reset_password">Reset password</button>
            </div>
          </form>
          <form className="form" id="signinForm">
            <div className="input">
              <label>Email</label>
              <input type="text" id="email_signin" />
            </div>
            <div className="input">
              <label>Password</label>
              <input type="password" id="password_signin" />
            </div>
            <div className="option">
              <div className="checkbox">
                <input type="checkbox" id="remember_me"/>
                <label>Remember me</label>
              </div>
              <div>
                <label>Forgot your password?</label>
              </div>
            </div>
            <div className="validation">
              <button type="button" id="signin">Sign in</button>
              <button type="button" id="signin_google">Sign in with Google</button>
            </div>
          </form>
          <form className="form" id="registerForm">
            <div className="input">
              <label>Username</label>
              <input type="text" id="username_register" />
            </div>
            <div className="input">
              <label>Email</label>
              <input type="text" id="email_register" />
            </div>
            <div className="input">
              <label>Email confirmation</label>
              <input type="text" id="email_confirmation_register" />
            </div>
            <div className="input">
              <label>Password</label>
              <input type="password" id="password_register" />
            </div>
            <div className="input">
              <label>Password confirmation</label>
              <input type="text" id="password_confirmation_register" />
            </div>
            <div className="input">
              <label>Birth date</label>
              <input type="text" id="birth_date_signin" />
            </div>
            <div className="option">
              <div className="checkbox">
                <input type="checkbox" id="terms_me"/>
                <label>I accept the Terms of Service and Privacy Police</label>
              </div>
            </div>
            <div className="validation">
              <button type="button" id="register_account">Register</button>
            </div>
          </form>
          </div>
        </div>
    );
  }
}

export default LoginForm;
