import React from "react";

import { LoginForm } from "../../components";

import styles from "./Login.module.scss";

export const Login = () => {
  return (
    <div className={styles.auth} style={{ paddingTop: "100px" }}>
      <div className={styles.auth__wrapper}>
        <div className={styles.auth__header}>С возвращением!</div>
        <LoginForm />
        <div className={styles.auth__actions}>
          <div className={styles.auth__link}>
            Еще нет профиля? <a href="/">Зарегистрируйтесь.</a>
          </div>
          <div className={styles.auth__link}>
            <a href="/">Забыли пароль?</a>
          </div>
        </div>
      </div>
    </div>
  );
};
