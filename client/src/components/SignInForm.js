import React, { Component } from 'react';

class SignInForm extends Component {
  render() {
    return (
      <form action="/subscribe" method="POST">
        <div className="form-group">
          <label htmlFor="email" className="d-none">
            Email address
          </label>
          <input
            name="email"
            type="text"
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
          <a
            className="btn btn-lg btn-black btn-subscribe btn-block"
            href="/dashboard"
            role="button"
            tabIndex="4"
          >
            Sign In
          </a>
        </div>
      </form>
    );
  }
}

export default SignInForm;
