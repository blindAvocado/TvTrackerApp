import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./Nav.module.scss";

export const Nav = () => {
  return (
    <nav className={styles.header__nav}>
      <ul className={styles.header__list}>
        <li className={styles.header__listItem}>
          <Link to="shows" className={styles.header__itemLink}>
            Сериалы
          </Link>
        </li>
        <li className={styles.header__listItem}>
          <Link to="lists" className={styles.header__itemLink}>
            Списки
          </Link>
        </li>
      </ul>
    </nav>
  );
};
