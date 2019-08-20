/**
 * A hook to check whether feather bluetooth device is connected
 */

import { useState } from 'react';

const useBTConnected = () => {
  const [isConnected, setIsConnected] = useState(null);

  if (!isConnected) {
    // Handle connection here
    // setIsConnected(true);
  }

  return isConnected;
};

export default useBTConnected;
