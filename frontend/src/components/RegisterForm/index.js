import React from "react";
import { useNavigate } from "react-router-dom";

import { apiAuth } from "../../services/auth";

import styles from "./RegisterForm.module.scss";

export const RegisterForm = ({user, setUser}) => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());

    console.log(values);

    const registerUser = async () => {
      apiAuth
        .register(JSON.stringify(values))
        .then((res) => {
          console.log(res.data);
          setUser({ ...res.data, isLoggedIn: true });
          navigate("/");
        })
        .catch((err) => console.log(err));
    };

    registerUser();
  };

  return (
    <form className={styles.auth__form} onSubmit={onSubmit}>
      <input type="text" placeholder="Имя пользователя" name="username" />
      <input placeholder="Email" type="email" name="email" />
      <input placeholder="Пароль" type="password" name="password" />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};
