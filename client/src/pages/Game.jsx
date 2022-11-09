import React from "react";

import DrawingBoard from "../components/DrawingBoard.jsx";
import LeftPanel from "../components/LeftPanel.jsx";

function Game() {
  return (
    <div className="d-flex flex-row gap-3">
      <LeftPanel />
      <DrawingBoard />
    </div>
  );
}

export default Game;
