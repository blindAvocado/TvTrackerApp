import React from "react";

export const FriendCard = ({username, epsCount}) => {
  return (
    <div className="profile__friend-container">
      <div className="profile__friend-avatar">
        <img src="img/Kirk.webp" alt="avatar" />
      </div>
      <div className="profile__friend-info">
        <div className="profile__friend-username">{username}</div>
        <div className="profile__friend-stats">{epsCount} episodes</div>
      </div>
    </div>
  );
};
