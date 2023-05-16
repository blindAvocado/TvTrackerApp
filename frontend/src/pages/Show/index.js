import React from "react";
import { useLoaderData } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { apiShow } from "../../services/show";

import { ShowTechincals, EpisodeItem } from "../../components";

import styles from "./Show.module.scss";

export const Show = () => {
  const show = useLoaderData();

  show["yearStared"] = new Date(show.dateStarted).getFullYear();
  show["yearEnded"] = new Date(show.dateEnded).getFullYear();

  console.log(show);

  const techincals = {
    genres: show.genres.join(", "),
    network: show.network,
    averageRuntime: show.averageRuntime,
    country: show.country,
  };

  return (
    <div className={styles.tvshow}>
      <div className={styles.left}>
        <div className={styles.leftWrapper}>
          <div className={styles.poster}>
            <div className={styles.heart}>
              <img src="img/heart-outline.svg" alt="fav" />
            </div>
            <img src={show.image.original} alt="tv show poster" />
          </div>
          <div className={styles.statusBox}>
            {/* <span className={styles.status__selector}></span> */}
            <div className={styles.statusList}>
              <label className={styles.statusOption}>
                <input type="radio" name="show-status" id="watching" />
                <label className={styles.optionLabel} for="watching">
                  Смотрю
                </label>
              </label>
              <label className={styles.statusOption}>
                <input type="radio" name="show-status" id="stopped" />
                <label className={styles.optionLabel} for="stopped">
                  Перестал смотреть
                </label>
              </label>
              <label className={styles.statusOption}>
                <input type="radio" name="show-status" id="not watching" />
                <label className={styles.optionLabel} for="not watching">
                  Не смотрю
                </label>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightWrapper}>
          <h1 className={styles.show__title}>
            {show.title}{" "}
            <span className={styles.show__year}>
              {show.yearStared}–{show.yearEnded}
            </span>
          </h1>
          <p className={styles.show__desc}>{show.description}</p>
          <ShowTechincals props={techincals} />
          <ul className={styles.show__links}>
            <li className={styles.show__link}>
              <a href={`https://www.imdb.com/title/${show.imdbId}/`} target="_blank" rel="noreferrer">
                IMDB
              </a>
            </li>
            <li className={styles.show__link}>
              <a href={`https://www.thetvdb.com/dereferrer/series/${show.thetvdb}'`} target="_blank" rel="noreferrer">
                TVDB
              </a>
            </li>
          </ul>
          <div className={styles.episodes}>
            <div className={styles.episodes__header}>Список серий</div>
            <div className={styles.episodes__wrapper}>
              <ul className={styles.episodes__list}>
                {show.episodes.map((item) => (
                  <EpisodeItem key={item.tvmazeId} episode={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const showLoader = async ({ params }) => {
  const { thetvdb } = params;

  // console.log(typeof(username));
  // console.log(resp);
  const show = await apiShow.getByThetvdb(thetvdb);

  return show || null;
};
