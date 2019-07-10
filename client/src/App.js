import React, { useCallback } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useMappedState } from 'redux-react-hook';
import useWithAuthenticate from './hooks/useWithAuthenticate';
import SignUp from './containers/SignUp';
import SignUpError from './containers/SignUpError';
import SignUpSuccess from './containers/SignUpSuccess';
import LogIn from './containers/LogIn';
import LogInError from './containers/LogInError';
import LogInSuccess from './containers/LogInSuccess';
import Dashboard from './containers/Dashboard';
import NoMatch from './containers/NoMatch';
import './css/App.css';

function App() {
  useWithAuthenticate();

  const mapState = useCallback(state => {
    return {
      loading: state.sessionState.loading
    };
  }, []);

  const { loading } = useMappedState(mapState);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <h6>Loading…</h6>
      </div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signup-error" component={SignUpError} />
          <Route path="/signup-success" component={SignUpSuccess} />
          <Route path="/login" component={LogIn} />
          <Route path="/login-error" component={LogInError} />
          <Route path="/login-success" component={LogInSuccess} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          {/* when none of the above match, <NoMatch> will be rendered */}
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
