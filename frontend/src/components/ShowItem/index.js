import React from "react";

export const ShowItem = ({title, airStatus, watchedCount, totalCount, rating}) => {
  return (
    <div className="profile__show-item">
      <a href="/" className="profile__show-thumb">
        <img
          src="img/MV5BOWFhYjE4NzMtOWJmZi00NzEyLTg5NTctYmIxMTU1ZDIxMDAyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg"
          alt="poster"
        />
      </a>
      <div className="profile__show-info">
        <div className="profile__show-details">
          <div className="profile__show-header">
            <a href="/" className="profile__show-title">
              {title}
            </a>
            <div className="profile__show-status show-dead">{airStatus}</div>
          </div>
          <div className="profile__show-rating">5 STARS</div>
        </div>
        <div className="profile__show-progress">
          <div className="profile__show-progress-label">
            <span>{watchedCount}</span> из {totalCount}
          </div>
          <div className="profile__show-progress-container">
            <div className="profile__show-progress-value" style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
