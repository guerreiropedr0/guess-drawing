import React, { useEffect, useRef, useState } from 'react';
import Drawing, { brushArc } from 'react-drawing';

export default function DrawingBoard() {
  const [canvas, setCanvas] = useState({ width: 500, height: 500 });

  const canvasWrap = useRef();

  window.addEventListener('resize', () => {
    setCanvas({
      width: canvasWrap.current?.getClientRects()[0].width,
      height: canvasWrap.current?.getClientRects()[0].height,
    });
  });

  useEffect(() => {
    setCanvas({
      width: canvasWrap.current?.getClientRects()[0].width,
      height: canvasWrap.current?.getClientRects()[0].height,
    });
  }, [canvasWrap]);

  return (
    <div ref={canvasWrap} className='vh-100 my-3 border'>
      <Drawing
        width={canvas.width}
        height={canvas.height}
        brush={brushArc({ fillStyle: 'black', size: 5 })}
      />
    </div>

  )
}
