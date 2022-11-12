import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { words } from './data.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const rooms = {};

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const nextTurn = (roomId) => {
  if (rooms[roomId].currentTurn >= rooms[roomId].players.length - 1) {
    rooms[roomId].currentTurn = 0;
  } else {
    rooms[roomId].currentTurn++;
  }

  rooms[roomId].currentWord = getWord();

  updateTurn(roomId);
  updatePlayers(roomId);
};

const updatePlayers = (roomId) => {
  io.to(roomId).emit('users-list-updated', rooms[roomId].users);
};

const updateTurn = (roomId) => {
  io.to(roomId).emit('turn', {
    turn: rooms[roomId].users[rooms[roomId].currentTurn].id,
    word: rooms[roomId].currentWord,
  });
};

io.on('connection', (socket) => {
  socket.on('join-room', (roomId, user, cb) => {
    if (!rooms[roomId]) {
      //create room
      rooms[roomId] = {
        users: [user],
        currentTurn: 0,
        currentWord: getWord(),
      };
    } else {
      //join room
      rooms[roomId].users.push(user);
    }

    socket.join(roomId);
    cb();
    updatePlayers(roomId);
    updateTurn(roomId);
  });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
