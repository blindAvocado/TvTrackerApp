import React from "react";

export const Episode = ({showTitle, episodeTitle, thumbnail, isFavorite, rating, runtime, airDate, watchDate}) => {
  return (
    <>
      <a href="tvshow.html" className="episode__show">
        Star Trek: The Next Generation
      </a>
      <div className="episode">
        <div className="left">
          <div className="episode__wrapper">
            <div className="episode__title">1x1 - Encounter at Farpoint</div>
            <div className="episode__thumbnail">
              <img src="img/1115712.jpg" alt="" />
            </div>
            <div className="episode__actions">
              <div className="episode__checkbox">
                <button className="episode-check"></button>
              </div>
              <div className="episode__fav">
                <button>
                  <img src="img/heart-svgrepo-com.svg" alt="favorite" />
                </button>
              </div>
            </div>
            <ul className="episode__info">
              <li className="episode__info-item">
                <div className="episode__info-label">Продолжительность</div>
                <div className="episode__info-value">90 мин.</div>
              </li>
              <li className="episode__info-item">
                <div className="episode__info-label">Дата показа</div>
                <div className="episode__info-value">26.09.1987</div>
              </li>
              <li className="episode__info-item">
                <div className="episode__info-label">Дата просмотра</div>
                <div className="episode__info-value">19.05.2022</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="right__wrapper">
            <div className="neighbour-episodes">
              <div className="neighbour__title">Эпизоды</div>
              <ul className="neighbour__list">
                <li className="neighbour__item">
                  <span href="episode.html" className="neighbour__link current">
                    1x1 - Encounter at Farpoint
                  </span>
                </li>
                <li className="neighbour__item">
                  <a href="episode.html" className="neighbour__link">
                    1x2 - The Naked Now
                  </a>
                </li>
                <li className="neighbour__item">
                  <a href="episode.html" className="neighbour__link">
                    1x3 - Code of Honor
                  </a>
                </li>
                <li className="neighbour__item">
                  <a href="episode.html" className="neighbour__link">
                    1x4 - The Last Outpost
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
