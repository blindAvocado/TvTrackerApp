import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { ReactSVG } from "react-svg";

import styles from "./EpisodeItem.module.scss";

import check from "../../img/check.svg";

export const EpisodeItem = ({ episode, rating, checked, onRatingChange, onEpisodeCheck }) => {
  const [localRating, setLocalRating] = useState(rating);
  const [localChecked, setLocalChecked] = useState(checked);

  const handleRating = async (rate) => {
    console.log(localRating);
    console.log(rate);
    setLocalRating(rate);
    onRatingChange(rate * 2, episode._id);
  };

  const handleEpisodeCheck = async () => {
    console.log(localChecked);
    const tempChecked = !localChecked;
    if (tempChecked === false) {
      setLocalRating(0);
    }
    setLocalChecked(tempChecked);
    onEpisodeCheck(episode._id, tempChecked);
  };

  useEffect(() => {
    if (rating !== null && rating !== undefined) {
      setLocalRating(rating / 2);
    }
  }, [rating]);

  useEffect(() => {
    if (checked !== null && checked !== undefined) {
      setLocalChecked(checked);
    }
  }, [checked]);

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
          initialValue={localRating}
        />
        <div className={styles.episode__fav}>
          <button>
            <img src="img/heart-svgrepo-com.svg" alt="favorite" />
          </button>
        </div>
        <div className={styles.episode__checkbox}>
          <button
            className={`${styles.episodeCheck} ${localChecked ? styles.active : ""}`}
            onClick={handleEpisodeCheck}
          >
            {localChecked ? <ReactSVG src={check} alt="check mark" /> : null}
          </button>
        </div>
      </div>
    </li>
  );
};
