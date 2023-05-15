import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Nav.module.scss";

export const Nav = () => {
  return (
    <nav className={styles.header__nav}>
      <ul className={styles.header__list}>
        <li className={styles.header__listItem}>
          <a href="/" className={styles.header__itemLink}>
            Сериалы
          </a>
        </li>
        <li className={styles.header__listItem}>
          <a href="/" className={styles.header__itemLink}>
            Списки
          </a>
        </li>
      </ul>
    </nav>
  );
};
