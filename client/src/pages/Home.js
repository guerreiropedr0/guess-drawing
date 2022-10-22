import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [isHost, setIsHost] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/game');
  }

  return (
    <div className='container mt-3'>
      <div className='d-flex gap-3 mb-3'>
        <button className={isHost ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setIsHost(true)}>HOST</button>
        <button className={!isHost ? 'btn btn-primary' : 'btn btn-secondary'} onClick={() => setIsHost(false)}>JOIN</button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input id="username" className="form-control" type="text" placeholder='Username' />
        </div>

        {!isHost &&
        <div className="form-group mb-3">
          <input id="room_id" className="form-control" type="text" placeholder='Room ID' />
        </div>
        }
        <button type="submit" className="btn btn-primary">{isHost ? 'Create' : 'Join'} Room</button>
      </form>

    </div>
  )
}
