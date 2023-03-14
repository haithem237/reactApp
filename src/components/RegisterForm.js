import React, { Component } from 'react';
import './RegisterForm.css'


class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', 
      email: '',
      password: '',
      confirmPassword: '',
      errors: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.formIsValid()) {
      console.log('Registration form submitted:', this.state);
    } else {
      console.log('Registration form is invalid.');
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'username':
        errors.username =
          value.length < 5
            ? 'Username must be at least 5 characters long!'
            : '';
        break;
      case 'email':
        errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      case 'confirmPassword':
        errors.confirmPassword =
          value !== this.state.password
            ? 'Passwords do not match!'
            : '';
        break;
      default:
        break;
    }

    this.setState({
      [name]: value,
      errors
    });
  }

  formIsValid = () => {
    let valid = true;
    let errors = this.state.errors;

    Object.values(errors).forEach((val) => {
      val.length > 0 && (valid = false);
    });

    Object.values(this.state).forEach((val) => {
      val === '' && (valid = false);
    });

    return valid;
  }

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="registration-form">
        <h2>Registration Form</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          {errors.username.length > 0 && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          {errors.email.length > 0 && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          {errors.password.length > 0 && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
          {errors.confirmPassword.length > 0 && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
