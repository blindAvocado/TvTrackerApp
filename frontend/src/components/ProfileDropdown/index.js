import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import styles from "./ProfileDropdown.module.scss";

import defaultAvatar from "../../img/user_default.jpg";
import arrowDown from "../../img/arrow_down.svg";

export const ProfileDropdown = ({user}) => {
  return (
    <div className={styles.profile__user}>
      <div className={styles.profile__userContainer}>
        <div className={styles.profile__avatar}>
          <img src={user.avatarUrl ? user.avatarUrl : defaultAvatar} alt="user avatar" />
        </div>
        <div className={styles.profile__username}>{user.username}</div>
        <div className={styles.icon}>
          {/* <img src={arrowDown} alt="arrow-down" /> */}
          <ReactSVG src={arrowDown} alt="arrow-down" />
        </div>
      </div>
      <div className={styles.profile__dropdown}>
        <ul className={styles.profile__dropdownList}>
          <li className={`${styles.profile__listItem} ${styles.profile}`}>
            <Link to={`/user/${user.username}`}>
              <div className={styles.profile__userContainer}>
                <div className={styles.profile__avatar}>
                  <img src={user.avatarUrl ? user.avatarUrl : defaultAvatar} alt="user avatar" />
                </div>
                <div className={styles.profile__username}>{user.username}</div>
                <div className={styles.icon}>
                  <ReactSVG src={arrowDown} alt="arrow-down" />
                </div>
              </div>
            </Link>
          </li>
          <li className={`${styles.profile__listItem} ${styles.divider}`}></li>
          <li className={styles.profile__listItem}>
            <a href="/" className={styles.profile__link}>
              Сериалы
            </a>
          </li>
          <li className={styles.profile__listItem}>
            <a href="/" className={styles.profile__link}>
              Журнал
            </a>
          </li>
          <li className={styles.profile__listItem}>
            <a href="/" className={styles.profile__link}>
              Списки
            </a>
          </li>
          <li className={styles.profile__listItem}>
            <a href="/" className={styles.profile__link}>
              Избранное
            </a>
          </li>
          <li className={`${styles.profile__listItem} ${styles.divider}`}></li>
          <li className={styles.profile__listItem}>
            <a href="/" className={styles.profile__link}>
              Настройки
            </a>
          </li>
          <li className={styles.profile__listItem}>
            <Link to="logout" className={styles.profile__link}>
              Выйти
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
