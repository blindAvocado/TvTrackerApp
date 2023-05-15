import React from "react";

import styles from "./FriendCard.module.scss";

export const FriendCard = ({ username, epsCount }) => {
  return (
    <div className={styles.profile__friendContainer}>
      <div className={styles.profile__friendAvatar}>
        <img src="img/Kirk.webp" alt="avatar" />
      </div>
      <div className={styles.profile__friendInfo}>
        <div className={styles.profile__friendUsername}>{username}</div>
        <div className={styles.profile__friendStats}>{epsCount} episodes</div>
      </div>
    </div>
  );
};
