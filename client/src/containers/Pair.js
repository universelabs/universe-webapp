import React from 'react';
import CopyrightUpdate from 'copyright-update';
import logoWordmark from './../img/universe-wordmark.svg';

function Pair() {
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
        <div className="mt-3">Welcome to Universe</div>
      </div>
      <div className="col-md-8 offset-md-2">
        <strong className="lead font-weight-bold">
          Your Universe Feather device is not connected.
        </strong>
        <p className="mt-4">
          Please follow the setup instructions that came with your device <br />
          or{' '}
          <a
            href="/feather/instructions/returning"
            className="link-dynamic-dark"
          >
            click here
          </a>{' '}
          for instructions.
        </p>
        <div className="small font-weight-bold mt-6 mb-6">
          <CopyrightUpdate style={{ display: 'inline-block' }} /> Universe Labs
          Inc.
        </div>
      </div>
    </div>
  );
}

export default Pair;
