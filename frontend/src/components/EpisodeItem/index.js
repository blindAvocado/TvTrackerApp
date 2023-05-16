import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./EpisodeItem.module.scss";

export const EpisodeItem = ({episode}) => {

  const date = new Date(episode.airdate);
  const options = { day: "2-digit", month: "short", year: "numeric"};
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
        <div className={styles.episode__fav}>
          <button>
            <img src="img/heart-svgrepo-com.svg" alt="favorite" />
          </button>
        </div>
        <div className={styles.episode__checkbox}>
          <button className={styles.episodeCheck}></button>
        </div>
      </div>
    </li>
  );
};
