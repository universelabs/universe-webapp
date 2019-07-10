import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'redux-react-hook';
import * as actions from '../constants/actions';
import useForm from '../hooks/useForm';

function LogInForm({ history }) {
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();
  const { values, handleChange, handleSubmit } = useForm(
    { email: '', password: ''},
    postLogIn
  );

  async function postLogIn() {
    try {
      setLoading(true);

      const { data } = await axios.post(
        `${process.env.REACT_APP_EXPRESS_SERVER}/login`,
        values
      );
      
      const res = await data;

      if (res.error) {
        console.error(res.error);
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
          value={loading ? 'Logging in…' : 'Log In'}
          disabled={loading}
          tabIndex="4"
          className="btn btn-black btn-subscribe btn-block"
        />
      </div>
    </form>
  );
}

export default withRouter(LogInForm);
