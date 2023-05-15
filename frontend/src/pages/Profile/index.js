import React from "react";
import { FriendCard, ProgressItem, ShowItem, ShowsTabList } from "../../components";

import "./style.scss";

export const Profile = ({username}) => {
  return (
    <div className="profile">
      <div className="left">
        <div className="profile-main__wrapper">
          <div className="profile__info">
            <div className="profile__username">{username}</div>
            <div className="profile__details">
              <div className="profile__avatar">
                <img src="img/QIP Shot - Screen 213.png" alt="" />
              </div>
              <div className="profile__stats">
                <ProgressItem num={6534} title={"episodes"} value={17} />
                <ProgressItem num={3778} title={"hours"} value={15} />
                <ProgressItem num={157} title={"days"} value={15} />
              </div>
            </div>
          </div>
          <div className="profile__shows">
            <div className="profile__shows-wrapper">
              <div className="profile__shows-header">Сериалы</div>
              <div className="profile__shows-tabs">
                <div className="profile__tabs-wrapper">
                  <ShowsTabList counter={10} label={"Смотрит"} isActive={true} />
                  <ShowsTabList counter={30} label={"Будет"} isActive={true} />
                  <ShowsTabList counter={5} label={"Перестал"} isActive={true} />
                  <ShowsTabList counter={17} label={"Посмотрел"} isActive={true} />
                </div>
              </div>
              <div className="profile__shows-content">
                <div title="Watching">
                  <ShowItem />
                  <ShowItem />
                  <ShowItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right__wrapper">
          <div className="profile__actions">
            <div className="profile__actions-header">Профиль</div>
            <ul className="profile__action-list">
              <li className="profile__action-item">
                <a href="#" className="profile__action-item-link">
                  Полная статистика
                </a>
              </li>
              <li className="profile__action-item">
                <a href="#" className="profile__action-item-link">
                  Мои списки
                </a>
              </li>
              <li className="profile__action-item">
                <a href="#" className="profile__action-item-link">
                  Комментарии
                </a>
              </li>
              <li className="profile__action-item">
                <a href="#" className="profile__action-item-link">
                  Настройки
                </a>
              </li>
              <li className="profile__action-item">
                <a href="#" className="profile__action-item-link">
                  Выйти
                </a>
              </li>
            </ul>
          </div>
          <div className="profile__friends">
            <div className="profile__friends-header">
              <span className="profile__friends-title">Друзья</span>
              <a href="#" className="profile__friends-link">
                Все друзья
              </a>
            </div>
            <div className="profile__friends-grid">
              <FriendCard />
              <FriendCard />
              <FriendCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
