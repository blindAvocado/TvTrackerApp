import React from "react";

import styles from "./ShowsTabItem.module.scss";

export const ShowsTabItem = ({counter, label, isActive}) => {
  return (
    <div className={styles.profile__tab}>
      <div className={styles.profile__tabWrapper}>
        <div className={styles.profile__tabCounter}>{counter}</div>
        <div className={styles.profile__tabLabel}>{label}</div>
      </div>
    </div>
  );
};
