import React from "react";

import LobbyInfo from "./LobbyInfo.jsx";
import Scoreboard from "./Scoreboard.jsx";

function LeftPanel() {
  return (
    <div className="bg-dark text-white d-flex flex-column align-items-center justify-content-between py-3">
      <Scoreboard />
      <LobbyInfo />
    </div>
  );
}

export default LeftPanel;
