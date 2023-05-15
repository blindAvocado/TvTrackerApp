import React from "react";

export const ProfileDropdown = () => {
  return (
    <div className="profile__user">
      <div className="profile__user-container">
        <div className="profile__avatar">
          <img src="img/Kirk.webp" alt="user avatar" />
        </div>
        <div className="profile__username">blindAvocado</div>
        <div className="icon">
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
      <div className="profile__dropdown">
        <ul className="profile__dropdown-list">
          <li className="profile__list-item profile">
            <a href="profile.html">
              <div className="profile__user-container">
                <div className="profile__avatar">
                  <img src="img/Kirk.webp" alt="user avatar" />
                </div>
                <div className="profile__username">blindAvocado</div>
                <div className="icon">
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
          <li className="profile__list-item divider"></li>
          <li className="profile__list-item">
            <a href="/" className="profile__link">
              Сериалы
            </a>
          </li>
          <li className="profile__list-item">
            <a href="/" className="profile__link">
              Журнал
            </a>
          </li>
          <li className="profile__list-item">
            <a href="/" className="profile__link">
              Списки
            </a>
          </li>
          <li className="profile__list-item">
            <a href="/" className="profile__link">
              Избранное
            </a>
          </li>
          <li className="profile__list-item divider"></li>
          <li className="profile__list-item">
            <a href="/" className="profile__link">
              Настройки
            </a>
          </li>
          <li className="profile__list-item">
            <a href="/" className="profile__link">
              Выйти
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
