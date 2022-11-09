import React from "react";
import { ReactPainter } from "react-painter";

const HALF = 2;

const HALF_WINDOW_LENGTH = {
  height: window.innerHeight / HALF,
  width: window.innerWidth / HALF,
};

function DrawingBoard() {
  return (
    <div className="border">
      <ReactPainter
        height={HALF_WINDOW_LENGTH.height}
        width={HALF_WINDOW_LENGTH.width}
      />
    </div>
  );
}

export default DrawingBoard;
