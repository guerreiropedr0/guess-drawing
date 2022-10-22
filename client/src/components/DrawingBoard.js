import React, { useEffect, useRef, useState } from 'react';
import Drawing, { brushArc } from 'react-drawing';

export default function DrawingBoard() {
  const [canvas, setCanvas] = useState({ width: null, height: null });

  const canvasWrap = useRef();
  console.log('rendering DrawingBoard');

  const reziseCanvas = () => {
    console.log('reziseCanvas');
    setCanvas({
      width: canvasWrap.current?.getClientRects()[0].width,
      height: canvasWrap.current?.getClientRects()[0].height,
    });
  };

  useEffect(() => {
    console.log('canvas');
    if (!canvas.width && canvasWrap.current) {
      reziseCanvas();
    }
    window.addEventListener('resize', reziseCanvas);

    return () => {
      window.removeEventListener('resize', reziseCanvas);
    };
  }, [canvasWrap]);

  return (
    <div ref={canvasWrap} className="vh-100 my-3 border">
      <Drawing
        width={canvas.width}
        height={canvas.height}
        brush={brushArc({ fillStyle: 'black', size: 5 })}
      />
    </div>
  );
}
