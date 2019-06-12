import React, { Component } from 'react';
import styled from 'styled-components';
import LogInModal from '../components/LogInModal';

const Background = styled.div`
  background-color: #fff;

  @media (min-width: 768px) {
    background-color: #fafafa;
  }
`;

// Using a ES6 class component as it contains state.
class LogIn extends Component {
  componentDidMount() {
    document.title = 'Log in';
  }

  render() {
    return (
      <Background
        className="
          d-flex 
          mx-auto 
          flex-column 
        "
        style={{
          minHeight: '100vh'
        }}
      >
        <LogInModal />
      </Background>
    );
  }
}

export default LogIn;