import { useEffect } from 'react';
import { useDispatch } from 'redux-react-hook';
import axios from 'axios';
import * as actions from '../constants/actions';

async function authenticate(dispatch) {
  const token = localStorage.getItem('token');

  if (!!token) {
    const { data } = await axios.post(
      `${process.env.REACT_APP_EXPRESS_SERVER}/verify`,
      { token }
    );
    const res = await data;

    if (res.user) {
      dispatch({
        type: actions.SET_AUTH_USER,
        authUser: {
          email: res.user
        }
      });
    }

    if (res.error) {
      dispatch({ type: actions.SET_AUTH_USER, authUser: null });
      localStorage.removeItem('token');
    }
  } else {
    dispatch({ type: actions.SET_AUTH_USER, authUser: null });
  }
}

function useWithAuthenticate() {
  const dispatch = useDispatch();

  useEffect(() => {
    authenticate(dispatch);
  });
}

export default useWithAuthenticate;
