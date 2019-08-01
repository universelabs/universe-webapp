import React from 'react';

function FeatherInstructions({ match }) {
  const { user } = match.params;

  return (
    <div>
      <div>[Universe] + [Bluetooth]</div>
      <h3>Connect your Universe Feather to your laptop</h3>
      <ul>
        <li>Turn on device</li>
        <li>Press the button to turn on Universe Feather device</li>
        <li>Connect device</li>
        <li>Go to your Bluetooth setting and choose Feather Device</li>
        {user && user === 'new' && <li>Sign up</li>}
        {user && user === 'returning' && <li>Confirm device</li>}
        <li>Go back to your web browser and sign up for Universe</li>
      </ul>
    </div>
  );
}

export default FeatherInstructions;
