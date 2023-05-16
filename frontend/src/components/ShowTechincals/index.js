import React from "react";
import { ShowTechincalItem } from "../ShowTechincalItem";

import styles from "./ShowTechincals.module.scss";

export const ShowTechincals = ({ props }) => {
  return (
    <ul className={styles.show_technicals}>
      {Object.entries(props).map(([key, value]) => (
        <ShowTechincalItem key={key} label={key} value={value} />
      ))}
    </ul>
  );
};
