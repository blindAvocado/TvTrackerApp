import React from "react";

export const RegisterForm = () => {
  return (
    <form className="auth__form" action="#">
      <input type="text" placeholder="Имя пользователя" />
      <input placeholder="Email" type="email" />
      <input placeholder="Пароль" type="password" />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};
