import React from 'react';
import CopyrightUpdate from 'copyright-update';
import logoWordmark from './../img/universe-wordmark.svg';

function SignUpSuccess() {
  return (
    <div className="container-fluid pl-0 pr-0">
      <div
        className="
            container-fluid 
            d-flex 
            align-items-center 
            justify-content-center
            pl-0 pr-0
          "
      >
        <div className="card col-md-8 mt-4c mt-md-6">
          <div className="card-body">
            <div className="text-center mb-4">
              <a href="/" className="d-block mb-4 mb-md-4b">
                <img
                  className="brand-img"
                  src={logoWordmark}
                  alt="Universe Labs Logo"
                />
              </a>
              <p className="lead-md font-weight-bold">
                You registered successfully
              </p>
              <p className="mb-4b">Go to dashboard to see your saved data</p>
              <a
                className="btn btn-secondary btn-subscribe mx-auto"
                href="/dashboard"
                role="button"
                tabIndex="1"
              >
                Go to dashboard
              </a>
            </div>
            <div className="text-center small mt-9 mb-4">
              <CopyrightUpdate
                style={{
                  display: 'inline-block'
                }}
              />
              &nbsp;Universe Labs Inc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpSuccess;
