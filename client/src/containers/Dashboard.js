import React, { useEffect } from 'react';
import NavbarLight from '../components/NavbarLight';
import KeyList from '../components/KeyList';
import Alert from '../components/Alert';

function Dashboard() {
  useEffect(() => {
    document.title = 'Keys';
  });

  return (
    <div
      className="
          d-flex 
          w-100 
          h-100 
          mx-auto 
          flex-column"
      style={{
        backgroundColor: '#FAFAFA'
      }}
    >
      <Alert
        size=""
        color="alert-danger"
        className="text-center font-weight-bold"
        style={{
          marginBottom: 0
        }}
      >
        <span
          style={{
            fontWeight: '900'
          }}
        >
          WARNING:
        </span>
        Product in Alpha -
        <span
          style={{
            fontWeight: '900'
          }}
        >
          DO NOT
        </span>{' '}
        store more than
        <span
          style={{
            fontWeight: '900'
          }}
        >
          $10
        </span>{' '}
        on your keys.
      </Alert>
      <NavbarLight
        colorScheme="
            navbar-light 
            bg-light 
            bg-white"
      />
      <div
        style={{
          marginLeft: '6px',
          marginRight: '6px'
        }}
      >
        <div
          className="
              container 
              text-left 
              mb-8 pb-8"
        >
          <h4
            className="mt-5 mt-md-7 mb-3 mb-md-4"
            style={{
              fontWeight: '900'
            }}
          >
            Your Keys
          </h4>
          <div className="list-group">
            <KeyList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
