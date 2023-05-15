import React from "react";

import styles from "./ShowItem.module.scss";

export const ShowItem = ({title, airStatus, watchedCount, totalCount, rating}) => {
  return (
    <div className={styles.profile__showItem}>
      <a href="/" className={styles.profile__showThumb}>
        <img
          src="img/MV5BOWFhYjE4NzMtOWJmZi00NzEyLTg5NTctYmIxMTU1ZDIxMDAyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg"
          alt="poster"
        />
      </a>
      <div className={styles.profile__showInfo}>
        <div className={styles.profile__showDetails}>
          <div className={styles.profile__showHeader}>
            <a href="/" className={styles.profile__show-title}>
              {title}
            </a>
            <div className={`${styles.profile__showStatus} ${styles.showDead}`}>{airStatus}</div>
          </div>
          <div className={styles.profile__showRating}>5 STARS</div>
        </div>
        <div className={styles.profile__showProgress}>
          <div className={styles.profile__showProgressLabel}>
            <span>{watchedCount}</span> из {totalCount}
          </div>
          <div className={styles.profile__showProgressContainer}>
            <div className={styles.profile__showProgressValue} style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
