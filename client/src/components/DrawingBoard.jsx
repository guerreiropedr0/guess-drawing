import React, { useContext } from 'react';
import { ReactPainter } from 'react-painter';

import { SocketContext } from '../context/SocketContext';

const HALF = 2;

const HALF_WINDOW_LENGTH = {
  height: window.innerHeight / HALF,
  width: window.innerWidth / HALF,
};

function DrawingBoard() {
  const { word, turn, socket } = useContext(SocketContext);
  return (
    <div className="border">
      {turn === socket.id && <h2 className="my-2">{word}</h2>}
      <ReactPainter
        height={HALF_WINDOW_LENGTH.height}
        width={HALF_WINDOW_LENGTH.width}
      />
    </div>
  );
}

export default DrawingBoard;
