import React from "react";

import styles from "./Logo.module.scss";

export const Logo = () => {
  return <a href="/" className={styles.logo}>
    <img src="img/letterboxd.svg" alt="logo" />
  </a>;
};
