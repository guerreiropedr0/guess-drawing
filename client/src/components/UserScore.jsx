import React from 'react';
import PropTypes from 'prop-types';

const cardWidth = {
  width: '300px',
};

function UserScore({ user, active, me }) {
  return (
    <div
      className={`card mb-3 text-dark ${
        active ? 'border border-4 border-success' : ''
      } ${me ? 'opacity-100' : 'opacity-75'}`}
      style={cardWidth}>
      <div className="row g-0 align-items-center">
        <div className="col-md-4">
          <img
            alt={`${user.name} avatar`}
            className="img-fluid rounded-start"
            src={`https://avatars.dicebear.com/api/bottts/${user.id}.svg`}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex justify-content-between align-items-center">
            <h5 className="card-title">{user.name}</h5>
            <span className="badge bg-dark">{user.score}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

UserScore.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserScore;
