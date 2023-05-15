import React from "react";

import styles from "./EpisodeSidelistItem.module.scss";

export const EpisodeSidelistItem = ({number, title, isCurrent}) => {
  return (
    <li className={styles.neighbourItem}>
      <span href="/" className={`${styles.neighbour__link} ${(isCurrent ? "current" : "")}`}>
        {number} - {title}
      </span>
    </li>
  );
};
