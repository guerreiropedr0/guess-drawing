import React, { useState, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { SocketContext } from '../context/SocketContext.jsx';

function Home() {
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const { username, roomId } = event.target.elements;

      socket.emit(
        'join-room',
        roomId.value,
        {
          name: username.value,
          id: socket.id,
          score: 0,
        },
        () => {
          navigate('/game');
        },
      );
    },
    [navigate],
  );

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            className="form-control"
            id="username"
            placeholder="Username"
            type="text"
          />
        </div>

        <div className="form-group mb-3">
          <input
            className="form-control"
            id="roomId"
            placeholder="Room ID"
            type="text"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Join Room
        </button>
      </form>
    </div>
  );
}

export default Home;
