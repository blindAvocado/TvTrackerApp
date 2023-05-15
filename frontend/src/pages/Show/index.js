import React from "react";

import styles from "./Show.module.scss";

export const Show = () => {
  return (
    <div className={styles.tvshow}>
      <div className={styles.left}>
        <div className={styles.leftWrapper}>
          <div className={styles.poster}>
            <div className={styles.heart}>
              <img src="img/heart-outline.svg" alt="fav" />
            </div>
            <img
              src="img/MV5BOWFhYjE4NzMtOWJmZi00NzEyLTg5NTctYmIxMTU1ZDIxMDAyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg"
              alt="tv show poster"
            />
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
            Star Trek: The Next Generation <span className={styles.show__year}>1987–1994</span>
          </h1>
          <p className={styles.show__desc}>
            Set almost 100 years after Captain Kirk's 5-year mission, a new generation of Starfleet officers sets off in
            the U.S.S. Enterprise-D on its own mission to go where no one has gone before.
          </p>
          <ul className={styles.show_technicals}>
            <li className={styles.show__technical}>
              <div className={styles.techincal__label}>
                <span>Genres</span>
              </div>
              <div className={styles.techincal__value}>Sci-Fi, Action, Adventure</div>
            </li>
            <li className={styles.show__technical}>
              <div className={styles.techincal__label}>
                <span>Network</span>
              </div>
              <div className={styles.techincal__value}>Syndicate</div>
            </li>
            <li className={styles.show__technical}>
              <div className={styles.techincal__label}>
                <span>Average Runtime</span>
              </div>
              <div className={styles.techincal__value}>45 min.</div>
            </li>
            <li className={styles.show__technical}>
              <div className={styles.techincal__label}>
                <span>Country</span>
              </div>
              <div className={styles.techincal__value}>United States</div>
            </li>
          </ul>
          <ul className={styles.show__links}>
            <li className={styles.show__link}>
              <a href="#">IMDB</a>
            </li>
            <li className={styles.show__link}>
              <a href="#">TVDB</a>
            </li>
          </ul>
          <div className={styles.episodes}>
            <div className={styles.episodes__header}>Список серий</div>
            <div className={styles.episodes__wrapper}>
              <ul className={styles.episodes__list}>
                <li className={styles.episode}>
                  <div className={styles.episode__wrapper}>
                    <div className={styles.episode__number}>1x1</div>
                    <div className={styles.episode__info}>
                      <a href="/" className={styles.episode__title}>
                        Encounter at Farpoint
                      </a>
                      <div className={styles.episode__date}>26 Sep. 1987</div>
                    </div>
                    <div className={styles.episode__fav}>
                      <button>
                        <img src="img/heart-svgrepo-com.svg" alt="favorite" />
                      </button>
                    </div>
                    <div className={styles.episode__checkbox}>
                      <button className={styles.episodeCheck}></button>
                    </div>
                  </div>
                </li>
                <li className={styles.episode}>
                  <div className={styles.episode__wrapper}>
                    <div className={styles.episode__number}>2</div>
                    <div className={styles.episode__info}>
                      <a href="/" className={styles.episode__title}>
                        The Naked Now
                      </a>
                      <div className={styles.episode__date}>3 Oct. 1987</div>
                    </div>
                    <div className={styles.episode__fav}>
                      <button>
                        <img src="img/heart-svgrepo-com.svg" alt="favorite" />
                      </button>
                    </div>
                    <div className={styles.episode__checkbox}>
                      <button className={styles.episodeCheck}></button>
                    </div>
                  </div>
                </li>
                <li className={styles.episode}>
                  <div className={styles.episode__wrapper}>
                    <div className={styles.episode__number}>15x25</div>
                    <div className={styles.episode__info}>
                      <a href="/" className={styles.episode__title}>
                        Code of Honor
                      </a>
                      <div className={styles.episode__date}>10 Oct. 1987</div>
                    </div>
                    <div className={styles.episode__fav}>
                      <button>
                        <img src="img/heart-svgrepo-com.svg" alt="favorite" />
                      </button>
                    </div>
                    <div className={styles.episode__checkbox}>
                      <button className={styles.episodeCheck}></button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
