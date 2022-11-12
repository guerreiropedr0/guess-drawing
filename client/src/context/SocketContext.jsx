import { io } from 'socket.io-client';
import React from 'react';
const socket = io('/');

const SocketContext = React.createContext();

const SocketProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <SocketContext.Provider value={{ socket, user }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
