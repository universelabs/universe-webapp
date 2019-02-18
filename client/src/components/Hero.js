import React, { Component } from 'react';
import styled from 'styled-components';
import Background from './../img/hero-background.png';


const Overlay = styled.div`
  background: url(${Background});
  background-size: cover;
  background-position: center;
  height: 565px;

  @media (min-width: 768px) {
    height: 725px;
  }
`;

const Lead = styled.p`
  font-size: 1.15rem;
  max-width: 550px;

  @media (min-width: 576px) {
    font-size: 1.25rem;
  }
`;

class Header extends Component {
  render() {
    return (
      <div className="container-fluid pl-0 pr-0 hero"
        style={{
          marginTop: '-65px'
        }}>
        <div className="row no-gutters">
          <Overlay 
            className="
              container-fluid 
              d-flex 
              align-items-center 
              justify-content-center 
              text-white 
              p-4">
            <div className="container"
              style={{
                maxWidth: '900px'
              }}>
              <div className="lead-md font-weight-normal text-center mx-auto mb-6">
                Coming soon...
              </div>
              <h1 className="text-center">
                Decentralized Web Accessibility
              </h1>
              <Lead className="lead font-weight-normal text-center mx-auto mb-5">
                Universe helps users access the decentralized web.
              </Lead>
              <div className="text-center">
                <a
                  className="btn btn-lg btn-primary btn-block mx-auto mb-4c"
                  style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    letterSpacing: '.03em',
                    textTransform: 'uppercase',
                    padding: '15px 56px',
                    maxWidth: '280px'
                  }}
                  href="/subscribe" 
                  role="button"
                  tabIndex="1">
                  Subscribe
                </a>
                <p>Subscribe to our mailing list for updates.</p>
              </div>
            </div>
          </Overlay>
        </div>
      </div>
    );
  }
}

export default Header;
