import UserScore from './UserScore.jsx';

import { SocketContext } from '../context/SocketContext.jsx';
import { useEffect, useContext, useState } from 'react';

function Scoreboard() {
  const { socket, turn } = useContext(SocketContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('users-list-updated', (users) => {
      setUsers(users);
    });
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center gap-3">
      <h1>SCOREBOARD</h1>
      {users.map((user) => (
        <UserScore
          key={user.id}
          user={user}
          active={turn === user.id}
          me={socket.id === user.id}
        />
      ))}
    </div>
  );
}

export default Scoreboard;
