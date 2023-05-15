import React from "react";
import { EpisodeSidelistItem } from "../../components";

import styles from "./Episode.module.scss";

export const Episode = ({showTitle, episodeTitle, thumbnail, isFavorite, rating, runtime, airDate, watchDate}) => {
  return (
    <>
      <a href="tvshow.html" className={styles.episode__show}>
        Star Trek: The Next Generation
      </a>
      <div className={styles.episode}>
        <div className={styles.left}>
          <div className={styles.episode__wrapper}>
            <div className={styles.episode__title}>1x1 - Encounter at Farpoint</div>
            <div className={styles.episode__thumbnail}>
              <img src="img/1115712.jpg" alt="" />
            </div>
            <div className={styles.episode__actions}>
              <div className={styles.episode__checkbox}>
                <button className={styles.episodeCheck}></button>
              </div>
              <div className={styles.episode__fav}>
                <button>
                  <img src="img/heart-svgrepo-com.svg" alt="favorite" />
                </button>
              </div>
            </div>
            <ul className={styles.episode__info}>
              <li className={styles.episode__infoItem}>
                <div className={styles.episode__infoLabel}>Продолжительность</div>
                <div className={styles.episode__infoValue}>90 мин.</div>
              </li>
              <li className={styles.episode__infoItem}>
                <div className={styles.episode__infoLabel}>Дата показа</div>
                <div className={styles.episode__infoValue}>26.09.1987</div>
              </li>
              <li className={styles.episode__infoItem}>
                <div className={styles.episode__infoLabel}>Дата просмотра</div>
                <div className={styles.episode__infoValue}>19.05.2022</div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right__wrapper}>
            <div className={styles.neighbourEpisodes}>
              <div className={styles.neighbour__title}>Эпизоды</div>
              <ul className={styles.neighbour__list}>
                <EpisodeSidelistItem number={"1x1"} title={"Encounter at Farpoint"} isCurrent={true} />
                <EpisodeSidelistItem number={"1x2"} title={"The Naked Now"} isCurrent={true} />
                <EpisodeSidelistItem number={"1x3"} title={"Code of Honor"} isCurrent={true} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
