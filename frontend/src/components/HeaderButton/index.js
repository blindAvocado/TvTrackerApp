import React from "react";
import {Link} from "react-router-dom"

import styles from "./HeaderButton.module.scss";

export const HeaderButton = ({ text, outline, route }) => {
  return (
    <Link to={route} className={`${styles.header__btn} ${outline ? styles.outline : ""}`}>
      {text}
    </Link>
  );
};
