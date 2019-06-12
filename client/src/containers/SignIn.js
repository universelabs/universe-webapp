import React, { Component } from 'react';
import styled from 'styled-components';
import SignInModal from '../components/SignInModal';

const Background = styled.div`
  background-color: #fff;

  @media (min-width: 768px) {
    background-color: #fafafa;
  }
`;

// Using a ES6 class component as it contains state.
class SignIn extends Component {
  componentDidMount() {
    document.title = 'Sign in';
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
        <SignInModal />
      </Background>
    );
  }
}

export default SignIn;