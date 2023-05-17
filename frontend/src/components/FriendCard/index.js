import React from "react";
import { Link } from "react-router-dom";

import styles from "./FriendCard.module.scss";

import defaultAvatar from "../../img/user_default.jpg";

export const FriendCard = ({ user }) => {

  // console.log(user);

  if (!user) {
    user = {
      username: 404,
      watchedEpisodes: null,
      following: [],
    };
  }

  return (
    <div className={styles.profile__friendContainer}>
      <div className={styles.profile__friendAvatar}>
        <Link to={`/user/${user.username}`} state={user}>
          <img src={user.avatarUrl ? user.avatarUrl : defaultAvatar} alt=" useravatar" />
        </Link>
      </div>
      <div className={styles.profile__friendInfo}>
        <Link to={`/user/${user.username}`} className={styles.profile__friendUsername}>{user.username}</Link>
        <div className={styles.profile__friendStats}>{user.watchedEpisodes?.length} episodes</div>
      </div>
    </div>
  );
};
