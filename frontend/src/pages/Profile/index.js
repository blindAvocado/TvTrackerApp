import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { FriendCard, ProgressItem, ShowItem, ShowsTabItem } from "../../components";
import { apiUser } from "../../services/user";

import styles from "./Profile.module.scss";

import defaultAvatar from "../../img/user_default.jpg";
import { useParams, useLoaderData, useLocation, Link } from "react-router-dom";

export const Profile = () => {
  // const user = useLoaderData();
  const location = useLocation();
  const { username } = useParams();
  console.log(username);

  const [user, setUser] = useState();
  const [isFollowing, setIsFollowing] = useState(false);
  const userUpdated = useRef(false);
  const userLoaded = useRef(false);

  const [stats, setStats] = useState({
    watchedEpisodes: 0,
    totalEpisodes: 0,
    watchedHours: 0,
    totalHours: 0,
    watchedDays: 0,
    totalDays: 0,
  });

  const [watchedShows, setWatchedShows] = useState({
    Watching: [],
    "Going to": [],
    Stopped: [],
    "Watched all": [],
  });

  const [tabIndex, setTabIndex] = useState(0);

  const loadUser = async () => {
    const id = await apiUser.getIdByUsername(username);

    if (id) {
      const followingUsers = await apiUser.getFollowers(id);
      const resp = await apiUser.getUserById(id);
      if (resp) {
        resp.following = followingUsers;
        setUser(resp);
        userLoaded.current = true;
      } else {
        console.log("User was not loaded to Profile page");
      }
    }
  };

  const updateUser = async () => {
    await apiUser
      .getWastedTime(user._id)
      .then((data) => {
        setStats(data);
      })
      .catch((err) => console.log(err));

    // await apiUser
    //   .getFollowers(user._id)
    //   .then((data) => {
    //     setUser({ ...user, data });
    //     userUpdated.current = true;
    //   })
    //   .catch((err) => console.log(err));

    await apiUser
      .getShowStatuses(user._id)
      .then((data) => {
        setWatchedShows(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadUser();
    if (userLoaded.current) {
      updateUser();
    }
  }, [username, userLoaded.current, location]);

  useEffect(() => {
    if (userLoaded.current) {
      updateUser();
    }
  }, [user]);

  if (user) {
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
                  <ProgressItem
                    num={stats.watchedEpisodes}
                    title={"эпизодов"}
                    value={(stats.watchedEpisodes / stats.totalEpisodes) * 100}
                  />
                  <ProgressItem
                    num={stats.watchedHours}
                    title={"часов"}
                    value={(stats.watchedHours / stats.totalHours) * 100}
                  />
                  <ProgressItem
                    num={stats.watchedHours}
                    title={"дней"}
                    value={(stats.watchedHours / stats.totalHours) * 100}
                  />
                </div>
              </div>
            </div>
            <div className={styles.profile__shows}>
              <div className={styles.profile__showsWrapper}>
                <div className={styles.profile__showsHeader}>Сериалы</div>
                <div className={styles.profile__showsTabs}>
                  <div className={styles.profile__tabsWrapper}>
                    <ShowsTabItem
                      counter={watchedShows["Watching"].length}
                      label={"Смотрит"}
                      isActive={tabIndex === 0 ? true : false}
                      onClick={() => setTabIndex(0)}
                    />
                    <ShowsTabItem
                      counter={watchedShows["Going to"].length}
                      label={"Будет"}
                      isActive={tabIndex === 1 ? true : false}
                      onClick={() => setTabIndex(1)}
                    />
                    <ShowsTabItem
                      counter={watchedShows["Stopped"].length}
                      label={"Перестал"}
                      isActive={tabIndex === 2 ? true : false}
                      onClick={() => setTabIndex(2)}
                    />
                    <ShowsTabItem
                      counter={watchedShows["Watched all"].length}
                      label={"Посмотрел"}
                      isActive={tabIndex === 3 ? true : false}
                      onClick={() => setTabIndex(3)}
                    />
                  </div>
                </div>
                <div className={`${styles.profile__showsContent} ${tabIndex === 0 ? styles.active : ""}`}>
                  {watchedShows["Watching"]?.map((show) => (
                    <ShowItem key={show._id} show={show.show} userId={user._id} />
                  ))}
                </div>
                <div className={`${styles.profile__showsContent} ${tabIndex === 1 ? styles.active : ""}`}>
                  {watchedShows["Going to"]?.map((show) => (
                    <ShowItem key={show._id} show={show.show} userId={user._id} />
                  ))}
                </div>
                <div className={`${styles.profile__showsContent} ${tabIndex === 2 ? styles.active : ""}`}>
                  {watchedShows["Stopped"]?.map((show) => (
                    <ShowItem key={show._id} show={show.show} userId={user._id} />
                  ))}
                </div>
                <div className={`${styles.profile__showsContent} ${tabIndex === 3 ? styles.active : ""}`}>
                  {watchedShows["Watched all"]?.map((show) => (
                    <ShowItem key={show._id} show={show.show} userId={user._id} />
                  ))}
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
                  <Link to="logout" className={styles.profile__actionItemLink}>
                    Выйти
                  </Link>
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
                {user.following.map((followUser) => (
                  <FriendCard key={followUser._id} user={followUser} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Пользователь не найден!</h1>;
  }
};

export const profileLoader = async ({ params }) => {
  const { username } = params;

  const id = await apiUser.getIdByUsername(username);

  if (id) {
    const followingUsers = await apiUser.getFollowers(id);
    const resp = await apiUser.getUserById(id);

    resp.following = followingUsers;
    return resp || null;
  }

  return null;
};
