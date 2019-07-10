import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'redux-react-hook';
import * as actions from '../constants/actions';
import useForm from '../hooks/useForm';

function SignUpForm({ history }) {
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();
  const { values, handleChange, handleSubmit } = useForm(
    { email: '', password: '' },
    postSignUp
  );

  async function postSignUp() {
    try {
      setLoading(true);

      const { data } = await axios.post('/signup', values);
      const res = await data;

      if (res.error) {
        console.error(data.error);
        return history.push('/signup-error');
      }

      if (res.token) {
        dispatch({
          type: actions.SET_AUTH_USER,
          authUser: {
            email: values.email
          }
        });

        localStorage.setItem('token', res.token);

        setLoading(false);
        return history.push('/');
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName" className="d-none">
          First name
          <span className="font-italic">&nbsp;- Optional</span>
        </label>
        <input
          name="firstName"
          type="text"
          id="firstName"
          className="form-control mb-2"
          placeholder="First name (optional)"
          autoComplete="off"
          tabIndex="1"
          aria-invalid="false"
          aria-controls="first-name"
          aria-label="What is your first name?"
          aria-activedescendant="first-name-item-0"
        />
        <label htmlFor="email" className="d-none">
          Email address
        </label>
        <input
          onChange={handleChange}
          value={values.email}
          name="email"
          type="email"
          id="email"
          className="form-control mb-2"
          placeholder="Email address"
          required
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
          onChange={handleChange}
          value={values.password}
          name="password"
          type="password"
          id="password"
          className="form-control mb-2"
          placeholder="Password"
          required
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
          value={loading ? 'Signing up…' : 'Sign up'}
          disabled={loading}
          tabIndex="4"
          className="btn btn-black btn-subscribe btn-block"
        />
      </div>
    </form>
  );
}

export default withRouter(SignUpForm);
