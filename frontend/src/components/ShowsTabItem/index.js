import React from "react";

export const ShowsTabList = ({counter, label, isActive}) => {
  return (
    <div className="profile__tab">
      <div className="profile__tab-wrapper">
        <div className="profile__tab-counter">{counter}</div>
        <div className="profile__tab-label">{label}</div>
      </div>
    </div>
  );
};
