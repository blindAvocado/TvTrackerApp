import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

import { ShowCard } from "../../components";
import { apiShow } from "../../services/show";

import styles from "./Shows.module.scss";

export const Shows = () => {
  const [shows, setShows] = useState();

  const getShows = async () => {
    const resp = await apiShow.getAllShows();
    if (resp.status === "success") {
      setShows(resp.data);
    } else {
      console.error("Could not get all shows");
    }
  };

  useEffect(() => {
    if (!shows) {
      getShows();
    }
  }, [shows]);

  return (
    <div className={styles.shows}>
      <div className={styles.shows__wrapper}>
        <ul className={styles.shows__list}>
          {shows?.map((show) => (
            <li className={styles.shows__item}>
              <ShowCard key={show._id} show={show} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
