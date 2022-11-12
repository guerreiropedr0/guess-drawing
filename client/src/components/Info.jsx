import React, { useCallback, useState } from "react";

function Info() {
  const [showRoomId, setShowRoomId] = useState(false);
  const roomId = "HELLO";

  const handleClick = useCallback(() => {
    setShowRoomId(!showRoomId);
  }, [showRoomId]);

  return (
    <div className="d-flex flex-column gap-1">
      <label className="form-label h2 text-center" htmlFor="room_id">
        ROOM ID
        <div className="input-group">
          <input
            aria-describedby="show_room_id"
            aria-label="show_room_id"
            className="form-control"
            id="room_id"
            readOnly
            type={showRoomId ? "text" : "password"}
            value={roomId}
          />
          <button
            className="input-group-text"
            id="show_room_id"
            onClick={handleClick}
            type="button"
          >
            <i className={`bi ${showRoomId ? "bi-eye-slash" : "bi-eye"}`} />
          </button>
        </div>
      </label>
    </div>
  );
}

export default Info;
