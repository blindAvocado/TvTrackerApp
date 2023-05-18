import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { apiUser } from "../../services/user";

import styles from "./ShowItem.module.scss";

export const ShowItem = ({ show, userId }) => {
  // const watchedEpisodes = useRef(0);
  const [watchedEpisodes, setWatchedEpisodes] = useState(0);
  const loadedWatchedEpisodes = useRef(false);
  const loadedUserRating = useRef(false);
  const rating = useRef(0);

  console.log(show);

  const handleRating = async (rate) => {
    rating.current = rate;
    const obj = { rating: rate * 2 };
    const resp = await apiUser.rateShow(show._id, obj);
    // console.log(resp);
    if (resp && resp.stats === "success") {
      rating.current = rate * 2;
    }
  };

  const getlabelStyleClass = () => {
    switch (show.status) {
      case "Running":
        return styles.showOnAir;
      case "Ended":
        return styles.showDead;
      default:
        return styles.showDead;
    }
  };

  const getWatchedEpisodes = async () => {
    const eps = await apiUser.getWatchedEpisodes(userId, show._id);
    setWatchedEpisodes(eps);
    loadedWatchedEpisodes.current = true;
    console.log(watchedEpisodes.current);
  };

  const getUserRating = async () => {
    const resp = await apiUser.getWatchedShow(userId, show._id);
    console.log(resp);
    if (resp && resp.status === "success") {
      rating.current = resp.data.rating / 2;
      loadedUserRating.current = true;
      console.log(rating.current);
    }
  };

  useEffect(() => {
    switch (show.status) {
      case "Ended":
        show.status = "dead";
        break;
      case "Running":
        show.status = "on air";
        break;
      default:
        show.status = "dead";
        break;
    }

    if (!loadedWatchedEpisodes.current) {
      getWatchedEpisodes();
    }
  }, [loadedWatchedEpisodes.current]);

  useEffect(() => {
    switch (show.status) {
      case "Ended":
        show.status = "dead";
        break;
      case "Running":
        show.status = "on air";
        break;
      default:
        show.status = "dead";
        break;
    }

    if (!loadedUserRating.current) {
      getUserRating();
    }
  }, [rating.current]);

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
            <div className={`${styles.showLabel} ${getlabelStyleClass()}`}></div>
          </div>
          <div className={styles.profile__showRating}>
            <Rating
              onClick={handleRating}
              fillColor="#ff0f0f"
              allowFraction={true}
              size={25}
              initialValue={rating.current}
            />
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
