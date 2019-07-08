import React from 'react';
import SignUp from './containers/SignUp';
import SignUpError from './containers/SignUpError';
import SignUpSuccess from './containers/SignUpSuccess';
import LogIn from './containers/LogIn';
import LogInError from './containers/LogInError';
import LogInSuccess from './containers/LogInSuccess';
import Dashboard from './containers/Dashboard';
import NoMatch from './containers/NoMatch';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './css/App.css';

function App() {
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
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/">
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
