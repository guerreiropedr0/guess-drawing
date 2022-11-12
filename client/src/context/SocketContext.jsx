import { io } from 'socket.io-client';
import React from 'react';
const socket = io('/');

const SocketContext = React.createContext();

const SocketProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [word, setWord] = React.useState(null);
  const [turn, setTurn] = React.useState(false);

  React.useEffect(() => {
    socket.on('turn', (obj) => {
      setWord(obj.word);
      setTurn(obj.turn);
    });
  }, []);

  return (
    <SocketContext.Provider value={{ socket, user, word, turn }}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
