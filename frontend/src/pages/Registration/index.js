import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { RegisterForm } from "../../components";

import styles from "./Registration.module.scss";

export const Registration = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user.isLoggedIn) navigate("/:username");
  }, [user.isLoggedIn, navigate]);

  return (
    <div className={styles.auth} style={{ paddingTop: "100px" }}>
      <div className={styles.auth__wrapper}>
        <div className={styles.auth__header}>Создать аккаунт</div>
        <RegisterForm user={user} setUser={setUser} />
        <div className={styles.auth__actions}>
          <div className={styles.auth__link}>
            Уже есть аккаунт? <Link to="/login">Войдите.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
