import React from 'react';
import CopyrightUpdate from 'copyright-update';
import logoWordmark from './../img/universe-wordmark.svg';

function FeatherInstructions({ match }) {
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
        <div className="mt-3">Connect your Universe Feather to your laptop</div>
      </div>
      <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-left">
        <ol>
          <li>Turn on device</li>
          <li>Press the button to turn on Universe Feather device</li>
          <li>Connect device</li>
          <li>Go to your Bluetooth setting and choose Feather Device</li>
          {user && user === 'new' && <li>Sign up</li>}
          {user && user === 'returning' && <li>Confirm device</li>}
          <li>Go back to your web browser and sign up for Universe</li>
        </ol>
      </div>
      <div className="small font-weight-bold mt-6 mb-6">
        <CopyrightUpdate style={{ display: 'inline-block' }} /> Universe Labs
        Inc.
      </div>
    </div>
  );
}

export default FeatherInstructions;
