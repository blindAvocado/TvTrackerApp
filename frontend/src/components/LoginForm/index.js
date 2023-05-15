import React from "react";
import { useNavigate } from "react-router-dom";

import { apiAuth } from "../../services/auth";

import styles from "./LoginForm.module.scss";

export const LoginForm = ({ user, setUser }) => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());

    console.log(values);

    const loginUser = async () => {
      apiAuth
        .login(JSON.stringify(values))
        .then((res) => {
          console.log(res.data);
          setUser({ ...res.data, isLoggedIn: true });
          navigate("/");
        })
        .catch((err) => console.log(err));
    };

    loginUser();
  };

  return (
    <form className={styles.auth__form} onSubmit={onSubmit}>
      <input placeholder="Логин" type="text" name="username" />
      <input placeholder="Пароль" type="password" name="password" />
      <button type="submit">Войти</button>
    </form>
  );
};
