import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      city: "",
      password: "",
    };
  }

  handleValues = (prop) => (e) => {
    this.setState({ [prop]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName, city, mobile } = this.state;
    const url = `http://localhost:5000/registration`;
    console.log({ email, password, email, city, lastName, firstName, url });

    const payload = {
      email,
      password,
      firstName,
      lastName,
      city,
      mobile,
    };

    axios
      .post(url, payload)
      .then((res) => {
        if (res.data) {
          this.props.history.push("/login");
        }
      })
      .catch((e) => console.log(e));
  };

  render() {
    return (
      <div className='container-2'>
        <form>
          <div className='container'>
            <h1>Register Here</h1>

            <div htmlFor='firstName'>
              <b>First Name</b>
            </div>
            <input
              type='text'
              placeholder='Enter first name'
              name='firstName'
              id='firstName'
              required
              onChange={this.handleValues("firstName")}
            />

            <div htmlFor='lastName'>
              <b>Last Name</b>
            </div>
            <input
              type='text'
              placeholder='Enter last name'
              name='lastName'
              id='lastName'
              required
              onChange={this.handleValues("lastName")}
            />

            <div htmlFor='mobile'>
              <b>Mobile Number</b>
            </div>
            <input
              type='text'
              placeholder='Enter mobile number'
              name='mobile'
              id='mobile'
              required
              onChange={this.handleValues("mobile")}
            />

            <div htmlFor='email'>
              <b>Email</b>
            </div>
            <input
              type='text'
              placeholder='Enter Email'
              name='email'
              id='email'
              required
              onChange={this.handleValues("email")}
            />

            <div htmlFor='city'>
              <b>City</b>
            </div>
            <input
              type='text'
              placeholder='Enter your city'
              name='city'
              id='city'
              required
              onChange={this.handleValues("city")}
            />

            <div htlmFor='psw'>
              <b>Password</b>
            </div>
            <input
              type='password'
              placeholder='Enter Password'
              name='psw'
              id='psw'
              required
              onChange={this.handleValues("password")}
            />

            <p>
              By creating an account you agree to our{" "}
              <a href='#'>Terms & Privacy</a>.
            </p>
            <button
              type='submit'
              className='registerbtn'
              onClick={this.handleSubmit}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}
