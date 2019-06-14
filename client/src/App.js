import React, { Component } from 'react';
import SignUp from './containers/SignUp';
import SignUpError from './containers/SignUpError';
import SignUpSuccess from './containers/SignUpSuccess';
import LogIn from './containers/LogIn';
import LogInError from './containers/LogInError';
import LogInSuccess from './containers/LogInSuccess';
import Dashboard from './containers/Dashboard';
import NoMatch from './containers/NoMatch';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch('/');
  }
  componentDidMount() {
    this.connecToServer();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/sign-up" component={SignUp} />
            <Route path="/signup-error" component={SignUpError} />
            <Route path="/signup-success" component={SignUpSuccess} />
            <Route path="/log-in" component={LogIn} />
            <Route path="/login-error" component={LogInError} />
            <Route path="/login-success" component={LogInSuccess} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={SignUp} />
            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
