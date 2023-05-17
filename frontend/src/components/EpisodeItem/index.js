import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { ReactSVG } from "react-svg";
import { apiUser } from "../../services/user";

import styles from "./EpisodeItem.module.scss";

import check from "../../img/check.svg";

export const EpisodeItem = ({ episode }) => {
  const [rating, setRating] = useState(0);
  const [isFavorite, setFavorite] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const toggleCheck = async () => {
    if (isChecked) {
      const resp = await apiUser.uncheckEpisode(episode._id);
      if (resp?.success) {
        setIsChecked(!isChecked);
      }
    } else {
      const resp = await apiUser.checkEpisode(episode._id);
      if (resp?.success) {
        setIsChecked(!isChecked);
      }
    }
  };

  const date = new Date(episode.airdate);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("ru-RU", options);

  episode["fullNumber"] = `${episode.season}x${episode.number}`;

  return (
    <li className={styles.episode}>
      <div className={styles.episode__wrapper}>
        <div className={styles.episode__number}>{episode.fullNumber}</div>
        <div className={styles.episode__info}>
          <Link to={episode.fullNumber} className={styles.episode__title}>
            {episode.name}
          </Link>
          <div className={styles.episode__date}>{formattedDate}</div>
        </div>
        <Rating
          onClick={handleRating}
          fillColor="#ff0f0f"
          allowFraction={true}
          size={23}
          style={{ display: "flex", alignItems: "center" }}
        />
        <div className={styles.episode__fav}>
          <button>
            <img src="img/heart-svgrepo-com.svg" alt="favorite" />
          </button>
        </div>
        <div className={styles.episode__checkbox}>
          <button className={`${styles.episodeCheck} ${isChecked ? styles.active : ""}`} onClick={toggleCheck}>
            {isChecked ? <ReactSVG src={check} alt="check mark" /> : null}
          </button>
        </div>
      </div>
    </li>
  );
};
