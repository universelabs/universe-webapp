import React from 'react';
import styled from 'styled-components';
import NavbarTogglerLight from '../components/NavbarTogglerLight';
import logoWordmarkDark from './../img/universe-wordmark.svg';

const Nav = styled.nav`
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;

  @media (min-width: 768px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Div = styled.div`
  height: 45px;
`;

function NavbarLight({ style, colorScheme }) {
  return (
    <Nav className={`navbar navbar-expand-md ${colorScheme}`} style={style}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logoWordmarkDark}
            className="navbar-brand-img"
            alt="Universe Logo"
          />
        </a>
        <NavbarTogglerLight
          className="
            d-flex 
            align-items-right 
            navbar-toggler-dark"
        />
        <div className="collapse navbar-collapse" id="navbarBasicLight">
          <Div
            className="
              container 
              d-flex 
              align-items-center 
              justify-content-center 
              d-md-none"
          >
            <a
              className="
                navbar-brand 
                d-flex 
                align-items-center 
                justify-content-center"
              href="/"
              style={{
                marginRight: 0
              }}
            >
              <img
                src={logoWordmarkDark}
                className="navbar-brand-img"
                alt="Universe Logo"
              />
            </a>
          </Div>
          <ul className="navbar-nav ml-auto">
            {/*
            <li className="nav-item">
              <a className="nav-link text-black" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="/help">
                Help
              </a>
            </li> */}
            <li className="nav-item">
              <a
                className="nav-link text-black"
                href="https://universe.engineering"
              >
                Log out
              </a>
            </li>
            <li className="nav-item d-md-none">
              <a
                className="
                  btn 
                  btn-sm 
                  btn-outline-black 
                  rounded-pill 
                  nav-button"
                href="/subscribe"
              >
                Subscribe
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
}

export default NavbarLight;
