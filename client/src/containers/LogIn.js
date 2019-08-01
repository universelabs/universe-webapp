import React, { useEffect } from 'react';
import styled from 'styled-components';
import LogInModal from '../components/LogInModal';

const Background = styled.div`
  background-color: #fff;

  @media (min-width: 768px) {
    background-color: #fafafa;
  }
`;

function LogIn() {
  useEffect(() => {
    document.title = 'Log in – Universe';
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
      <LogInModal />
    </Background>
  );
}

export default LogIn;
