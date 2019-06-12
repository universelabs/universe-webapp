import React, { useEffect } from 'react';
import styled from 'styled-components';
import SignUpModal from '../components/SignUpModal';

const Background = styled.div`
  background-color: #fff;

  @media (min-width: 768px) {
    background-color: #fafafa;
  }
`;

function SignUp() {
  useEffect(() => {
    document.title = 'Sign up';
  });

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

export default SignUp;
