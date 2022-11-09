import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [isHost, setIsHost] = useState(false);

  const handleHost = useCallback(
    (boolean) => () => {
      setIsHost(boolean);
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      navigate("/game");
    },
    [navigate]
  );

  return (
    <div className="container mt-3">
      <div className="d-flex gap-3 mb-3">
        <button
          className={isHost ? "btn btn-primary" : "btn btn-secondary"}
          onClick={handleHost(true)}
          type="button"
        >
          HOST
        </button>
        <button
          className={isHost ? "btn btn-secondary" : "btn btn-primary"}
          onClick={handleHost(false)}
          type="button"
        >
          JOIN
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            className="form-control"
            id="username"
            placeholder="Username"
            type="text"
          />
        </div>

        {!isHost && (
          <div className="form-group mb-3">
            <input
              className="form-control"
              id="room_id"
              placeholder="Room ID"
              type="text"
            />
          </div>
        )}
        <button className="btn btn-primary" type="submit">
          {isHost ? "Create" : "Join"} Room
        </button>
      </form>
    </div>
  );
}

export default Home;
