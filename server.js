import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const rooms = {};

io.on('connection', (socket) => {
  socket.on('join-room', (roomId, user, cb) => {
    if (!rooms[roomId]) {
      //create room
      rooms[roomId] = {
        users: [user],
        currentTurn: null,
        currentWord: null,
      };
    } else {
      //join room
      rooms[roomId].users.push(user);
    }

    socket.join(roomId);
    cb();
    io.to(roomId).emit('users-list-updated', rooms[roomId].users);
  });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
