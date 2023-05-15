import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { LoginForm } from "../../components";

import styles from "./Login.module.scss";

export const Login = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user.isLoggedIn) navigate("/:username");
  }, [user.isLoggedIn, navigate]);

  return (
    <div className={styles.auth} style={{ paddingTop: "100px" }}>
      <div className={styles.auth__wrapper}>
        <div className={styles.auth__header}>С возвращением!</div>
        <LoginForm user={user} setUser={setUser} />
        <div className={styles.auth__actions}>
          <div className={styles.auth__link}>
            Еще нет профиля? <Link to="/register">Зарегистрируйтесь.</Link>
          </div>
          {/* <div className={styles.auth__link}>
            <a href="/">Забыли пароль?</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
