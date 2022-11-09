import React from "react";

import users from "../randomUsers.js";

import UserScore from "./UserScore.jsx";

function Scoreboard() {
  return (
    <div className="container d-flex flex-column align-items-center gap-3">
      <h1>SCOREBOARD</h1>
      {users.map((user) => (
        <UserScore key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Scoreboard;
