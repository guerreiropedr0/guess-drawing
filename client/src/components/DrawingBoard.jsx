import React, { useState, useEffect } from "react";
import Drawing from "react-drawing";

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;

export default function DrawingBoard() {
  const [canvas, setCanvas] = useState({
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  });

  function handleResize() {
    return setCanvas({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="vh-100 my-3 border">
      <Drawing height={canvas.height} width={canvas.width} />
    </div>
  );
}
