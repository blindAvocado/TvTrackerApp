import React from "react";

import styles from "./ProfileDropdown.module.scss";

export const ProfileDropdown = () => {
  return (
    <div className={styles.profile__user}>
      <div className={styles.profile__userContainer}>
        <div className={styles.profile__avatar}>
          <img src="img/Kirk.webp" alt="user avatar" />
        </div>
        <div className={styles.profile__username}>blindAvocado</div>
        <div className={styles.icon}>
          {/* <svg
            fill="#000000"
            height="30px"
            width="30px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xml:space="preserve"
          >
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            />
          </svg> */}
        </div>
      </div>
      <div className={styles.profile__dropdown}>
        <ul className={styles.profile__dropdownList}>
          <li className={`${styles.profile__listItem} ${styles.profile}`}>
            <a href="profile.html">
              <div className={styles.profile__userContainer}>
                <div className={styles.profile__avatar}>
                  <img src="img/Kirk.webp" alt="user avatar" />
                </div>
                <div className={styles.profile__username}>blindAvocado</div>
                <div className={styles.icon}>
                  {/* <svg
                    fill="#000000"
                    height="30px"
                    width="30px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 330 330"
                    xml:space="preserve"
                  >
                    <path
                      id="XMLID_225_"
                      d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                                              c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                                              s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                    />
                  </svg> */}
                </div>
              </div>
            </a>
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
            <a href="/" className={styles.profile__link}>
              Выйти
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
