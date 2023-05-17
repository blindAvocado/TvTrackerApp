import React from "react";

import styles from "./ShowsTabItem.module.scss";

export const ShowsTabItem = ({counter, label, isActive, onClick}) => {
  return (
    <div className={`${styles.profile__tab} ${isActive ? styles.active : ""}`} onClick={onClick}>
      <div className={styles.profile__tabWrapper}>
        <div className={styles.profile__tabCounter}>{counter}</div>
        <div className={styles.profile__tabLabel}>{label}</div>
      </div>
    </div>
  );
};
