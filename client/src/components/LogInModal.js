import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import LogInForm from '../components/LogInForm';
import logoWordmark from './../img/universe-wordmark.svg';

class LogInModal extends Component {
  render() {
    return (
      <div className="container-fluid pl-0 pr-0 mb-11">
        <div
          className="
            container-fluid 
            text-center 
            mx-auto 
            d-none 
            d-md-block 
            mb-4c
          ">
          <a
            href="/"
            className="
              d-block 
              mt-5 
              mb-3
            ">
            <img
              className="brand-img"
              src={logoWordmark}
              alt="Universe Labs Logo"
            />
          </a>
          <div className="text-center">
            <div
              className="
                font-weight-bold 
                mb-1
              ">
              Simple key & key asset management
            </div>
          </div>
        </div>
        <div
          className="
            container-fluid 
            d-flex 
            align-items-center 
            justify-content-center
            pl-0 pr-0
          ">
          <div
            className="card col-md-8 rounded"
            style={{
              maxWidth: '500px'
            }}>
            <div className="card-body">
              <div className="text-center mb-4">
                <a
                  href="/"
                  className="
                    d-block 
                    d-md-none 
                    mb-4 
                    mt-4
                  ">
                  <img
                    className="brand-img"
                    src={logoWordmark}
                    alt="Universe Labs Logo"
                  />
                </a>
                <div>
                  <div
                    className="
                      font-weight-bold 
                      mb-4c 
                      d-md-none
                    ">
                    Simple key & key asset management
                  </div>
                  <div
                    className="
                      lead 
                      text-center 
                      mb-4c 
                      mt-md-1 
                      mb-md-4c"
                    style={{
                      fontWeight: '800'
                    }}>
                    Log in
                  </div>
                </div>
              </div>
              <LogInForm />
              <div className="text-center mt-6 mb-6">
                <p>Don't have an account?<br />
                  <a className="font-weight-bold" href="/signup">
                    Sign up
                  </a>
                </p>
              </div>
              <div className="text-center small font-weight-bold mb-4">
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
}

export default LogInModal;
