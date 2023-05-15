import React from "react";
import { FriendCard, ProgressItem, ShowItem, ShowsTabItem } from "../../components";

import styles from "./Profile.module.scss";

export const Profile = ({username}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.left}>
        <div className={styles.profileMain__wrapper}>
          <div className={styles.profile__info}>
            <div className={styles.profile__username}>{username}</div>
            <div className={styles.profile__details}>
              <div className={styles.profile__avatar}>
                <img src="img/QIP Shot - Screen 213.png" alt="" />
              </div>
              <div className={styles.profile__stats}>
                <ProgressItem num={6534} title={"episodes"} value={17} />
                <ProgressItem num={3778} title={"hours"} value={15} />
                <ProgressItem num={157} title={"days"} value={15} />
              </div>
            </div>
          </div>
          <div className={styles.profile__shows}>
            <div className={styles.profile__showsWrapper}>
              <div className={styles.profile__showsHeader}>Сериалы</div>
              <div className={styles.profile__showsTabs}>
                <div className={styles.profile__tabsWrapper}>
                  <ShowsTabItem counter={10} label={"Смотрит"} isActive={true} />
                  <ShowsTabItem counter={30} label={"Будет"} isActive={true} />
                  <ShowsTabItem counter={5} label={"Перестал"} isActive={true} />
                  <ShowsTabItem counter={17} label={"Посмотрел"} isActive={true} />
                </div>
              </div>
              <div className={styles.profile__showsContent}>
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
      <div className={styles.right}>
        <div className={styles.right__wrapper}>
          <div className={styles.profile__actions}>
            <div className={styles.profile__actionsHeader}>Профиль</div>
            <ul className={styles.profile__actionList}>
              <li className={styles.profile__actionItem}>
                <a href="#" className={styles.profile__actionItemLink}>
                  Полная статистика
                </a>
              </li>
              <li className={styles.profile__actionItem}>
                <a href="#" className={styles.profile__actionItemLink}>
                  Мои списки
                </a>
              </li>
              <li className={styles.profile__actionItem}>
                <a href="#" className={styles.profile__actionItemLink}>
                  Комментарии
                </a>
              </li>
              <li className={styles.profile__actionItem}>
                <a href="#" className={styles.profile__actionItemLink}>
                  Настройки
                </a>
              </li>
              <li className={styles.profile__actionItem}>
                <a href="#" className={styles.profile__actionItemLink}>
                  Выйти
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.profile__friends}>
            <div className={styles.profile__friendsHeader}>
              <span className={styles.profile__friendsTitle}>Друзья</span>
              <a href="#" className={styles.profile__friendsLink}>
                Все друзья
              </a>
            </div>
            <div className={styles.profile__friendsGrid}>
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
