import React, { useEffect, useRef, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { apiShow } from "../../services/show";

import { ShowTechincals, EpisodeItem } from "../../components";

import styles from "./Show.module.scss";
import { Rating } from "react-simple-star-rating";
import { apiUser } from "../../services/user";

export const Show = ({ user }) => {
  const { thetvdb } = useParams();
  const rating = useRef(0);
  const showId = useRef(null);

  const [showUserData, setShowUserData] = useState(null);
  const [isFavorite, setFavorite] = useState(false);
  const [watchStatus, setWatchStatus] = useState("Not watching");

  const getShowId = async () => {
    if (!showId.current) {
      showId.current = await apiShow.getObjIdByThetvdb(thetvdb);
      return showId.current._id;
    } else {
      return showId.current._id;
    }
  };

  const handleRating = async (rate) => {
    await getShowId();
    await apiUser.rateShow(showId.current._id, rate).then(() => (rating.current = rate * 2));
    console.log(rate * 2);
  };

  const getWatchedEpisodes = async () => {
    await getShowId();
    const resp = await apiUser.getWatchedEpisodes(user._id, showId.current._id);
    if (resp && resp.status === "success") {
      setShowUserData({ ...showUserData, resp });
    }
  };

  const getWatchedShowData = async () => {
    await getShowId();
    const resp = await apiUser.getWatchedShow(user._id, showId.current._id);
    console.log(user._id, showId.current._id);
    console.log(resp);
    if (resp && resp.status === "success") {
      const temp = resp.data;
      setShowUserData({ ...showUserData, temp });
      setWatchStatus(resp.data.watchStatus);
    }
  };

  const handleStatusChange = async (status) => {
    // console.log(status);
    await getShowId();
    if (status === "Not watching") {
      const resp = await apiUser.removeShowFromWatched(showId.current._id);
      if (resp && resp.status === "success") {
        setWatchStatus("Not watching");
      }
    }
    const data = { status: status };
    const resp = await apiUser.setShowStatus(showId.current._id, data);
    if (resp && resp.status === "success") {
      setWatchStatus(status);
    }
  };

  const show = useLoaderData();

  show["yearStared"] = new Date(show.dateStarted).getFullYear();

  if (show.dateEnded) {
    show["yearEnded"] = new Date(show.dateEnded).getFullYear();
  } else {
    show["yearEnded"] = null;
  }

  useEffect(() => {
    getWatchedEpisodes();
    getWatchedShowData();
  }, []);

  console.log(show);

  const techincals = {
    жанры: show.genres.join(", "),
    канал: show.network,
    продолжительность: `${show.averageRuntime} мин.`,
    страна: show.country,
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
          <Rating
            onClick={handleRating}
            fillColor="#ff0f0f"
            allowFraction={true}
            size={35}
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          />
          <div className={styles.statusBox}>
            {/* <span className={styles.status__selector}></span> */}
            <div className={styles.statusList}>
              <label
                className={styles.statusOption}
                onClick={(e) => {
                  e.stopPropagation();
                  handleStatusChange("Watching");
                }}
              >
                {/* <input type="radio" name="show-status" id="watching" defaultChecked={watchStatus === "Watching"} /> */}
                <span className={`${styles.optionLabel} ${watchStatus === "Watching" ? styles.active : ""}`}>
                  Смотрю
                </span>
              </label>
              <label className={styles.statusOption} onClick={() => handleStatusChange("Going to")}>
                {/* <input type="radio" name="show-status" id="going to" defaultChecked={watchStatus === "Going to"} /> */}
                <span className={`${styles.optionLabel} ${watchStatus === "Going to" ? styles.active : ""}`}>
                  Буду смотреть
                </span>
              </label>
              <label className={styles.statusOption} onClick={() => handleStatusChange("Stopped")}>
                {/* <input type="radio" name="show-status" id="stopped" defaultChecked={watchStatus === "Stopped"} /> */}
                <span className={`${styles.optionLabel} ${watchStatus === "Stopped" ? styles.active : ""}`}>
                  Перестал смотреть
                </span>
              </label>
              <label className={styles.statusOption} onClick={() => handleStatusChange("Not watching")}>
                {/* <input
                  type="radio"
                  name="show-status"
                  id="not watching"
                  defaultChecked={watchStatus === "Not watching"}
                /> */}
                <span className={`${styles.optionLabel} ${watchStatus === "Not watching" ? styles.active : ""}`}>
                  Не смотрю
                </span>
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
