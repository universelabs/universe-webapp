import React from 'react';
import CopyrightUpdate from 'copyright-update';
import logoWordmark from './../img/universe-wordmark.svg';
import LogInForm from '../components/LogInForm';
import SignUpForm from '../components/SignUpForm';

function FeatherConnected({ match }) {
  const { user } = match.params;

  return (
    <div className="container-fluid text-center">
      <div className="mt-5 mb-5">
        <a href="/">
          <img
            className="brand-img"
            src={logoWordmark}
            alt="Universe Labs Logo"
          />
        </a>
        <div className="mt-3">Universe Feather device connected</div>
      </div>
      <div className="col-md-4 offset-md-4">
        {user && user === 'new' && (
          <>
            <p>
              Your Universe Feather device is now connected. Please sign up for
              Universe.
            </p>
            <SignUpForm />
          </>
        )}
        {user && user === 'returning' && (
          <>
            <p>
              Your Universe Feather device is now connected. Please confirm your
              Universe Feather device by logging in to your account.
            </p>
            <LogInForm />
          </>
        )}
      </div>
      <div className="small font-weight-bold mt-6 mb-6">
        <CopyrightUpdate style={{ display: 'inline-block' }} /> Universe Labs
        Inc.
      </div>
    </div>
  );
}

export default FeatherConnected;
