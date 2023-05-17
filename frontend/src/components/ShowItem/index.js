import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { apiUser } from "../../services/user";

import styles from "./ShowItem.module.scss";

export const ShowItem = ({ show, userId }) => {
  console.log(show);
  
  // const watchedEpisodes = useRef(0);
  const [watchedEpisodes, setWatchedEpisodes] = useState(0);
  const loadedWatchedEpisodes = useRef(false);
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  }


  switch (show.status) {
    case "Ended":
      show.status = "dead";
      break;
    default:
      show.status = "dead";
      break;
  }

  const getWatchedEpisodes = async () => {
    const eps = await apiUser.getWatchedEpisodes(userId, show._id);
    setWatchedEpisodes(eps);
    loadedWatchedEpisodes.current = true;
    console.log(watchedEpisodes.current);
  };

  useEffect(() => {
    console.log(loadedWatchedEpisodes.current);
    if (!loadedWatchedEpisodes.current) getWatchedEpisodes();
  }, [loadedWatchedEpisodes.current]);

  return (
    <div className={styles.profile__showItem}>
      <Link to={`/show/${show.thetvdb}`} className={styles.profile__showThumb}>
        <img src={show.image.medium} alt={show ? `${show.title} poster` : "poster"} />
      </Link>
      <div className={styles.profile__showInfo}>
        <div className={styles.profile__showDetails}>
          <div className={styles.profile__showHeader}>
            <Link to={`/show/${show.thetvdb}`} className={styles.profile__showTitle}>
              {show ? show.title : "ERROR"}
            </Link>
            <div className={`${styles.profile__showStatus} ${styles.showDead}`}>{show ? show.status : "dead"}</div>
          </div>
          <div className={styles.profile__showRating}>
            <Rating onClick={handleRating} fillColor="#ff0f0f" allowFraction={true} size={25}/>
          </div>
        </div>
        <div className={styles.profile__showProgress}>
          <div className={styles.profile__showProgressLabel}>
            <span>{show ? watchedEpisodes.length : 0}</span> из {show ? show.episodes.length : 0}
          </div>
          <div className={styles.profile__showProgressContainer}>
            <div
              className={styles.profile__showProgressValue}
              style={{ width: `${(watchedEpisodes.length / show.episodes.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
