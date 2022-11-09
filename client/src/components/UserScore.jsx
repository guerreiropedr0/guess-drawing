import React from "react";
import PropTypes from "prop-types";

const cardWidth = {
  width: "300px",
};

function UserScore({ user }) {
  return (
    <div className="card mb-3 text-dark" style={cardWidth}>
      <div className="row g-0 align-items-center">
        <div className="col-md-4">
          <img
            alt={`${user.name} avatar`}
            className="img-fluid rounded-start"
            src={user.imageSrc}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex justify-content-between align-items-center">
            <h5 className="card-title">{user.name}</h5>
            <span className="badge bg-dark">{user.points}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

UserScore.propTypes = {
  user: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserScore;
