import React from "react";

export const LoginForm = () => {
  return (
    <form className="auth__form" action="#">
      <input placeholder="Email" type="email" />
      <input placeholder="Пароль" type="password" />
      <button type="submit">Войти</button>
    </form>
  );
};
