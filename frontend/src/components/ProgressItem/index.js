import React from "react";
import "./style.scss";

export const ProgressItem = ({num, title, value}) => {
  return (
    <div className="profile__stats-progress">
      <div className="profile__progress-label">{num} {title}</div>
      <div className="profile__progress-container">
        <div className="profile__progress-value" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};
