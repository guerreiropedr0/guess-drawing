import React, { useCallback, useState } from "react";

function Info() {
  const [showRoomId, setShowRoomId] = useState(false);
  const roomId = "HELLO";

  const handleShowRoomId = useCallback(({ target }) => {
    if (target.checked) {
      setShowRoomId(true);
    } else {
      setShowRoomId(false);
    }
  }, []);

  return (
    <div className="d-flex flex-column">
      <label className="form-label h2 text-center" htmlFor="room_id">
        ROOM ID
        <input
          className="form-control"
          id="room_id"
          readOnly
          type={showRoomId ? "text" : "password"}
          value={roomId}
        />
      </label>
      <div className="mb-3 form-check">
        <label className="form-check-label" htmlFor="show_room_id">
          <input
            className="form-check-input"
            id="show_room_id"
            onChange={handleShowRoomId}
            type="checkbox"
          />
          Show Room ID
        </label>
      </div>
    </div>
  );
}

export default Info;
