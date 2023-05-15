import { useState } from "react";
import { FriendCard, ProgressItem, ShowItem, ShowsTabItem } from "../../components";
import { apiUser } from "../../services/user";

import styles from "./Profile.module.scss";

import defaultAvatar from "../../img/user_default.jpg";
import { useParams, useLoaderData } from "react-router-dom";

export const Profile = () => {
  const { username } = useParams();
  const user = useLoaderData();

  const {watchedShows, setWatchedShows} = useState({});

  return (
    <div className={styles.profile}>
      <div className={styles.left}>
        <div className={styles.profileMain__wrapper}>
          <div className={styles.profile__info}>
            <div className={styles.profile__username}>{user.username}</div>
            <div className={styles.profile__details}>
              <div className={styles.profile__avatar}>
                <img src={user.avatarUrl ? user.avatarUrl : defaultAvatar} alt="user avatar" />
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

export const profileLoader = async ({ params }) => {
  const { username } = params;

  // console.log(typeof(username));
  // console.log(resp);
  const id = await apiUser.getIdByUsername(username);

  console.log(username);
  console.log(id);
  console.log(!id);

  if (id) {
    const resp = await apiUser.getUserById(id);
    return resp || null;
  }

  return null;
};
