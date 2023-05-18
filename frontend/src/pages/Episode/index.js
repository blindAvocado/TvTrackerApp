import React, { useEffect, useRef, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { ReactSVG } from "react-svg";
import { EpisodeSidelistItem } from "../../components";
import { apiShow } from "../../services/show";

import styles from "./Episode.module.scss";

import check from "../../img/check.svg";
import { apiUser } from "../../services/user";

export const Episode = ({ user }) => {
  const { thetvdb, episodeNum } = useParams();
  const episode = useLoaderData();

  const showId = useRef(null);
  const [isFavorite, setFavorite] = useState(false);
  const [checked, setChecked] = useState(false);
  const [rating, setRating] = useState(0);

  const handleRating = async (rate) => {
    const obj = { rating: rate * 2 };
    const resp = await apiUser.rateEpisode(episode._id, obj);
    setRating(rate);
  };

  const handleCheck = async () => {
    if (checked === true) {
      const resp = await apiUser.uncheckEpisode(episode._id);
      setChecked(false);
      setRating(0);
    } else if (checked === false) {
      const resp = await apiUser.checkEpisode(episode._id);
      setChecked(true);
    }
  };

  const getShowId = async () => {
    if (!showId.current) {
      showId.current = await apiShow.getObjIdByThetvdb(thetvdb);
      return showId.current._id;
    } else {
      return showId.current._id;
    }
  };



  useEffect(() => {
    const fetchWatchedEpisodes = async () => {
      try {
        await getShowId();
        const watchedEpisodes = await apiUser.getWatchedEpisodes(user._id, showId.current._id);
        // const watchedEpisodes = response; // Assuming the response contains an array of watched episodes

        // Find the watched episode that matches the current episode
        const watchedEpisode = watchedEpisodes.find((item) => item.episode._id === episode._id);

        if (watchedEpisode) {
          console.log(watchedEpisode.episode.title, true, watchedEpisode.rating);
          setChecked(true); // Update the checked state if the episode is marked as watched
          setRating(watchedEpisode.rating / 2); // Update the rating state with the episode's rating
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchWatchedEpisodes();
  });

  console.log(episode);

  return (
    <>
      <Link to={`/show/${episode.show.thetvdb}`} className={styles.episode__show}>
        {episode.show.title}
      </Link>
      <div className={styles.episode}>
        <div className={styles.left}>
          <div className={styles.episode__wrapper}>
            <div className={styles.episode__title}>
              {episode.season}x{episode.number} - {episode.name}
            </div>
            <div className={styles.episode__thumbnail}>
              <img src={episode.image.original} alt="episode thumbnail" />
            </div>
            <div className={styles.episode__actions}>
              <div className={styles.episode__checkbox}>
                <button className={`${styles.episodeCheck} ${checked ? styles.active : ""}`} onClick={handleCheck}>
                  {checked ? <ReactSVG src={check} alt="check mark" /> : null}
                </button>
              </div>
              <div className={styles.episode__fav}>
                <button>
                  <img src="img/heart-svgrepo-com.svg" alt="favorite" />
                </button>
              </div>
              <Rating
                onClick={handleRating}
                fillColor="#ff0f0f"
                allowFraction={true}
                size={30}
                style={{ display: "flex", alignItems: "center" }}
                initialValue={rating}
              />
            </div>
            <ul className={styles.episode__info}>
              <li className={styles.episode__infoItem}>
                <div className={styles.episode__infoLabel}>Продолжительность</div>
                <div className={styles.episode__infoValue}>{episode.runtime} мин.</div>
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
            <div className={styles.episode__desc}>
              <span className={styles.episode__descHeader}>Описание</span>
              <div className={styles.episode__descText}>{episode.summary}</div>
            </div>
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

export const episodeLoader = async ({ params }) => {
  const { thetvdb, episodeNum } = params;

  const objId = await apiShow.getObjIdByThetvdb(thetvdb);

  const episode = await apiShow.getEpisodeByNum(objId._id, episodeNum);

  return episode || null;
};
