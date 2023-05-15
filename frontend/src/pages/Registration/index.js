import React from "react";

import { RegisterForm } from "../../components";

import styles from "./Registration.module.scss";

export const Registration = () => {
  return (
    <div className={styles.auth} style={{ paddingTop: "100px" }}>
      <div className={styles.auth__wrapper}>
        <div className={styles.auth__header}>Создать аккаунт</div>
        <RegisterForm />
        <div className={styles.auth__actions}>
          <div className={styles.auth__link}>
            Уже есть аккаунт? <a href="/">Войдите.</a>
          </div>
        </div>
      </div>
    </div>
  );
};
