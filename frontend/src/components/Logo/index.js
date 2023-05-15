import React from "react";

import styles from "./Logo.module.scss";

import logoImg from "../../img/logo.svg"

export const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src={logoImg} alt="logo" />
    </a>
  );
};
