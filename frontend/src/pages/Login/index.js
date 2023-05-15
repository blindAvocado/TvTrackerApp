import React from "react";

import { LoginForm } from "../../components";

import "./style.scss";

export const Login = () => {
  return (
    <div className="auth" style={{ paddingTop: "100px" }}>
      <div className="auth__wrapper">
        <div className="auth__header">С возвращением!</div>
        <LoginForm />
        <div className="auth__actions">
          <div className="auth__link">
            Еще нет профиля? <a href="/">Зарегистрируйтесь.</a>
          </div>
          <div className="auth__link">
            <a href="/">Забыли пароль?</a>
          </div>
        </div>
      </div>
    </div>
  );
};
