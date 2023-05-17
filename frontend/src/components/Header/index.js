import { useState } from "react";
import { ReactSVG } from "react-svg";

import styles from "./Header.module.scss";

import { Logo, Nav, ProfileDropdown, HeaderButton } from "../../components";

import search from "../../img/search.svg";

export const Header = ({ user }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = (e, btn) => {
    console.log(searchOpen);
    console.log(btn);
    setSearchOpen(!searchOpen);
    console.log(e.target);
  };

  return (
    <header className={styles.header} onClick={() => setSearchOpen(false)}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.header__left}>
            <Logo />
            {searchOpen ? null : <Nav />}
          </div>
          <div className={`${styles.header__right} ${searchOpen ? styles.searchActive : ""}`}>
            <div className={`${styles.header__search} ${searchOpen ? styles.searchActive : ""}`}>
              <form className={styles.header__searchForm}>
                <input
                  className={styles.header__searchInput}
                  placeholder="Найти сериалы"
                  type="text"
                  onClick={(e) => e.stopPropagation()}
                />
              </form>
              <button
                className={styles.header__searchBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchOpen(!searchOpen);
                }}
              >
                <ReactSVG src={search} />
              </button>
            </div>
            {user.isLoggedIn ? (
              <ProfileDropdown user={user} />
            ) : (
              <div className={styles.header__btns}>
                <HeaderButton text={"Войти"} outline={false} route={"/login"} />
                <HeaderButton text={"Зарегистрироваться"} outline={false} route={"/register"} />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
