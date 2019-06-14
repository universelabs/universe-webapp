import React, { Component } from 'react';

class LogInForm extends Component {
  render() {
    return (
      <form action="/login" method="POST">
        <div className="form-group">
          <label htmlFor="email" className="d-none">
            Email address
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="form-control mb-2"
            placeholder="Email address"
            required={true}
            autoComplete="off"
            tabIndex="2"
            autoCapitalize="none"
            aria-invalid="false"
            aria-controls="email"
            aria-label="What is your email address?"
            aria-activedescendant="email-item-0"
          />
          <label htmlFor="password" className="d-none">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            className="form-control mb-2"
            placeholder="Password"
            required={true}
            autoComplete="off"
            tabIndex="3"
            aria-invalid="false"
            aria-controls="password"
            aria-label="Choose a strong password."
            aria-activedescendant="password-item-0"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Log In"
            tabIndex="4"
            className="btn btn-lg btn-black btn-subscribe btn-block"
          />
        </div>
      </form>
    );
  }
}

export default LogInForm;
