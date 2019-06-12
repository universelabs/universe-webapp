import React, { Component } from 'react';
import SignUp from './containers/SignUp';
import SignUpError from './containers/SignUpError';
import SignUpSuccess from './containers/SignUpSuccess';
import LogIn from './containers/LogIn';
import LogInError from './containers/LogInError';
import LogInSuccess from './containers/LogInSuccess';
import Dashboard from './containers/Dashboard';
import Contact from './containers/Contact';
import Help from './containers/Help';
import NoMatch from './containers/NoMatch';
import Subscribe from './containers/Subscribe';
import SubscribeError from './containers/SubscribeError';
import SubscribeSuccess from './containers/SubscribeSuccess';
import MailerError from './containers/MailerError';
import MailerSuccess from './containers/MailerSuccess';
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
            <Route path="/" component={Dashboard} />
            <Route path="/contact" component={Contact} />
            <Route path="/help" component={Help} />
            <Route path="/subscribe" component={Subscribe} />
            <Route path="/subscribe-error" component={SubscribeError} />
            <Route path="/subscribe-success" component={SubscribeSuccess} />
            <Route path="/email-error" component={MailerError} />
            <Route path="/email-success" component={MailerSuccess} />
            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
