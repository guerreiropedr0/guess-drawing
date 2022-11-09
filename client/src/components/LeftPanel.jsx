import React from "react";

import Info from "./Info.jsx";
import Scoreboard from "./Scoreboard.jsx";

function LeftPanel() {
  return (
    <div className="bg-dark text-white d-flex flex-column align-items-center justify-content-between py-3">
      <Scoreboard />
      <Info />
    </div>
  );
}

export default LeftPanel;
