import React from "react";

import { RegisterForm } from "../../components";

export const Registration = () => {
  return (
    <div className="auth" style={{ paddingTop: "100px" }}>
      <div className="auth__wrapper">
        <div className="auth__header">Создать аккаунт</div>
        <RegisterForm />
        <div className="auth__actions">
          <div className="auth__link">
            Уже есть аккаунт? <a href="/">Войдите.</a>
          </div>
        </div>
      </div>
    </div>
  );
};
