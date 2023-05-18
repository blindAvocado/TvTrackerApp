import React from "react";
import { Link } from "react-router-dom";

import styles from "./ShowCard.module.scss";

export const ShowCard = ({ show }) => {
  return (
    <div className={styles.showcard}>
      <div className={styles.showcard__wrapper}>
        <img
          className={styles.showcard__poster}
          src={show.image.medium}
          alt={show ? `${show.title} poster` : "poster"}
        />
        <Link className={styles.showcard__frame} to={`/show/${show.thetvdb}`}>
          <span className={styles.showcard__overlay}></span>
        </Link>
        <div className={styles.showcard__tooltip}>
          <div className={styles.showcard__tooltipText}>
            {show.title}
          </div>
          <div className={styles.showcard__tooltipArrow}></div>
        </div>
      </div>
    </div>
  );
};
