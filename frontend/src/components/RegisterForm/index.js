import React from "react";

import styles from "./RegisterForm.module.scss";

export const RegisterForm = () => {
  return (
    <form className={styles.auth__form} action="#">
      <input type="text" placeholder="Имя пользователя" />
      <input placeholder="Email" type="email" />
      <input placeholder="Пароль" type="password" />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};
