import React from "react";

import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  return (
    <form className={styles.auth__form} action="#">
      <input placeholder="Email" type="email" />
      <input placeholder="Пароль" type="password" />
      <button type="submit">Войти</button>
    </form>
  );
};
