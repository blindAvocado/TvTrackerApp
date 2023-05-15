import React from "react";

import styles from "./ProgressItem.module.scss";

export const ProgressItem = ({ num, title, value }) => {
  return (
    <div className={styles.profile__statsProgress}>
      <div className={styles.profile__progressLabel}>
        {num} {title}
      </div>
      <div className={styles.profile__progressContainer}>
        <div className={styles.profile__progressValue} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};
