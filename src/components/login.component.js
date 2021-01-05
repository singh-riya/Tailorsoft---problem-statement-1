import React, { Component } from "react";
import "../App.css";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errMsg: "",
    };
  }

  handleValues = (prop) => (e) => {
    this.setState({ [prop]: e.target.value, errMsg: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const url = `http://localhost:5000${this.props.match.path}?email=${email}&password=${password}`;
    console.log({ email, password, url });
    axios
      .get(url)
      .then((res) => {
        if (res) {
          this.props.history.push("/dashboard");
        } else {
          this.setState({
            errMsg: "Please enter correct email and password!",
          });
        }
      })
      .catch((e) => {
        console.log(e);
        this.setState({
          errMsg: "Please enter correct email and password!",
        });
      });
  };

  redirectToSignUp = () => {
    this.props.history.push("/registration");
  };

  render() {
    const { email, password, errMsg } = this.state;

    return (
      <div className='flex container-1'>
        <div className='heading-login'>
          <p id='login-heading'>User Login</p>
        </div>
        <form>
          <div htmlFor='email'>
            <p>Email</p>
          </div>
          <input
            type='text'
            placeholder='Enter Email'
            name='email'
            id='email'
            required
            value={email}
            onChange={this.handleValues("email")}
          />
          <div htlmFor='psw'>
            <p>Password</p>
          </div>
          <input
            type='password'
            placeholder='Enter Password'
            name='psw'
            id='psw'
            value={password}
            required
            onChange={this.handleValues("password")}
          />
          {errMsg !== "" && <p style={{ color: "red" }}>{errMsg}</p>}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "500px",
            }}
          >
            <button
              onClick={this.handleSubmit}
              type='submit'
              className='registerbtn'
              style={{ width: "200px" }}
              id='login-submit-btn'
            >
              Login
            </button>
            <button
              style={{ width: "200px" }}
              onClick={this.redirectToSignUp}
              className='registerbtn'
            >
              Register
            </button>
          </div>
          New User? Click here to Register!
        </form>
      </div>
    );
  }
}
