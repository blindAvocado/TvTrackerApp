import React from "react";

import styles from "./ShowTechincalItem.module.scss";

export const ShowTechincalItem = ({label, value}) => {
  return (
    <li className={styles.show__technical}>
      <div className={styles.techincal__label}>
        <span>{label}</span>
      </div>
      <div className={styles.techincal__value}>{value}</div>
    </li>
  );
};
