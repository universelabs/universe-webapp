import React, { Component } from 'react';
import styled from 'styled-components';
import SignUpModal from '../components/SignUpModal';

const Background = styled.div`
  background-color: #fff;

  @media (min-width: 768px) {
    background-color: #fafafa;
  }
`;

// Using a ES6 class component as it contains state.
class SignUp extends Component {
  componentDidMount() {
    document.title = 'Sign up';
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
        <SignUpModal />
      </Background>
    );
  }
}

export default SignUp;